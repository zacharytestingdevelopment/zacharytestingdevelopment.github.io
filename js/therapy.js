
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

var selectedBackgroundAudio;
var selectedTheme;
var selectedSessionCount;
var selectedSessionLength;

function updateBackground() {
    document.getElementById("preview-pane").className = "vertical-center col col-md-6 col-lg-7 pad-preview preview-pane";


    document.getElementById("preview-pane").style.backgroundColor = $("#background-color").val();
    theme("custom");
}

function updateElement() {
    document.getElementById("element").style.backgroundColor = $("#element-color").val();
    theme("custom");
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
    }
    else if (easingValue == "linear") {
        document.getElementById("easingOutput").innerHTML = "<span class = \"animated fadeIn\">LINEAR<\/span>";
        $("#standard").removeClass("preset-item-selected");
        $("#linear").addClass("preset-item-selected");
        $("#cubic").removeClass("preset-item-selected");
        $("#sine").removeClass("preset-item-selected");
        $("#circ").removeClass("preset-item-selected");
        $("#back").removeClass("preset-item-selected");
    }
    else if (easingValue == "cubic") {
        document.getElementById("easingOutput").innerHTML = "<span class = \"animated fadeIn\">CUBIC<\/span>";
        $("#standard").removeClass("preset-item-selected");
        $("#linear").removeClass("preset-item-selected");
        $("#cubic").addClass("preset-item-selected");
        $("#sine").removeClass("preset-item-selected");
        $("#circ").removeClass("preset-item-selected");
        $("#back").removeClass("preset-item-selected");
    }
    else if (easingValue == "sine") {
        document.getElementById("easingOutput").innerHTML = "<span class = \"animated fadeIn\">SINE<\/span>";
        $("#standard").removeClass("preset-item-selected");
        $("#linear").removeClass("preset-item-selected");
        $("#cubic").removeClass("preset-item-selected");
        $("#sine").addClass("preset-item-selected");
        $("#circ").removeClass("preset-item-selected");
        $("#back").removeClass("preset-item-selected");
    }
    else if (easingValue == "circ") {
        document.getElementById("easingOutput").innerHTML = "<span class = \"animated fadeIn\">CIRC<\/span>";
        $("#standard").removeClass("preset-item-selected");
        $("#linear").removeClass("preset-item-selected");
        $("#cubic").removeClass("preset-item-selected");
        $("#sine").removeClass("preset-item-selected");
        $("#circ").addClass("preset-item-selected");
        $("#back").removeClass("preset-item-selected");
    }
    else if (easingValue == "back") {
        document.getElementById("easingOutput").innerHTML = "<span class = \"animated fadeIn\">BACK<\/span>";
        $("#standard").removeClass("preset-item-selected");
        $("#linear").removeClass("preset-item-selected");
        $("#cubic").removeClass("preset-item-selected");
        $("#sine").removeClass("preset-item-selected");
        $("#circ").removeClass("preset-item-selected");
        $("#back").addClass("preset-item-selected");
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
        $("#dashboard-icon").removeClass("white");
        $("#dashboard-icon").addClass("highlight-color");
    }
    else if (setting == "exit") {
        $("#dashboard-icon").removeClass("highlight-color");
        $("#dashboard-icon").addClass("white");
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

function pathing(pathType) {

    if (pathType == "leftright") {

        $("#leftright").addClass("preset-item-selected");
        $("#topbottom").removeClass("preset-item-selected");
        $("#diagonal").removeClass("preset-item-selected");
    }
    else if (pathType == "topbottom") {
        $("#leftright").removeClass("preset-item-selected");
        $("#topbottom").addClass("preset-item-selected");
        $("#diagonal").removeClass("preset-item-selected");
    }
    else if (pathType == "diagonal") {
        $("#leftright").removeClass("preset-item-selected");
        $("#topbottom").removeClass("preset-item-selected");
        $("#diagonal").addClass("preset-item-selected");
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
    }
    else if (directionType == "ding") {
        $("#none-direction").removeClass("preset-item-selected");
        $("#ding").addClass("preset-item-selected");
        $("#drop").removeClass("preset-item-selected");

    }
    else if (directionType == "drop") {
        $("#none-direction").removeClass("preset-item-selected");
        $("#ding").removeClass("preset-item-selected");
        $("#drop").addClass("preset-item-selected");
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

        selectedSessionCount = 1;
    }
    else if (sessionCount == "three") {
        $("#session1").removeClass("preset-item-selected");
        $("#session3").addClass("preset-item-selected");
        $("#session5").removeClass("preset-item-selected");
        $("#sessionCustom").removeClass("preset-item-selected");
        $("#sessionUnlimited").removeClass("preset-item-selected");

        document.getElementById("custom-session-time").className = "hidden";

        selectedSessionCount = 3;
    }
    else if (sessionCount == "five") {
        $("#session1").removeClass("preset-item-selected");
        $("#session3").removeClass("preset-item-selected");
        $("#session5").addClass("preset-item-selected");
        $("#sessionCustom").removeClass("preset-item-selected");
        $("#sessionUnlimited").removeClass("preset-item-selected");

        document.getElementById("custom-session-time").className = "hidden";

        selectedSessionCount = 5;
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

        selectedSessionLength = 30;
    }
    else if (timeCount == "fourtyFive") {
        $("#time30").removeClass("preset-item-selected");
        $("#time45").addClass("preset-item-selected");
        $("#time60").removeClass("preset-item-selected");
        $("#timeUnlimited").removeClass("preset-item-selected");
        $("#timeCustom").removeClass("preset-item-selected");

        document.getElementById("custom-session-length").className = "hidden";

        selectedSessionLength = 45;
    }
    else if (timeCount == "sixty") {
        $("#time30").removeClass("preset-item-selected");
        $("#time45").removeClass("preset-item-selected");
        $("#time60").addClass("preset-item-selected");
        $("#timeUnlimited").removeClass("preset-item-selected");
        $("#timeCustom").removeClass("preset-item-selected");

        document.getElementById("custom-session-length").className = "hidden";

        selectedSessionLength = 60;
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
    }
    else if (sudsInput == "yes") {
        $("#sudsNo").removeClass("preset-item-selected");
        $("#sudsYes").addClass("preset-item-selected");

        document.getElementById("sudsInput").className = "animated fadeIn margin-top-medium";
    }
}

function vac(vacInput) {
    if (vacInput == "no") {
        $("#vacNo").addClass("preset-item-selected");
        $("#vacYes").removeClass("preset-item-selected");

        document.getElementById("vacInput").className = "hidden";
    }
    else if (vacInput == "yes") {
        $("#vacNo").removeClass("preset-item-selected");
        $("#vacYes").addClass("preset-item-selected");

        document.getElementById("vacInput").className = "animated fadeIn margin-top-medium";
    }
}