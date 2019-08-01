/*
var signupError = "";
signupError += "<div class=\"no-select error-box-signup animated flipInX col-centered white margin-top\">You";
signupError += "                                    left some fields";
signupError += "                                    blank!";
signupError += "                                <\/div>";
*/

var isAccountValid = true;
var socket = io();
var currentPage;
var canGetPlan = true;
//var req = new XMLHttpRequest();
//var url = '';

//req.open('GET', url, true); // set this to POST if you would like
//req.addEventListener('load', onLoads);
//req.send();

var emdrToolkit = "";
emdrToolkit += " <div class=\"col col-12 col-md-6 margin-top text-center\">";
emdrToolkit += "";
emdrToolkit += "                                            <a href=\"emdr.html\" class=\"kill-link-style no-select\">";
emdrToolkit += "                                                <div class=\"tool-card\">";
emdrToolkit += "                                                    <div class=\"tool-box col-centered emdr-tool\"";
emdrToolkit += "                                                        style=\"padding-left:0px;padding-right: 0px\">";
emdrToolkit += "";
emdrToolkit += "                                                    <\/div>";
emdrToolkit += "                                                    <div class=\"col-centered tool-box-bottom\">";
emdrToolkit += "                                                        <div class=\"tool-box-header\">";
emdrToolkit += "                                                            Start session";
emdrToolkit += "                                                            <div";
emdrToolkit += "                                                                class=\"tool-description col-11 margin-top-tiny col-centered white\">";
emdrToolkit += "                                                                Jump right into customizing your session.<\/div>";
emdrToolkit += "";
emdrToolkit += "                                                            <div class=\"col col-12 col-md-11 margin-top col-centered\">";
emdrToolkit += "";
emdrToolkit += "                                                                <a href=\"emdr.html\" class=\"kill-link-style no-select\">";
emdrToolkit += "                                                                    <span class=\"tool-button margin-top no-select\">Get";
emdrToolkit += "                                                                        started<\/span>";
emdrToolkit += "                                                                <\/a> <\/div>";
emdrToolkit += "                                                        <\/div>";
emdrToolkit += "                                                    <\/div>";
emdrToolkit += "                                                <\/div>";
emdrToolkit += "                                            <\/a> <\/div>";
emdrToolkit += "                                        <div class=\"col col-12 col-md-6 margin-top text-center\">";
emdrToolkit += "";
emdrToolkit += "                                            <a href=\"emdr-analysis.html\" class=\"kill-link-style no-select\">";
emdrToolkit += "                                                <div class=\"tool-card\">";
emdrToolkit += "                                                    <div class=\"tool-box col-centered analysis-tool\"";
emdrToolkit += "                                                        style=\"padding-left:0px;padding-right: 0px\">";
emdrToolkit += "";
emdrToolkit += "                                                    <\/div>";
emdrToolkit += "                                                    <div class=\"col-centered tool-box-bottom\">";
emdrToolkit += "                                                        <div class=\"tool-box-header\">";
emdrToolkit += "                                                            Session analysis";
emdrToolkit += "                                                            <div";
emdrToolkit += "                                                                class=\"tool-description col-11 margin-top-tiny col-centered white\">";
emdrToolkit += "                                                                Here you can analyze your previous sessions";
emdrToolkit += "                                                            <\/div>";
emdrToolkit += "";
emdrToolkit += "                                                            <div class=\"col col-11 margin-top col-centered\">";
emdrToolkit += "                                                                <a href=\"emdr-analysis.html\"";
emdrToolkit += "                                                                    class=\"kill-link-style no-select\">";
emdrToolkit += "                                                                    <span class=\"tool-button margin-top no-select\">Get";
emdrToolkit += "                                                                        started";
emdrToolkit += "                                                                    <\/span>";
emdrToolkit += "                                                                <\/a>";
emdrToolkit += "";
emdrToolkit += "                                                            <\/div>";
emdrToolkit += "                                                        <\/div>";
emdrToolkit += "                                                    <\/div>";
emdrToolkit += "                                            <\/a> <\/div>";


var signupErrorPasswords = "";
signupErrorPasswords += "<br /><div class=\"no-select error-box-signup animated flipInX col-centered white\">Passwords don't match!";
signupErrorPasswords += "                                <\/div>";

var invalidEmail = "";
invalidEmail += "<span class=\"animated flipInX warning-text\">Please enter a valid email";
invalidEmail += "                                            address<\/span>";

var emptyBox = "";
emptyBox += "<span class=\"animated flipInX warning-text\">This is a required";
emptyBox += "                                            field<\/span>";

var passwordShort = "";
passwordShort += "<span class=\"animated flipInX warning-text\">Your password";
passwordShort += "                                            is too short<\/span>";

var passwordNotMatch = "";
passwordNotMatch += "<span class=\"animated flipInX warning-text\">Your passwords";
passwordNotMatch += "                                            do not match!<\/span>";

var txtFirstName = document.getElementById("txtFirstName");
var txtLastName = document.getElementById("txtLastName");

var txtEmail = document.getElementById("txtEmail");

var txtPassword = document.getElementById("txtPassword");
var txtPasswordCheck = document.getElementById("txtPasswordCheck");

var btnSignUp = document.getElementById("btnSignUp");

var verifiedDashboard = "";
verifiedDashboard += "<div class=\"container-fluid mt--6\">";
verifiedDashboard += "                <div class=\"row\">";
verifiedDashboard += "                    <div class=\"col col-12 col-md-12 col-xl\">";
verifiedDashboard += "                        <div class=\"card shadow animated fadeInUp modify-testing-card testing-card-large\">";
verifiedDashboard += "                            <div class=\"card-header hide-bottom-border\" style=\"display: inline-block !important;\">";
verifiedDashboard += "                                <div class=\"row realign-items-center padding-bottom\">";
verifiedDashboard += "                                    <div class=\"col text-center\">";
verifiedDashboard += "";
verifiedDashboard += "";
verifiedDashboard += "                                        <h6 class=\"card-title text-center text-uppercase text-muted mb-2\"";
verifiedDashboard += "                                            style=\"font-size: 14.2px;\">";
verifiedDashboard += "                                            GET STARTED";
verifiedDashboard += "                                        <\/h6>";
verifiedDashboard += "";
verifiedDashboard += "";
verifiedDashboard += "                                        <!-- Heading -->";
verifiedDashboard += "                                        <div class=\"col-centered card-header-title-large text-center\">";
verifiedDashboard += "                                            YOUR TOOLKIT";
verifiedDashboard += "                                        <\/div>";
verifiedDashboard += "";
verifiedDashboard += "                                        <div class=\"margin-top-tiny text-center\">";
verifiedDashboard += "                                            <small class=\"form-text slightly-larger text-muted\">";
verifiedDashboard += "                                                Powerful, personal, and accessible EMDR tools";
verifiedDashboard += "                                            <\/small>";
verifiedDashboard += "                                        <\/div>";
verifiedDashboard += "";
verifiedDashboard += "                                    <\/div>";
verifiedDashboard += "";
verifiedDashboard += "                                <\/div>";
verifiedDashboard += "                                <div class=\"col col-12 col-md-12 col-centered\">";
verifiedDashboard += "";
verifiedDashboard += "                                    <div class=\"row full-stretch\">";
verifiedDashboard += "";
verifiedDashboard += "";
verifiedDashboard += "                                        <div class=\"col col-12 col-md-6 margin-top text-center\">";
verifiedDashboard += "";
verifiedDashboard += "                                            <a href=\"emdr.html\" class=\"kill-link-style no-select\">";
verifiedDashboard += "                                                <div class=\"tool-card\">";
verifiedDashboard += "                                                    <div class=\"tool-box col-centered emdr-tool\"";
verifiedDashboard += "                                                        style=\"padding-left:0px;padding-right: 0px\">";
verifiedDashboard += "";
verifiedDashboard += "                                                    <\/div>";
verifiedDashboard += "                                                    <div class=\"col-centered tool-box-bottom\">";
verifiedDashboard += "                                                        <div class=\"tool-box-header\">";
verifiedDashboard += "                                                            Start session";
verifiedDashboard += "                                                            <div";
verifiedDashboard += "                                                                class=\"tool-description col-11 margin-top-tiny col-centered white\">";
verifiedDashboard += "                                                                Jump right into customizing your session.<\/div>";
verifiedDashboard += "";
verifiedDashboard += "                                                            <div class=\"col col-12 col-md-11 margin-top col-centered\">";
verifiedDashboard += "";
verifiedDashboard += "                                                                <a href=\"emdr.html\" class=\"kill-link-style no-select\">";
verifiedDashboard += "                                                                    <span class=\"tool-button margin-top no-select\">Get";
verifiedDashboard += "                                                                        started<\/span>";
verifiedDashboard += "                                                                <\/a> <\/div>";
verifiedDashboard += "                                                        <\/div>";
verifiedDashboard += "                                                    <\/div>";
verifiedDashboard += "                                                <\/div>";
verifiedDashboard += "                                            <\/a> <\/div>";
verifiedDashboard += "                                        <div class=\"col col-12 col-md-6 margin-top text-center\">";
verifiedDashboard += "";
verifiedDashboard += "                                            <a href=\"emdr-analysis.html\" class=\"kill-link-style no-select\">";
verifiedDashboard += "                                                <div class=\"tool-card\">";
verifiedDashboard += "                                                    <div class=\"tool-box col-centered analysis-tool\"";
verifiedDashboard += "                                                        style=\"padding-left:0px;padding-right: 0px\">";
verifiedDashboard += "";
verifiedDashboard += "                                                    <\/div>";
verifiedDashboard += "                                                    <div class=\"col-centered tool-box-bottom\">";
verifiedDashboard += "                                                        <div class=\"tool-box-header\">";
verifiedDashboard += "                                                            Session analysis";
verifiedDashboard += "                                                            <div";
verifiedDashboard += "                                                                class=\"tool-description col-11 margin-top-tiny col-centered white\">";
verifiedDashboard += "                                                                Here you can analyze your previous sessions";
verifiedDashboard += "                                                            <\/div>";
verifiedDashboard += "";
verifiedDashboard += "                                                            <div class=\"col col-11 margin-top col-centered\">";
verifiedDashboard += "                                                                <a href=\"emdr-analysis.html\"";
verifiedDashboard += "                                                                    class=\"kill-link-style no-select\">";
verifiedDashboard += "                                                                    <span class=\"tool-button margin-top no-select\">Get";
verifiedDashboard += "                                                                        started";
verifiedDashboard += "                                                                    <\/span>";
verifiedDashboard += "                                                                <\/a>";
verifiedDashboard += "";
verifiedDashboard += "                                                            <\/div>";
verifiedDashboard += "                                                        <\/div>";
verifiedDashboard += "                                                    <\/div>";
verifiedDashboard += "                                            <\/a> <\/div>";
verifiedDashboard += "";
verifiedDashboard += "";
verifiedDashboard += "";
verifiedDashboard += "                                    <\/div>";
verifiedDashboard += "                                <\/div>";
verifiedDashboard += "                            <\/div>";
verifiedDashboard += "";
verifiedDashboard += "                        <\/div>";
verifiedDashboard += "                    <\/div>";
verifiedDashboard += "";
verifiedDashboard += "                <\/div>";
verifiedDashboard += "            <\/div>";


var planHighlighted = "none";
var stripe = Stripe('pk_live_PjSLRXEy6Gs6OeSegqPoQXER006F1SS2TB');

var style = {
    base: {
        color: '#32325d',
        fontFamily: '"Montserrat", "Helvetica Neue", sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
            color: '#aab7c4'
        }
    },
    invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
    }
};

function selectBilling(plan) {
    $('#paymentModal').modal({
        backdrop: 'static',
        keyboard: false  // to prevent closing with Esc button (if you want this too)
    });
    planHighlighted = plan;
}



var elements = stripe.elements();
var card = elements.create('card', { style: style });
card.mount('#card-element');

card.addEventListener('change', function (event) {
    var displayError = document.getElementById('card-errors');
    if (event.error) {
        displayError.textContent = event.error.message;
    } else {
        displayError.textContent = '';
    }
});

var form = document.getElementById('payment-form');
form.addEventListener('submit', function (event) {
    //console.log("SUBMITTEDDD");
    event.preventDefault();

    if (isAccountValid != false) {
        createCustomer();
    }

});

var emailValue, firstNameValue, lastNameValue, passwordValue, checkPasswordValue;

var comingFromClick = false;
var comingFromClickDash = false;
var getMailUpdates = true;
var emdrActive = false;

var validEmailSubmission;

var insideApplication;

var myPage;

function goToDashboard() {
    setTimeout(function () { window.location = "dashboard.html"; }, 1500);
}

function mailUpdates(mailValue) {
    $(".yes-button").removeClass("yes-button-selected");

    if (mailValue == "yes") {
        $("#yes-button").addClass("yes-button-selected");
        getMailUpdates = true;
    }
    else {
        $("#no-button").addClass("yes-button-selected");
        getMailUpdates = false;
    }
}

function validEntry() {
    emailValue = txtEmail.value;
    firstNameValue = txtFirstName.value;
    lastNameValue = txtLastName.value;
    passwordValue = txtPassword.value;
    checkPasswordValue = txtPasswordCheck.value;

    if (emailValue.length >= 1 && firstNameValue.length >= 1 && lastNameValue.length >= 1 && passwordValue.length >= 1 && checkPasswordValue.length >= 1 && passwordValue == checkPasswordValue && emailValue.includes("@")) {
        return true
    }
    else {
        return false;
    }
}

/*
fetch('/charge', {
    method: 'POST', headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        user: {
            firstName: 'document.getElementById("txtFirstName").value',

        }
    })
})
    .then(function (response) {
        console.log("Data");
        if (response.ok) {

            $.get("/getMyData", function (data) {
                var bottle = JSON.parse(data);
                var name = bottle.name;
                alert(name)
            });
            return 'brt';
        }
        throw new Error('Request failed.');
    })
    .catch(function (error) {
        console.log(error);
    });
    */


function createCustomer() {

    console.log("CREATING CUSTOMER...");

    if (validEntry()) {
        console.log('button was clicked');

        fetch('/clicked', {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    firstName: document.getElementById("txtFirstName").value,
                    lastName: document.getElementById("txtLastName").value,
                    email: document.getElementById("txtEmail").value,
                    passValue1: document.getElementById("txtPassword").value,
                    passValue2: document.getElementById("txtPasswordCheck").value
                }
            })
        })
            .then(function (response) {
                if (response.ok) {

                    console.log("try this");


                    $.get("/getMyData", function (data) {
                        var bottle = JSON.parse(data);
                        var name = bottle.name;
                        alert(name)
                    });


                    return 'brt';
                }
                throw new Error('Request failed.');
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    else {
        console.log("Invalid submission");
    }


}

function stripeTokenHandler(token) {
    $("#paymentModal").modal('hide');
    swal("Success!", "You successfully created a subscription!", "success");

    //socket.emit('pickPlan', { planUsed: planHighlighted, tokenUsed: token });

    var user = firebase.auth().currentUser;
    var desc = firebase.database().ref('users/' + user.uid + "/userData");

    desc.once('value', function (snapshot) {
        console.log(snapshot.val().customerID);
        socket.emit('pickPlan', { planUsed: planHighlighted, tokenUsed: token, customerAlreadyExists: "yes", firebaseID: snapshot.val().customerID });

        /*
        if (snapshot.val().customerID != null && snapshot.val().customerID != undefined) {
            socket.emit('pickPlan', { planUsed: planHighlighted, tokenUsed: token, customerAlreadyExists: "yes", firebaseID: snapshot.val().customerID });
        }
        else {
            socket.emit('pickPlan', { planUsed: planHighlighted, tokenUsed: token, customerAlreadyExists: "no" });
        }
        */

    }).then(function (value) {
        setInterval(function () { window.location = "dashboard.html"; }, 1000);
    });
}


/*
function stripeTokenHandler(token) {

    $("#paymentModal").modal('hide');
    swal("Success!", "You successfully created a subscription!", "success");


    var user = firebase.auth().currentUser;
    var desc = firebase.database().ref('users/' + user.uid + "/userData");

    desc.once('value', function (snapshot) {
        console.log(snapshot.val().customerID);

        if (snapshot.val().customerID != null && snapshot.val().customerID != undefined) {
            socket.emit('pickPlan', { planUsed: planHighlighted, tokenUsed: token, customerAlreadyExists: "yes", firebaseID: snapshot.val().customerID });
        }
        else {
            socket.emit('pickPlan', { planUsed: planHighlighted, tokenUsed: token, customerAlreadyExists: "no" });
        }

    }).then(function (value) {
        setInterval(function () { window.location = "dashboard.html"; }, 1000);
    });
}
*/

/*
const button = document.getElementById('btnSignUp');
button.addEventListener('click', function (e) {

    if (validEntry()) {
        console.log('button was clicked');

        fetch('/clicked', {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    firstName: document.getElementById("txtFirstName").value,
                    lastName: document.getElementById("txtLastName").value,
                    email: document.getElementById("txtEmail").value,

                }
            })
        })
            .then(function (response) {
                if (response.ok) {
                    console.log('Click was recorded');
                    return 'brt';
                }
                throw new Error('Request failed.');
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    else {
        console.log("Invalid submission");
    }
});
*/

function onLoads() {
    var response = this.responseText;
    var parsedResponse = response;

    // access your data newly received data here and update your DOM with appendChild(), findElementById(), etc...
    var messageToDisplay = parsedResponse['message'];
    console.log("IT WORKED!!!! " + messageToDisplay);
    // append child (with text value of messageToDisplay for instance) here or do some more stuff
}

function verifyEmail() {

    emailValue = txtEmail.value;
    //validEmailSubmission = validateEmail(emailValue);

    firstNameValue = txtFirstName.value;
    lastNameValue = txtLastName.value;
    passwordValue = txtPassword.value;
    checkPasswordValue = txtPasswordCheck.value;

    $("#txtEmail").removeClass("submission-fail");
    $("#txtEmail").removeClass("animated pulse");

    $("#txtFirstName").removeClass("submission-fail");
    $("#txtFirstName").removeClass("animated pulse");

    $("#txtLastName").removeClass("submission-fail");
    $("#txtLastName").removeClass("animated pulse");

    $("#txtPassword").removeClass("submission-fail");
    $("#txtPassword").removeClass("animated pulse");

    $("#txtPasswordCheck").removeClass("submission-fail");
    $("#txtPasswordCheck").removeClass("animated pulse");

    /*
        if (passwordValue == checkPasswordValue) {
            document.getElementById("error-box-display-passwords").innerHTML = "";
        }
    */

    if (emailValue.length >= 1) {
        document.getElementById("email-warning").innerHTML = "";
    }

    if (firstNameValue.length >= 1) {
        document.getElementById("first-name").innerHTML = "";
    }

    if (lastNameValue.length >= 1) {
        document.getElementById("last-name").innerHTML = "";
    }

    if (passwordValue.length >= 1) {
        document.getElementById("password").innerHTML = "";
        if (passwordValue.length <= 6) {
            document.getElementById("password").innerHTML = passwordShort;
        }
    }

    if (checkPasswordValue.length >= 1) {
        document.getElementById("check-password").innerHTML = "";
    }

    if (emailValue.length >= 1 && firstNameValue.length >= 1 && lastNameValue.length >= 1 && passwordValue.length >= 1 && checkPasswordValue.length >= 1) {

        if (passwordValue == checkPasswordValue && emailValue.includes("@")) {
            createAccount();
            hideBlogHeader();
            openViewingPlans();
            //nodecall();
            setTimeout(function () { document.getElementById("error-box-display-passwords").innerHTML = ""; }, 300);
            document.getElementById("email-warning").innerHTML = "";
        }
        else {
            document.getElementById("error-box-display-passwords").innerHTML = signupErrorPasswords;
            document.getElementById("check-password").innerHTML = passwordNotMatch;

            if (!emailValue.includes("@")) {
                document.getElementById("email-warning").innerHTML = invalidEmail;
            }

        }

    }
    else {

        if (passwordValue != checkPasswordValue) {
            document.getElementById("error-box-display-passwords").innerHTML = signupErrorPasswords;
            document.getElementById("check-password").innerHTML = passwordNotMatch;
        }

        if (emailValue.length <= 0) {
            $("#txtEmail").addClass("submission-fail");
            $("#txtEmail").addClass("animated pulse");

            document.getElementById("email-warning").innerHTML = emptyBox;
        }

        if (firstNameValue.length <= 0) {
            $("#txtFirstName").addClass("submission-fail");
            $("#txtFirstName").addClass("animated pulse");

            document.getElementById("first-name").innerHTML = emptyBox;
        }

        if (lastNameValue.length <= 0) {
            $("#txtLastName").addClass("submission-fail");
            $("#txtLastName").addClass("animated pulse");

            document.getElementById("last-name").innerHTML = emptyBox;
        }

        if (passwordValue.length <= 0) {
            $("#txtPassword").addClass("submission-fail");
            $("#txtPassword").addClass("animated pulse");

            document.getElementById("password").innerHTML = emptyBox;
        }

        if (checkPasswordValue.length <= 0) {
            $("#txtPasswordCheck").addClass("submission-fail");
            $("#txtPasswordCheck").addClass("animated pulse");
            document.getElementById("check-password").innerHTML = emptyBox;
        }

        if (!emailValue.includes("@")) {
            document.getElementById("email-warning").innerHTML = invalidEmail;
        }
        else {
            document.getElementById("email-warning").innerHTML = "";
        }

        //document.getElementById("error-box-display").innerHTML = signupError;
    }

    if (passwordValue == checkPasswordValue) {
        document.getElementById("error-box-display-passwords").innerHTML = "";
    }

    if (validEmailSubmission == false) {

    }
}


function createAccount() {
    console.log("Creating account...");

    comingFromClick = true;
    //createAccount();
    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue).catch(function (error) {

        send_verification();
        var errorMessage = error.message;

        console.log(errorMessage);

        if (errorMessage == null) {
            isAccountValid = true;
        }

        if (errorMessage == "The email address is already in use by another account." || "The email address is already in use by another account.") {
            isAccountValid = false;
        }
        else {
            isAccountValid = true;
        }
    }).then(function (env) {
        if (isAccountValid != false) {
            //createCustomer();
        }
        else {
            swal("Oops!", "This email address is already in use.", "warning");
            closeViewingPlans();
            isAccountValid = true;
        }
    });







}

function send_verification() {
    setTimeout(function () {
        var user = firebase.auth().currentUser;

        console.log(user);

        user.sendEmailVerification().then(function () {
            // Email sent.
            console.log("Verification sent");

            firebase.database().ref('users/' + user.uid + "/userData").update({
                verificationSent: true
            });

        }).catch(function (error) {
            // An error happened.
            console.log("Error logged");
        });
    }, 600);
}

function openViewingPlans() {
    $("#plans-panel").addClass("analysis-box-visible");
    $("#plans-panel").removeClass("analysis-box-hidden");
}

function closeViewingPlans() {

    viewBlogHeader();
    $("#plans-panel").removeClass("analysis-box-visible");
    $("#plans-panel").addClass("analysis-box-hidden");
}

function signOut() {
    firebase.auth().signOut();
}

function signOutDash() {
    comingFromClickDash = true;
    firebase.auth().signOut();
    setTimeout(function () { window.location = "signin.html"; }, 600);
}



function saveTheDate() {
    var dt = new Date();

    const yearCreated = dt.getFullYear();
    const monthCreated = dt.getMonth();
    const dayCreated = dt.getDate();

    var user = firebase.auth().currentUser;

    firebase.database().ref('users/' + user.uid + "/userData").set({
        yearCreatedUser: yearCreated,
        monthCreatedUser: monthCreated,
        dayCreatedUser: dayCreated,
        userFirstName: firstNameValue,
        userLastName: lastNameValue
    });

    firebase.database().ref('users/' + user.uid + "/emailData").set({
        userEmail: emailValue,
        getEmailUpdates: getMailUpdates
    });
}

function assignPage(page) {

    currentPage = page;
    if (currentPage == "signup") {
        jQuery('#loader').fadeOut(230);
        console.log("Page: " + currentPage);
    }


}

firebase.auth().onAuthStateChanged(user => {

    if (user) {

        var user = firebase.auth().currentUser;
        var desc = firebase.database().ref('users/' + user.uid + "/userData");

        var pageActive = document.getElementById("page-tag").innerText;

        // && pageActive != "plans"
        if (pageActive != "signup" && pageActive != "signin" && pageActive != "dashboard") {

            desc.once('value', function (snapshot) {
                socket.emit('checkActiveCustomer', { customerID: snapshot.val().customerID, pageUsed: pageActive });
            });
        }
        else if (pageActive == "plans") {
            //socket.emit('')
        }

        if (pageActive == "dashboard") {
            desc.once('value', function (snapshot) {
                document.getElementById("first-name").innerText = snapshot.val().userFirstName;
                document.getElementById("last-name").innerText = snapshot.val().userLastName;
                socket.emit('checkActiveDashboard', snapshot.val().customerID);
            });
        }

        if (myPage == "signin") {
            window.location = "dashboard";
        }

        if (user != null) {

            //var user = firebase.auth().currentUser;

            var email_id = user.email;
            var email_verified = user.emailVerified;

            if (!email_verified) {

                $('#emailNotVerified').modal({
                    backdrop: 'static',
                    keyboard: false
                })

                var descTemp = firebase.database().ref('users/' + user.uid + "/userData");
                descTemp.once('value', function (snapshot) {
                    if (snapshot.val().verificationSent != true) {
                        send_verification();
                    }

                });

                if (insideApplication == "dashboard") {
                    console.log("Email not verified");
                    //$("#email-not-verified").removeClass("analysis-box-hidden");

                }

                jQuery('#loader').fadeOut(330);
            }
            else {
                console.log("Email is verified");
                if (pageActive == "dashboard") {
                    //$("#email-not-verified-box").addClass("no-display");
                    document.getElementById("is-email-verified").innerHTML = emdrToolkit;

                    //document.getElementById("email-verified-text").innerText = "Verify your email to unlock The ";
                    //document.getElementById("email-not-verified-block").innerHTML = "<div style='display:block;width:1px;height:30px;'>das</div>";

                    //$("#email-not-verified").removeClass("analysis-box-hidden");
                    //document.getElementById("dash-active").innerHTML = verifiedDashboard;
                }

                jQuery('#loader').fadeOut(330);
            }
        }

        if (!comingFromClick) {
            //$('#alreadySignedIn').modal('toggle');
            $('#alreadySignedIn').modal({
                backdrop: 'static',
                keyboard: false  // to prevent closing with Esc button (if you want this too)
            })
        }
        else {
            $.when(saveTheDate()).done(function () {
                //goToDashboard();
            });
        }

    }
    else {
        if (!comingFromClickDash) {
            $('#notSignedIn').modal({
                backdrop: 'static',
                keyboard: false  // to prevent closing with Esc button (if you want this too)
            })
        }
    }
});



function resendVerification() {
    firebase.auth().currentUser.sendEmailVerification().catch(function (error) {

        var errorMessage = error.message;

        if (errorMessage == "We have blocked all requests from this device due to unusual activity. Try again later.") {
            swal("Oops!", "There may be too much activity detected from this account. Check for your verification email or wait a little while and try again.", "warning");
        }

        console.log(errorMessage);

    });
}

function insideApplication(app) {
    insideApplication = app;
}

function returnFormattedDate(date) {
    var stringDay;
    var stringMonth;
    var stringYear;

    //console.log("DATE: " + date);
    stringDay = date[2];

    if (date[1] == 0) {
        stringMonth = "January";
    }
    else if (date[1] == 1) {
        stringMonth = "February";
    }
    else if (date[1] == 2) {
        stringMonth = "March";
    }
    else if (date[1] == 3) {
        stringMonth = "April";
    }
    else if (date[1] == 4) {
        stringMonth = "May";
    }
    else if (date[1] == 5) {
        stringMonth = "June";
    }
    else if (date[1] == 6) {
        stringMonth = "July";
    }
    else if (date[1] == 7) {
        stringMonth = "August";
    }
    else if (date[1] == 8) {
        stringMonth = "September";
    }
    else if (date[1] == 9) {
        stringMonth = "October";
    }
    else if (date[1] == 10) {
        stringMonth = "November";
    }
    else if (date[1] == 11) {
        stringMonth = "December";
    }

    stringYear = date[0];

    //console.log("dAte: " + date);
    return stringMonth + " " + stringDay + ", " + stringYear;
}

function selectBillingPlan(plan) {

    $('#paymentModal').modal({
        backdrop: 'static',
        keyboard: false  // to prevent closing with Esc button (if you want this too)
    });

    if (plan == "weekly") {

    }
    else if (plan == "monthly") {

    }
    else if (plan == "annual") {
        //socket.emit('pickPlan', 'annual');
    }
}

//io.emit('sendClient', customerID);

socket.on('sendClient', function (customerID) {

    console.log("clientsent: " + customerID);
    //if customerID 
    var user = firebase.auth().currentUser;

    firebase.database().ref('users/' + user.uid + "/userData").update({
        customerID: customerID
    });

    stripe.createToken(card).then(function (result) {
        console.log('CREATING TOKEN');
        if (result.error) {
            // Inform the customer that there was an error.
            var errorElement = document.getElementById('card-errors');
            errorElement.textContent = result.error.message;
        } else {
            // Send the token to your server.
            stripeTokenHandler(result.token);
        }
    });
});

socket.on('goToDash', function (command) {
    if (command) {
        window.location = "dashboard.html";
        //setTimeout(function () {  }, 110);
    }
});

socket.on('subscriptionStatus', function (data) {

    console.log("THIS IS MY SUBSCRIPTION STATUS: " + data.yourSubscription);
    if (data.yourSubscription == "active" || data.yourSubscription == "trialing") {
        //console.log("")
        canGetPlan = false;
    }


    if (data.yourPage != "plans") {
        if (data.yourSubscription != "trialing" && data.yourSubscription != "active") {
            openViewingPlans();
            emdrActive = false;
            //setTimeout(function () {  jQuery('#loader').fadeOut(220); }, 110);
        }
        else {
            emdrActive = true;
        }
    } else {

        if (data.yourSubscription == "trialing") {

            $("#active-box").removeClass("hidden");
            $("#active-box").addClass("animated flipInX");

            $("#active-box").removeClass("account-box-header-active");
            $("#active-box").removeClass("account-box-header-inactive");

            $("#active-box").addClass("account-box-header-trialing");

            //$("#is-there-subscription").removeClass("hidden");
            //$("#is-there-subscription").addClass("animated flipInX");

            if (data.cancelingSubscription == true) {

                $("#continue-subscription").removeClass("hidden");
                $("#continue-subscription").addClass("animated flipInX");

                $("#subscription-cancelled-message").removeClass("hidden");
                $("#subscription-cancelled-message").addClass("animated flipInX");
            }
            else {
                $("#is-there-subscription").removeClass("hidden");
                $("#is-there-subscription").addClass("animated flipInX");
            }

            document.getElementById("active-box").innerText = "You have a free trial";
        }
        else if (data.yourSubscription == "active") {

            $("#active-box").removeClass("hidden");
            $("#active-box").addClass("animated flipInX");

            $("#active-box").addClass("account-box-header-active");

            $("#active-box").removeClass("account-box-header-inactive");
            $("#active-box").removeClass("account-box-header-trialing");


            if (data.cancelingSubscription == true) {

                $("#continue-subscription").removeClass("hidden");
                $("#continue-subscription").addClass("animated flipInX");

                $("#subscription-cancelled-message").removeClass("hidden");
                $("#subscription-cancelled-message").addClass("animated flipInX");
            }
            else {
                $("#is-there-subscription").removeClass("hidden");
                $("#is-there-subscription").addClass("animated flipInX");
            }

            document.getElementById("active-box").innerText = "You have an active subscription";
        }
        else if (data.yourSubscription == "none") {

            $("#active-box").removeClass("hidden");
            $("#active-box").addClass("animated flipInX");

            $("#active-box").addClass("account-box-header-inactive");

            $("#active-box").removeClass("account-box-header-trialing");
            $("#active-box").removeClass("account-box-header-active");


            $("#is-there-subscription").addClass("hidden");
            $("#is-there-subscription").removeClass("animated flipInX");

            document.getElementById("active-box").innerText = "You don't have an active subscription";
        }
    }




});

socket.on('subscriptionStatusDashboard', function (plan) {

    if (plan == "subscriptionCanceled") {
        swal("Action completed", "Your subscription has been cancelled and will expire at the end of your current billing period. No further charges will be made. Come back anytime! Redirecting you to the dashboard now.", "success").then((value) => {
            window.location = "dashboard.html";
        });
    }
    else if (plan == "accountDeleted") {
        var user = firebase.auth().currentUser;

        user.delete().then(function () {
            swal("Action completed", "Your account has been deleted and no further charges will be made. Come back anytime! Redirecting you now.", "success").then((value) => {
                window.location = "sign-up.html";
            });



        }).catch(function (error) {
            console.log(error);

            if (error.message == "This operation is sensitive and requires recent authentication. Log in again before retrying this request.") {
                swal("Error", "This action is sensitive and requires recent authentication before proceeding. Log in again before retrying this request", "warning");
            }


            console.log("Error with deleting account");
        });



        //setTimeout(function () { window.location = "dashboard.html" }, 1500);
    }
    else if (plan == "continuesubscription") {
        swal("Success", "Your subscription has been continued and will renew automatically at the end of the billing period.", "success").then((value) => {
            window.location = "dashboard.html";
        });
    }

    if (plan == "none") {
        emdrActive = false;

        $("#active-box").removeClass("account-box-header-active");
        $("#active-box").addClass("account-box-header-inactive");
        document.getElementById("active-box").innerText = "No active subscription";

        $("#plan-button").removeClass("cancel-account-button-active");
        $("#plan-button").addClass("cancel-account-button-inactive");
        document.getElementById("plan-button").innerText = "Get a subscription";

    }
    else {
        emdrActive = true;

        $("#active-box").addClass("account-box-header-active");
        $("#active-box").removeClass("account-box-header-inactive");
        document.getElementById("active-box").innerText = "Active subscription";

        $("#plan-button").addClass("cancel-account-button-active");
        $("#plan-button").removeClass("cancel-account-button-inactive");
        document.getElementById("plan-button").innerText = "Modify or cancel subscription";
    }


});

