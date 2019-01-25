
(function () {


    //Get sign up elements

    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const txtConfirmPassword = document.getElementById("txtConfirmPassword");
    const btnSignUp = document.getElementById("btnSignUp");
    const btnLogOut = document.getElementById("btnLogOut");
    const txtName = document.getElementById("txtName");


    function logIn() {

        //TODO: Check for real email 

        const email = txtEmail.value;
        const pass = txtPassword.value;
        const confirmPass = txtConfirmPassword.value;
        const auth = firebase.auth();
        const name = txtName.value;

        //Sign in 
        if (pass == confirmPass) {
            const promise = auth.createUserWithEmailAndPassword(email, pass);
            /*
            var user = firebase.auth().currentuser;

            user.updateProfile({
                displayName: name,
            }).then(function () {
                
            }).catch(function (error) {
                
            });
            */
            promise.catch(e => console.log(e.message));
        }
        else {
            $("#error-message").removeClass("hidden");
            $("#error-message").addClass("animated fadeIn");
            $("#txtPassword").addClass("error-input");
            $("#txtConfirmPassword").addClass("error-input");
        }
    };


    function logOut() {
        firebase.auth().signOut();
        $("#login-signup").removeClass("hidden");
        $("#logout-account").addClass("hidden");
    };


    //Add a realtime listener 
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            if (firebaseUser) {
                const userReference = firebase.database().ref(`firebaseUser/${firebaseUser.uid}`);
                const userName = document.getElementById("txtName").value;

                userReference.once('value', snapshot => {

                    if (!snapshot.val()) {

                        console.log("SET STARTING DATA");
                        userReference.set({
                            userName: userName,
                        });

                        // window.location = "emdr-settings.html";
                    }
                });

                //window.location = "dashboard.html";

                loggedIn();
                console.log(firebaseUser);
            }

        }
        else {
            loggedOutBox();
            console.log("not logged in");
        }
    });

    function loggedIn() {
        console.log("user currently logged in");
        $("#login-signup").addClass("hidden");
        $("#logout-account").removeClass("hidden");

    }

    function loggedInBox() {
        var loggedInBox = "";
        loggedInBox += "<div class=\"animated fadeIn\">";
        loggedInBox += "                                    <div class=\"log-in-box-header\">Hello, Zachary<\/div>";
        loggedInBox += "                                    <div class=\"log-in-subheader\">You're already logged in!<\/div>";
        loggedInBox += "                                    <div class=\"col col-sm-12 col-md-10 col-lg-10 col-centered\">";
        loggedInBox += "                                        <input type=\"button\" class=\"submit-button no-select\" value=\"Go to dashboard\" \/>";
        loggedInBox += "                                        <input onclick=\"logOut()\" type=\"button\" class=\"submit-button no-select\" value=\"Log out\" \/>";
        loggedInBox += "                                    <\/div>";
        loggedInBox += "                                <\/div>";

        document.getElementById("sign-up-box").innerHTML = loggedInBox;
    }

    function loggedOutBox() {
        var loggedOutBox = "";
        loggedOutBox += "<div class=\"log-in-box-header\">Sign Up<\/div>";
        loggedOutBox += "                                <div class=\"log-in-subheader\">Already have an account? Log in <a href=\"sign-in.html\"";
        loggedOutBox += "                                        class=\"link-style kill-link-style\">here<\/a><\/div>";
        loggedOutBox += "";
        loggedOutBox += "                                <form>";
        loggedOutBox += "                                    <div>";
        loggedOutBox += "                                        <input id=\"txtName\" name=\"name\" type=\"text\" class=\"text-input-style col col-11 col-md-8 col-lg-8 col-centered margin-top\"";
        loggedOutBox += "                                            placeholder=\"Your name\" required \/>";
        loggedOutBox += "                                    <\/div>";
        loggedOutBox += "                                    <div>";
        loggedOutBox += "                                        <input id=\"txtEmail\" name=\"email\" type=\"text\" class=\"text-input-style col col-11 col-md-8 col-lg-8 col-centered margin-top\"";
        loggedOutBox += "                                            placeholder=\"Email address\" required \/>";
        loggedOutBox += "                                    <\/div>";
        loggedOutBox += "";
        loggedOutBox += "                                    <div>";
        loggedOutBox += "                                        <input id=\"txtPassword\" name=\"password\" type=\"password\" class=\"text-input-style col col-11 col-md-8 col-lg-8 col col-8 col-centered margin-top\"";
        loggedOutBox += "                                            placeholder=\"Password\" required \/>";
        loggedOutBox += "                                    <\/div>";
        loggedOutBox += "                                    <div>";
        loggedOutBox += "                                        <input id=\"txtConfirmPassword\" name=\"confirmPassword\" type=\"password\" class=\"text-input-style col col-11 col-md-8 col-lg-8 col col-8 col-centered margin-top\"";
        loggedOutBox += "                                            placeholder=\"Confirm password\" required \/>";
        loggedOutBox += "                                    <\/div>";
        loggedOutBox += "                                    <div id=\"error-message\" class=\"error-message hidden\">Passwords do not match<\/div>";
        loggedOutBox += "                                    <button onclick=\"logIn()\" type=\"button\" id=\"btnSignUp\" class=\"submit-button no-select\">Sign";
        loggedOutBox += "                                        Up<\/button>";
        loggedOutBox += "";
        loggedOutBox += "                                    <div class=\"margin-top\">You can also sign up with...<\/div>";
        loggedOutBox += "";
        loggedOutBox += "                                    <div class=\"col col-10 col-centered\">";
        loggedOutBox += "                                        <input type=\"button\" class=\"facebook-button no-select\" value=\"Facebook\" \/>";
        loggedOutBox += "                                        <input type=\"button\" class=\"twitter-button no-select\" value=\"Twitter\" \/>";
        loggedOutBox += "                                    <\/div>";
        loggedOutBox += "";
        loggedOutBox += "                                <\/form>";

        document.getElementById("sign-up-box").innerHTML = loggedOutBox;
    }

}());