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