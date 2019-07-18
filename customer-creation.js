
const express = require('express');
var http = require('http');
const app = express();
var server = http.createServer(app);


var io = require('socket.io').listen(server);
const stripeBackend = require('stripe')(process.env.stripe_sk);

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


//var urlEncoded = require('urlencoded');




io.sockets.on('connection', function (socket) {
    //socket.io.opts.transports = ['polling', 'websocket'];

    console.log("Connection established");

    socket.on('pickPlan', function (data) {
        console.log("Plan used: " + data.planUsed);
        console.log("Token used: " + data.tokenUsed.id);

        //console.log(data.)

        if (data.customerAlreadyExists != "yes") {
            stripeBackend.customers.createSource(customer.id, {
                source: data.tokenUsed.id,
            }).then(function (value) {
                createPlan(data);
            });
        }
        else {
            console.log(data.firebaseID);
            stripeBackend.customers.createSource(data.firebaseID, {
                source: data.tokenUsed.id,
            }).then(function (value) {
                createPlan(data);
            });
        }
    });

    socket.on('checkActiveCustomer', function (data) {
        console.log("Customer ID: " + data.customerID);
        console.log("Page on: " + data.pageUsed);
        stripeBackend.customers.retrieve(
            data.customerID,
            function (err, customer) {
                console.log("Subscription status attempt: ");
                if ((customer.subscriptions.data[0]) != null && customer.subscriptions.data[0] != undefined) {
                    var subscriptionStatus = customer.subscriptions.data[0].status;

                    console.log(subscriptionStatus);
                    console.log("ending at period: " + customer.subscriptions.data[0].cancel_at_period_end);


                    if (subscriptionStatus == "trialing") {
                        //Subscription is active
                        io.emit('subscriptionStatus', { yourSubscription: subscriptionStatus, yourPage: data.pageUsed, cancelingSubscription: customer.subscriptions.data[0].cancel_at_period_end });

                    }
                    else if (subscriptionStatus == "active") {
                        io.emit('subscriptionStatus', { yourSubscription: subscriptionStatus, yourPage: data.pageUsed, cancelingSubscription: customer.subscriptions.data[0].cancel_at_period_end });
                    }
                    else {
                        //Subscription is inactive
                        console.log("NO SUBSCRIPTION");
                        io.emit('subscriptionStatus', 'none');

                    }
                }
                else {
                    console.log("NO SUBSCRIPTION");
                    io.emit('subscriptionStatus', 'none');
                }
            }
        );



    });

    socket.on('checkActiveDashboard', function (data) {
        console.log("Customer ID: " + data);
        stripeBackend.customers.retrieve(
            data,
            function (err, customer) {

                if ((customer.subscriptions.data[0]) != null)
                    var subscriptionStatus = customer.subscriptions.data[0].status;
                console.log(subscriptionStatus);

                if ((subscriptionStatus == "trialing") || (subscriptionStatus == "active")) {
                    //Subscription is active
                    io.emit('subscriptionStatusDashboard', 'active');
                    //document.getElementById("")  account-box-header-active
                }
                else {
                    //Subscription is inactive
                    console.log("NO SUBSCRIPTION");
                    io.emit('subscriptionStatusDashboard', 'none');

                }
            }
        );

    });


    /*
 var user = firebase.auth().currentUser;

        user.delete().then(function () {
            //User deleted
        }).catch(function (error) {
            console.log("Error with deleting account");
        });
    */

    socket.on('cancelSubscription', function (data) {
        console.log("Data given: " + data.customerID);
        var subID;

        if (data.cancelState == "keepaccount") {
            stripeBackend.customers.retrieve(
                data.customerID,
                function (err, customer) {
                    stripeBackend.subscriptions.update(customer.subscriptions.data[0].id, { cancel_at_period_end: true });
                    io.emit('subscriptionStatusDashboard', 'subscriptionCanceled');
                }
            );
        }
        else if (data.cancelState == "deleteaccount") {
            stripeBackend.customers.retrieve(
                data.customerID,
                function (err, customer) {

                    if (customer.subscriptions.data[0] != null && customer.subscriptions.data[0] != undefined) {
                        stripeBackend.subscriptions.update(customer.subscriptions.data[0].id, { cancel_at_period_end: true });
                    }
                    io.emit('subscriptionStatusDashboard', 'accountDeleted');
                }
            );
        }
        else if (data.cancelState == "continuesubscription") {
            stripeBackend.customers.retrieve(
                data.customerID,
                function (err, customer) {

                    if (customer.subscriptions.data[0] != null && customer.subscriptions.data[0] != undefined) {
                        stripeBackend.subscriptions.update(customer.subscriptions.data[0].id, { cancel_at_period_end: false });
                    }
                    io.emit('subscriptionStatusDashboard', 'continuesubscription');
                }
            );
        }
    });

});


async function createPlan(data) {


    if (data.customerAlreadyExists != "yes") {
        //Set on customer init
        if (data.planUsed == "weekly") {
            const subscription = await stripeBackend.subscriptions.create({
                customer: customer.id,
                items: [{ plan: 'plan_FSAIsB7xMQzbom' }],
                trial_from_plan: true,


            });
        }
        else if (data.planUsed == "monthly") {
            const subscription = await stripeBackend.subscriptions.create({
                customer: customer.id,
                items: [{ plan: 'plan_FSAIjgKJz1lyEa' }],
                trial_from_plan: true,

            });
        }
        else if (data.planUsed == "annual") {
            const subscription = await stripeBackend.subscriptions.create({
                customer: customer.id,
                items: [{ plan: 'plan_FSAJuV5mOM1pn8' }],
                trial_from_plan: true,

            });
        }

        goToDashboard();
    }
    else {
        //Customer already exists 
        if (data.planUsed == "weekly") {
            const subscription = await stripeBackend.subscriptions.create({
                customer: data.firebaseID,
                items: [{ plan: 'plan_FSAIsB7xMQzbom' }],
                trial_from_plan: true,


            });
        }
        else if (data.planUsed == "monthly") {
            const subscription = await stripeBackend.subscriptions.create({
                customer: data.firebaseID,
                items: [{ plan: 'plan_FSAIjgKJz1lyEa' }],
                trial_from_plan: true,

            });
        }
        else if (data.planUsed == "annual") {
            const subscription = await stripeBackend.subscriptions.create({
                customer: data.firebaseID,
                items: [{ plan: 'plan_FSAJuV5mOM1pn8' }],
                trial_from_plan: true,

            });
        }
    }


}

async function goToDashboard() {

    io.emit('goToDash', true);
    //setTimeout(function () { window.location = "dashboard.html"; }, 1500);
}


/*
io.on('connection', function (socket) {
    io.emit('sendClient', { will: 'be received by everyone' });

    socket.on('private message', function (from, msg) {
        console.log('I received a private message by ', from, ' saying ', msg);
    });

    socket.on('disconnect', function () {
        io.emit('user disconnected');
    });
});
*/



//var elements = stripeBackend.elements();
//app.use(express.bodyParser());


// serve the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


//var card = elements.create('card', { style: style });
//card.mount('#card-element');



app.get('/', (req, res) => {

    var dataToSendToClient = { 'message': 'error message from server' };
    console.log("Customer ID: " + customerID);

    var JSONdata = JSON.stringify(dataToSendToClient);
    res.send(JSONdata);
});






async function nodecall(firstName, lastName, userEmail) {
    //console.log("FIRST NAME — " + firstName);
    customer = await stripeBackend.customers.create({
        email: userEmail,
        name: (firstName + " " + lastName),
        //source: 'tok_mastercard',
    })

    const customerID = customer.id;
    io.emit('sendClient', customerID);
    //console.log("Your customer ID is: " + customerID);

}



app.post('/clicked', (req, res) => {

    const firstName = req.body.user.firstName;
    const lastName = req.body.user.lastName;
    const userEmail = req.body.user.email;
    //console.log(req.body.user.firstName);

    nodecall(firstName, lastName, userEmail);

});

app.post('/billingPlan', (req, res) => {

    console.log("please");

});


