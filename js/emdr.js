
//TODO: 
// - If I delete the current set, it should make the active set none (COMPLETED)
// - It should be required to have a value for the number of sessions and value (COMPLETED)
// - Allow users to edit session names + descriptions (COMPLETED)
// - Update loaded set text (COMPLETED)
// - When you delete the active set, active set text resets and activeSet = "none" (COMPLETED)


var speedSlider = document.getElementById("speedRange");
var speedOutput = document.getElementById("speedOutput");
var selectedshape = "circle";
var activeSetText = "none";

var selectedBackgroundAudio = "none";
var selectedTheme = "light";
var switchDirectionSound = "none";
var selectedSessionCount = "3";
var selectedSessionLength = "45";
var pathing = "leftright";
var selectedEasing = "standard";
var selectedSUDS = "no";
var selectedVAC = "no";

var settingsLoaded = false;
var settingsBoxLoaded = false;
var settingsBox = false;

var sessionOptions = [];
var sessionOptionsBox = [];

var activeSet = "none";
var editedSet = "none";

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
        $("#dashboard-icon-panel2").className = "dashboard-icon dashboard-icon-blue white";
        $("#dashboard-icon-panel2").removeClass("highlight-color-blue");
    }
    else if (setting == "enterBlue1") {
        $("#dash-blue1").removeClass("white");
        $("#dash-blue1").addClass("highlight-color-blue");
    }
    else if (setting == "exitBlue1") {
        $("#dash-blue1").addClass("white");
        $("#dash-blue1").removeClass("highlight-color-blue");
    }
    else if (setting == "enterCancel") {
        $("#cancel-panel").removeClass("white");
        $("#cancel-panel").addClass("highlight-color-blue");
    }
    else if (setting == "exitCancel") {
        $("#cancel-panel").addClass("white");
        $("#cancel-panel").removeClass("highlight-color-blue");
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


        selectedSessionCount = "one";
    }
    else if (sessionCount == "three") {
        $("#session1").removeClass("preset-item-selected");
        $("#session3").addClass("preset-item-selected");
        $("#session5").removeClass("preset-item-selected");
        $("#sessionCustom").removeClass("preset-item-selected");
        $("#sessionUnlimited").removeClass("preset-item-selected");

        document.getElementById("custom-session-time").className = "hidden";

        selectedSessionCount = "three";
    }
    else if (sessionCount == "five") {
        $("#session1").removeClass("preset-item-selected");
        $("#session3").removeClass("preset-item-selected");
        $("#session5").addClass("preset-item-selected");
        $("#sessionCustom").removeClass("preset-item-selected");
        $("#sessionUnlimited").removeClass("preset-item-selected");

        document.getElementById("custom-session-time").className = "hidden";

        selectedSessionCount = "five";
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

        selectedSessionLength = "thirty";
    }
    else if (timeCount == "fourtyFive") {
        $("#time30").removeClass("preset-item-selected");
        $("#time45").addClass("preset-item-selected");
        $("#time60").removeClass("preset-item-selected");
        $("#timeUnlimited").removeClass("preset-item-selected");
        $("#timeCustom").removeClass("preset-item-selected");

        document.getElementById("custom-session-length").className = "hidden";

        selectedSessionLength = "fourtyFive";
    }
    else if (timeCount == "sixty") {
        $("#time30").removeClass("preset-item-selected");
        $("#time45").removeClass("preset-item-selected");
        $("#time60").addClass("preset-item-selected");
        $("#timeUnlimited").removeClass("preset-item-selected");
        $("#timeCustom").removeClass("preset-item-selected");

        document.getElementById("custom-session-length").className = "hidden";

        selectedSessionLength = "sixty";
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
    swal({
        title: "Delete all sets?",
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
                    activeSet = "none";
                    var database = firebase.database();
                    document.getElementById("active-set").innerHTML = "<span class = 'animated fadeIn'>" + activeSet + "</span>";
                    var user = firebase.auth().currentUser;
                    firebase.database().ref('users/' + user.uid + "/emdr").remove();
                    var settingOption = "";
                    settingOption += "<div id=\"no-settings\" class=\"therapy-setting-box margin-top shadow\">";
                    settingOption += "                    <span id = \"therapy-setting-box-header\" class=\"therapy-setting-box-header\">Add some sets\<\/span>";
                    settingOption += "                    <div class=\"therapy-setting-box-description\">Your sets will show up here when you save them!";
                    settingOption += "                    <\/div>";
                    settingOption += "";
                    settingOption += "                <\/div>";

                    document.getElementById("therapy-setting-empty").innerHTML = settingOption;
                    document.getElementById("therapy-setting-boxes").innerHTML = "";

                    break;
            }
        });

}


function loadSettings() {
    if (!settingsLoaded) {
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
        settingsLoaded = true;
    }
}

function startSession() {
}

function loadSet(set) {
    activeSet = set;
    closeSettingsPanel();

    var database = firebase.database();
    var user = firebase.auth().currentUser;
    var desc = firebase.database().ref('users/' + user.uid + "/emdr" + "/" + activeSet);

    var desc = firebase.database().ref('users/' + user.uid + "/emdr/" + activeSet);
    desc.once('value', function (snapshot) {
        activeSetText = snapshot.val().setName;
    });

    document.getElementById("active-set").innerHTML = "<span class = 'animated fadeIn'>" + activeSetText + "</span>";


    desc.once('value', function (snapshot) {

        //Load EMDR settings 
        document.getElementById("speedRange").value = snapshot.val().emdrSpeed;
        document.getElementById("speedOutput").innerHTML = snapshot.val().emdrSpeed;
        shapeCategorySelect(snapshot.val().emdrShape);
        if (snapshot.val().elementThemeName == "custom") {
            document.getElementById("preview-pane").style.backgroundColor = snapshot.val().backgroundColorTheme;
            document.getElementById("element").style.backgroundColor = snapshot.val().elementColorTheme;
            theme("custom");
        }
        else {
            theme(snapshot.val().elementThemeName);
        }
        switchDirection(snapshot.val().switchDirection);
        backgroundSound(snapshot.val().backgroundAudio);

        if (snapshot.val().sessionCount != "one" && snapshot.val().sessionCount != "three" && snapshot.val().sessionCount != "five" && snapshot.val().sessionCount != "unlimited") {
            sessionCount("custom");
            document.getElementById("session-count").value = snapshot.val().sessionCount;
        }
        else {
            sessionCount(snapshot.val().sessionCount);
        }

        if (snapshot.val().sessionLength != "thirty" && snapshot.val().sessionLength != "fourtyFive" && snapshot.val().sessionLength != "sixty" && snapshot.val().sessionLength != "unlimited") {
            timeCount("custom");
            document.getElementById("session-length").value = snapshot.val().sessionLength;
        }
        else {
            timeCount(snapshot.val().sessionLength);
        }

        myPathing(snapshot.val().selectedPathing);
        easing(snapshot.val().easing);

        if (snapshot.val().SUDS != "no") {
            suds("yes");
            document.getElementById("suds-initial").value = snapshot.val().SUDS;
        }
        else {
            suds("no");
        }

        if (snapshot.val().VAC != "no") {
            vac("yes");
            document.getElementById("vac-initial").value = snapshot.val().VAC;
        }
        else {
            vac("no");
        }



        var description = snapshot.val().setDescription;
        var setDescription = snapshot.val().setDescriptionID;
        console.log(description);
    });

}

function deleteSet(id, setName) {
    var deleteText = "";
    var user = firebase.auth().currentUser;
    var desc = firebase.database().ref('users/' + user.uid + "/emdr/" + setName);
    desc.once('value', function (snapshot) {
        deleteText = snapshot.val().setName;
    });

    swal({
        title: "Delete " + deleteText + "?",
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
                    firebase.database().ref('users/' + user.uid + "/emdr" + "/" + setName).remove();
                    swal("SUCCESS!", "Your set has been deleted.", "success");
                    document.getElementById(id).remove();

                    var therapyValue = document.getElementById("therapy-setting-boxes").innerHTML;
                    //console.log("value" + therapyValue);

                    if (therapyValue == "") {
                        console.log("ROACH LOVER");
                        var settingOption = "";
                        settingOption += "<div id=\"no-settings\" class=\"therapy-setting-box margin-top shadow\">";
                        settingOption += "                    <span id = \"therapy-setting-box-header\" class=\"therapy-setting-box-header\">Add some sets\<\/span>";
                        settingOption += "                    <div class=\"therapy-setting-box-description\">Your sets will show up here when you save them!";
                        settingOption += "                    <\/div>";
                        settingOption += "";
                        settingOption += "                <\/div>";

                        document.getElementById("therapy-setting-empty").innerHTML = settingOption;
                    }
                    else {
                        document.getElementById("therapy-setting-empty").innerHTML = "";
                    }

                    if (setName == activeSet) {
                        //Active set deleted
                        activeSet = "none";
                        document.getElementById("active-set").innerHTML = "<span class = 'animated fadeIn'>" + activeSet + "</span>";
                        if (settingsBox) {
                            document.getElementById("therapy-setting-box-current").innerHTML = "";
                        }
                    }

                    break;
            }
        });

}

function updateSet(updatedSet) {

    //Set updated set to current set

    activeSet = updatedSet;

    var database = firebase.database();
    var user = firebase.auth().currentUser;
    console.log(user);
    console.log(selectedSessionCount);

    var desc = firebase.database().ref('users/' + user.uid + "/emdr/" + activeSet);
    //var description, name;

    desc.once('value', function (snapshot) {
        activeSetText = snapshot.val().setName;
    });

    document.getElementById("active-set").innerHTML = "<span class = 'animated fadeIn'>" + activeSetText + "</span>";


    if (selectedSessionCount == "custom") {
        if (document.getElementById("session-count").value.length < 1) {
            selectedSessionCount = "3";
            document.getElementById("session-count").value = selectedSessionCount;
        }
        else {
            selectedSessionCount = document.getElementById("session-count").value;

        }
    }

    if (selectedSessionLength == "custom") {
        if (document.getElementById("session-length").value.length < 1) {
            selectedSessionLength = "45";
            document.getElementById("session-length").value = selectedSessionLength;
        } else {

            selectedSessionLength = document.getElementById("session-length").value;
        }
    }

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

    var str = updatedSet.replace(/\s+/g, '');
    var id = "descriptiontherapy-setting-box" + str;

    const userReference = firebase.database().ref(`firebaseUser/${user.uid}`);
    const speedValue = document.getElementById("speedRange").value;
    const backgroundTheme = document.getElementById("background-color").value;
    const elementTheme = document.getElementById("element-color").value;

    firebase.database().ref('users/' + user.uid + "/emdr/" + updatedSet).update({
        //setDescription: setDescription,
        //setDescriptionID: id,
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

    if (selectedSessionCount != "one" && selectedSessionCount != "three" && selectedSessionCount != "five" && selectedSessionLength != "unlimited") {
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

    swal("SUCCESS!", "Your set has been updated.", "success");
    closeSavePanel();
}

function populateSettingsBox(child) {
    //console.log(child);

    settingsBox = true;

    document.getElementById("gradient3").className = "session-selection-active col col-md-6 col-lg-5 session-selection";
    //console.log(child);


    // TO DO: FILL THESE BOXES WITH SET DESCRIPTION
    var database = firebase.database();
    var user = firebase.auth().currentUser;
    var description = "";
    var id = "";

    console.log("ACTIVE SET: " + activeSet);
    if (activeSet != "none") {
        var desc = firebase.database().ref('users/' + user.uid + "/emdr/" + activeSet);
        desc.once('value', function (snapshot) {
            activeSetText = snapshot.val().setName;
        });

        document.getElementById("active-set").innerHTML = "<span class = 'animated fadeIn'>" + activeSetText + "</span>";

        console.log('active set is ' + activeSet);
        var selectedTherapy = "";
        selectedTherapy += "<div class=\"therapy-setting-box-green animated fadeIN margin-top shadow\">";
        selectedTherapy += "                    <div id = \"active-set-text-box\" class=\"therapy-setting-box-header-green\">" + activeSetText + "<\/div>";
        selectedTherapy += "                    <div class=\"therapy-setting-box-description-green\">Update your currently selected set<\/div>";
        selectedTherapy += "";
        selectedTherapy += "                    <div class=\"therapy-setting-box-buttons margin-top-setting\">";
        selectedTherapy += "                        <span class=\"therapy-setting-box-button-green no-select\" onclick='updateSet(\"" + activeSet + "\");'\">Update Set";
        selectedTherapy += "";
        selectedTherapy += "                            <ion-icon class=\"therapy-setting-box-icon margin-right\" name=\"checkmark-circle-outline\"><\/ion-icon>";
        selectedTherapy += "                        <\/span>";
        selectedTherapy += "                    <\/div>";
        selectedTherapy += "                <\/div>";

        document.getElementById("therapy-setting-box-current").innerHTML = selectedTherapy;
    }
    else {
        document.getElementById("therapy-setting-box-current").innerHTML = "";
    }
    if (child.length > 0) {

        for (var i = 0; i < child.length; i++) {


            var str = child[i].replace(/\s+/g, '');
            id = "therapy-setting-box" + str;
            console.log("Box ID — " + id);

            var settingOption = "";
            settingOption += "<div id=" + id + " class=\"therapy-setting-box margin-top animated fadeIn shadow\"><ion-icon class=\"edit-icon highlight-color-blue\" name=\"build\" onclick='editSet(\"" + child[i] + "\",\"" + description + "\");'\"><\/ion-icon>";
            settingOption += "                    <span id=name" + str + " class=\"therapy-setting-box-header\">" + "x" + "<\/span>";
            settingOption += "                    <div id=description" + str + " class=\"therapy-setting-box-description\">" + description + "";
            settingOption += "                    <\/div>";
            settingOption += "";
            settingOption += "                    <div class=\"therapy-setting-box-buttons margin-top-tiny\">";
            settingOption += "                        <span class=\"therapy-setting-box-button set-load no-select margin-right\" onclick='updateSet(\"" + child[i] + "\");'\">";
            settingOption += "                            Update set";
            settingOption += "                            <ion-icon class=\"therapy-setting-box-icon margin-right\" name=\"checkmark-circle-outline\"><\/ion-icon>";
            settingOption += "                        <\/span>";
            settingOption += "";
            settingOption += "                        <span class=\"therapy-setting-box-button set-delete no-select\" onclick='deleteSet(\"" + id + "\",\"" + child[i] + "\");'\">";
            settingOption += "                            Delete";
            settingOption += "                            <ion-icon class=\"therapy-setting-box-icon margin-right\" name=\"trash\"><\/ion-icon>";
            settingOption += "                        <\/span>";
            settingOption += "                    <\/div>";
            settingOption += "                <\/div>";

            document.getElementById("therapy-setting-boxes-saved").innerHTML += settingOption;

            var desc = firebase.database().ref('users/' + user.uid + "/emdr/" + child[i]);
            //console.log("ID: " + id);
            desc.on('value', function (snapshot) {

                var description = snapshot.val().setDescription;
                var name = snapshot.val().setName;
                var setName = snapshot.val().setNameID;
                var setDescription = snapshot.val().setDescriptionID;
                var setName = snapshot.val().setNameID;

                document.getElementById(setName).innerText = name;
                document.getElementById(setDescription).innerText = description;
            });
        }
    }
    else {

    }
}

function updatedEditSet() {

    var newName = document.getElementById("edit-set-name").value;
    var newDescription = document.getElementById("edit-set-description").value;
    console.log('<br />');

    var database = firebase.database();
    var user = firebase.auth().currentUser;
    console.log("edited set: " + editedSet)
    //var desc = firebase.database().ref('users/' + user.uid + "/emdr/" + activeSet);

    console.log("Active set: " + activeSet);
    console.log("Edited set: " + editedSet);
    firebase.database().ref('users/' + user.uid + "/emdr/" + editedSet).update({
        //setName: newName,
        setName: newName,
        setDescription: newDescription
    });




    if (editedSet == activeSet) {
        var desc = firebase.database().ref('users/' + user.uid + "/emdr/" + activeSet);
        //var description, name;

        desc.once('value', function (snapshot) {
            activeSetText = snapshot.val().setName;
        });

        document.getElementById("active-set").innerHTML = "<span class = 'animated fadeIn'>" + activeSetText + "</span>";
        if (settingsBox) {
            document.getElementById("active-set-text-box").innerHTML = activeSetText;
        }
        //document.getElementById("active-set").innerHTML = "<span class = 'animated fadeIn'>" + activeSetText + "</span>";
    }
    $('#modalCall').modal('hide');
    //console.log("New name: " + newName);
    //console.log("New description: " + newDescription);


}

function editSet(id) {
    console.log("This is the ID: " + id);

    //var database = firebase.database();
    var user = firebase.auth().currentUser;
    var desc = firebase.database().ref('users/' + user.uid + "/emdr/" + id);
    var description, name;
    $('#modalCall').modal('toggle');
    editedSet = id;

    //editedSet = child[i];
    desc.once('value', function (snapshot) {
        //console.log("ACTIVE SET: " + activeSet);
        name = snapshot.val().setName;
        //editedSet = name;
        //console.log("EDIT SET: " + editedSet);
        description = snapshot.val().setDescription;
        //console.log(description);
        document.getElementById("edit-set-name").value = name;
        document.getElementById("edit-set-description").value = description;
        //document.getElementById("edit-set-name").value = snapshot.val().setName;
        //document.getElementById("edit-set-description").value = description;
    });
}

function populateSettingsOptions(child) {


    //console.log(child);

    document.getElementById("gradient2").className = "session-selection-active col col-md-6 col-lg-5 session-selection";
    //console.log(child);


    // TO DO: FILL THESE BOXES WITH SET DESCRIPTION
    var database = firebase.database();
    var user = firebase.auth().currentUser;
    var description = "";
    var id = "";
    if (child.length > 0) {

        for (var i = 0; i < child.length; i++) {

            //console.log("SET NAME: " + child[i]);
            var str = child[i].replace(/\s+/g, '');
            id = "box" + str;
            //console.log(id);
            //console.log("name" + str);
            //console.log("Box ID — " + id);

            //console.log("description" + str);

            var settingOption = "";
            settingOption += "<div id=" + id + " class=\"therapy-setting-box margin-top animated fadeIn shadow\"><ion-icon class=\"edit-icon highlight-color-blue\" name=\"build\" onclick='editSet(\"" + child[i] + "\");'\"><\/ion-icon>";
            settingOption += "                    <span id=name" + str + " class=\"therapy-setting-box-header\">" + "x" + "<\/span>";
            settingOption += "                    <div id=description" + str + " class=\"therapy-setting-box-description\">" + description + "";
            settingOption += "                    <\/div>";
            settingOption += "";
            settingOption += "                    <div class=\"therapy-setting-box-buttons margin-top-tiny\">";
            settingOption += "                        <span class=\"therapy-setting-box-button set-load no-select margin-right\" onclick='loadSet(\"" + child[i] + "\");'\">";
            settingOption += "                            Load set";
            settingOption += "                            <ion-icon class=\"therapy-setting-box-icon margin-right\" name=\"checkmark-circle-outline\"><\/ion-icon>";
            settingOption += "                        <\/span>";
            settingOption += "";
            settingOption += "                        <span class=\"therapy-setting-box-button set-delete no-select\" onclick='deleteSet(\"" + id + "\",\"" + child[i] + "\");'\">";
            settingOption += "                            Delete";
            settingOption += "                            <ion-icon class=\"therapy-setting-box-icon margin-right\" name=\"trash\"><\/ion-icon>";
            settingOption += "                        <\/span>";
            settingOption += "                    <\/div>";
            settingOption += "                <\/div>";

            document.getElementById("therapy-setting-boxes").innerHTML += settingOption;
            document.getElementById("therapy-setting-empty").innerHTML = "";

            var desc = firebase.database().ref('users/' + user.uid + "/emdr/" + child[i]);
            //console.log("ID: " + id);


            desc.on('value', function (snapshot) {
                var description = snapshot.val().setDescription;
                var name = snapshot.val().setName;
                var setName = snapshot.val().setNameID;
                var setDescription = snapshot.val().setDescriptionID;
                var setName = snapshot.val().setNameID;

                document.getElementById(setName).innerText = name;
                document.getElementById(setDescription).innerText = description;
            });
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

        document.getElementById("therapy-setting-empty").innerHTML = settingOption;
    }
}

function deleteSettings() {
    document.getElementById("therapy-setting-boxes").innerHTML = "";
}

function deleteSaved() {
    document.getElementById("set-input").className = "text-input save-input margin-top-tiny";
    document.getElementById("set-input").value = "";
    document.getElementById("set-input-description").value = "";
    document.getElementById("therapy-setting-boxes-saved").innerHTML = "";
    var inputError = "";
    document.getElementById("set-input-error").innerHTML = inputError;
}

function closeSavePanel() {
    settingsBox = false;
    settingsBoxLoaded = false;
    document.getElementById("gradient3").className = "col col-md-6 col-lg-5 session-selection";
    setTimeout(function () { deleteSaved(); }, 300);
}

function closeSettingsPanel() {
    settingsLoaded = false;
    document.getElementById("gradient2").className = "col col-md-6 col-lg-5 session-selection";
    setTimeout(function () { deleteSettings(); }, 300);

    //Invoke("document.getElementById("therapy-setting-boxes").innerHTML = """, ;
}

function saveSettingsBox() {

    if (selectedSUDS == "yes") {
        if (document.getElementById("suds-initial").value.length == 0) {
            selectedSUDS = "1";
            document.getElementById("suds-initial").value = selectedSUDS;
        }
    }

    if (selectedVAC == "yes") {
        if (document.getElementById("vac-initial").value.length == 0) {
            selectedVAC = "1";
            document.getElementById("vac-initial").value = selectedVAC;
        }
    }


    document.getElementById("gradient3").className = "session-selection-active col col-md-6 col-lg-5 session-selection";
    if (!settingsBoxLoaded) {
        sessionOptionsBox = [];

        var userID = firebase.auth().currentUser.uid;
        var rootRef = firebase.database().ref('users');
        var newRoot = rootRef.child(userID).child('emdr')
        newRoot.once('value', function (snapshot) {
            snapshot.forEach(function (_child) {
                var childElement = _child.key;

                sessionOptionsBox.push(childElement);
                //console.log(childElement);
                // populateSettingsOptions();
            });
            populateSettingsBox(sessionOptionsBox);
        });
        settingsBoxLoaded = true;
    }

}

function saveSettings() {

    //console.log("saved");

    var value = document.getElementById("set-input").value;
    activeSet = value;
    var user = firebase.auth().currentUser;

    var desc = firebase.database().ref('users/' + user.uid + "/emdr/" + activeSet);
    //var description, name;

    desc.once('value', function (snapshot) {
        activeSetText = snapshot.val().setName;
    });

    document.getElementById("active-set").innerHTML = "<span class = 'animated fadeIn'>" + activeSet + "</span>";
    var setDescription = document.getElementById("set-input-description").value;
    if (value.length > 0) {
        sessionSave = "/" + value;
        var database = firebase.database();
        var user = firebase.auth().currentUser;
        console.log(user);
        console.log(selectedSessionCount);



        if (selectedSessionCount == "custom") {
            if (document.getElementById("session-count").value.length < 1) {
                selectedSessionCount = "3";
                document.getElementById("session-count").value = selectedSessionCount;
            }
            else {
                selectedSessionCount = document.getElementById("session-count").value;

            }
        }

        if (selectedSessionLength == "custom") {
            if (document.getElementById("session-length").value.length < 1) {
                selectedSessionLength = "45";
                document.getElementById("session-length").value = selectedSessionLength;
            } else {

                selectedSessionLength = document.getElementById("session-length").value;
            }
        }

        if (selectedSUDS == "yes") {
            selectedSUDS = document.getElementById("suds-initial").value;
        }

        if (selectedVAC == "yes") {
            selectedVAC = document.getElementById("vac-initial").value;
        }

        var str = value.replace(/\s+/g, '');
        var id = "description" + str;
        var nameId = "name" + str

        const userReference = firebase.database().ref(`firebaseUser/${user.uid}`);
        const speedValue = document.getElementById("speedRange").value;
        const backgroundTheme = document.getElementById("background-color").value;
        const elementTheme = document.getElementById("element-color").value;

        firebase.database().ref('users/' + user.uid + "/emdr" + sessionSave).set({
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
            VAC: selectedVAC
        });

        if (selectedSessionCount != "one" && selectedSessionCount != "three" && selectedSessionCount != "five" && selectedSessionLength != "unlimited") {
            selectedSessionCount = "custom";
        }

        if (selectedSessionLength != "thirty" && selectedSessionLength != "fourtyFive" && selectedSessionLength != "sixty" && selectedSessionLength != "unlimited") {
            selectedSessionLength = "custom";
        }

        if (selectedSUDS != "no") {
            selectedSUDS = "yes";
        }

        if (selectedVAC != "no") {
            selectedVAC = "yes";
        }

        swal("SUCCESS!", "Your set has been created.", "success");
        closeSavePanel();
    }
    else {
        //No value entered for set name 
        document.getElementById("set-input").className = "text-input save-input margin-top-tiny text-input-error";
        var inputError = "";
        inputError += "<span class=\"set-input-error-text animated fadeIn\">Please enter a value<\/span>";
        document.getElementById("set-input-error").innerHTML = inputError;
    }

}


window.addEventListener('resize', recalibrateEMDR);

