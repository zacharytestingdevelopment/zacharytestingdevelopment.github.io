
//TODO: 
// - If I delete the current set, it should make the active set none (COMPLETED)
// - It should be required to have a value for the number of sessions and value (COMPLETED)
// - Allow users to edit session names + descriptions (COMPLETED)
// - Update loaded set text (COMPLETED)
// - When you delete the active set, active set text resets and activeSet = "none" (COMPLETED)
// - Add a new switch direction sound player for the preview, it doesnt seem to keep playing when you leave a session 

var mainElement;

var moodProgress = [];
var sudsProgress = [];
var vacProgress = [];
var descriptionProgress = [];
var switchDirectionSoundPlayer;

var switchDirectionExtra = "no";
var switchBackgroundSound = "no";
var themeExtra = "no";

var speedSlider = document.getElementById("speedRange");
var speedOutput = document.getElementById("speedOutput");
var selectedshape = "circle";
var activeSetText = "none";
var paused = "no";

var selectedBackgroundAudio = "none";
var selectedTheme = "ruby";
var switchDirectionSound = "none";
var selectedSessionCount = "3";
var selectedSessionLength = "45";
var pathing = "leftright";
var selectedEasing = "easeInOutQuad";
var selectedSUDS = "no";
var selectedMood = "yes";
var selectedVAC = "no";
var selectedClient = "no";

var settingsLoaded = false;
var settingsBoxLoaded = false;
var settingsBox = false;
var sessionSettingsShown = true;

var sessionOptions = [];
var sessionOptionsBox = [];

var activeSet = "none";
var editedSet = "none";
var numberOfSessions;
var yourCurrentSession = 1;
var emdrSpeed = "5";
var sessionLength;

var sessionActive;

var element = document.getElementById('preview-pane');
var positionInfo = element.getBoundingClientRect();
var width = positionInfo.width - 175;

var alternate = anime({
    targets: '#alternate .el',
    translateX: width,
    direction: 'alternate',
    loop: true,
    easing: selectedEasing
});

speedSlider.oninput = function () {
    speedOutput.innerHTML = this.value;
    emdrSpeed = this.value;
    adjustSpeed(this.value);

    updatePreview();
}

function updatePreview() {

    var destination;

    if (pathing == "leftright") {
        var alternate = "";
        alternate += "<span class=\"animated fadeIn\">";
        alternate += "                        <div id=\"element\" class=\"emdr-element el element-duration circle-start\"><\/div>";
        alternate += "                    <\/span>";
    }
    else if (pathing == "topbottom") {
        var alternate = "<span class = \"animated fadeIn\">";
        alternate += "<div id=\"alternate\" class=\"alternate-preview-top\">";
        alternate += "            <div id=\"element\" class=\"emdr-element el element-duration circle\"><\/div>";
        alternate += "        <\/div></span>";
    }

    //clearInterval(switchDirectionSoundPlayer);

    document.getElementById("alternate").innerHTML = "";
    document.getElementById("alternate").innerHTML = alternate;

    //console.log(selectedshape);
    if (selectedshape == "circle") {
        $("#element").addClass("circle");
        $("#element").removeClass("rounded-square");
        $("#element").removeClass("triangle-element");
        $("#element").removeClass("square");
    }
    else if (selectedshape == "squareRounded") {
        $("#element").removeClass("circle");
        $("#element").addClass("rounded-square");
        $("#element").removeClass("triangle-element");
        $("#element").removeClass("square");
    }
    else if (selectedshape == "square") {
        $("#element").removeClass("circle");
        $("#element").removeClass("rounded-square");
        $("#element").removeClass("triangle-element");
        $("#element").addClass("square");
    }


    document.getElementById("element").style.backgroundColor = $("#element-color").val();
    document.getElementById("preview-pane").style.backgroundColor = $("#background-color").val();


    if (pathing == "leftright") {
        destination = document.getElementById("preview-pane").offsetWidth - 175;

        if (emdrSpeed == "1") {
            alternate = anime({
                targets: '#alternate .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 3100
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 3100);
        }
        else if (emdrSpeed == "2") {
            alternate = anime({
                targets: '#alternate .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 2160
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 2160);
        }
        else if (emdrSpeed == "3") {

            alternate = anime({
                targets: '#alternate .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 1340
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 1340);
        }
        else if (emdrSpeed == "4") {
            alternate = anime({
                targets: '#alternate .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 1000
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 1000);
        }
        else if (emdrSpeed == "5") {


            alternate = anime({
                targets: '#alternate .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 750
            });
            console.log("S" + emdrSpeed);

            switchDirectionSoundPlayer = window.setInterval(function () {
                //console.log("ENDED SESSION: " + switchDirectionSound);
                switchDirectionSoundPlay();
            }, 750);
        }
        else if (emdrSpeed == "6") {
            alternate = anime({
                targets: '#alternate .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 680
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 680);
        }
        else if (emdrSpeed == "7") {
            alternate = anime({
                targets: '#alternate .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 570
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 570);
        }
        else if (emdrSpeed == "8") {
            alternate = anime({
                targets: '#alternate .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 520
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 520);
        }
        else if (emdrSpeed == "9") {
            alternate = anime({
                targets: '#alternate .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 400
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 400);
        }
        else if (emdrSpeed == "10") {
            alternate = anime({
                targets: '#alternate .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 320
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 320);
        }
    }
    else if (pathing == "topbottom") {
        destination = document.getElementById("preview-pane").offsetHeight - 175;

        if (emdrSpeed == "1") {
            alternate = anime({
                targets: '#alternate .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 3100
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 3100);
        }
        else if (emdrSpeed == "2") {
            alternate = anime({
                targets: '#alternate .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 2160
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 2160);
        }
        else if (emdrSpeed == "3") {

            alternate = anime({
                targets: '#alternate .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 1340
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                //console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 1340);
        }
        else if (emdrSpeed == "4") {
            alternate = anime({
                targets: '#alternate .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 1000
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 1000);
        }
        else if (emdrSpeed == "5") {
            alternate = anime({
                targets: '#alternate .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 750
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 750);
        }
        else if (emdrSpeed == "6") {
            alternate = anime({
                targets: '#alternate .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 680
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 680);
        }
        else if (emdrSpeed == "7") {
            alternate = anime({
                targets: '#alternate .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 570
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 570);
        }
        else if (emdrSpeed == "8") {
            alternate = anime({
                targets: '#alternate .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 520
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 520);
        }
        else if (emdrSpeed == "9") {
            alternate = anime({
                targets: '#alternate .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 400
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 400);
        }
        else if (emdrSpeed == "10") {
            alternate = anime({
                targets: '#alternate .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 320
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 320);
        }
    }
}


function adjustSpeed(speedVal) {
    if (speedVal == "3" || speedVal == "5" || speedVal == "7") {
        if (speedVal == "3") {
            speed("3");
        }
        else if (speedVal == "5") {
            speed("5");
        }
        else if (speedVal == "7") {
            speed("7");
        }
    }
    else {
        $("#speed-slow").removeClass("preset-item-selected");
        $("#speed-medium").removeClass("preset-item-selected");
        $("#speed-fast").removeClass("preset-item-selected");
    }
}


function recalibrateEMDR() {
    var element = document.getElementById('alternate');
    var positionInfo = element.getBoundingClientRect();
    var width = positionInfo.width - 175;


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

/* Sound files */
var popAudio = new Audio('sounds/pop.wav');

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

function previewNav() {
    document.getElementById("eye-icon").className = "preview-nav-arrow white";
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

    updatePreview();
}


function theme(themeValue) {
    if (themeValue == "light") {
        $("#light").addClass("preset-item-selected");
        $("#dark").removeClass("preset-item-selected");
        $("#aqua").removeClass("preset-item-selected");
        $("#ruby").removeClass("preset-item-selected");
        $("#custom").removeClass("preset-item-selected");
        $("#contrast").removeClass("preset-item-selected");

        $("#sunshine").removeClass("preset-item-selected");
        $("#sand").removeClass("preset-item-selected");
        $("#royal").removeClass("preset-item-selected");
        $("#forest").removeClass("preset-item-selected");
        $("#lilac").removeClass("preset-item-selected");
        $("#chestnut").removeClass("preset-item-selected");

        document.getElementById("background-color").value = "#FCFCFC";
        document.getElementById("element-color").value = "#3ee986";

        document.getElementById("preview-pane").className = "animation-transition vertical-center col col-md-6 col-lg-7 pad-preview preview-pane";
        document.getElementById("preview-pane").style.backgroundColor = "#FCFCFC";
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

        $("#sunshine").removeClass("preset-item-selected");
        $("#sand").removeClass("preset-item-selected");
        $("#royal").removeClass("preset-item-selected");
        $("#forest").removeClass("preset-item-selected");
        $("#lilac").removeClass("preset-item-selected");
        $("#chestnut").removeClass("preset-item-selected");

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

        $("#sunshine").removeClass("preset-item-selected");
        $("#sand").removeClass("preset-item-selected");
        $("#royal").removeClass("preset-item-selected");
        $("#forest").removeClass("preset-item-selected");
        $("#lilac").removeClass("preset-item-selected");
        $("#chestnut").removeClass("preset-item-selected");

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

        $("#sunshine").removeClass("preset-item-selected");
        $("#sand").removeClass("preset-item-selected");
        $("#royal").removeClass("preset-item-selected");
        $("#forest").removeClass("preset-item-selected");
        $("#lilac").removeClass("preset-item-selected");
        $("#chestnut").removeClass("preset-item-selected");

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

        $("#sunshine").removeClass("preset-item-selected");
        $("#sand").removeClass("preset-item-selected");
        $("#royal").removeClass("preset-item-selected");
        $("#forest").removeClass("preset-item-selected");
        $("#lilac").removeClass("preset-item-selected");
        $("#chestnut").removeClass("preset-item-selected");

        console.log("green");

        document.getElementById("preview-pane").className = "animation-transition vertical-center col col-md-6 col-lg-7 pad-preview preview-pane";


        selectedTheme = "custom";

    }
    else if (themeValue == "contrast") {
        $("#light").removeClass("preset-item-selected");
        $("#dark").removeClass("preset-item-selected");
        $("#aqua").removeClass("preset-item-selected");
        $("#ruby").removeClass("preset-item-selected");
        $("#custom").removeClass("preset-item-selected");
        $("#contrast").addClass("preset-item-selected");

        $("#sunshine").removeClass("preset-item-selected");
        $("#sand").removeClass("preset-item-selected");
        $("#royal").removeClass("preset-item-selected");
        $("#forest").removeClass("preset-item-selected");
        $("#lilac").removeClass("preset-item-selected");
        $("#chestnut").removeClass("preset-item-selected");

        document.getElementById("background-color").value = "#000000";
        document.getElementById("element-color").value = "#38fe28";

        document.getElementById("preview-pane").className = "animation-transition vertical-center col col-md-6 col-lg-7 pad-preview preview-pane";
        document.getElementById("preview-pane").style.backgroundColor = "#000000";
        document.getElementById("element").style.backgroundColor = "#38fe28";

        selectedTheme = "contrast";
    }
    else if (themeValue == "sand") {

        $("#light").removeClass("preset-item-selected");
        $("#dark").removeClass("preset-item-selected");
        $("#aqua").removeClass("preset-item-selected");
        $("#ruby").removeClass("preset-item-selected");
        $("#custom").removeClass("preset-item-selected");
        $("#contrast").removeClass("preset-item-selected");

        $("#sunshine").removeClass("preset-item-selected");
        $("#sand").addClass("preset-item-selected");
        $("#royal").removeClass("preset-item-selected");
        $("#forest").removeClass("preset-item-selected");
        $("#lilac").removeClass("preset-item-selected");
        $("#chestnut").removeClass("preset-item-selected");

        document.getElementById("preview-pane").className = "animation-transition vertical-center col col-md-6 col-lg-7 pad-preview preview-pane";
        document.getElementById("background-color").value = "#c7b198";
        document.getElementById("element-color").value = "#f7f4e3";

        document.getElementById("preview-pane").style.backgroundColor = "#c7b198";
        document.getElementById("element").style.backgroundColor = "#f7f4e3";

        selectedTheme = "sand";
    }
    else if (themeValue == "sunshine") {

        $("#light").removeClass("preset-item-selected");
        $("#dark").removeClass("preset-item-selected");
        $("#aqua").removeClass("preset-item-selected");
        $("#ruby").removeClass("preset-item-selected");
        $("#custom").removeClass("preset-item-selected");
        $("#contrast").removeClass("preset-item-selected");

        $("#sunshine").addClass("preset-item-selected");
        $("#sand").removeClass("preset-item-selected");
        $("#royal").removeClass("preset-item-selected");
        $("#forest").removeClass("preset-item-selected");
        $("#lilac").removeClass("preset-item-selected");
        $("#chestnut").removeClass("preset-item-selected");

        document.getElementById("preview-pane").className = "animation-transition vertical-center col col-md-6 col-lg-7 pad-preview preview-pane";
        document.getElementById("background-color").value = "#5DADE2";
        document.getElementById("element-color").value = "#F9E79F";

        document.getElementById("preview-pane").style.backgroundColor = "#5DADE2";
        document.getElementById("element").style.backgroundColor = "#F9E79F";

        selectedTheme = "sunshine";
    }
    else if (themeValue == "royal") {

        $("#light").removeClass("preset-item-selected");
        $("#dark").removeClass("preset-item-selected");
        $("#aqua").removeClass("preset-item-selected");
        $("#ruby").removeClass("preset-item-selected");
        $("#custom").removeClass("preset-item-selected");
        $("#contrast").removeClass("preset-item-selected");

        $("#sunshine").removeClass("preset-item-selected");
        $("#sand").removeClass("preset-item-selected");
        $("#royal").addClass("preset-item-selected");
        $("#forest").removeClass("preset-item-selected");
        $("#lilac").removeClass("preset-item-selected");
        $("#chestnut").removeClass("preset-item-selected");

        document.getElementById("preview-pane").className = "animation-transition vertical-center col col-md-6 col-lg-7 pad-preview preview-pane";
        document.getElementById("background-color").value = "#aba9e9";
        document.getElementById("element-color").value = "#5e227f";

        document.getElementById("preview-pane").style.backgroundColor = "#aba9e9";
        document.getElementById("element").style.backgroundColor = "#5e227f";

        selectedTheme = "royal";
    }
    else if (themeValue == "forest") {

        $("#light").removeClass("preset-item-selected");
        $("#dark").removeClass("preset-item-selected");
        $("#aqua").removeClass("preset-item-selected");
        $("#ruby").removeClass("preset-item-selected");
        $("#custom").removeClass("preset-item-selected");
        $("#contrast").removeClass("preset-item-selected");

        $("#sunshine").removeClass("preset-item-selected");
        $("#sand").removeClass("preset-item-selected");
        $("#royal").removeClass("preset-item-selected");
        $("#forest").addClass("preset-item-selected");
        $("#lilac").removeClass("preset-item-selected");
        $("#chestnut").removeClass("preset-item-selected");

        document.getElementById("preview-pane").className = "animation-transition vertical-center col col-md-6 col-lg-7 pad-preview preview-pane";
        document.getElementById("background-color").value = "#74b49b";
        document.getElementById("element-color").value = "#587850";

        document.getElementById("preview-pane").style.backgroundColor = "#74b49b";
        document.getElementById("element").style.backgroundColor = "#587850";

        selectedTheme = "forest";
    }
    else if (themeValue == "lilac") {

        $("#light").removeClass("preset-item-selected");
        $("#dark").removeClass("preset-item-selected");
        $("#aqua").removeClass("preset-item-selected");
        $("#ruby").removeClass("preset-item-selected");
        $("#custom").removeClass("preset-item-selected");
        $("#contrast").removeClass("preset-item-selected");

        $("#sunshine").removeClass("preset-item-selected");
        $("#sand").removeClass("preset-item-selected");
        $("#royal").removeClass("preset-item-selected");
        $("#forest").removeClass("preset-item-selected");
        $("#lilac").addClass("preset-item-selected");
        $("#chestnut").removeClass("preset-item-selected");

        document.getElementById("preview-pane").className = "animation-transition vertical-center col col-md-6 col-lg-7 pad-preview preview-pane";
        document.getElementById("background-color").value = "#b8ffd0";
        document.getElementById("element-color").value = "#dfbaf7";

        document.getElementById("preview-pane").style.backgroundColor = "#b8ffd0";
        document.getElementById("element").style.backgroundColor = "#dfbaf7";

        selectedTheme = "lilac";
    }
    else if (themeValue == "chestnut") {

        $("#light").removeClass("preset-item-selected");
        $("#dark").removeClass("preset-item-selected");
        $("#aqua").removeClass("preset-item-selected");
        $("#ruby").removeClass("preset-item-selected");
        $("#custom").removeClass("preset-item-selected");
        $("#contrast").removeClass("preset-item-selected");

        $("#sunshine").removeClass("preset-item-selected");
        $("#sand").removeClass("preset-item-selected");
        $("#royal").removeClass("preset-item-selected");
        $("#forest").removeClass("preset-item-selected");
        $("#lilac").removeClass("preset-item-selected");
        $("#chestnut").addClass("preset-item-selected");

        document.getElementById("preview-pane").className = "animation-transition vertical-center col col-md-6 col-lg-7 pad-preview preview-pane";
        document.getElementById("background-color").value = "#B29D84";
        document.getElementById("element-color").value = "#7b3c3c";

        document.getElementById("preview-pane").style.backgroundColor = "#B29D84";
        document.getElementById("element").style.backgroundColor = "#7b3c3c";

        selectedTheme = "chestnut";
    }
}

function easing(easingValue) {
    if (easingValue == "easeInOutQuad") {
        document.getElementById("easingOutput").innerHTML = "<span class = \"animated fadeIn\">STANDARD<\/span>";
        $("#standard").addClass("preset-item-selected");
        $("#linear").removeClass("preset-item-selected");
        $("#cubic").removeClass("preset-item-selected");
        $("#sine").removeClass("preset-item-selected");
        $("#circ").removeClass("preset-item-selected");
        $("#back").removeClass("preset-item-selected");

        selectedEasing = "easeInOutQuad";
    }
    else if (easingValue == "linear") {
        document.getElementById("easingOutput").innerHTML = "<span class = \"animated fadeIn\">NONE<\/span>";
        $("#standard").removeClass("preset-item-selected");
        $("#linear").addClass("preset-item-selected");
        $("#cubic").removeClass("preset-item-selected");
        $("#sine").removeClass("preset-item-selected");
        $("#circ").removeClass("preset-item-selected");
        $("#back").removeClass("preset-item-selected");

        selectedEasing = "linear";
    }
    else if (easingValue == "easeInOutQuart") {
        document.getElementById("easingOutput").innerHTML = "<span class = \"animated fadeIn\">STRETCH<\/span>";
        $("#standard").removeClass("preset-item-selected");
        $("#linear").removeClass("preset-item-selected");
        $("#cubic").addClass("preset-item-selected");
        $("#sine").removeClass("preset-item-selected");
        $("#circ").removeClass("preset-item-selected");
        $("#back").removeClass("preset-item-selected");

        selectedEasing = "easeInOutQuart";
    }
    else if (easingValue == "easeInOutQuint") {
        document.getElementById("easingOutput").innerHTML = "<span class = \"animated fadeIn\">QUICK<\/span>";
        $("#standard").removeClass("preset-item-selected");
        $("#linear").removeClass("preset-item-selected");
        $("#cubic").removeClass("preset-item-selected");
        $("#sine").addClass("preset-item-selected");
        $("#circ").removeClass("preset-item-selected");
        $("#back").removeClass("preset-item-selected");

        selectedEasing = "easeInOutQuint";
    }
    else if (easingValue == "easeInOutCubic") {
        document.getElementById("easingOutput").innerHTML = "<span class = \"animated fadeIn\">SMOOTH<\/span>";
        $("#standard").removeClass("preset-item-selected");
        $("#linear").removeClass("preset-item-selected");
        $("#cubic").removeClass("preset-item-selected");
        $("#sine").removeClass("preset-item-selected");
        $("#circ").addClass("preset-item-selected");
        $("#back").removeClass("preset-item-selected");

        selectedEasing = "easeInOutCubic";
    }

    updatePreview();
}

function speed(speedValue) {

    if (speedValue == "3") {
        document.getElementById("speedRange").value = "3";
        speedOutput.innerHTML = "<span class = 'animated fadeIn'>3</span>";

        $("#speed-slow").addClass("preset-item-selected");
        $("#speed-medium").removeClass("preset-item-selected");
        $("#speed-fast").removeClass("preset-item-selected");

        emdrSpeed = "3";
    }
    else if (speedValue == "5") {
        document.getElementById("speedRange").value = "5";
        speedOutput.innerHTML = "<span class = 'animated fadeIn'>5</span>";

        $("#speed-slow").removeClass("preset-item-selected");
        $("#speed-medium").addClass("preset-item-selected");
        $("#speed-fast").removeClass("preset-item-selected");

        emdrSpeed = "5";
    }
    else if (speedValue == "7") {
        document.getElementById("speedRange").value = "7";
        speedOutput.innerHTML = "<span class = 'animated fadeIn'>7</span>";

        $("#speed-slow").removeClass("preset-item-selected");
        $("#speed-medium").removeClass("preset-item-selected");
        $("#speed-fast").addClass("preset-item-selected");

        emdrSpeed = "7";
    }

    updatePreview();
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
    else if (setting == "enterInstructions") {
        $("#instructions-icon").removeClass("white");
        $("#instructions-icon").addClass("highlight-color-blue");
    }
    else if (setting == "exitInstructions") {
        $("#instructions-icon").addClass("white");
        $("#instructions-icon").removeClass("highlight-color-blue");
    }
    else if (setting == "enterAnalyze") {
        $("#analyze-icon").removeClass("white");
        $("#analyze-icon").addClass("highlight-color-blue");
    }
    else if (setting == "exitAnalyze") {
        $("#analyze-icon").addClass("white");
        $("#analyze-icon").removeClass("highlight-color-blue");
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
    else if (informationType == "mood") {
        swal({
            title: "Mood tracking",
            text: "This setting allows you to track your mood throughout the duration of the therapy to see how it changes. Enter a starting value between 1 and 10, and fill in how you are feeling when prompted during the therapy.",
            icon: "info"
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
            text: "During EMDR, a SUDS scale can help track changing perceptions over the duration of the therapy. Hold the thought or experience that you find bothersome in your mind, and assign a number 1 - 10 of how much this troubles you. Fill in how this changes when prompted during the therapy.",
            icon: "info"
        });
    }
    else if (informationType == "vac") {
        swal({
            title: "Validity of cognition scale",
            text: "The validity of cognition scale allows us to assess how true you think a belief is over the duration of the therapy. Pick a belief and enter a value 1 - 7 of how true you think that belief is (1 is not true at all, 7 is completely true). Fill in how this number changes when prompted during the therapy. ",
            icon: "info"
        });
    }
    else if (informationType == "client") {
        swal({
            title: "Setting a client name",
            text: "This setting is useful if you want to track therapy results for several different people. For example, a therapist could track results for specific clients by entering their name here. This will allow you to better track results during analysis after the therapy.",
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
        $("#piano1").removeClass("preset-item-selected");

        $("#piano2").removeClass("preset-item-selected");
        $("#orchestra1").removeClass("preset-item-selected");
        $("#orchestra2").removeClass("preset-item-selected");
        $("#nighttime").removeClass("preset-item-selected");
        $("#wind").removeClass("preset-item-selected");
        $("#heartbeat").removeClass("preset-item-selected");

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
        $("#piano1").removeClass("preset-item-selected");

        $("#piano2").removeClass("preset-item-selected");
        $("#orchestra1").removeClass("preset-item-selected");
        $("#orchestra2").removeClass("preset-item-selected");
        $("#nighttime").removeClass("preset-item-selected");
        $("#wind").removeClass("preset-item-selected");
        $("#heartbeat").removeClass("preset-item-selected");

        selectedBackgroundAudio = "ambient";
    }
    else if (soundType == "waves") {
        $("#none").removeClass("preset-item-selected");
        $("#ambient").removeClass("preset-item-selected");
        $("#waves").addClass("preset-item-selected");
        $("#outdoors").removeClass("preset-item-selected");
        $("#space").removeClass("preset-item-selected");
        $("#piano1").removeClass("preset-item-selected");

        $("#piano2").removeClass("preset-item-selected");
        $("#orchestra1").removeClass("preset-item-selected");
        $("#orchestra2").removeClass("preset-item-selected");
        $("#nighttime").removeClass("preset-item-selected");
        $("#wind").removeClass("preset-item-selected");
        $("#heartbeat").removeClass("preset-item-selected");

        selectedBackgroundAudio = "waves";
    }
    else if (soundType == "outdoors") {
        $("#none").removeClass("preset-item-selected");
        $("#ambient").removeClass("preset-item-selected");
        $("#waves").removeClass("preset-item-selected");
        $("#outdoors").addClass("preset-item-selected");
        $("#space").removeClass("preset-item-selected");
        $("#piano1").removeClass("preset-item-selected");

        $("#piano2").removeClass("preset-item-selected");
        $("#orchestra1").removeClass("preset-item-selected");
        $("#orchestra2").removeClass("preset-item-selected");
        $("#nighttime").removeClass("preset-item-selected");
        $("#wind").removeClass("preset-item-selected");
        $("#heartbeat").removeClass("preset-item-selected");

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
        $("#piano1").removeClass("preset-item-selected");

        $("#piano2").removeClass("preset-item-selected");
        $("#orchestra1").removeClass("preset-item-selected");
        $("#orchestra2").removeClass("preset-item-selected");
        $("#nighttime").removeClass("preset-item-selected");
        $("#wind").removeClass("preset-item-selected");
        $("#heartbeat").removeClass("preset-item-selected");

        selectedBackgroundAudio = "space";

    }
    else if (soundType == "piano1") {
        $("#none").removeClass("preset-item-selected");
        $("#ambient").removeClass("preset-item-selected");
        $("#waves").removeClass("preset-item-selected");
        $("#outdoors").removeClass("preset-item-selected");
        $("#space").removeClass("preset-item-selected");
        $("#piano1").addClass("preset-item-selected");

        $("#piano2").removeClass("preset-item-selected");
        $("#orchestra1").removeClass("preset-item-selected");
        $("#orchestra2").removeClass("preset-item-selected");
        $("#nighttime").removeClass("preset-item-selected");
        $("#wind").removeClass("preset-item-selected");
        $("#heartbeat").removeClass("preset-item-selected");


        rainAudio.pause();
        rainAudio.currentTime = 0;

        pianoAudio.play();

        selectedBackgroundAudio = "piano1";
    }
    else if (soundType == "piano2") {

        $("#none").removeClass("preset-item-selected");
        $("#ambient").removeClass("preset-item-selected");
        $("#waves").removeClass("preset-item-selected");
        $("#outdoors").removeClass("preset-item-selected");
        $("#space").removeClass("preset-item-selected");
        $("#piano1").removeClass("preset-item-selected");

        $("#piano2").addClass("preset-item-selected");
        $("#orchestra1").removeClass("preset-item-selected");
        $("#orchestra2").removeClass("preset-item-selected");
        $("#nighttime").removeClass("preset-item-selected");
        $("#wind").removeClass("preset-item-selected");
        $("#heartbeat").removeClass("preset-item-selected");

        selectedBackgroundAudio = "piano2";

    }
    else if (soundType == "orchestra1") {

        $("#none").removeClass("preset-item-selected");
        $("#ambient").removeClass("preset-item-selected");
        $("#waves").removeClass("preset-item-selected");
        $("#outdoors").removeClass("preset-item-selected");
        $("#space").removeClass("preset-item-selected");
        $("#piano1").removeClass("preset-item-selected");

        $("#piano2").removeClass("preset-item-selected");
        $("#orchestra1").addClass("preset-item-selected");
        $("#orchestra2").removeClass("preset-item-selected");
        $("#nighttime").removeClass("preset-item-selected");
        $("#wind").removeClass("preset-item-selected");
        $("#heartbeat").removeClass("preset-item-selected");

        selectedBackgroundAudio = "orchestra1";

    }
    else if (soundType == "orchestra2") {

        $("#none").removeClass("preset-item-selected");
        $("#ambient").removeClass("preset-item-selected");
        $("#waves").removeClass("preset-item-selected");
        $("#outdoors").removeClass("preset-item-selected");
        $("#space").removeClass("preset-item-selected");
        $("#piano1").removeClass("preset-item-selected");

        $("#piano2").removeClass("preset-item-selected");
        $("#orchestra1").removeClass("preset-item-selected");
        $("#orchestra2").addClass("preset-item-selected");
        $("#nighttime").removeClass("preset-item-selected");
        $("#wind").removeClass("preset-item-selected");
        $("#heartbeat").removeClass("preset-item-selected");

        selectedBackgroundAudio = "orchestra2";

    }
    else if (soundType == "nighttime") {

        $("#none").removeClass("preset-item-selected");
        $("#ambient").removeClass("preset-item-selected");
        $("#waves").removeClass("preset-item-selected");
        $("#outdoors").removeClass("preset-item-selected");
        $("#space").removeClass("preset-item-selected");
        $("#piano1").removeClass("preset-item-selected");

        $("#piano2").removeClass("preset-item-selected");
        $("#orchestra1").removeClass("preset-item-selected");
        $("#orchestra2").removeClass("preset-item-selected");
        $("#nighttime").addClass("preset-item-selected");
        $("#wind").removeClass("preset-item-selected");
        $("#heartbeat").removeClass("preset-item-selected");

        selectedBackgroundAudio = "nighttime";

    }
    else if (soundType == "wind") {

        $("#none").removeClass("preset-item-selected");
        $("#ambient").removeClass("preset-item-selected");
        $("#waves").removeClass("preset-item-selected");
        $("#outdoors").removeClass("preset-item-selected");
        $("#space").removeClass("preset-item-selected");
        $("#piano1").removeClass("preset-item-selected");

        $("#piano2").removeClass("preset-item-selected");
        $("#orchestra1").removeClass("preset-item-selected");
        $("#orchestra2").removeClass("preset-item-selected");
        $("#nighttime").removeClass("preset-item-selected");
        $("#wind").addClass("preset-item-selected");
        $("#heartbeat").removeClass("preset-item-selected");

        selectedBackgroundAudio = "wind";

    }
    else if (soundType == "heartbeat") {
        $("#none").removeClass("preset-item-selected");
        $("#ambient").removeClass("preset-item-selected");
        $("#waves").removeClass("preset-item-selected");
        $("#outdoors").removeClass("preset-item-selected");
        $("#space").removeClass("preset-item-selected");
        $("#piano1").removeClass("preset-item-selected");

        $("#piano2").removeClass("preset-item-selected");
        $("#orchestra1").removeClass("preset-item-selected");
        $("#orchestra2").removeClass("preset-item-selected");
        $("#nighttime").removeClass("preset-item-selected");
        $("#wind").removeClass("preset-item-selected");
        $("#heartbeat").addClass("preset-item-selected");

        selectedBackgroundAudio = "heartbeat";

    }
}

function switchDirection(directionType) {
    //clearInterval(switchDirectionSoundPlayer);
    if (directionType == "none") {
        $("#none-direction").addClass("preset-item-selected");
        $("#ding").removeClass("preset-item-selected");
        $("#drop").removeClass("preset-item-selected");

        $("#click").removeClass("preset-item-selected");
        $("#beep").removeClass("preset-item-selected");
        $("#buzz").removeClass("preset-item-selected");

        switchDirectionSound = "none";
    }
    else if (directionType == "ding") {
        $("#none-direction").removeClass("preset-item-selected");
        $("#ding").addClass("preset-item-selected");
        $("#drop").removeClass("preset-item-selected");

        $("#click").removeClass("preset-item-selected");
        $("#beep").removeClass("preset-item-selected");
        $("#buzz").removeClass("preset-item-selected");

        switchDirectionSound = "ding";
    }
    else if (directionType == "drop") {
        $("#none-direction").removeClass("preset-item-selected");
        $("#ding").removeClass("preset-item-selected");
        $("#drop").addClass("preset-item-selected");

        $("#click").removeClass("preset-item-selected");
        $("#beep").removeClass("preset-item-selected");
        $("#buzz").removeClass("preset-item-selected");

        switchDirectionSound = "drop";
    }
    else if (directionType == "click") {

        $("#none-direction").removeClass("preset-item-selected");
        $("#ding").removeClass("preset-item-selected");
        $("#drop").removeClass("preset-item-selected");

        $("#click").addClass("preset-item-selected");
        $("#beep").removeClass("preset-item-selected");
        $("#buzz").removeClass("preset-item-selected");

        switchDirectionSound = "click";

    }
    else if (directionType == "beep") {

        $("#none-direction").removeClass("preset-item-selected");
        $("#ding").removeClass("preset-item-selected");
        $("#drop").removeClass("preset-item-selected");

        $("#click").removeClass("preset-item-selected");
        $("#beep").addClass("preset-item-selected");
        $("#buzz").removeClass("preset-item-selected");

        switchDirectionSound = "beep";

    }
    else if (directionType == "buzz") {
        $("#none-direction").removeClass("preset-item-selected");
        $("#ding").removeClass("preset-item-selected");
        $("#drop").removeClass("preset-item-selected");

        $("#click").removeClass("preset-item-selected");
        $("#beep").removeClass("preset-item-selected");
        $("#buzz").addClass("preset-item-selected");

        switchDirectionSound = "buzz";
    }

    updatePreview();
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

function mood(moodInput) {
    if (moodInput == "no") {
        $("#moodNo").addClass("preset-item-selected");
        $("#moodYes").removeClass("preset-item-selected");

        document.getElementById("moodInput").className = "hidden";

        selectedMood = "no";
    }
    else if (moodInput == "yes") {
        $("#moodNo").removeClass("preset-item-selected");
        $("#moodYes").addClass("preset-item-selected");

        document.getElementById("moodInput").className = "animated fadeIn margin-top-medium";

        selectedMood = "yes";
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

function client(clientInput) {
    if (clientInput == "no") {
        $("#clientNo").addClass("preset-item-selected");
        $("#clientYes").removeClass("preset-item-selected");

        document.getElementById("clientInput").className = "hidden";
        selectedClient = "no";

    }
    else if (clientInput == "yes") {
        $("#clientNo").removeClass("preset-item-selected");
        $("#clientYes").addClass("preset-item-selected");

        document.getElementById("clientInput").className = "animated fadeIn margin-top-medium";
        selectedClient = "yes";
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
                    firebase.database().ref('users/' + user.uid + "/emdr/savedSets").remove();
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
        document.getElementById("navigation").className = "d-sm-block animated fadeOutUp d-md-none d-lg-none navbar cl-effect-13 navbar-expand-lg navbar-therapy navbar-light fixed-top";
        sessionOptions = [];

        var userID = firebase.auth().currentUser.uid;
        var rootRef = firebase.database().ref('users');
        var newRoot = rootRef.child(userID + "/emdr").child('savedSets')
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

function hideSessionSettings() {

    sessionSettingsShown = false;

    $("#emdr-box-buttons").removeClass("transition-delay");
    $("#emdr-box-buttons").removeClass("emdr-box-buttons-active");

    setTimeout(function () { sessionExpandShow(); }, 300);
}

function helperHide() {
    var settingsHidden = "";
    settingsHidden += "<span class=\"animated fadeOut\"\">";
    settingsHidden += "                    <span class = \"emdr-hide-button-alternate\"> <ion-icon onclick=\"showSessionSettings()\" name=\"arrow-dropdown\" class=\"hide-arrow inherit\"><\/ion-icon></span>";
    settingsHidden += "                <\/span>";

    document.getElementById("settings-hidden").innerHTML = settingsHidden;

    setTimeout(function () { hideHideFade(); }, 300);
}

function showSessionSettings() {

    sessionSettingsShown = true;

    $("#emdr-box-buttons").addClass("transition-delay");
    $("#emdr-box-buttons").addClass("emdr-box-buttons-active");

    $("#top-bottom-line").removeClass("fadeIn");
    $("#top-bottom-line").addClass("fadeOut");


    helperHide();
}

function hideHideFade() {
    $("#settings-hidden").addClass("hidden");
}

function sessionExpandShow() {

    $("#settings-hidden").removeClass("hidden");
    var settingsHidden = "";
    settingsHidden += "<span id=\"alternative-arrow\" class=\"animated fadeIn\">";
    settingsHidden += "                    <span id = \"hide-dis\" class = \"emdr-hide-button-alternate\"> <ion-icon onclick=\"showSessionSettings()\" name=\"arrow-dropdown\" class=\"hide-arrow inherit\"><\/ion-icon></span>";
    settingsHidden += "                <\/span>";

    window.scrollTo(0, 0);

    if (pathing == "topbottom") {
        $("#top-bottom-line").removeClass("fadeOut");
        $("#top-bottom-line").addClass("fadeIn");
    }

    document.getElementById("settings-hidden").innerHTML = settingsHidden;
}

function loadSessionSettings() {

    document.getElementById("emdr-box").style.background = $("#background-color").val();
    //document.getElementById("emdr-element-main").style.background = "green";

    $("#emdr-box").addClass("emdr-box-active");
    $("#emdr-box-buttons").addClass("emdr-box-buttons-active");
    $("#emdr-box-buttons").addClass("transition-delay");

    setTimeout(function () { spawnTherapyMain(); }, 420);
}

function switchDirectionSoundPlay() {
    if (switchDirectionSound == "drop") {
        //console.log("Tdsadsdas I G G E R");
        popAudio.play();
    }

}

function spawnTherapyMain() {

    var seconds = 0;
    sessionLength = 0;
    sessionActive = true;

    numberOfSessions = selectedSessionCount;

    var user = firebase.auth().currentUser;

    sessionLength = selectedSessionLength;

    if (selectedSessionCount == "one") {
        numberOfSessions = "1";
    }
    else if (selectedSessionCount == "three") {
        numberOfSessions = "3";
    }
    else if (selectedSessionCount == "five") {
        numberOfSessions = "5";
    }
    else if (selectedSessionCount == "custom") {
        numberOfSessions = document.getElementById("session-count").value.toString();

        if (numberOfSessions.length < 1) {
            numberOfSessions = "3";
            sessionCount("three");
        }

    }

    if (selectedSessionLength == "thirty") {
        sessionLength = "30";
    }
    else if (selectedSessionLength == "fourtyFive") {
        sessionLength = "45";
    }
    else if (selectedSessionLength == "sixty") {
        sessionLength = "60";
    }
    else if (selectedSessionLength == "custom") {
        sessionLength = document.getElementById("session-length").value.toString();
        if (sessionLength.length < 1) {
            sessionLength = "45";
            timeCount("fourtyFive");
        }
    }

    if (selectedSessionCount == "unlimited") {
        document.getElementById("current-session-count").innerHTML = "<span class = \"inherit animated fadeIn\">Unlimited</span>";
    }
    else {
        var sessionSection = "";
        sessionSection += "Session <span id=\"your-current-session\"";
        sessionSection += "                    class=\"inherit\">1<\/span>\/<span class=\"inherit\" id=\"your-total-sessions\">5<\/span>";

        document.getElementById("current-session-count").innerHTML = sessionSection;

        document.getElementById("your-current-session").innerHTML = "<span class = \"inherit animated fadeIn\">" + yourCurrentSession + "</span>";
        document.getElementById("your-total-sessions").innerHTML = "<span class = \"inherit animated fadeIn\">" + numberOfSessions + "</span>";
    }

    if (pathing == "leftright") {
        console.log("morning");
        var spawnTherapy = "<span class = \"animated fadeIn\">";
        spawnTherapy += "<div id=\"alternate-main\" class=\"vertical-center alternate-main\">";
        spawnTherapy += "            <div id=\"emdr-element-main\" class=\"emdr-element el element-duration circle\"><\/div>";
        spawnTherapy += "        <\/div></span>";


    }
    else if (pathing == "topbottom") {
        var spawnTherapy = "<span class = \"animated fadeIn\">";
        spawnTherapy += "<div id=\"alternate-main\" class=\"alternate-main-top\">";
        spawnTherapy += "            <div id=\"emdr-element-main\" class=\"emdr-element el element-duration circle\"><\/div>";
        spawnTherapy += "        <\/div></span>";
    }

    document.getElementById("therapy-main-box").className = "animated fadeIn";
    document.getElementById("therapy-main-box").innerHTML = spawnTherapy;




    if (selectedshape == "circle") {
        document.getElementById("emdr-element-main").className = "emdr-element el element-duration circle";
    }
    else if (selectedshape == "squareRounded") {
        document.getElementById("emdr-element-main").className = "emdr-element el element-duration rounded-square";
    }
    else if (selectedshape == "square") {
        document.getElementById("emdr-element-main").className = "emdr-element el element-duration square";
    }
    else if (selectedshape == "triangle") {
        document.getElementById("emdr-element-main").className = "emdr-element el element-duration triangle";
    }

    document.getElementById("emdr-element-main").style.background = document.getElementById("element").style.backgroundColor;

    var destination;
    if (pathing == "leftright") {
        destination = document.getElementById("emdr-box").offsetWidth - 175;
        if (emdrSpeed == "1") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 3100
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 3100);
        }
        else if (emdrSpeed == "2") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 2160
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 2160);
        }
        else if (emdrSpeed == "3") {

            mainElement = anime({
                targets: '#alternate-main .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 1340
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 1340);
        }
        else if (emdrSpeed == "4") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 1000
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 1000);
        }
        else if (emdrSpeed == "5") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 750
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 750);
        }
        else if (emdrSpeed == "6") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 680
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 680);
        }
        else if (emdrSpeed == "7") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 570
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 570);
        }
        else if (emdrSpeed == "8") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 520
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 520);
        }
        else if (emdrSpeed == "9") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 400
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 400);
        }
        else if (emdrSpeed == "10") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 320
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                //console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 320);
        }
    }
    else if (pathing == "topbottom") {


        destination = document.getElementById("emdr-box").offsetHeight - 232;

        if (emdrSpeed == "1") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 3100
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 3100);
        }
        else if (emdrSpeed == "2") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 2160
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 2160);
        }
        else if (emdrSpeed == "3") {

            mainElement = anime({
                targets: '#alternate-main .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 1340
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 1340);
        }
        else if (emdrSpeed == "4") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 1000
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 1000);
        }
        else if (emdrSpeed == "5") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 750
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 750);
        }
        else if (emdrSpeed == "6") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 680
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 680);
        }
        else if (emdrSpeed == "7") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 570
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 570);
        }
        else if (emdrSpeed == "8") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 520
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 520);
        }
        else if (emdrSpeed == "9") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 400
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 400);
        }
        else if (emdrSpeed == "10") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 320
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 320);
        }
    }



    //console.log("individual session length: ");

    sessionActive = setInterval(function () {
        seconds++;
        //console.log("Seconds elapsed: " + seconds);
        if (seconds >= sessionLength) {
            yourCurrentSession++;
            startNextSession();
        }
    }, 1000);

}

function pauseSession() {

    if (paused == "no") {

        console.log("paused");

        paused = "yes";
        var pause = "";
        pause += "<span class = \"animated fadeIn\"><div class=\"emdr-box-button no-select\" onclick=\"pauseSession()\">Resume Session<\/div></span>";
        mainElement.pause;
    }
    else {
        paused = "no";
        var pause = "";
        pause += "<span class = \"animated fadeIn\"><div class=\"emdr-box-button no-select\" onclick=\"pauseSession()\">Pause Session<\/div></span>";
    }

    document.getElementById("session-pause").innerHTML = pause;
}

function loadThemeSelection() {

    if (themeExtra == "no") {
        $("#theme-extra-text").removeClass("hidden");
        themeExtra = "yes";

        var loadMoreText = "";
        loadMoreText += "<span class=\"animated fadeIn\">";
        loadMoreText += "                                        <span class=\"load-more no-select\" onclick=\"loadThemeSelection()\">Show less<\/span>";
        loadMoreText += "                                    <\/span>";

        document.getElementById("theme-load-text").innerHTML = loadMoreText;
    }
    else {
        themeExtra = "no";
        $("#theme-extra-text").addClass("hidden");

        var loadMoreText = "";
        loadMoreText += "<span class=\"animated fadeIn\">";
        loadMoreText += "                                        <span class=\"load-more no-select\" onclick=\"loadThemeSelection()\">Show more<\/span>";
        loadMoreText += "                                    <\/span>";

        document.getElementById("theme-load-text").innerHTML = loadMoreText;
    }
}

function loadBackgroundSounds() {

    if (switchBackgroundSound == "no") {

        $("#background-sound-load").removeClass("hidden");
        switchBackgroundSound = "yes";

        var loadMoreText = "";
        loadMoreText += "<span class=\"animated fadeIn\">";
        loadMoreText += "                                        <span class=\"load-more no-select\" onclick=\"loadBackgroundSounds()\">Show less<\/span>";
        loadMoreText += "                                    <\/span>";

        document.getElementById("background-sound-load-text").innerHTML = loadMoreText;

    }
    else {
        $("#background-sound-load").addClass("hidden");
        switchBackgroundSound = "no";

        var loadMoreText = "";
        loadMoreText += "<span class=\"animated fadeIn\">";
        loadMoreText += "                                        <span class=\"load-more no-select\" onclick=\"loadBackgroundSounds()\">Show less<\/span>";
        loadMoreText += "                                    <\/span>";

        document.getElementById("background-sound-load-text").innerHTML = loadMoreText;
    }

    /*
    if (switch(BackgroundSound) == "no") {
        var switchDirection = "";
        switchDirection += " <span class=\"animated fadeIn\">";
        switchDirection += "                                        <div id=\"beep\" class=\"preset-item no-select inline-block\"";
        switchDirection += "                                            onclick=\"switchDirection('beep')\">Beep<\/div>";
        switchDirection += "                                        <div id=\"whoosh\" class=\"preset-item no-select margin-left-right inline-block\"";
        switchDirection += "                                            onclick=\"switchDirection('whoosh')\">Whoosh<\/div>";
        switchDirection += "                                        <div id=\"bang\" class=\"preset-item no-select inline-block\" onclick=\"switchDirection('bang')\">Bang<\/div>";
        switchDirection += "                                    <\/span>";

        var loadMoreText = "";
        loadMoreText += "<span class=\"animated fadeIn\">";
        loadMoreText += "                                        <span class=\"load-more no-select\" onclick=\"loadBackgroundSounds()\">Show less<\/span>";
        loadMoreText += "                                    <\/span>";


        document.getElementById("background-sound-load").innerHTML = switchDirection;
        document.getElementById("background-sound-load-text").innerHTML = loadMoreText;
        switchBackgroundSound = "yes";
    }
    else {

        var loadMoreText = "";
        loadMoreText += "<span class=\"animated fadeIn\">";
        loadMoreText += "                                        <span class=\"load-more no-select\" onclick=\"loadBackgroundSounds()\">Show more<\/span>";
        loadMoreText += "                                    <\/span>";

        document.getElementById("background-sound-load").innerHTML = ""
        document.getElementById("background-sound-load-text").innerHTML = loadMoreText;

        switchBackgroundSound = "no";
    }
    */
}

function loadSwitchDirection() {

    if (switchDirectionExtra == "no") {

        $("#switch-direction-load").removeClass("hidden");
        switchDirectionExtra = "yes";

        var loadMoreText = "";
        loadMoreText += "<span class=\"animated fadeIn\">";
        loadMoreText += "                                        <span class=\"load-more no-select\" onclick=\"loadSwitchDirection()\">Show less<\/span>";
        loadMoreText += "                                    <\/span>";

        document.getElementById("switch-direction-load-text").innerHTML = loadMoreText;
        switchDirectionExtra = "yes";
    }
    else {

        $("#switch-direction-load").addClass("hidden");

        var loadMoreText = "";
        loadMoreText += "<span class=\"animated fadeIn\">";
        loadMoreText += "                                        <span class=\"load-more no-select\" onclick=\"loadSwitchDirection()\">Show more<\/span>";
        loadMoreText += "                                    <\/span>";

        document.getElementById("switch-direction-load-text").innerHTML = loadMoreText;

        switchDirectionExtra = "no";
    }
}

function startEndSession() {

    //Populate mood input if active
    if (selectedMood != "no") {
        var mood = "";
        mood += "<div class=\"highlight-color-blue\">Your mood<\/div>";
        mood += "                            <input onfocusout = \"valueCheck('therapyMood')\" id=\"mood-therapy-value\" type=\"number\" class=\"text-input\" placeholder=\"Record mood (1-10)\" \/>";

        document.getElementById("your-mood-box-therapy").innerHTML = mood;
        //document.getElementById("your-mood-box-therapy").innerHTML = mood;
    }
    else {
        //document.getElementById("your-mood-box-session").innerHTML = "";
        document.getElementById("your-mood-box-therapy").innerHTML = "";
    }

    //Populate SUDS input if active
    if (selectedSUDS != "no") {
        var suds = "";
        suds += "<div class=\"highlight-color-blue margin-top-tiny\">SUDS Score<\/div>";
        suds += "                            <input onfocusout = \"valueCheck('therapySUDS')\" id=\"suds-therapy-value\" type=\"number\" class=\"text-input\" placeholder=\"Record SUDS (1-10)\" \/>";

        document.getElementById("your-suds-box-therapy").innerHTML = suds;
    }
    else {
        // document.getElementById("your-suds-box-session").innerHTML = "";
        document.getElementById("your-suds-box-therapy").innerHTML = "";
    }

    //Populate VAC input if active
    if (selectedVAC != "no") {
        var vac = "";
        vac += "<div class=\"highlight-color-blue margin-top-tiny\">VAC Score<\/div>";
        vac += "                            <input onfocusout = \"valueCheck('therapyVAC')\" id=\"vac-therapy-value\" type=\"number\" class=\"text-input\" placeholder=\"Record VAC (1-7)\" \/>";

        //document.getElementById("your-vac-box-session").innerHTML = vac;
        document.getElementById("your-vac-box-therapy").innerHTML = vac;
    }
    else {
        //   document.getElementById("your-vac-box-session").innerHTML = "";
        document.getElementById("your-vac-box-therapy").innerHTML = "";
    }

    document.getElementById("therapy-input-description").value = "";

    //The therapy has ended 

    console.log(descriptionProgress)

    hideSessionSettings();
    helperHide();
    document.getElementById("therapy-main-box").className = "animated fadeOut";
    document.getElementById("your-current-session").innerHTML = "<span class = \"inherit animated fadeIn\">" + yourCurrentSession + "</span>";
    // $('#therapyOver').modal('toggle');

    $('#therapyOver').modal({
        backdrop: 'static',
        keyboard: false  // to prevent closing with Esc button (if you want this too)
    })

    stopCounting();
}

function startNextSession() {



    //Populate mood input if active
    if (selectedMood != "no") {
        var mood = "";
        mood += "<div class=\"highlight-color-blue\">Your mood<\/div>";
        mood += "                            <input onfocusout=\"valueCheck('sessionMood')\" id=\"mood-session-value\" type=\"number\" class=\"text-input\" placeholder=\"Record mood (1-10)\" \/>";

        document.getElementById("your-mood-box-session").innerHTML = mood;
        document.getElementById("your-mood-box-therapy").innerHTML = mood;
    }
    else {
        document.getElementById("your-mood-box-session").innerHTML = "";
        document.getElementById("your-mood-box-therapy").innerHTML = "";
    }

    //Populate SUDS input if active
    if (selectedSUDS != "no") {
        var suds = "";
        suds += "<div class=\"highlight-color-blue margin-top-tiny\">SUDS Score<\/div>";
        suds += "                            <input onfocusout=\"valueCheck('sessionSUDS')\" id=\"suds-session-value\" type=\"number\" class=\"text-input\" placeholder=\"Record SUDS (1-10)\" \/>";

        document.getElementById("your-suds-box-session").innerHTML = suds;
        document.getElementById("your-suds-box-therapy").innerHTML = suds;
    }
    else {
        document.getElementById("your-suds-box-session").innerHTML = "";
        document.getElementById("your-suds-box-therapy").innerHTML = "";
    }

    //Populate VAC input if active
    if (selectedVAC != "no") {
        var vac = "";
        vac += "<div class=\"highlight-color-blue margin-top-tiny\">VAC Score<\/div>";
        vac += "                            <input onfocusout=\"valueCheck('sessionVAC')\" id=\"vac-session-value\" type=\"number\" class=\"text-input\" placeholder=\"Record VAC (1-7)\" \/>";

        document.getElementById("your-vac-box-session").innerHTML = vac;
        document.getElementById("your-vac-box-therapy").innerHTML = vac;
    }
    else {
        document.getElementById("your-vac-box-session").innerHTML = "";
        document.getElementById("your-vac-box-therapy").innerHTML = "";
    }

    if (parseInt(yourCurrentSession) > parseInt(numberOfSessions)) {
        //The therapy has ended 

        startEndSession();

        hideSessionSettings();

        helperHide();
        document.getElementById("therapy-main-box").className = "animated fadeOut";
        document.getElementById("your-current-session").innerHTML = "<span class = \"inherit animated fadeIn\">" + yourCurrentSession + "</span>";
        // $('#therapyOver').modal('toggle');

        $('#therapyOver').modal({
            backdrop: 'static',
            keyboard: false  // to prevent closing with Esc button (if you want this too)
        })

    }
    else {
        if (sessionSettingsShown) {
            hideSessionSettings();
            sessionSettingsShown = true;
        }
        else {
            hideSessionSettings();
        }

        helperHide();
        document.getElementById("therapy-main-box").className = "animated fadeOut";
        document.getElementById("your-current-session").innerHTML = "<span class = \"inherit animated fadeIn\">" + yourCurrentSession + "</span>";
        //$('#nextSession').modal('toggle');
        $('#nextSession').modal({
            backdrop: 'static',
            keyboard: false  // to prevent closing with Esc button (if you want this too)
        })
    }

    stopCounting();
}

function valueCheck(valueCheck) {
    if (valueCheck == "mood") {
        if (document.getElementById("mood-initial").value > 10) {
            document.getElementById("mood-initial").value = 10;
        }

        if (document.getElementById("mood-initial").value < 1) {
            document.getElementById("mood-initial").value = 1;
        }
    }
    else if (valueCheck == "suds") {
        if (document.getElementById("suds-initial").value > 10) {
            document.getElementById("suds-initial").value = 10;
        }

        if (document.getElementById("suds-initial").value < 1) {
            document.getElementById("suds-initial").value = 1;
        }
    }
    else if (valueCheck == "vac") {
        if (document.getElementById("vac-initial").value > 7) {
            document.getElementById("vac-initial").value = 7;
        }

        if (document.getElementById("vac-initial").value < 1) {
            document.getElementById("vac-initial").value = 1;
        }
    }
    else if (valueCheck == "sessionMood") {
        if (document.getElementById("mood-session-value").value > 10) {
            document.getElementById("mood-session-value").value = 10;
        }

        if (document.getElementById("mood-session-value").value < 1) {
            document.getElementById("mood-session-value").value = 1;
        }
    }
    else if (valueCheck == "sessionSUDS") {
        if (document.getElementById("suds-session-value").value > 10) {
            document.getElementById("suds-session-value").value = 10;
        }

        if (document.getElementById("suds-session-value").value < 1) {
            document.getElementById("suds-session-value").value = 1;
        }
    }
    else if (valueCheck == "sessionVAC") {
        if (document.getElementById("vac-session-value").value > 7) {
            document.getElementById("vac-session-value").value = 7;
        }

        if (document.getElementById("vac-session-value").value < 1) {
            document.getElementById("vac-session-value").value = 1;
        }
    }
    else if (valueCheck == "therapyMood") {
        if (document.getElementById("mood-therapy-value").value > 10) {
            document.getElementById("mood-therapy-value").value = 10;
        }

        if (document.getElementById("mood-therapy-value").value < 1) {
            document.getElementById("mood-therapy-value").value = 1;
        }
    }
    else if (valueCheck == "therapySUDS") {
        if (document.getElementById("suds-therapy-value").value > 10) {
            document.getElementById("suds-therapy-value").value = 10;
        }

        if (document.getElementById("suds-therapy-value").value < 1) {
            document.getElementById("suds-therapy-value").value = 1;
        }
    }
    else if (valueCheck == "therapyVAC") {
        if (document.getElementById("vac-therapy-value").value > 7) {
            document.getElementById("vac-therapy-value").value = 7;
        }

        if (document.getElementById("vac-therapy-value").value < 1) {
            document.getElementById("vac-therapy-value").value = 1;
        }
    }
}

function saveTherapyResults(type) {

    if (document.getElementById("therapyCheck").checked) {

        if (selectedMood != "no") {
            var moodSave = document.getElementById("mood-therapy-value").value;
            if (moodSave.length > 0) {
                moodProgress.push(moodSave);
                console.log("mood progress: " + moodProgress);
            }
            else {
                moodProgress.push("empty");
            }
        }

        if (selectedSUDS != "no") {
            var sudsSave = document.getElementById("suds-therapy-value").value;
            if (sudsSave.length > 0) {
                sudsProgress.push(sudsSave);
                console.log("suds progress: " + sudsProgress);
            }
            else {
                sudsProgress.push("empty");
            }
        }

        if (selectedVAC != "no") {
            var vacSave = document.getElementById("vac-therapy-value").value;
            if (vacSave.length > 0) {
                vacProgress.push(vacSave);
                console.log("suds progress: " + vacProgress);
            }
            else {
                vacProgress.push("empty");
            }
        }

        var descriptionSave = document.getElementById("therapy-input-description").value;
        if (descriptionSave.length > 0) {
            descriptionProgress.push(descriptionSave);
        }
        else {
            descriptionProgress.push("empty");
        }

        var d = new Date();
        var user = firebase.auth().currentUser;
        var date = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
        var setUsed = document.getElementById("active-set").innerText;
        var clientName = "None";


        clientName = document.getElementById("client-initial").value;


        firebase.database().ref('users/' + user.uid + "/emdr" + "/therapyResults" + "/" + d.getTime()).set({
            setUsed: setUsed,
            setDate: date,
            setMoodResults: moodProgress,
            setSudsProgress: sudsProgress,
            setVacProgress: vacProgress,
            setDescriptionProgress: descriptionProgress,
            clientUsed: clientName
        });
    }
    if (type == "end") {
        endSessionComplete();
    }
    else if (type == "analyze") {
        analyzeSession();
    }


}

function nextSession() {

    if (selectedMood != "no") {
        var moodSave = document.getElementById("mood-session-value").value;
        if (moodSave.length > 0) {
            moodProgress.push(moodSave);
        }
        else {
            moodProgress.push("empty");
        }
        console.log("mood progress: " + moodProgress);
    }

    if (selectedSUDS != "no") {
        var sudsSave = document.getElementById("suds-session-value").value;
        if (sudsSave.length > 0) {
            sudsProgress.push(sudsSave);
        }
        else {
            sudsProgress.push("empty");
        }
        console.log("suds progress: " + sudsProgress);
    }

    if (selectedVAC != "no") {
        var vacSave = document.getElementById("vac-session-value").value;
        if (vacSave.length > 0) {
            vacProgress.push(vacSave);
        }
        else {
            vacProgress.push("empty");
        }
        console.log("vac progress: " + vacProgress);
    }

    var descriptionSave = document.getElementById("next-set-description").value;
    if (descriptionSave.length > 0) {
        descriptionProgress.push(descriptionSave);
    }
    else {
        descriptionProgress.push("empty");
    }

    document.getElementById("next-set-description").value = "";

    if (sessionSettingsShown) {
        showSessionSettings();
    }
    else {
        hideSessionSettings();
    }
    $('#nextSession').modal('hide');

    transferSettings();

    sessionActive = setInterval(function () {
        seconds++;
        console.log("Seconds elapsed: " + seconds);
        if (seconds >= sessionLength) {
            yourCurrentSession++;
            if (parseInt(yourCurrentSession) > parseInt(numberOfSessions)) {

                startEndSession();
            }
            else {
                startNextSession();
            }
        }
    }, 1000);

}

function transferSettings() {
    if (pathing == "leftright") {
        var spawnTherapy = "<span class = \"animated fadeIn\">";
        spawnTherapy += "<div id=\"alternate-main\" class=\"vertical-center alternate-main\">";
        spawnTherapy += "            <div id=\"emdr-element-main\" class=\"emdr-element el element-duration circle\"><\/div>";
        spawnTherapy += "        <\/div></span>";
    }
    else if (pathing == "topbottom") {
        var spawnTherapy = "<span class = \"animated fadeIn\">";
        spawnTherapy += "<div id=\"alternate-main\" class=\"alternate-main-top\">";
        spawnTherapy += "            <div id=\"emdr-element-main\" class=\"emdr-element el element-duration circle\"><\/div>";
        spawnTherapy += "        <\/div></span>";
    }

    document.getElementById("therapy-main-box").className = "animated fadeIn";
    document.getElementById("therapy-main-box").innerHTML = spawnTherapy;




    if (selectedshape == "circle") {
        document.getElementById("emdr-element-main").className = "emdr-element el element-duration circle";
    }
    else if (selectedshape == "squareRounded") {
        document.getElementById("emdr-element-main").className = "emdr-element el element-duration rounded-square";
    }
    else if (selectedshape == "square") {
        document.getElementById("emdr-element-main").className = "emdr-element el element-duration square";
    }
    else if (selectedshape == "triangle") {
        document.getElementById("emdr-element-main").className = "emdr-element el element-duration triangle";
    }

    document.getElementById("emdr-element-main").style.background = document.getElementById("element").style.backgroundColor;



    console.log(pathing);

    var destination;
    if (pathing == "leftright") {
        destination = document.getElementById("emdr-box").offsetWidth - 155;
        if (emdrSpeed == "1") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 3100
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 3100);
        }
        else if (emdrSpeed == "2") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 2160
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 2160);
        }
        else if (emdrSpeed == "3") {

            mainElement = anime({
                targets: '#alternate-main .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 1340
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 1340);
        }
        else if (emdrSpeed == "4") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 1000
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 1000);
        }
        else if (emdrSpeed == "5") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 750
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 750);
        }
        else if (emdrSpeed == "6") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 680
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 680);
        }
        else if (emdrSpeed == "7") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 570
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 570);
        }
        else if (emdrSpeed == "8") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 520
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 520);
        }
        else if (emdrSpeed == "9") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 400
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 400);
        }
        else if (emdrSpeed == "10") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateX: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 320
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                //console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 320);
        }
    }
    else if (pathing == "topbottom") {

        destination = document.getElementById("emdr-box").offsetHeight - 232;

        if (emdrSpeed == "1") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 3100
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 3100);
        }
        else if (emdrSpeed == "2") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 2160
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 2160);
        }
        else if (emdrSpeed == "3") {

            mainElement = anime({
                targets: '#alternate-main .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 1340
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 1340);
        }
        else if (emdrSpeed == "4") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 1000
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 1000);
        }
        else if (emdrSpeed == "5") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 750
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 750);
        }
        else if (emdrSpeed == "6") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 680
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 680);
        }
        else if (emdrSpeed == "7") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 570
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                switchDirectionSoundPlay();
            }, 570);
        }
        else if (emdrSpeed == "8") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 520
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 520);
        }
        else if (emdrSpeed == "9") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 400
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 400);
        }
        else if (emdrSpeed == "10") {
            mainElement = anime({
                targets: '#alternate-main .el',
                translateY: destination,
                direction: 'alternate',
                loop: true,
                easing: selectedEasing,
                duration: 320
            });

            switchDirectionSoundPlayer = window.setInterval(function () {
                console.log(switchDirectionSound);
                switchDirectionSoundPlay();
            }, 320);
        }
    }



}


function analyzeSession() {
    $("#results-box").addClass("emdr-box-active");
    endSessionComplete();
    $('#therapyOver').modal('hide');
    setTimeout(function () { hideMobileNav(); }, 320);
}

function loadInstructions() {
    $("#instructions-box").addClass("emdr-box-active");
    setTimeout(function () { hideMobileNav(); }, 320);
}

function closeAnalyze() {
    $("#results-box").removeClass("emdr-box-active");
    $("#results-box").animate({ scrollTop: 0 }, "fast");

    showMobileNav();
}

function closeInstructions() {
    $("#instructions-box").removeClass("emdr-box-active");
    $("#instructions-box").animate({ scrollTop: 0 }, "fast");

    showMobileNav();
}

function startSession() {
    $("#emdr-box").addClass("emdr-box-active");
    $("#emdr-box-buttons").addClass("emdr-box-buttons-active");
    $("#emdr-box-buttons").addClass("transition-delay");

    clearInterval(switchDirectionSoundPlayer);

    if (selectedMood != "no") {
        var moodSave = document.getElementById("mood-initial").value;
        if (moodSave.length > 0) {
            moodProgress.push(moodSave);
            console.log("mood progress: " + moodProgress);
        }
        else {
            moodProgress.push("empty");
        }
    }

    if (selectedSUDS != "no") {
        var sudsSave = document.getElementById("suds-initial").value;
        if (sudsSave.length > 0) {
            sudsProgress.push(sudsSave);
            console.log("suds progress: " + sudsProgress);
        }
        else {
            sudsProgress.push("empty");
        }
    }

    if (selectedVAC != "no") {
        var vacSave = document.getElementById("vac-initial").value;
        if (vacSave.length > 0) {
            vacProgress.push(vacSave);
            console.log("suds progress: " + vacProgress);
        }
        else {
            vacProgress.push("empty");
        }
    }

    setTimeout(function () { hideMobileNav(); }, 320);

    loadSessionSettings();
}

function hideMobileNav() {
    $("#mobile-nav").addClass("hidden");
}

function showMobileNav() {
    $("#mobile-nav").addClass("mobile-nav").removeClass("hidden");
}

function endSessionComplete() {
    //sessionCount = 0;
    var settingsHidden = "";
    settingsHidden += "<span class=\"animated fadeOut faster-animation\"\">";
    settingsHidden += "                    <span class = \"emdr-hide-button-alternate\"> <ion-icon onclick=\"showSessionSettings()\" name=\"arrow-dropdown\" class=\"hide-arrow inherit\"><\/ion-icon></span>";
    settingsHidden += "                <\/span>";

    document.getElementById("settings-hidden").innerHTML = settingsHidden;
    //document.getElementById("session-end-box").className = "therapy-over-box vertical-center-box animated fadeOutDown col col-lg-10 col-md-11 col-10";
    //document.getElementById("therapy-over-box").className = "therapy-over-box vertical-center-box animated fadeOutDown hidden col col-lg-10 col-md-11 col-10";


    endSession();
}

function endSession() {

    updatePreview();

    if (switchDirectionSound) {

    }

    clearInterval(switchDirectionSoundPlayer);
    yourCurrentSession = 1;

    //Reset tracking progress 
    moodProgress = [];
    sudsProgress = [];
    vacProgress = [];
    descriptionProgress = [];
    sessionSettingsShown = true;

    if (pathing == "topbottom") {
        $("#top-bottom-line").removeClass("fadeIn");
        $("#top-bottom-line").addClass("fadeOut");
    }

    $("#emdr-box").removeClass("emdr-box-active");
    $("#emdr-box-buttons").removeClass("emdr-box-buttons-active");
    $("#emdr-box-buttons").removeClass("transition-delay");
    $("#mobile-nav").removeClass("hidden");

    clearInterval(switchDirectionSoundPlayer);

    setTimeout(function () { hideEmdrElement(); }, 320);


}

function hideEmdrElement() {
    stopCounting();
    document.getElementById("therapy-main-box").innerHTML = "";
}

function stopCounting() {
    clearInterval(sessionActive);
    seconds = 0;
    sessionActive = false;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function rgb2hex(rgb) {
    if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;

    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function loadSet(set) {
    activeSet = set;
    closeSettingsPanel();

    var database = firebase.database();
    var user = firebase.auth().currentUser;
    var desc = firebase.database().ref('users/' + user.uid + "/emdr/" + "savedSets/" + activeSet);

    var desc = firebase.database().ref('users/' + user.uid + "/emdr/savedSets/" + activeSet);
    desc.once('value', function (snapshot) {
        activeSetText = snapshot.val().setName;
    });

    document.getElementById("active-set").innerHTML = "<span class = 'animated fadeIn'>" + activeSetText + "</span>";


    desc.once('value', function (snapshot) {

        //Load EMDR settings 
        document.getElementById("speedRange").value = snapshot.val().emdrSpeed;
        emdrSpeed = snapshot.val().emdrSpeed;

        easing(snapshot.val().easing);

        if (emdrSpeed == "3" || emdrSpeed == "5" || emdrSpeed == "7") {

            if (emdrSpeed == "3") {
                speed("3");
            }
            else if (emdrSpeed == "5") {
                speed("5");
            }
            else if (emdrSpeed == "7") {
                speed("7");
            }
        }
        else {
            $("#speed-slow").removeClass("preset-item-selected");
            $("#speed-medium").removeClass("preset-item-selected");
            $("#speed-fast").removeClass("preset-item-selected");

            emdrSpeed = document.getElementById("speedRange").value;
        }

        document.getElementById("speedOutput").innerHTML = snapshot.val().emdrSpeed;
        shapeCategorySelect(snapshot.val().emdrShape);

        if (snapshot.val().elementThemeName == "custom") {

            document.getElementById("preview-pane").className = "animation-transition vertical-center col col-md-6 col-lg-7 pad-preview preview-pane";


            document.getElementById("background-color").value = rgb2hex(snapshot.val().backgroundColorTheme);
            document.getElementById("element-color").value = rgb2hex(snapshot.val().elementColorTheme);

            document.getElementById("preview-pane").style.backgroundColor = rgb2hex(snapshot.val().backgroundColorTheme);
            document.getElementById("element").style.backgroundColor = rgb2hex(snapshot.val().elementColorTheme);

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

        if (snapshot.val().mood != "no") {
            mood("yes");
            document.getElementById("mood-initial").value = snapshot.val().mood;
        }
        else {
            mood("no");
        }

        if (snapshot.val().client != "no") {
            client("yes");
            document.getElementById("client-initial").value = snapshot.val().client;
        }
        else {
            client("no");
        }

        var description = snapshot.val().setDescription;
        var setDescription = snapshot.val().setDescriptionID;
    });

    updatePreview();
}

function deleteSet(id, setName) {
    var deleteText = "";
    var user = firebase.auth().currentUser;
    var desc = firebase.database().ref('users/' + user.uid + "/emdr/savedSets" + setName);
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
                    firebase.database().ref('users/' + user.uid + "/emdr/savedSets" + "/" + setName).remove();
                    swal("SUCCESS!", "Your set has been deleted.", "success");
                    document.getElementById(id).remove();

                    var therapyValue = document.getElementById("therapy-setting-boxes").innerHTML;

                    if (therapyValue == "") {
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
    //console.log(user);
    //console.log(selectedSessionCount);

    var desc = firebase.database().ref('users/' + user.uid + "/emdr/savedSets/" + activeSet);
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

    if (selectedMood == "yes") {
        selectedMood = document.getElementById("mood-initial").value;
    }

    if (selectedClient == "yes") {
        selectedClient = document.getElementById("client-initial").value;
    }

    var str = updatedSet.replace(/\s+/g, '');
    var id = "descriptiontherapy-setting-box" + str;

    const userReference = firebase.database().ref(`firebaseUser/${user.uid}`);
    var speedValue = document.getElementById("speedRange").value;

    const backgroundTheme = document.getElementById("background-color").value;
    const elementTheme = document.getElementById("element-color").value;

    firebase.database().ref('users/' + user.uid + "/emdr/savedSets/" + updatedSet).update({
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
        VAC: selectedVAC,
        mood: selectedMood,
        client: selectedClient
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

    if (selectedMood != "no") {
        selectedMood = "yes";
    }

    if (selectedClient != "no") {
        selectedClient = "yes";
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

    //console.log("ACTIVE SET: " + activeSet);
    if (activeSet != "none") {
        var desc = firebase.database().ref('users/' + user.uid + "/emdr/savedSets/" + activeSet);
        desc.once('value', function (snapshot) {
            activeSetText = snapshot.val().setName;
        });

        document.getElementById("active-set").innerHTML = "<span class = 'animated fadeIn'>" + activeSetText + "</span>";

        //console.log('active set is ' + activeSet);
        var selectedTherapy = "";
        selectedTherapy += "<div class=\"therapy-setting-box-green animated fadeIN margin-top shadow\">";
        selectedTherapy += "                    <div id = \"active-set-text-box\" class=\"therapy-setting-box-header-green\">" + activeSetText + "<\/div>";
        selectedTherapy += "                    <div class=\"therapy-setting-box-description-green\">Update your currently selected set<\/div>";
        selectedTherapy += "";
        selectedTherapy += "                    <div class=\"therapy-setting-box-buttons margin-top-setting\">";
        selectedTherapy += "                        <span class=\"therapy-setting-box-button-green no-select\" onclick='updateSet(\"" + activeSet + "\");'\">Update";
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


            var settingOption = "";
            settingOption += "<div id=" + id + " class=\"therapy-setting-box margin-top animated fadeIn shadow\"><ion-icon class=\"edit-icon highlight-color-blue\" name=\"build\" onclick='editSet(\"" + child[i] + "\",\"" + description + "\");'\"><\/ion-icon>";
            settingOption += "                    <span id=name" + str + " class=\"therapy-setting-box-header\">" + "Loading..." + "<\/span>";
            settingOption += "                    <div id=description" + str + " class=\"therapy-setting-box-description\">" + description + "";
            settingOption += "                    <\/div>";
            settingOption += "";
            settingOption += "                    <div class=\"therapy-setting-box-buttons margin-top-tiny\">";
            settingOption += "                        <span class=\"therapy-setting-box-button set-load no-select margin-right\" onclick='updateSet(\"" + child[i] + "\");'\">";
            settingOption += "                            Update";
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

            var desc = firebase.database().ref('users/' + user.uid + "/emdr/savedSets/" + child[i]);

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

    if (newName.length < 1) {
        $("#edit-set-name").addClass("text-input-failure");
        var failure = "";
        failure += " <span class=\"animated fadeIn failure-text\">Please enter a set name<\/span>";

        document.getElementById("edit-set-failure").innerHTML = failure;
    }
    else {

        var database = firebase.database();
        var user = firebase.auth().currentUser;

        firebase.database().ref('users/' + user.uid + "/emdr/savedSets/" + editedSet).update({
            setName: newName,
            setDescription: newDescription
        });

        if (editedSet == activeSet) {
            var desc = firebase.database().ref('users/' + user.uid + "/emdr/savedSets/" + activeSet);

            desc.once('value', function (snapshot) {
                activeSetText = snapshot.val().setName;
            });

            document.getElementById("active-set").innerHTML = "<span class = 'animated fadeIn'>" + activeSetText + "</span>";
            if (settingsBox) {
                document.getElementById("active-set-text-box").innerHTML = activeSetText;
            }

        }

        //REMOVE THIS WHEN THE PANEL IS CLOSED
        $("#edit-set-name").removeClass("text-input-failure");
        document.getElementById("edit-set-failure").innerHTML = "";

        $('#modalCall').modal('hide');

    }


}

function editSet(id) {
    //console.log("This is the ID: " + id);

    //var database = firebase.database();
    var user = firebase.auth().currentUser;
    var desc = firebase.database().ref('users/' + user.uid + "/emdr/savedSets/" + id);
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

    var database = firebase.database();
    var user = firebase.auth().currentUser;
    var description = "";
    var id = "";
    if (child.length > 0) {

        //IF BROKEN: make child.length instead of child.length - 1 
        for (var i = 0; i < child.length; i++) {

            //console.log("SET NAME: " + child[i]);
            var str = child[i].replace(/\s+/g, '');
            id = "box" + str;

            var settingOption = "";
            settingOption += "<div id=" + id + " class=\"therapy-setting-box margin-top animated fadeIn shadow\"><ion-icon class=\"edit-icon highlight-color-blue\" name=\"build\" onclick='editSet(\"" + child[i] + "\");'\"><\/ion-icon>";
            settingOption += "                    <span id=name" + str + " class=\"therapy-setting-box-header\">" + "Loading..." + "<\/span>";
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

            var desc = firebase.database().ref('users/' + user.uid + "/emdr/savedSets/" + child[i]);
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
    document.getElementById("navigation").className = "d-sm-block animated fadeInDown d-md-none d-lg-none navbar cl-effect-13 navbar-expand-lg navbar-therapy navbar-light fixed-top";
    settingsBox = false;
    settingsBoxLoaded = false;
    document.getElementById("gradient3").className = "col col-md-6 col-lg-5 session-selection";
    setTimeout(function () { deleteSaved(); }, 300);
}

function closeSettingsPanel() {
    document.getElementById("navigation").className = "d-sm-block animated fadeInDown d-md-none d-lg-none navbar cl-effect-13 navbar-expand-lg navbar-therapy navbar-light fixed-top";
    settingsLoaded = false;
    document.getElementById("gradient2").className = "col col-md-6 col-lg-5 session-selection";
    setTimeout(function () { deleteSettings(); }, 300);

    //Invoke("document.getElementById("therapy-setting-boxes").innerHTML = """, ;
}

function saveSettingsBox() {
    document.getElementById("navigation").className = "d-sm-block animated fadeOutUp d-md-none d-lg-none navbar cl-effect-13 navbar-expand-lg navbar-therapy navbar-light fixed-top";

    if (selectedSUDS == "yes") {
        if (document.getElementById("suds-initial").value.length == 0) {
            //selectedSUDS = "1";
            document.getElementById("suds-initial").value = selectedSUDS;
        }
    }

    if (selectedMood == "yes") {
        if (document.getElementById("mood-initial").value.length == 0) {
            //selectedMood = "5";
            document.getElementById("mood-initial").value = selectedMood;
        }
    }

    if (selectedVAC == "yes") {
        if (document.getElementById("vac-initial").value.length == 0) {
            //selectedVAC = "1";
            document.getElementById("vac-initial").value = selectedVAC;
        }
    }


    document.getElementById("gradient3").className = "session-selection-active col col-md-6 col-lg-5 session-selection";
    if (!settingsBoxLoaded) {
        sessionOptionsBox = [];

        var userID = firebase.auth().currentUser.uid;
        var rootRef = firebase.database().ref('users');
        var newRoot = rootRef.child(userID + "/emdr").child('savedSets')
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

    var desc = firebase.database().ref('users/' + user.uid + "/emdr/savedSets/" + activeSet);
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
        //console.log(user);
        //console.log(selectedSessionCount);



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

        if (selectedMood == "yes") {
            selectedMood = document.getElementById("mood-initial").value;
        }

        if (selectedSUDS == "yes") {
            selectedSUDS = document.getElementById("suds-initial").value;
        }

        if (selectedVAC == "yes") {
            selectedVAC = document.getElementById("vac-initial").value;
        }

        if (selectedClient == "yes") {
            selectedClient = document.getElementById("client-initial").value;
        }

        var str = value.replace(/\s+/g, '');
        var id = "description" + str;
        var nameId = "name" + str

        const userReference = firebase.database().ref(`firebaseUser/${user.uid}`);
        var speedValue = document.getElementById("speedRange").value;

        const backgroundTheme = document.getElementById("preview-pane").style.backgroundColor;
        const elementTheme = document.getElementById("element").style.backgroundColor;

        //console.log("DSDAS:" + backgroundTheme);
        //const backgroundTheme = document.getElementById("background-color").value;
        //const elementTheme = document.getElementById("element-color").value;

        firebase.database().ref('users/' + user.uid + "/emdr/savedSets" + sessionSave).set({
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
            client: selectedClient
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

        if (selectedMood != "no") {
            selectedMood = "yes";
        }

        if (selectedClient != "no") {
            selectedClient = "yes";
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

