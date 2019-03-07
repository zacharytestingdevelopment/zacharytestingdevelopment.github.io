

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
    var user = firebase.auth().currentUser;


    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

    /*
    var user = firebase.auth().currentUser;
 
firebase.database().ref('users/' + user.uid + "/userData").set({
    dateUserCreated: dateCreated
});
*/

    /*
 firebase.auth().createUserWithEmailAndPassword(email, pass)
     .then(function (user) {
         var ref = firebase.database().ref().child("user");
         var data = {
             email: email,
             password: pass,
             test: "please",
             //firstName: $scope.firstName,
             //lastName: $scope.lastName,
             id: user.uid
         }
         ref.child(user.uid).set(data).then(function (ref) {//use 'child' and 'set' combination to save data in your own generated key
             console.log("Saved");
             //$location.path('/profile');
         }, function (error) {
             console.log(error);
         });
     })
     .catch(function (error) {
         var errorCode = error.code;
         var errorMessage = error.message;
         if (errorCode == 'auth/weak-password') {
             alert('The password is too weak.');
         } else if (errorCode == 'auth/email-already-in-use') {
             alert('The email is already taken.');
         } else if (errorCode == 'auth/weak-password') {
             alert('Password is weak');
         } else {
             alert(errorMessage);
         }
         console.log(error);
     });
     */

    /*
var user = firebase.auth().currentUser;
 
firebase.database().ref('users/' + user.uid + "/userData").set({
    dateUserCreated: dateCreated
});
*/


    /*
    firebase.database().ref('users/' + user.uid + "/emdr/savedSets" + sessionSave).set({
        fullSetName: fullValue,
        setDescription: setDescription,
        setDescriptionID: id,
        emdrSpeed: speedValue,
        emdrShape: selectedshape,
        backgroundColorTheme: backgroundTheme,
        elementColorTheme: elementTheme,
        elementThemeName: selectedTheme,
        switchDirection: switchDirectionSound,
        backgroundAudio: selectedBackgroundAudio,
        sessionCount: selectedSessionCount,
        sessionLength: selectedSessionLength,
        setName: sessionSave.substring(1),
        setNameID: nameId,
        selectedPathing: pathing,
        easing: selectedEasing,
        SUDS: selectedSUDS,
        VAC: selectedVAC,
        mood: selectedMood,
        recall: selectedRecall,
        client: selectedClient
    });
    */

    console.log("user created");

    comingFromClick = true;

}

function signOut() {
    firebase.auth().signOut();
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
        dayCreatedUser: dayCreated
    });

    //window.location = "dashboard.html";
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
            saveTheDate();
        }
    }
    else {
        console.log("Not logged in");
    }
});

