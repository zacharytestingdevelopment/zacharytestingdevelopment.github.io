/*
var signupError = "";
signupError += "<div class=\"no-select error-box-signup animated flipInX col-centered white margin-top\">You";
signupError += "                                    left some fields";
signupError += "                                    blank!";
signupError += "                                <\/div>";
*/

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
emdrToolkit += "                                            <a href=\"therapy-analysis-emdr.html\" class=\"kill-link-style no-select\">";
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
emdrToolkit += "                                                                <a href=\"therapy-analysis-emdr.html\"";
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
verifiedDashboard += "                                            <a href=\"therapy-analysis-emdr.html\" class=\"kill-link-style no-select\">";
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
verifiedDashboard += "                                                                <a href=\"therapy-analysis-emdr.html\"";
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




var emailValue, firstNameValue, lastNameValue, passwordValue, checkPasswordValue;

var comingFromClick = false;
var comingFromClickDash = false;
var getMailUpdates = true;

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

    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue).catch(function (error) {

        send_verification();
        var errorMessage = error.message;

        console.log(errorMessage);
        if (errorMessage == "The email address is already in use by another account.") {
            swal("Oops!", "This email address is already in use.", "warning");
            closeViewingPlans();
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
    console.log(user.uid);

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



firebase.auth().onAuthStateChanged(user => {
    if (user) {

        if (myPage == "signin") {
            window.location = "dashboard";
        }

        if (user != null) {
            var email_id = user.email;
            var email_verified = user.emailVerified;

            if (!email_verified) {

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
                if (insideApplication == "dashboard") {
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

function insideApplication(app) {
    insideApplication = app;
}

function resendVerification() {
    firebase.auth().currentUser.sendEmailVerification().catch(function (error) {

        var errorMessage = error.message;

        if (errorMessage == "We have blocked all requests from this device due to unusual activity. Try again later.") {
            swal("Oops!", "There may be too much activity detected from this account. Check for your verification email or wait a little while and try again.", "warning");
        }

        console.log(errorMessage);

    });
}

/*
function insideApplication(app) {

    var user = firebase.auth().currentUser;
    console.log(user);
    if (user.emailVerified != true) {
        if (app == "dashboard") {
            console.log("In dashboard, not verified");
        }
    }
    else {
        if (app == "dashboard") {
            console.log("In dashboard, verified");
        }
    }
}
*/

