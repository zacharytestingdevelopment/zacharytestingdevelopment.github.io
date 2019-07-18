
/* When a user navigates to the login page when they are already logged in, the content of the login box becomes a welcome screen for the user.
Gives them the option to log out or navigate to their dashboard */

const btnLogOut = document.getElementById("btnLogOut");
const btnLogIn = document.getElementById("btnLogIn");


//Add a realtime listener 
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        loggedIn();
    }
    else {
        console.log("not logged in");
    }
});

function loggedIn() {
    console.log("user currently logged in");
    //window.location = "dashboard.html";
    $("#login-signup").addClass("hidden");
    $("#logout-account").removeClass("hidden");

    loggedInBox();
}

function loggedInBox() {

    var loggedInBox = "";
    loggedInBox += "<div class=\"animated fadeIn\">";
    loggedInBox += "                        <div class=\"log-in-box-header\">Hello, Zachary<\/div>";
    loggedInBox += "                        <div class=\"log-in-subheader\">You're already logged in!<\/div>";
    loggedInBox += "                        <div class=\"col col-sm-12 col-md-10 col-lg-10 col-centered\">";
    loggedInBox += "                            <input type=\"button\" class=\"submit-button no-select\" value=\"Go to dashboard\" \/>";
    loggedInBox += "                            <input onclick = \"logOut()\" type=\"button\" class=\"submit-button no-select\" value=\"Log out\" \/>";
    loggedInBox += "                        <\/div>";
    loggedInBox += "                    <\/div>";

    document.getElementById("log-in-box-container").innerHTML = loggedInBox;
}

function loggedOutBox() {
    var loggedOutBox = "";
    loggedOutBox += "<div class = \"animated fadeIn\"><div class=\"log-in-box-header\">Log in<\/div>";
    loggedOutBox += "                    <div class=\"log-in-subheader\">Don't have an account? Get started <a href=\"signup.html\" class=\"kill-link-style link-style\">here<\/a><\/div>";
    loggedOutBox += "                    <form>";
    loggedOutBox += "                        <div>";
    loggedOutBox += "                            <input id=\"txtEmail\" name=\"email\" type=\"text\" class=\"text-input-style col col-11 col-md-8 col-lg-8 col-centered margin-top\"";
    loggedOutBox += "                                placeholder=\"Email address\" required \/>";
    loggedOutBox += "                        <\/div>";
    loggedOutBox += "";
    loggedOutBox += "                        <div>";
    loggedOutBox += "                            <input id=\"txtPassword\" name=\"password\" type=\"password\" class=\"text-input-style col col-11 col-md-8 col-lg-8 col col-8 col-centered margin-top\"";
    loggedOutBox += "                                placeholder=\"Password\" required \/>";
    loggedOutBox += "                        <\/div>";
    loggedOutBox += "                        <a class=\"forgot-password link-style kill-link-style\">I forgot my password<\/a>";
    loggedOutBox += "                        <div class=\"col-centered margin-top text-center\">";
    loggedOutBox += "";
    loggedOutBox += "                            <label class=\"check-header no-select form-check-label\" for=\"exampleCheck1\">Remember me<\/label>";
    loggedOutBox += "                            <input type=\"checkbox\" class=\"form-check-input pointer checkbox\" id=\"exampleCheck1\">";
    loggedOutBox += "                        <\/div>";
    loggedOutBox += "";
    loggedOutBox += "";
    loggedOutBox += "";
    loggedOutBox += "                        <button onclick=\"logIn()\" type=\"button\" class=\"submit-button no-select\">Log In<\/button>";
    loggedOutBox += "";
    loggedOutBox += "                        <div class=\"margin-top\">You can also log in with...<\/div>";
    loggedOutBox += "";
    loggedOutBox += "                        <div class=\"col col-10 col-centered\">";
    loggedOutBox += "                            <input type=\"button\" class=\"facebook-button no-select\" value=\"Facebook\" \/>";
    loggedOutBox += "                            <input type=\"button\" class=\"twitter-button no-select\" value=\"Twitter\" \/>";
    loggedOutBox += "                        <\/div>";
    loggedOutBox += "                    <\/form></div>";
    loggedOutBox += "                  ";


    document.getElementById("log-in-box-container").innerHTML = loggedOutBox;
}

$("form").submit(function () {
    logIn();
});

function logIn() {

    const email = document.getElementById("txtEmail").value;
    const pass = document.getElementById("txtPassword").value;


    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);
    $("#login-signup").removeClass("hidden");
    $("#logout-account").addClass("hidden");
};

function logOut() {
    firebase.auth().signOut();
    $("#login-signup").removeClass("hidden");
    $("#logout-account").addClass("hidden");

    loggedOutBox();
};


function returnHome() {
    window.location = "index.html";
}

ScrollReveal().reveal('.f1', { delay: 200 });
