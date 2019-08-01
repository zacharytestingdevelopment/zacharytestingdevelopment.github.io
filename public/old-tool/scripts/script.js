
var selectedColor = "";
var secondColor = selectedColor + "x";

var selectedSpeed = "";
var secondSpeed = selectedSpeed + "x";

var selectedTime = "";
var countTime = 0;
var sessionActive = true;
var selectedEase = false;

var timeValue;

function sunOrMoonAbout2() {

    if ((localStorage.getItem('sunormoon')) == 'true') {
        document.getElementById('darkMode').src = 'images/sunset.png';
        document.getElementById('error').src = 'images/error.png';

        document.getElementById('test').style.color = 'black';
        document.getElementById('test2').style.color = 'black';
        document.getElementById('test3').style.color = 'black';
        document.getElementById('test4').style.color = 'black';
        document.getElementById('test5').style.color = 'black';
        document.getElementById('test6').style.color = 'black';
        document.getElementById('test7').style.color = 'black';
        document.getElementById('test8').style.color = 'black';
        document.getElementById('test9').style.color = 'black';
        document.getElementById('test10').style.color = 'black';
        document.getElementById('test11').style.color = 'black';
        document.getElementById('test12').style.color = 'black';
        document.getElementById('test13').style.color = 'black';
        document.getElementById('test14').style.color = 'black';
        document.getElementById('test15').style.color = 'black';
        document.getElementById('test16').style.color = 'black';
        document.getElementById('test17').style.color = 'black';



        document.getElementById('bodyTag').style.backgroundColor = '#FBFCFC';
    }
    else if ((localStorage.getItem('sunormoon')) == 'false') {
        document.getElementById('darkMode').src = 'images/moon.png';
        document.getElementById('error').src = 'images/errordark.png';

        document.getElementById('test').style.color = 'white';
        document.getElementById('test2').style.color = 'white';
        document.getElementById('test3').style.color = 'white';
        document.getElementById('test4').style.color = 'white';
        document.getElementById('test5').style.color = 'white';
        document.getElementById('test6').style.color = 'white';
        document.getElementById('test7').style.color = 'white';
        document.getElementById('test8').style.color = 'white';
        document.getElementById('test9').style.color = 'white';
        document.getElementById('test10').style.color = 'white';
        document.getElementById('test11').style.color = 'white';
        document.getElementById('test12').style.color = 'white';
        document.getElementById('test13').style.color = 'white';
        document.getElementById('test14').style.color = 'white';
        document.getElementById('test15').style.color = 'white';
        document.getElementById('test16').style.color = 'white';
        document.getElementById('test17').style.color = 'white';



        document.getElementById('bodyTag').style.backgroundColor = 'black';
    }
    else if ((localStorage.getItem('sunormoon')) != 'true' && (localStorage.getItem('sunormoon')) != 'false') {
        document.getElementById('darkMode').src = 'images/sunset.png';
        document.getElementById('error').src = 'images/error.png';

        document.getElementById('test').style.color = 'black';
        document.getElementById('test2').style.color = 'black';
        document.getElementById('test3').style.color = 'black';
        document.getElementById('test4').style.color = 'black';
        document.getElementById('test5').style.color = 'black';
        document.getElementById('test6').style.color = 'black';
        document.getElementById('test7').style.color = 'black';
        document.getElementById('test8').style.color = 'black';
        document.getElementById('test9').style.color = 'black';
        document.getElementById('test10').style.color = 'black';
        document.getElementById('test11').style.color = 'black';
        document.getElementById('test12').style.color = 'black';
        document.getElementById('test13').style.color = 'black';
        document.getElementById('test14').style.color = 'black';
        document.getElementById('test15').style.color = 'black';
        document.getElementById('test16').style.color = 'black';
        document.getElementById('test17').style.color = 'black';



        document.getElementById('bodyTag').style.backgroundColor = '#FBFCFC';

        localStorage.setItem('sunormoon', 'true');
    }

}

function sunOrMoonIndex2() {

    if ((localStorage.getItem('sunormoon')) == 'true') {
        document.getElementById('darkMode').src = 'images/sunset.png';
        document.getElementById('info').src = 'images/info.png';

        document.getElementById('test').style.color = 'black';
        document.getElementById('test2').style.color = 'black';
        document.getElementById('test3').style.color = 'black';


        document.getElementById('very-slow').style.color = 'black';
        document.getElementById('slow').style.color = 'black';
        document.getElementById('medium').style.color = 'black';
        document.getElementById('fast').style.color = 'black';
        document.getElementById('very-fast').style.color = 'black';
        document.getElementById('very-slowx').style.color = 'black';
        document.getElementById('slowx').style.color = 'black';
        document.getElementById('mediumx').style.color = 'black';
        document.getElementById('fastx').style.color = 'black';
        document.getElementById('very-fastx').style.color = 'black';

        document.getElementById('num15').style.color = 'black';
        document.getElementById('num20').style.color = 'black';
        document.getElementById('num25').style.color = 'black';
        document.getElementById('num30').style.color = 'black';
        document.getElementById('num60').style.color = 'black';
        document.getElementById('num15x').style.color = 'black';
        document.getElementById('num20x').style.color = 'black';
        document.getElementById('num25x').style.color = 'black';
        document.getElementById('num30x').style.color = 'black';
        document.getElementById('num60x').style.color = 'black';

        document.getElementById('bodyTag').style.backgroundColor = '#FBFCFC';
    }
    else if ((localStorage.getItem('sunormoon')) == 'false') {
        document.getElementById('darkMode').src = 'images/moon.png';
        document.getElementById('info').src = 'images/infodark.png';

        document.getElementById('test').style.color = 'white';
        document.getElementById('test2').style.color = 'white';
        document.getElementById('test3').style.color = 'white';


        document.getElementById('very-slow').style.color = 'white';
        document.getElementById('slow').style.color = 'white';
        document.getElementById('medium').style.color = 'white';
        document.getElementById('fast').style.color = 'white';
        document.getElementById('very-fast').style.color = 'white';
        document.getElementById('very-slowx').style.color = 'white';
        document.getElementById('slowx').style.color = 'white';
        document.getElementById('mediumx').style.color = 'white';
        document.getElementById('fastx').style.color = 'white';
        document.getElementById('very-fastx').style.color = 'white';

        document.getElementById('num15').style.color = 'white';
        document.getElementById('num20').style.color = 'white';
        document.getElementById('num25').style.color = 'white';
        document.getElementById('num30').style.color = 'white';
        document.getElementById('num60').style.color = 'white';
        document.getElementById('num15x').style.color = 'white';
        document.getElementById('num20x').style.color = 'white';
        document.getElementById('num25x').style.color = 'white';
        document.getElementById('num30x').style.color = 'white';
        document.getElementById('num60x').style.color = 'white';

        document.getElementById('bodyTag').style.backgroundColor = 'black';
    }
    else if ((localStorage.getItem('sunormoon')) != 'true' && (localStorage.getItem('sunormoon')) != 'false') {
        document.getElementById('darkMode').src = 'images/sunset.png';
        document.getElementById('info').src = 'images/info.png';

        document.getElementById('test').style.color = 'black';
        document.getElementById('test2').style.color = 'black';
        document.getElementById('test3').style.color = 'black';


        document.getElementById('very-slow').style.color = 'black';
        document.getElementById('slow').style.color = 'black';
        document.getElementById('medium').style.color = 'black';
        document.getElementById('fast').style.color = 'black';
        document.getElementById('very-fast').style.color = 'black';
        document.getElementById('very-slowx').style.color = 'black';
        document.getElementById('slowx').style.color = 'black';
        document.getElementById('mediumx').style.color = 'black';
        document.getElementById('fastx').style.color = 'black';
        document.getElementById('very-fastx').style.color = 'black';

        document.getElementById('num15').style.color = 'black';
        document.getElementById('num20').style.color = 'black';
        document.getElementById('num25').style.color = 'black';
        document.getElementById('num30').style.color = 'black';
        document.getElementById('num60').style.color = 'black';
        document.getElementById('num15x').style.color = 'black';
        document.getElementById('num20x').style.color = 'black';
        document.getElementById('num25x').style.color = 'black';
        document.getElementById('num30x').style.color = 'black';
        document.getElementById('num60x').style.color = 'black';

        document.getElementById('bodyTag').style.backgroundColor = '#FBFCFC';

        localStorage.setItem('sunormoon', 'true');
    }

}



function sunOrMoonSession2() {

    if ((localStorage.getItem('sunormoon')) == 'true') {
        document.getElementById('darkMode').src = 'images/sunset.png';
        document.getElementById('error').src = 'images/error.png';

        document.getElementById('test').style.color = 'black';
        document.getElementById('test2').style.color = 'black';

        document.getElementById('bodyTag').style.backgroundColor = '#FBFCFC';
    }
    else if ((localStorage.getItem('sunormoon')) == 'false') {
        document.getElementById('darkMode').src = 'images/moon.png';
        document.getElementById('error').src = 'images/errordark.png';

        document.getElementById('test').style.color = 'white';
        document.getElementById('test2').style.color = 'white';

        document.getElementById('bodyTag').style.backgroundColor = 'black';
    }
    else if ((localStorage.getItem('sunormoon')) != 'true' && (localStorage.getItem('sunormoon')) != 'false') {
        document.getElementById('darkMode').src = 'images/moon.png';
        document.getElementById('error').src = 'images/errordark.png';

        document.getElementById('test').style.color = 'black';
        document.getElementById('test2').style.color = 'black';


        document.getElementById('bodyTag').style.backgroundColor = '#FBFCFC';

        localStorage.setItem('sunormoon', 'true');
    }

}



function sunOrMoonAbout() {

    if ((localStorage.getItem('sunormoon')) == 'true') {

        localStorage.setItem('sunormoon', 'false');

        document.getElementById('darkMode').src = 'images/moon.png';
        document.getElementById('error').src = 'images/errordark.png';

        document.getElementById('test').style.color = 'white';
        document.getElementById('test2').style.color = 'white';
        document.getElementById('test3').style.color = 'white';
        document.getElementById('test4').style.color = 'white';
        document.getElementById('test5').style.color = 'white';
        document.getElementById('test6').style.color = 'white';
        document.getElementById('test7').style.color = 'white';
        document.getElementById('test8').style.color = 'white';
        document.getElementById('test9').style.color = 'white';
        document.getElementById('test10').style.color = 'white';
        document.getElementById('test11').style.color = 'white';
        document.getElementById('test12').style.color = 'white';
        document.getElementById('test13').style.color = 'white';
        document.getElementById('test14').style.color = 'white';
        document.getElementById('test15').style.color = 'white';
        document.getElementById('test16').style.color = 'white';
        document.getElementById('test17').style.color = 'white';



        document.getElementById('bodyTag').style.backgroundColor = 'black';

    }
    else if ((localStorage.getItem('sunormoon')) != 'true' && (localStorage.getItem('sunormoon')) != 'false') {

        localStorage.setItem('sunormoon', 'true');

        document.getElementById('darkMode').src = 'images/moon.png';
        document.getElementById('error').src = 'images/errordark.png';

        document.getElementById('test').style.color = 'white';
        document.getElementById('test2').style.color = 'white';
        document.getElementById('test3').style.color = 'white';
        document.getElementById('test4').style.color = 'white';
        document.getElementById('test5').style.color = 'white';
        document.getElementById('test6').style.color = 'white';
        document.getElementById('test7').style.color = 'white';
        document.getElementById('test8').style.color = 'white';
        document.getElementById('test9').style.color = 'white';
        document.getElementById('test10').style.color = 'white';
        document.getElementById('test11').style.color = 'white';
        document.getElementById('test12').style.color = 'white';
        document.getElementById('test13').style.color = 'white';
        document.getElementById('test14').style.color = 'white';
        document.getElementById('test15').style.color = 'white';
        document.getElementById('test16').style.color = 'white';
        document.getElementById('test17').style.color = 'white';


        document.getElementById('bodyTag').style.backgroundColor = 'black';

    }
    else if ((localStorage.getItem('sunormoon')) == 'false') {

        localStorage.setItem('sunormoon', 'true');

        document.getElementById('darkMode').src = 'images/sunset.png';
        document.getElementById('error').src = 'images/error.png';

        document.getElementById('test').style.color = 'black';
        document.getElementById('test2').style.color = 'black';
        document.getElementById('test3').style.color = 'black';
        document.getElementById('test4').style.color = 'black';
        document.getElementById('test5').style.color = 'black';
        document.getElementById('test6').style.color = 'black';
        document.getElementById('test7').style.color = 'black';
        document.getElementById('test8').style.color = 'black';
        document.getElementById('test9').style.color = 'black';
        document.getElementById('test10').style.color = 'black';
        document.getElementById('test11').style.color = 'black';
        document.getElementById('test12').style.color = 'black';
        document.getElementById('test13').style.color = 'black';
        document.getElementById('test14').style.color = 'black';
        document.getElementById('test15').style.color = 'black';
        document.getElementById('test16').style.color = 'black';
        document.getElementById('test17').style.color = 'black';

        document.getElementById('bodyTag').style.backgroundColor = '#FBFCFC';
    }

}

function sunOrMoonIndex() {

    if ((localStorage.getItem('sunormoon')) == 'true') {

        localStorage.setItem('sunormoon', 'false');

        document.getElementById('darkMode').src = 'images/moon.png';
        document.getElementById('info').src = 'images/infodark.png';

        document.getElementById('test').style.color = 'white';
        document.getElementById('test2').style.color = 'white';
        document.getElementById('test3').style.color = 'white';


        document.getElementById('very-slow').style.color = 'white';
        document.getElementById('slow').style.color = 'white';
        document.getElementById('medium').style.color = 'white';
        document.getElementById('fast').style.color = 'white';
        document.getElementById('very-fast').style.color = 'white';
        document.getElementById('very-slowx').style.color = 'white';
        document.getElementById('slowx').style.color = 'white';
        document.getElementById('mediumx').style.color = 'white';
        document.getElementById('fastx').style.color = 'white';
        document.getElementById('very-fastx').style.color = 'white';

        document.getElementById('num15').style.color = 'white';
        document.getElementById('num20').style.color = 'white';
        document.getElementById('num25').style.color = 'white';
        document.getElementById('num30').style.color = 'white';
        document.getElementById('num60').style.color = 'white';
        document.getElementById('num15x').style.color = 'white';
        document.getElementById('num20x').style.color = 'white';
        document.getElementById('num25x').style.color = 'white';
        document.getElementById('num30x').style.color = 'white';
        document.getElementById('num60x').style.color = 'white';

        document.getElementById('bodyTag').style.backgroundColor = 'black';

    }
    else if ((localStorage.getItem('sunormoon')) != 'true' && (localStorage.getItem('sunormoon')) != 'false') {

        localStorage.setItem('sunormoon', 'true');

        document.getElementById('darkMode').src = 'images/moon.png';
        document.getElementById('info').src = 'images/infodark.png';

        document.getElementById('test').style.color = 'white';
        document.getElementById('test2').style.color = 'white';
        document.getElementById('test3').style.color = 'white';

        document.getElementById('very-slow').style.color = 'white';
        document.getElementById('slow').style.color = 'white';
        document.getElementById('medium').style.color = 'white';
        document.getElementById('fast').style.color = 'white';
        document.getElementById('very-fast').style.color = 'white';
        document.getElementById('very-slowx').style.color = 'white';
        document.getElementById('slowx').style.color = 'white';
        document.getElementById('mediumx').style.color = 'white';
        document.getElementById('fastx').style.color = 'white';
        document.getElementById('very-fastx').style.color = 'white';

        document.getElementById('num15').style.color = 'white';
        document.getElementById('num20').style.color = 'white';
        document.getElementById('num25').style.color = 'white';
        document.getElementById('num30').style.color = 'white';
        document.getElementById('num60').style.color = 'white';
        document.getElementById('num15x').style.color = 'white';
        document.getElementById('num20x').style.color = 'white';
        document.getElementById('num25x').style.color = 'white';
        document.getElementById('num30x').style.color = 'white';
        document.getElementById('num60x').style.color = 'white';

        document.getElementById('bodyTag').style.backgroundColor = 'black';

    }
    else if ((localStorage.getItem('sunormoon')) == 'false') {

        localStorage.setItem('sunormoon', 'true');

        document.getElementById('darkMode').src = 'images/sunset.png';
        document.getElementById('info').src = 'images/info.png';

        document.getElementById('test').style.color = 'black';
        document.getElementById('test2').style.color = 'black';
        document.getElementById('test3').style.color = 'black';


        document.getElementById('very-slow').style.color = 'black';
        document.getElementById('slow').style.color = 'black';
        document.getElementById('medium').style.color = 'black';
        document.getElementById('fast').style.color = 'black';
        document.getElementById('very-fast').style.color = 'black';
        document.getElementById('very-slowx').style.color = 'black';
        document.getElementById('slowx').style.color = 'black';
        document.getElementById('mediumx').style.color = 'black';
        document.getElementById('fastx').style.color = 'black';
        document.getElementById('very-fastx').style.color = 'black';

        document.getElementById('num15').style.color = 'black';
        document.getElementById('num20').style.color = 'black';
        document.getElementById('num25').style.color = 'black';
        document.getElementById('num30').style.color = 'black';
        document.getElementById('num60').style.color = 'black';
        document.getElementById('num15x').style.color = 'black';
        document.getElementById('num20x').style.color = 'black';
        document.getElementById('num25x').style.color = 'black';
        document.getElementById('num30x').style.color = 'black';
        document.getElementById('num60x').style.color = 'black';

        document.getElementById('bodyTag').style.backgroundColor = '#FBFCFC';
    }

}

function sunOrMoonSession() {

    if ((localStorage.getItem('sunormoon')) == 'true') {

        localStorage.setItem('sunormoon', 'false');

        document.getElementById('darkMode').src = 'images/moon.png';
        document.getElementById('error').src = 'images/errordark.png';

        document.getElementById('test').style.color = 'white';
        document.getElementById('test2').style.color = 'white';

        document.getElementById('bodyTag').style.backgroundColor = 'black';

    }
    else if ((localStorage.getItem('sunormoon')) != 'true' && (localStorage.getItem('sunormoon')) != 'false') {

        localStorage.setItem('sunormoon', 'true');

        document.getElementById('darkMode').src = 'images/moon.png';
        document.getElementById('error').src = 'images/errordark.png';

        document.getElementById('test').style.color = 'white';
        document.getElementById('test2').style.color = 'white';

        document.getElementById('bodyTag').style.backgroundColor = 'black';

    }
    else if ((localStorage.getItem('sunormoon')) == 'false') {

        localStorage.setItem('sunormoon', 'true');

        document.getElementById('darkMode').src = 'images/sunset.png';
        document.getElementById('error').src = 'images/error.png';

        document.getElementById('test').style.color = 'black';
        document.getElementById('test2').style.color = 'black';

        document.getElementById('bodyTag').style.backgroundColor = '#FBFCFC';
    }

}

function colorSelect(color) {
    secondColor = color + "x";
    resetColor(color);
    document.getElementById(color).className += " force-color";
    document.getElementById(secondColor).className += " force-color";
    selectedColor = color;
}

function loadAbout() {
    //document.getElementById("site-wrapper").className = "animated fadeOut";
    setTimeout(aboutOpen, 1000);
}

function aboutOpen() {
    window.location = "about.html";
}

function moveSlider(e) {

    if (!selectedEase) {
        document.getElementById("checkboxSlider").style.left = "43px";
        selectedEase = true;
    }
    else {
        document.getElementById("checkboxSlider").style.left = "3px";
        selectedEase = false;
    }

    e.preventDefault();
}

function resetColor(color) {
    if (color != "red") {
        document.getElementById("red").className = "flex-element color red";
        document.getElementById("redx").className = "col-xs-6 col-xs-offset-3 bottom-pad flex-element color red";
    }

    if (color != "purple") {
        document.getElementById("purple").className = "flex-element color purple";
        document.getElementById("purplex").className = "col-xs-6 col-xs-offset-3 bottom-pad flex-element color purple";
    }

    if (color != "blue") {
        document.getElementById("blue").className = "flex-element color blue";
        document.getElementById("bluex").className = "col-xs-6 col-xs-offset-3 bottom-pad flex-element color blue";
    }

    if (color != "green") {
        document.getElementById("green").className = "flex-element color green";
        document.getElementById("greenx").className = "col-xs-6 col-xs-offset-3 bottom-pad flex-element color green";
    }

    if (color != "orange") {
        document.getElementById("orange").className = "flex-element color orange";
        document.getElementById("orangex").className = "col-xs-6 col-xs-offset-3 bottom-pad flex-element color orange";
    }
}

function speedSelect(speed) {
    resetSpeed(speed);
    secondSpeed = speed + "x";
    document.getElementById(speed).className += " force-select";
    document.getElementById(secondSpeed).className += " force-select";
    selectedSpeed = speed;
}

function resetSpeed(speed) {
    if (speed != "very-slow") {
        document.getElementById("very-slow").className = "flex-element selection-option";
        document.getElementById("very-slowx").className = "col-xs-6 col-xs-offset-3 bottom-pad flex-element selection-option";
    }

    if (speed != "slow") {
        document.getElementById("slow").className = "flex-element selection-option";
        document.getElementById("slowx").className = "col-xs-6 col-xs-offset-3 bottom-pad flex-element selection-option";
    }

    if (speed != "medium") {
        document.getElementById("medium").className = "flex-element selection-option";
        document.getElementById("mediumx").className = "col-xs-6 col-xs-offset-3 bottom-pad flex-element selection-option";
    }

    if (speed != "fast") {
        document.getElementById("fast").className = "flex-element selection-option";
        document.getElementById("fastx").className = "col-xs-6 col-xs-offset-3 bottom-pad flex-element selection-option";
    }

    if (speed != "very-fast") {
        document.getElementById("very-fast").className = "flex-element selection-option";
        document.getElementById("very-fastx").className = "col-xs-6 col-xs-offset-3 bottom-pad flex-element selection-option";
    }
}

function timeSelect(time) {
    secondTime = time + "x";
    resetTime(time);
    document.getElementById(time).className += " force-select";
    document.getElementById(secondTime).className += " force-select";
    selectedTime = time;
}

function resetTime(time) {
    if (time != "num15") {
        document.getElementById("num15").className = "flex-element selection-option";
        document.getElementById("num15x").className = "col-xs-6 col-xs-offset-3 bottom-pad flex-element selection-option";
    }

    if (time != "num20") {
        document.getElementById("num20").className = "flex-element selection-option";
        document.getElementById("num20x").className = "col-xs-6 col-xs-offset-3 bottom-pad flex-element selection-option";
    }

    if (time != "num25") {
        document.getElementById("num25").className = "flex-element selection-option";
        document.getElementById("num25x").className = "col-xs-6 col-xs-offset-3 bottom-pad flex-element selection-option";
    }

    if (time != "num30") {
        document.getElementById("num30").className = "flex-element selection-option";
        document.getElementById("num30x").className = "col-xs-6 col-xs-offset-3 bottom-pad flex-element selection-option";
    }

    if (time != "num60") {
        document.getElementById("num60").className = "flex-element selection-option";
        document.getElementById("num60x").className = "col-xs-6 col-xs-offset-3 bottom-pad flex-element selection-option";
    }
}

function startSession() {
    if (selectedColor != "" && selectedTime != "" && selectedSpeed != "") {
        swal({ title: "Notice", allowEscapeKey: true, allowOutsideClick: true, text: "EMDR can be an intensive therapy and should be discussed with a medical professional before being attempted in any setting. For more information, visit the about page.", type: "warning", confirmButtonText: "I understand", closeOnConfirm: true }, function () {
            //   document.getElementById("site-wrapper").className = "animated fadeOut";
            setTimeout(session, 1000);
        });
    }
    else {

        document.getElementById("alert").className = "reveal alert-container animated bounceIn"
    }
}

function session() {
    localStorage.setItem("userColor", selectedColor);
    localStorage.setItem("userSpeed", selectedSpeed);
    localStorage.setItem("userTime", selectedTime);
    localStorage.setItem("userEase", selectedEase);
    // document.getElementById("site-wrapper").className = "animated fadeIn";
    //document.getElementById("site-wrapper").innerHTML = "dadasdas";
    window.location = "session.html";
}

function engageSettings() {

    if (localStorage.getItem("userColor") == "red") {
        document.getElementById("cube").style.backgroundColor = "#C0392B";
    }
    else if (localStorage.getItem("userColor") == "purple") {
        document.getElementById("cube").style.backgroundColor = "#8E44AD";
    }
    else if (localStorage.getItem("userColor") == "blue") {
        document.getElementById("cube").style.backgroundColor = "#2980B9";
    }
    else if (localStorage.getItem("userColor") == "green") {
        document.getElementById("cube").style.backgroundColor = "#16A085";
    }
    else if (localStorage.getItem("userColor") == "orange") {
        document.getElementById("cube").style.backgroundColor = "#F39C12";
    }

    if (localStorage.getItem("userSpeed") == "very-slow") {
        timeValue = 1400;
    }
    else if (localStorage.getItem("userSpeed") == "slow") {
        timeValue = 1000;
    }
    else if (localStorage.getItem("userSpeed") == "medium") {
        timeValue = 700;
    }
    else if (localStorage.getItem("userSpeed") == "fast") {
        timeValue = 500;
    }
    else if (localStorage.getItem("userSpeed") == "very-fast") {
        timeValue = 450;
    }

    if (localStorage.getItem("userEase") == "true") {
        document.getElementById("cube").style.animationTimingFunction = "ease-out"
    }
    else {

    }

    setInterval(countSeconds, 1000);
    setTimeout(moveRight, 350);

}

function countSeconds() {
    countTime++;
    /*
    if(localStorage.getItem("userTime") == "num15")
    {
        if(countTime > 15 && sessionActive)
        {
            endSession();
        }
    }
    */
    if (localStorage.getItem("userTime") == "num20") {
        if (countTime > 15 && sessionActive) {
            endSession();
        }
    }
    else if (localStorage.getItem("userTime") == "num25") {
        if (countTime > 30 && sessionActive) {
            endSession();
        }
    }
    else if (localStorage.getItem("userTime") == "num30") {
        if (countTime > 45 && sessionActive) {
            endSession();
        }
    }
    else if (localStorage.getItem("userTime") == "num60") {
        if (countTime > 60 && sessionActive) {
            endSession();
        }
    }
}

function replaySession() {
    document.getElementById("firstTitle").className = "abs session-option animated fadeOutUp reveal-inline";
    document.getElementById("secondTitle").className = "session-option animated fadeOutUp reveal-inline";

    setTimeout(function () { location.reload(); }, 700)
}

function endSession() {
    sessionActive = false;
    document.getElementById("cube-fade").className += " animated fadeOut";

    setTimeout(function () {
        document.getElementById("firstTitle").className = "session-option animated fadeInDown reveal-inline";
        document.getElementById("secondTitle").className = "session-option animated fadeInDown reveal-inline";
    }, 700)

}

function moveLeft() {
    if (sessionActive) {
        if (localStorage.getItem("userSpeed") == "very-slow") {
            document.getElementById("cube").className = "element very-slow-left";
            setTimeout(moveRight, timeValue);
        }
        else if (localStorage.getItem("userSpeed") == "slow") {
            document.getElementById("cube").className = "element slow-left";
            setTimeout(moveRight, timeValue);
        }
        else if (localStorage.getItem("userSpeed") == "medium") {
            document.getElementById("cube").className = "element medium-left";
            setTimeout(moveRight, timeValue);
        }
        else if (localStorage.getItem("userSpeed") == "fast") {
            document.getElementById("cube").className = "element fast-left";
            setTimeout(moveRight, timeValue);
        }
        else if (localStorage.getItem("userSpeed") == "very-fast") {
            document.getElementById("cube").className = "element very-fast-left";
            setTimeout(moveRight, timeValue);
        }
    }
}

function moveRight() {
    if (sessionActive) {
        if (localStorage.getItem("userSpeed") == "very-slow") {
            document.getElementById("cube").className = "element very-slow-right";
            setTimeout(moveLeft, timeValue);
        }
        else if (localStorage.getItem("userSpeed") == "slow") {
            document.getElementById("cube").className = "element slow-right";
            setTimeout(moveLeft, timeValue);
        }
        else if (localStorage.getItem("userSpeed") == "medium") {
            document.getElementById("cube").className = "element medium-right";
            setTimeout(moveLeft, timeValue);
        }
        else if (localStorage.getItem("userSpeed") == "fast") {
            document.getElementById("cube").className = "element fast-right";
            setTimeout(moveLeft, timeValue);
        }
        else if (localStorage.getItem("userSpeed") == "very-fast") {
            document.getElementById("cube").className = "element very-fast-right";
            setTimeout(moveLeft, timeValue);
        }
    }
}

function loadHome() {
    document.getElementById("site-wrapper").className = "animated fadeOut";
    setTimeout(home, 1100);
}

function home() {
    document.getElementById("site-wrapper").className = "animated fadeIn";
    window.location = "index.html";
}



