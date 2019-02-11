

var txtEmail = document.getElementById("txtEmail");
var txtPassword = document.getElementById("txtPassword");
var btnSignUp = document.getElementById("btnSignUp");
var comingFromClick = false;

function goToDashboard() {
    window.location = "dashboard.html";
}

function signUp() {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

    console.log("user created");

    comingFromClick = true;

}

function signOut() {
    firebase.auth().signOut();
}

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        if (!comingFromClick) {
            //$('#alreadySignedIn').modal('toggle');
            $('#alreadySignedIn').modal({
                backdrop: 'static',
                keyboard: false  // to prevent closing with Esc button (if you want this too)
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

