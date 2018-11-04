

var speedSlider = document.getElementById("speedRange");
var speedOutput = document.getElementById("speedOutput");
var selectedshape = "circle";

var selectedBackgroundAudio = "none";
var selectedTheme = "light";
var switchDirectionSound = "none";
var selectedSessionCount = "3";
var selectedSessionLength = "45";
var pathing = "leftright";
var selectedEasing = "standard";
var selectedSUDS = "no";
var selectedVAC = "no";

var sessionOptions = [];

speedSlider.oninput = function () {
    adjustSpeed();
    speedOutput.innerHTML = this.value;
}

var element = document.getElementById('preview-pane');
var positionInfo = element.getBoundingClientRect();
var width = positionInfo.width - 175;

var alternate = anime({
    targets: '#alternate .el',
    translateX: width,
    direction: 'alternate',
    loop: true,
    easing: 'linear'
});

function adjustSpeed() {
    var width = positionInfo.width - 175;
    var startingPosition = element.getBoundingClientRect();

    alternate.duration = 400;
}

function recalibrateEMDR() {
    var element = document.getElementById('alternate');
    var positionInfo = element.getBoundingClientRect();
    var width = positionInfo.width - 175;

    var alternate = anime({
        targets: '#alternate .el',
        translateX: [0, width],
        direction: 'alternate',
        loop: true,
        easing: "linear"
    });
}




/* Closing and opening options */
var speedMovement = false;
var theming = false;
var path = true;
var session = false;
var advanced = true;

/* Music files */
var rainAudio = new Audio('rain.mp3');
var pianoAudio = new Audio('piano.mp3');

rainAudio.loop = true;

function updateBackground() {
    document.getElementById("preview-pane").className = "vertical-center col col-md-6 col-lg-7 pad-preview preview-pane";


    document.getElementById("preview-pane").style.backgroundColor = $("#background-color").val();
    theme("custom");
}

function updateElement() {
    document.getElementById("element").style.backgroundColor = $("#element-color").val();
    theme("custom");
}

function myPathing(pathType) {

    if (pathType == "leftright") {

        $("#leftright").addClass("preset-item-selected");
        $("#topbottom").removeClass("preset-item-selected");
        $("#diagonal").removeClass("preset-item-selected");

        pathing = "leftright";
    }
    else if (pathType == "topbottom") {
        $("#leftright").removeClass("preset-item-selected");
        $("#topbottom").addClass("preset-item-selected");
        $("#diagonal").removeClass("preset-item-selected");

        pathing = "topbottom";
    }
    else if (pathType == "diagonal") {
        $("#leftright").removeClass("preset-item-selected");
        $("#topbottom").removeClass("preset-item-selected");
        $("#diagonal").addClass("preset-item-selected");

        pathing = "diagonal";
    }
}


function theme(themeValue) {
    if (themeValue == "light") {
        $("#light").addClass("preset-item-selected");
        $("#dark").removeClass("preset-item-selected");
        $("#aqua").removeClass("preset-item-selected");
        $("#ruby").removeClass("preset-item-selected");
        $("#custom").removeClass("preset-item-selected");
        $("#contrast").removeClass("preset-item-selected");

        document.getElementById("background-color").value = "#ffffff";
        document.getElementById("element-color").value = "#3ee986";

        document.getElementById("preview-pane").className = "animation-transition vertical-center col col-md-6 col-lg-7 pad-preview preview-pane";
        document.getElementById("preview-pane").style.backgroundColor = "#fff";
        document.getElementById("element").style.backgroundColor = "#3ee986";

        selectedTheme = "light";
    }
    else if (themeValue == "dark") {
        $("#light").removeClass("preset-item-selected");
        $("#dark").addClass("preset-item-selected");
        $("#aqua").removeClass("preset-item-selected");
        $("#ruby").removeClass("preset-item-selected");
        $("#custom").removeClass("preset-item-selected");
        $("#contrast").removeClass("preset-item-selected");

        document.getElementById("background-color").value = "#454545";
        document.getElementById("element-color").value = "#B2BABB";

        document.getElementById("preview-pane").className = "animation-transition vertical-center col col-md-6 col-lg-7 pad-preview preview-pane";
        document.getElementById("preview-pane").style.backgroundColor = "#454545";
        document.getElementById("element").style.backgroundColor = "#B2BABB";

        selectedTheme = "dark";
    }
    else if (themeValue == "aqua") {
        $("#light").removeClass("preset-item-selected");
        $("#dark").removeClass("preset-item-selected");
        $("#aqua").addClass("preset-item-selected");
        $("#ruby").removeClass("preset-item-selected");
        $("#custom").removeClass("preset-item-selected");
        $("#contrast").removeClass("preset-item-selected");

        document.getElementById("background-color").value = "#3c50a3";
        document.getElementById("element-color").value = "#3bcdd0";

        document.getElementById("preview-pane").className = "animation-transition vertical-center col col-md-6 col-lg-7 pad-preview preview-pane";
        document.getElementById("preview-pane").style.backgroundColor = "#3c50a3";
        document.getElementById("element").style.backgroundColor = "#3bcdd0";

        selectedTheme = "aqua";
    }
    else if (themeValue == "ruby") {
        $("#light").removeClass("preset-item-selected");
        $("#dark").removeClass("preset-item-selected");
        $("#aqua").removeClass("preset-item-selected");
        $("#ruby").addClass("preset-item-selected");
        $("#custom").removeClass("preset-item-selected");
        $("#contrast").removeClass("preset-item-selected");

        document.getElementById("background-color").value = "#2c415a";
        document.getElementById("element-color").value = "#ec5351";

        document.getElementById("preview-pane").className = "animation-transition vertical-center col col-md-6 col-lg-7 pad-preview preview-pane";
        document.getElementById("preview-pane").style.backgroundColor = "#2c415a";
        document.getElementById("element").style.backgroundColor = "#ec5351";

        selectedTheme = "ruby";
    }
    else if (themeValue == "custom") {
        $("#light").removeClass("preset-item-selected");
        $("#dark").removeClass("preset-item-selected");
        $("#aqua").removeClass("preset-item-selected");
        $("#ruby").removeClass("preset-item-selected");
        $("#custom").addClass("preset-item-selected");
        $("#contrast").removeClass("preset-item-selected");

        selectedTheme = "custom";

    }
    else if (themeValue == "contrast") {
        $("#light").removeClass("preset-item-selected");
        $("#dark").removeClass("preset-item-selected");
        $("#aqua").removeClass("preset-item-selected");
        $("#ruby").removeClass("preset-item-selected");
        $("#custom").removeClass("preset-item-selected");
        $("#contrast").addClass("preset-item-selected");

        document.getElementById("background-color").value = "#000000";
        document.getElementById("element-color").value = "#38fe28";

        document.getElementById("preview-pane").className = "animation-transition vertical-center col col-md-6 col-lg-7 pad-preview preview-pane";
        document.getElementById("preview-pane").style.backgroundColor = "#000000";
        document.getElementById("element").style.backgroundColor = "#38fe28";

        selectedTheme = "contrast";
    }
}

function easing(easingValue) {
    if (easingValue == "standard") {
        document.getElementById("easingOutput").innerHTML = "<span class = \"animated fadeIn\">STANDARD<\/span>";
        $("#standard").addClass("preset-item-selected");
        $("#linear").removeClass("preset-item-selected");
        $("#cubic").removeClass("preset-item-selected");
        $("#sine").removeClass("preset-item-selected");
        $("#circ").removeClass("preset-item-selected");
        $("#back").removeClass("preset-item-selected");

        selectedEasing = "standard";
    }
    else if (easingValue == "linear") {
        document.getElementById("easingOutput").innerHTML = "<span class = \"animated fadeIn\">LINEAR<\/span>";
        $("#standard").removeClass("preset-item-selected");
        $("#linear").addClass("preset-item-selected");
        $("#cubic").removeClass("preset-item-selected");
        $("#sine").removeClass("preset-item-selected");
        $("#circ").removeClass("preset-item-selected");
        $("#back").removeClass("preset-item-selected");

        selectedEasing = "linear";
    }
    else if (easingValue == "cubic") {
        document.getElementById("easingOutput").innerHTML = "<span class = \"animated fadeIn\">CUBIC<\/span>";
        $("#standard").removeClass("preset-item-selected");
        $("#linear").removeClass("preset-item-selected");
        $("#cubic").addClass("preset-item-selected");
        $("#sine").removeClass("preset-item-selected");
        $("#circ").removeClass("preset-item-selected");
        $("#back").removeClass("preset-item-selected");

        selectedEasing = "cubic";
    }
    else if (easingValue == "sine") {
        document.getElementById("easingOutput").innerHTML = "<span class = \"animated fadeIn\">SINE<\/span>";
        $("#standard").removeClass("preset-item-selected");
        $("#linear").removeClass("preset-item-selected");
        $("#cubic").removeClass("preset-item-selected");
        $("#sine").addClass("preset-item-selected");
        $("#circ").removeClass("preset-item-selected");
        $("#back").removeClass("preset-item-selected");

        selectedEasing = "sine";
    }
    else if (easingValue == "circ") {
        document.getElementById("easingOutput").innerHTML = "<span class = \"animated fadeIn\">CIRC<\/span>";
        $("#standard").removeClass("preset-item-selected");
        $("#linear").removeClass("preset-item-selected");
        $("#cubic").removeClass("preset-item-selected");
        $("#sine").removeClass("preset-item-selected");
        $("#circ").addClass("preset-item-selected");
        $("#back").removeClass("preset-item-selected");

        selectedEasing = "circ";
    }
    else if (easingValue == "back") {
        document.getElementById("easingOutput").innerHTML = "<span class = \"animated fadeIn\">BACK<\/span>";
        $("#standard").removeClass("preset-item-selected");
        $("#linear").removeClass("preset-item-selected");
        $("#cubic").removeClass("preset-item-selected");
        $("#sine").removeClass("preset-item-selected");
        $("#circ").removeClass("preset-item-selected");
        $("#back").addClass("preset-item-selected");

        selectedEasing = "back";
    }
}

function speed(speedValue) {
    if (speedValue == "slow") {
        speedSlider.value = "25";
        speedOutput.innerHTML = "25";
    }
    else if (speedValue == "medium") {
        speedSlider.value = "50";
        speedOutput.innerHTML = "50";
    }
    else if (speedValue == "fast") {
        speedSlider.value = "75";
        speedOutput.innerHTML = "75";
    }
}


function dashBoard(setting) {
    if (setting == "enter") {
        $("#dashboard-icon-home").removeClass("white");
        $("#dashboard-icon-home").addClass("highlight-color");
    }
    else if (setting == "exit") {
        $("#dashboard-icon-home").removeClass("highlight-color");
        $("#dashboard-icon-home").addClass("white");
    }
    else if (setting == "enterBlue") {
        $("#dashboard-icon").removeClass("white");
        $("#dashboard-icon").addClass("highlight-color-blue");
    }
    else if (setting == "exitBlue") {
        $("#dashboard-icon").removeClass("highlight-color-blue");
        $("#dashboard-icon").addClass("white");
    }
    else if (setting == "enterPanel") {
        $("#dashboard-icon-panel").removeClass("white");
        $("#dashboard-icon-panel").addClass("highlight-color-blue");
    }
    else if (setting == "exitPanel") {
        $("#dashboard-icon-panel").addClass("white");
        $("#dashboard-icon-panel").removeClass("highlight-color-blue");
    }
    else if (setting == "enterPanel2") {
        $("#dashboard-icon-panel2").removeClass("white");
        $("#dashboard-icon-panel2").addClass("highlight-color-blue");
    }
    else if (setting == "exitPanel2") {
        $("#dashboard-icon-panel2").addClass("white");
        $("#dashboard-icon-panel2").removeClass("highlight-color-blue");
    }

}

function settingDropdown(setting) {
    if (setting == "speedMovement") {
        if (!speedMovement) {
            $("#settingArrow1").addClass("arrow-down");
            speedMovement = true;
        }
        else {
            $("#settingArrow1").removeClass("arrow-down");
            speedMovement = false;
        }
    }
    else if (setting == "theming") {
        if (!theming) {
            $("#settingArrow2").addClass("arrow-down");
            theming = true;
        }
        else {
            $("#settingArrow2").removeClass("arrow-down");
            theming = false;
        }
    }
    else if (setting == "path") {
        if (!path) {
            $("#settingArrow3").addClass("arrow-down");
            path = true;
        }
        else {
            $("#settingArrow3").removeClass("arrow-down");
            path = false;
        }
    }
    else if (setting == "session") {
        if (!session) {
            $("#settingArrow4").addClass("arrow-down");
            session = true;
        }
        else {
            $("#settingArrow4").removeClass("arrow-down");
            session = false;
        }
    }
    else if (setting == "advanced") {
        if (!advanced) {
            $("#settingArrow5").addClass("arrow-down");
            advanced = true;
        }
        else {
            $("#settingArrow5").removeClass("arrow-down");
            advanced = false;
        }
    }
}

function shapeCategoryEnter(shape) {
    if (shape == "circle") {
        $("#shape-circle").addClass("shape-active");
    }
    else if (shape == "square") {
        $("#shape-square").addClass("shape-active");
    }
    else if (shape == "triangle") {
        $("#shape-triangle").addClass("shape-active-triangle");
    }
    else if (shape == "squareRounded") {
        $("#shape-square-rounded").addClass("shape-active");
    }
}

function shapeCategoryExit(shape) {
    if (shape == "circle") {
        $("#shape-circle").removeClass("shape-active");
    }
    else if (shape == "square") {
        $("#shape-square").removeClass("shape-active");
    }
    else if (shape == "triangle") {
        $("#shape-triangle").removeClass("shape-active-triangle");
    }
    else if (shape == "squareRounded") {
        $("#shape-square-rounded").removeClass("shape-active");
    }
}

function shapeCategorySelect(shape) {
    if (shape == "circle") {
        $("#shape-category-circle").addClass("shape-active-selected");
        $("#shape-category-square-rounded").removeClass("shape-active-selected");
        $("#shape-square-rounded").removeClass("shape-active-selected");

        $("#shape-category-square").removeClass("shape-active-selected");

        $("#shape-circle").addClass("shape-active-selected-white");
        $("#shape-square").removeClass("shape-active-selected-white");

        $("#shape-square").removeClass("shape-active-selected");
        $("#shape-category-triangle").removeClass("shape-active-selected");
        $("#shape-triangle").removeClass("shape-active-selected-triangle");
        $("#shape-square-rounded").removeClass("shape-active-selected-white");

        $("#element").addClass("circle");
        $("#element").removeClass("rounded-square");
        $("#element").removeClass("triangle-element");
        $("#element").removeClass("square");

        selectedshape = "circle";
    }
    else if (shape == "square") {
        $("#shape-category-square-rounded").removeClass("shape-active-selected");
        $("#shape-square-rounded").removeClass("shape-active-selected");

        $("#shape-category-square").addClass("shape-active-selected");
        $("#shape-category-circle").removeClass("shape-active-selected");
        $("#shape-circle").removeClass("shape-active-selected-white");
        $("#shape-square").addClass("shape-active-selected-white");
        $("#shape-triangle").removeClass("shape-active-selected-triangle");
        $("#shape-category-triangle").removeClass("shape-active-selected");
        $("#shape-square-rounded").removeClass("shape-active-selected-white");

        $("#element").removeClass("circle");
        $("#element").removeClass("rounded-square");
        $("#element").removeClass("triangle-element");
        $("#element").addClass("square");

        selectedshape = "square";
    }
    else if (shape == "squareRounded") {
        $("#shape-category-circle").removeClass("shape-active-selected");

        $("#shape-category-square-rounded").addClass("shape-active-selected");
        $("#shape-square-rounded").addClass("shape-active-selected-white");

        $("#shape-category-square").removeClass("shape-active-selected");

        $("#shape-circle").removeClass("shape-active-selected-white");
        $("#shape-square").removeClass("shape-active-selected-white");

        $("#shape-square").removeClass("shape-active-selected");
        $("#shape-category-triangle").removeClass("shape-active-selected");
        $("#shape-triangle").removeClass("shape-active-selected-triangle");

        $("#element").removeClass("circle");
        $("#element").addClass("rounded-square");
        $("#element").removeClass("triangle-element");
        $("#element").removeClass("square");

        selectedshape = "squareRounded";
    }
    else if (shape == "triangle") {
        $("#shape-category-square-rounded").removeClass("shape-active-selected");
        $("#shape-square-rounded").removeClass("shape-active-selected");

        $("#shape-circle").removeClass("shape-active-selected-white");
        $("#shape-category-circle").removeClass("shape-active-selected");
        $("#shape-category-square").removeClass("shape-active-selected");
        $("#shape-square").removeClass("shape-active-selected-white");
        $("#shape-triangle").addClass("shape-active-selected-triangle");
        $("#shape-category-triangle").addClass("shape-active-selected");
        $("#shape-square-rounded").removeClass("shape-active-selected-white");

        $("#element").removeClass("circle");
        $("#element").removeClass("rounded-square");
        $("#element").addClass("triangle-element");
        $("#element").removeClass("square");

        selectedshape = "triangle";
    }
}

function information(informationType) {
    if (informationType == "easing") {
        swal({
            title: "Easing",
            text: "Easing controls the smoothness of movement of the EMDR element during therapy. Try playing with the different options to see how they effect movement! ",
            icon: "info",
            customClass: "swal-wide"
        });
    }
    else if (informationType == "switchDirection") {
        swal({
            title: "Switch direction sound",
            text: "This setting allows you to play a sound when the EMDR element changes directions. This option is useful for those who prefer to have auditory processing as a supplement to the visual component of EMDR.",
            icon: "info"
        });
    }
    else if (informationType == "suds") {
        swal({
            title: "Subjective units of disturbance scale",
            text: "Easing controls the smoothness of movement of the EMDR element during therapy. Try playing with the different options to see how they effect movement! ",
            icon: "info"
        });
    }
    else if (informationType == "vac") {
        swal({
            title: "Easing",
            text: "Easing controls the smoothness of movement of the EMDR element during therapy. Try playing with the different options to see how they effect movement! ",
            icon: "info"
        });
    }
}

function backgroundSound(soundType) {
    if (soundType == "none") {
        $("#none").addClass("preset-item-selected");
        $("#ambient").removeClass("preset-item-selected");
        $("#waves").removeClass("preset-item-selected");
        $("#outdoors").removeClass("preset-item-selected");
        $("#space").removeClass("preset-item-selected");
        $("#piano").removeClass("preset-item-selected");

        pianoAudio.pause();
        pianoAudio.currentTime = 0;

        rainAudio.pause();
        rainAudio.currentTime = 0;

        selectedBackgroundAudio = "none";
    }
    else if (soundType == "ambient") {
        $("#none").removeClass("preset-item-selected");
        $("#ambient").addClass("preset-item-selected");
        $("#waves").removeClass("preset-item-selected");
        $("#outdoors").removeClass("preset-item-selected");
        $("#space").removeClass("preset-item-selected");
        $("#piano").removeClass("preset-item-selected");

        selectedBackgroundAudio = "ambient";
    }
    else if (soundType == "waves") {
        $("#none").removeClass("preset-item-selected");
        $("#ambient").removeClass("preset-item-selected");
        $("#waves").addClass("preset-item-selected");
        $("#outdoors").removeClass("preset-item-selected");
        $("#space").removeClass("preset-item-selected");
        $("#piano").removeClass("preset-item-selected");

        selectedBackgroundAudio = "waves";
    }
    else if (soundType == "outdoors") {
        $("#none").removeClass("preset-item-selected");
        $("#ambient").removeClass("preset-item-selected");
        $("#waves").removeClass("preset-item-selected");
        $("#outdoors").addClass("preset-item-selected");
        $("#space").removeClass("preset-item-selected");
        $("#piano").removeClass("preset-item-selected");

        selectedBackgroundAudio = "outdoors";

        pianoAudio.pause();
        pianoAudio.currentTime = 0;

        rainAudio.play();

    }
    else if (soundType == "space") {
        $("#none").removeClass("preset-item-selected");
        $("#ambient").removeClass("preset-item-selected");
        $("#waves").removeClass("preset-item-selected");
        $("#outdoors").removeClass("preset-item-selected");
        $("#space").addClass("preset-item-selected");
        $("#piano").removeClass("preset-item-selected");

        selectedBackgroundAudio = "space";

    }
    else if (soundType == "piano") {
        $("#none").removeClass("preset-item-selected");
        $("#ambient").removeClass("preset-item-selected");
        $("#waves").removeClass("preset-item-selected");
        $("#outdoors").removeClass("preset-item-selected");
        $("#space").removeClass("preset-item-selected");
        $("#piano").addClass("preset-item-selected");

        rainAudio.pause();
        rainAudio.currentTime = 0;

        pianoAudio.play();

        selectedBackgroundAudio = "piano";
    }
}

function switchDirection(directionType) {
    if (directionType == "none") {
        $("#none-direction").addClass("preset-item-selected");
        $("#ding").removeClass("preset-item-selected");
        $("#drop").removeClass("preset-item-selected");

        switchDirectionSound = "none";
    }
    else if (directionType == "ding") {
        $("#none-direction").removeClass("preset-item-selected");
        $("#ding").addClass("preset-item-selected");
        $("#drop").removeClass("preset-item-selected");

        switchDirectionSound = "ding";
    }
    else if (directionType == "drop") {
        $("#none-direction").removeClass("preset-item-selected");
        $("#ding").removeClass("preset-item-selected");
        $("#drop").addClass("preset-item-selected");

        switchDirectionSound = "drop";
    }
}

function sessionCount(sessionCount) {
    if (sessionCount == "one") {
        $("#session1").addClass("preset-item-selected");
        $("#session3").removeClass("preset-item-selected");
        $("#session5").removeClass("preset-item-selected");
        $("#sessionCustom").removeClass("preset-item-selected");
        $("#sessionUnlimited").removeClass("preset-item-selected");

        document.getElementById("custom-session-time").className = "hidden";


        selectedSessionCount = "1";
    }
    else if (sessionCount == "three") {
        $("#session1").removeClass("preset-item-selected");
        $("#session3").addClass("preset-item-selected");
        $("#session5").removeClass("preset-item-selected");
        $("#sessionCustom").removeClass("preset-item-selected");
        $("#sessionUnlimited").removeClass("preset-item-selected");

        document.getElementById("custom-session-time").className = "hidden";

        selectedSessionCount = "3";
    }
    else if (sessionCount == "five") {
        $("#session1").removeClass("preset-item-selected");
        $("#session3").removeClass("preset-item-selected");
        $("#session5").addClass("preset-item-selected");
        $("#sessionCustom").removeClass("preset-item-selected");
        $("#sessionUnlimited").removeClass("preset-item-selected");

        document.getElementById("custom-session-time").className = "hidden";

        selectedSessionCount = "5";
    }
    else if (sessionCount == "unlimited") {
        $("#session1").removeClass("preset-item-selected");
        $("#session3").removeClass("preset-item-selected");
        $("#session5").removeClass("preset-item-selected");
        $("#sessionCustom").removeClass("preset-item-selected");
        $("#sessionUnlimited").addClass("preset-item-selected");

        document.getElementById("custom-session-time").className = "hidden";

        selectedSessionCount = "unlimited";
    }
    else if (sessionCount == "custom") {
        $("#session1").removeClass("preset-item-selected");
        $("#session3").removeClass("preset-item-selected");
        $("#session5").removeClass("preset-item-selected");
        $("#sessionCustom").addClass("preset-item-selected");
        $("#sessionUnlimited").removeClass("preset-item-selected");

        document.getElementById("custom-session-time").className = "animated fadeIn margin-top-medium";

        selectedSessionCount = "custom";
    }
}

function timeCount(timeCount) {
    if (timeCount == "thirty") {
        $("#time30").addClass("preset-item-selected");
        $("#time45").removeClass("preset-item-selected");
        $("#time60").removeClass("preset-item-selected");
        $("#timeUnlimited").removeClass("preset-item-selected");
        $("#timeCustom").removeClass("preset-item-selected");

        document.getElementById("custom-session-length").className = "hidden";

        selectedSessionLength = "30";
    }
    else if (timeCount == "fourtyFive") {
        $("#time30").removeClass("preset-item-selected");
        $("#time45").addClass("preset-item-selected");
        $("#time60").removeClass("preset-item-selected");
        $("#timeUnlimited").removeClass("preset-item-selected");
        $("#timeCustom").removeClass("preset-item-selected");

        document.getElementById("custom-session-length").className = "hidden";

        selectedSessionLength = "45";
    }
    else if (timeCount == "sixty") {
        $("#time30").removeClass("preset-item-selected");
        $("#time45").removeClass("preset-item-selected");
        $("#time60").addClass("preset-item-selected");
        $("#timeUnlimited").removeClass("preset-item-selected");
        $("#timeCustom").removeClass("preset-item-selected");

        document.getElementById("custom-session-length").className = "hidden";

        selectedSessionLength = "60";
    }
    else if (timeCount == "unlimited") {
        $("#time30").removeClass("preset-item-selected");
        $("#time45").removeClass("preset-item-selected");
        $("#time60").removeClass("preset-item-selected");
        $("#timeUnlimited").addClass("preset-item-selected");
        $("#timeCustom").removeClass("preset-item-selected");

        document.getElementById("custom-session-length").className = "hidden";

        selectedSessionLength = "unlimited";
    }
    else if (timeCount == "custom") {
        $("#time30").removeClass("preset-item-selected");
        $("#time45").removeClass("preset-item-selected");
        $("#time60").removeClass("preset-item-selected");
        $("#timeCustom").addClass("preset-item-selected");
        $("#timeUnlimited").removeClass("preset-item-selected");

        document.getElementById("custom-session-length").className = "animated fadeIn margin-top-medium";

        selectedSessionLength = "custom";
    }
}

function suds(sudsInput) {
    if (sudsInput == "no") {
        $("#sudsNo").addClass("preset-item-selected");
        $("#sudsYes").removeClass("preset-item-selected");

        document.getElementById("sudsInput").className = "hidden";

        selectedSUDS = "no";
    }
    else if (sudsInput == "yes") {
        $("#sudsNo").removeClass("preset-item-selected");
        $("#sudsYes").addClass("preset-item-selected");

        document.getElementById("sudsInput").className = "animated fadeIn margin-top-medium";

        selectedSUDS = "yes";
    }
}

function vac(vacInput) {
    if (vacInput == "no") {
        $("#vacNo").addClass("preset-item-selected");
        $("#vacYes").removeClass("preset-item-selected");

        document.getElementById("vacInput").className = "hidden";

        selectedVAC = "no";
    }
    else if (vacInput == "yes") {
        $("#vacNo").removeClass("preset-item-selected");
        $("#vacYes").addClass("preset-item-selected");

        document.getElementById("vacInput").className = "animated fadeIn margin-top-medium";

        selectedVAC = "yes";
    }
}
firebase.auth().onAuthStateChanged(function (user) {

});


function deleteAll() {
    var database = firebase.database();
    var user = firebase.auth().currentUser;
    firebase.database().ref('users/' + user.uid + "/emdr").remove();
}

function loadSettings() {
    sessionOptions = [];

    var userID = firebase.auth().currentUser.uid;
    var rootRef = firebase.database().ref('users');
    var newRoot = rootRef.child(userID).child('emdr')
    newRoot.once('value', function (snapshot) {
        snapshot.forEach(function (_child) {
            var childElement = _child.key;

            sessionOptions.push(childElement);
            //console.log(childElement);
            // populateSettingsOptions();
        });
        populateSettingsOptions(sessionOptions);
    });
}

function startSession() {
}

function loadSet(set) {
    alert(set);
}

function deleteSet(set) {
    swal({
        title: "Delete " + set + "?",
        icon: "warning",
        text: "This decision cannot be undone.",
        buttons: {
            cancel: "Cancel",
            confirm: {
                value: "OK",
            },
        },
    })
        .then((value) => {
            switch (value) {
                case "OK":
                    var database = firebase.database();
                    var user = firebase.auth().currentUser;
                    firebase.database().ref('users/' + user.uid + "/emdr" + "/" + set).remove();
                    swal("SUCCESS!", "Your set has been deleted.", "success");
                    document.getElementById("therapy-setting-box" + set).remove();
                    var therapyValue = document.getElementById("therapy-setting-boxes").innerHTML;
                    //console.log("value" + therapyValue);

                    if (therapyValue == "") {
                        var settingOption = "";
                        settingOption += "<div id=\"no-settings\" class=\"therapy-setting-box margin-top shadow\">";
                        settingOption += "                    <span id = \"therapy-setting-box-header\" class=\"therapy-setting-box-header\">Add some sets\<\/span>";
                        settingOption += "                    <div class=\"therapy-setting-box-description\">Your sets will show up here when you save them!";
                        settingOption += "                    <\/div>";
                        settingOption += "";
                        settingOption += "                <\/div>";

                        document.getElementById("therapy-setting-boxes").innerHTML += settingOption;
                    }

                    break;
            }
        });

}

function populateSettingsOptions(child) {

    document.getElementById("gradient2").className = "session-selection-active col col-md-6 col-lg-5 session-selection";


    if (child.length > 0) {
        for (var i = 0; i < child.length; i++) {

            var id = "therapy-setting-box" + child[i];
            console.log(id);

            var settingOption = "";
            settingOption += "<div id=" + id + " class=\"therapy-setting-box margin-top shadow\">";
            settingOption += "                    <span id = \"therapy-setting-box-header\" class=\"therapy-setting-box-header\">" + child[i] + "<\/span>";
            settingOption += "                    <div class=\"therapy-setting-box-description\">This option is meant for my client Zach, who is a";
            settingOption += "                        useless little shit with no fkin respect.";
            settingOption += "                    <\/div>";
            settingOption += "";
            settingOption += "                    <div class=\"therapy-setting-box-buttons margin-top-tiny\">";
            settingOption += "                        <span class=\"therapy-setting-box-button set-load no-select margin-right\" onclick='loadSet(\"" + child[i] + "\");'\">";
            settingOption += "                            Load set";
            settingOption += "                            <ion-icon class=\"therapy-setting-box-icon margin-right\" name=\"checkmark-circle-outline\"><\/ion-icon>";
            settingOption += "                        <\/span>";
            settingOption += "";
            settingOption += "                        <span class=\"therapy-setting-box-button set-delete no-select\" onclick='deleteSet(\"" + child[i] + "\");'\">";
            settingOption += "                            Delete";
            settingOption += "                            <ion-icon class=\"therapy-setting-box-icon margin-right\" name=\"trash\"><\/ion-icon>";
            settingOption += "                        <\/span>";
            settingOption += "                    <\/div>";
            settingOption += "                <\/div>";

            document.getElementById("therapy-setting-boxes").innerHTML += settingOption;
        }
    }
    else {
        var settingOption = "";
        settingOption += "<div id=\"no-settings\" class=\"therapy-setting-box margin-top shadow\">";
        settingOption += "                    <span id = \"therapy-setting-box-header\" class=\"therapy-setting-box-header\">Add some sets\<\/span>";
        settingOption += "                    <div class=\"therapy-setting-box-description\">Your sets will show up here when you save them!";
        settingOption += "                    <\/div>";
        settingOption += "";
        settingOption += "                <\/div>";

        document.getElementById("therapy-setting-boxes").innerHTML += settingOption;
    }
}

function deleteSettings() {
    document.getElementById("therapy-setting-boxes").innerHTML = "";
}

function closeSettingsPanel() {
    document.getElementById("gradient2").className = "col col-md-6 col-lg-5 session-selection";
    setTimeout(function () { deleteSettings(); }, 300);

    //Invoke("document.getElementById("therapy-setting-boxes").innerHTML = """, ;
}


function saveSettings() {
    var sessionSave = "/s";

    /*
    if (selectedSessionCount == "custom") {
        selectedSessionCount = document.getElementById("session-count").value;
    }
 
    if (selectedSessionLength == "custom") {
        selectedSessionLength = document.getElementById("custom-session-length").value;
    }
 
    if (selectedSUDS == "yes") {
        selectedSUDS = document.getElementById("suds-initial").value;
    }
 
    if (selectedVAC == "yes") {
        selectedVAC = document.getElementById("vac-initial").value;
    }
    */
    swal({
        title: "Save session",
        text: "Easing controls the smoothness of movement of the EMDR element during therapy. Try playing with the different options to see how they effect movement! ",
        icon: "info",
        content: "input",
        customClass: "swal-wide"
    })
        .then(function (value) {

            sessionSave = "/" + value;
            var database = firebase.database();
            var user = firebase.auth().currentUser;
            console.log(user);
            console.log(selectedSessionCount);

            if (selectedSessionCount == "custom") {
                selectedSessionCount = document.getElementById("session-count").value;
            }

            if (selectedSessionLength == "custom") {
                selectedSessionLength = document.getElementById("session-length").value;
            }

            if (selectedSUDS == "yes") {
                selectedSUDS = document.getElementById("suds-initial").value;
            }

            if (selectedVAC == "yes") {
                selectedVAC = document.getElementById("vac-initial").value;
            }

            const userReference = firebase.database().ref(`firebaseUser/${user.uid}`);
            const speedValue = document.getElementById("speedRange").value;
            const backgroundTheme = document.getElementById("background-color").value;
            const elementTheme = document.getElementById("element-color").value;

            firebase.database().ref('users/' + user.uid + "/emdr" + sessionSave).set({
                emdrSpeed: speedValue,
                emdrShape: selectedshape,
                backgroundColorTheme: backgroundTheme,
                elementColorTheme: elementTheme,
                elementThemeName: selectedTheme,
                switchDirection: switchDirectionSound,
                backgroundAudio: selectedBackgroundAudio,
                sessionCount: selectedSessionCount,
                sessionLength: selectedSessionLength,
                selectedPathing: pathing,
                easing: selectedEasing,
                SUDS: selectedSUDS,
                VAC: selectedVAC
            });

            if (selectedSessionCount != "1" && selectedSessionCount != "3" && selectedSessionCount != "5" && selectedSessionCount != "unlimited") {
                selectedSessionCount = "custom";
            }

            if (selectedSessionLength != "30" && selectedSessionLength != "45" && selectedSessionLength != "60" && selectedSessionLength != "unlimited") {
                selectedSessionLength = "custom";
            }

            if (selectedSUDS != "no") {
                selectedSUDS = "yes";
            }

            if (selectedVAC != "no") {
                selectedVAC = "yes";
            }


        })


    console.log(sessionSave);



    console.log("starting data");
    /*
    userReference.once('value', snapshot => {
 
 
        console.log("SET STARTING DATA");
        userReference.set({
            userName: userName,
            email: firebaseUser.email,
        });
        
 
 
 
});*/

}

window.addEventListener('resize', recalibrateEMDR);

