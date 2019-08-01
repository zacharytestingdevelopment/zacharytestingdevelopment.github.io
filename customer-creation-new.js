
const express = require('express');
var http = require('http');
const app = express();
var server = http.createServer(app);

var io = require('socket.io').listen(server);
//const stripeBackend = require('stripe')(process.env.stripe_sk);

const stripeBackend = require('stripe')("sk_live_uBNmPyFADLOFizxJ67MJUmyH00tXaz7j0s");

var customer;

var bodyParser = require('body-parser');

app.use(bodyParser.json());

// serve files from the public d4irectory
app.use(express.static("public"));

// start the express web server listening on 8080

let port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log('listening on', port);
});

async function createMyCustomer(data) {
    var customer = await stripeBackend.customers.create({
        id: data.customerUsed,
        email: data.customerEmail,
        name: (data.customerFirstName + " " + data.customerLastName),
    });
}

async function createPlan(data) {
    console.log("Creating plan for: " + data.customerUsed);
    console.log("Plan used: " + data.planUsed);

    if (data.planUsed == "weekly") {
        const subscription = await stripeBackend.subscriptions.create({
            customer: data.customerUsed,
            items: [{ plan: 'plan_FXpJw21Jd5Yakl' }],
            trial_from_plan: true,
        });
    }
    else if (data.planUsed == "monthly") {
        const subscription = await stripeBackend.subscriptions.create({
            customer: data.customerUsed,
            items: [{ plan: 'plan_FSAIjgKJz1lyEa' }],
            trial_from_plan: true,
        });
    }
    else if (data.planUsed == "annual") {
        const subscription = await stripeBackend.subscriptions.create({
            customer: data.customerUsed,
            items: [{ plan: 'plan_FSAJuV5mOM1pn8' }],
            trial_from_plan: true,
        });
    }

    io.emit("userAction", { actionTaken: "planFinished", userFinished: data.customerUsed });
}

io.sockets.on('connection', function (socket) {
    console.log("Connection established");

    socket.on('socketAction', function (data) {

        if (data.socketActionType == "createAccount") {
            createMyCustomer({ customerEmail: data.customerEmail, customerFirstName: data.customerFirstName, customerLastName: data.customerLastName, customerUsed: data.customerUsed });
        }
        else if (data.socketActionType == "addPaymentInformation") {
            //console.log("User adding payment: " + data.customerUsed);

            stripeBackend.customers.createSource(data.customerUsed, {
                source: data.tokenUsed.id,
            }).then(function (value) {
                createPlan(data);
            });
        }
        else if (data.socketActionType == "checkBilling") {
            console.log("Checking billing");
        }
        else if (data.socketActionType == "checkActiveCustomer") {
            console.log("Checking active customer for: " + data.customerID);
            console.log("Current page: " + data.pageUsed);

            stripeBackend.customers.retrieve(
                data.customerID,
                function (err, customer) {

                    if (customer) {
                        if ((customer.subscriptions.data[0]) != null && customer.subscriptions.data[0] != undefined) {
                            var subscriptionStatus = customer.subscriptions.data[0].status;

                            console.log(subscriptionStatus);


                            if (subscriptionStatus == "trialing" || subscriptionStatus == "active") {

                                io.emit('userAction', { actionTaken: 'subscriptionStatus', subscriptionStatus: subscriptionStatus, yourPage: data.pageUsed, cancelingSubscription: customer.subscriptions.data[0].cancel_at_period_end, currentUser: data.customerID });
                            }
                            else {
                                console.log("no sub");
                                io.emit('userAction', { actionTaken: 'subscriptionStatus', subscriptionStatus: subscriptionStatus, yourPage: data.pageUsed, currentUser: data.customerID });
                            }
                        }
                        else {
                            io.emit('userAction', { actionTaken: 'subscriptionStatus', subscriptionStatus: subscriptionStatus, yourPage: data.pageUsed, currentUser: data.customerID });
                        }
                    }
                }
            );
        }
        else if (data.socketActionType == "checkActiveDashboard") {

            stripeBackend.customers.retrieve(
                data.customerID,
                function (err, customer) {

                    if (customer) {
                        if ((customer.subscriptions.data[0]) != null && customer.subscriptions.data[0] != undefined) {
                            var subscriptionStatus = customer.subscriptions.data[0].status;

                            console.log(subscriptionStatus);


                            if (subscriptionStatus == "trialing" || subscriptionStatus == "active") {
                                console.log("You have a sub for the dashboard");
                                io.emit('userAction', { actionTaken: "dashboardTextUpdate", subscriptionStatus: subscriptionStatus, currentUser: data.customerID });
                            }
                            else {
                                //console.log("no sub");
                                //io.emit('userAction', { actionTaken: 'subscriptionStatus', subscriptionStatus: subscriptionStatus, yourPage: data.pageUsed, currentUser: data.customerID });
                            }
                        }
                        else {
                            console.log("No sub for dashboard");
                            io.emit('userAction', { actionTaken: "dashboardTextUpdate", subscriptionStatus: 'none', currentUser: data.customerID });
                            //io.emit('userAction', { actionTaken: 'subscriptionStatus', subscriptionStatus: subscriptionStatus, yourPage: data.pageUsed, currentUser: data.customerID });
                        }
                    }
                }
            );

        }
        else if (data.socketActionType == "cancelSubscription") {
            console.log("Cancel type: " + data.cancelState);

            if (data.cancelState == "keepaccount") {
                stripeBackend.customers.retrieve(
                    data.currentUser,
                    function (err, customer) {
                        stripeBackend.subscriptions.update(customer.subscriptions.data[0].id, { cancel_at_period_end: true });
                        io.emit("userAction", { currentUser: data.currentUser, actionTaken: "subscriptionCanceled" });
                        //io.emit('userAction', 'subscriptionCanceled');
                    }
                );
            }
            else if (data.cancelState == "deleteAccount") {
                stripeBackend.customers.retrieve(
                    data.currentUser,
                    function (err, customer) {

                        if (customer.subscriptions.data[0] != null && customer.subscriptions.data[0] != undefined) {
                            stripeBackend.subscriptions.update(customer.subscriptions.data[0].id, { cancel_at_period_end: true });
                        }
                        io.emit("userAction", { currentUser: data.currentUser, actionTaken: "accountDeleted" });
                    }
                );
            }
            else if (data.cancelState == "continueSubscription") {
                stripeBackend.customers.retrieve(
                    data.currentUser,
                    function (err, customer) {
                        stripeBackend.subscriptions.update(customer.subscriptions.data[0].id, { cancel_at_period_end: false });
                        io.emit("userAction", { currentUser: data.currentUser, actionTaken: "continueSubscription" });
                        //io.emit('userAction', 'subscriptionCanceled');
                    }
                );
                //stripeBackend.subscriptions.update(customer.subscriptions.data[0].id, { cancel_at_period_end: false });
            }
        }
        else if (data.socketActionType == "checkTheBilling") {

            stripeBackend.customers.retrieve(
                data.customerID,
                function (err, customer) {

                    if (customer) {
                        if ((customer.subscriptions.data[0]) != null && customer.subscriptions.data[0] != undefined) {
                            var subscriptionStatus = customer.subscriptions.data[0].status;

                            if (data.billingCheck) {


                                if (subscriptionStatus == "trialing" || subscriptionStatus == "active") {
                                    io.emit('userAction', { actionTaken: 'canIBill', subscriptionStatus: "cantbill", yourPage: data.pageUsed, cancelingSubscription: customer.subscriptions.data[0].cancel_at_period_end, currentUser: data.customerID });
                                }

                            }
                        }
                        else {
                            io.emit('userAction', { actionTaken: 'canIBill', subscriptionStatus: "canbill", yourPage: data.pageUsed, currentUser: data.customerID });
                        }
                    }

                }
            );


        }

    });
});


/*
app.post('/clicked', (req, res) => {

    io.emit('clientAction', { clientAction: "savePayment", customerID: firebase.auth().currentUser.uid });

    //io.emit('subscriptionStatus', { yourSubscription: subscriptionStatus, yourPage: data.pageUsed, cancelingSubscription: customer.subscriptions.data[0].cancel_at_period_end });
});

*/



