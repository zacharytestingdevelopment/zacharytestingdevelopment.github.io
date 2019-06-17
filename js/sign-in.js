
var emptyBox = "";
emptyBox += "<span class=\"animated flipInX warning-text\">This is a required";
emptyBox += "                                            field<\/span>";

var invalidEmail = "";
invalidEmail += "<span class=\"animated flipInX warning-text\">Please enter a valid";
invalidEmail += "                                            email<\/span>";

var txtEmail = document.getElementById("txtEmail");
var txtPassword = document.getElementById("txtPassword");
var comingFromClick;

var myPage;

function verifySignIn() {

    $("#txtEmail").removeClass("submission-fail");
    $("#txtEmail").removeClass("animated pulse");

    $("#txtPassword").removeClass("submission-fail");
    $("#txtPassword").removeClass("animated pulse");

    if (txtEmail.value.length >= 1) {
        document.getElementById("email-warning").innerHTML = "";
    }

    if (txtPassword.value.length >= 1) {
        document.getElementById("password-warning").innerHTML = "";
    }

    if (txtEmail.value.length >= 1 && txtPassword.value.length >= 1 && txtEmail.value.includes("@")) {
        signIn();
    }

    if (txtEmail.value.length <= 0) {
        $("#txtEmail").addClass("submission-fail");
        $("#txtEmail").addClass("animated pulse");

        document.getElementById("email-warning").innerHTML = emptyBox;
    }

    if (txtEmail.value.length >= 1 && !txtEmail.value.includes("@")) {
        $("#txtEmail").addClass("submission-fail");
        $("#txtEmail").addClass("animated pulse");

        document.getElementById("email-warning").innerHTML = invalidEmail;
    }

    if (txtPassword.value.length <= 0) {
        $("#txtPassword").addClass("submission-fail");
        $("#txtPassword").addClass("animated pulse");

        document.getElementById("password-warning").innerHTML = emptyBox;
    }



}

function signIn() {

    const auth = firebase.auth();
    const email = txtEmail.value;
    const pass = txtPassword.value;

    var errorMessage;

    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(function (error) {

        var errorMessage = error.message;

        console.log(error.message);
        if (errorMessage == "The email address is badly formatted.") {
            swal("Oops!", "Your email is not formatted properly. Please check to make sure it was entered correctly. ", "warning");
        }
        else if (errorMessage == "There is no user record corresponding to this identifier. The user may have been deleted.") {
            swal("Oops!", "We couldn't find an account registered with that email address. Please check to make sure it was entered correctly.", "warning");
        }
        else if (errorMessage == "The password is invalid or the user does not have a password.") {
            swal("Oops!", "The password entered is invalid. Please check to make sure it was entered correctly. ", "warning");
        }



    });


    comingFromClick = true;

}


function myPage(page) {
    myPage = page;
}

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        window.location = "dashboard.html";
    }
    else {
        jQuery('#loader').fadeOut(330);
    }
});


/*
var txtEmail = document.getElementById("txtEmail");
var txtPassword = document.getElementById("txtPassword");
var btnSignIn = document.getElementById("btnSignIn");

var comingFromClick = false;

function goToDashboard() {
    window.location = "dashboard.html";
}

function signIn() {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

    comingFromClick = true;
}

function signOut() {
    firebase.auth().signOut();
}

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log("TRIGGER");

        if (!comingFromClick) {

            $('#alreadySignedIn').modal({
                backdrop: 'static',
                keyboard: false
            })

        }
        else {
            window.location = "dashboard.html";
        }
    }
    else {
        console.log("Not logged in");
    }
});
*/