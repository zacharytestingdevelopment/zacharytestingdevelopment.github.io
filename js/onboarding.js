

(function () {
    const btnLogOut = document.getElementById("btnLogOut");
    const btnLogIn = document.getElementById("btnLogIn");

    //Add a realtime listener 
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log('loggedIn');
            loggedIn();

        }
        else {
            console.log("not logged in");
        }
    });

    btnLogOut.addEventListener('click', e => {
        firebase.auth().signOut();
        $("#login-signup").removeClass("hidden");
        $("#logout-account").addClass("hidden");
    });

    function loggedIn() {
        console.log("user currently logged in");
        window.location = "dashboard.html";
        $("#login-signup").addClass("hidden");
        $("#logout-account").removeClass("hidden");
    }
});