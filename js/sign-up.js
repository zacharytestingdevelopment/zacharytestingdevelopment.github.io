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

function logIn() {

    const email = document.getElementById("txtEmail").value;
    const pass = document.getElementById("txtPassword").value;

    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);

    //console.log(auth.currentUser());
    //$("#login-signup").removeClass("hidden");
    //$("#logout-account").addClass("hidden");
};

$("form").submit(function () {
    console.log("submitted");
    logIn();
});

function loggedIn() {
    console.log("user currently logged in");
    /*
    $("#login-signup").addClass("hidden");
    $("#logout-account").removeClass("hidden");
    loggedInBox();
    */
}