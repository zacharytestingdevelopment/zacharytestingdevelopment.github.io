var activeElement = "therapy2";

function changeColorWhite(element) {

    if (element == "therapy1") {
        if (activeElement != "therapy1") {
            document.getElementById("therapy1header").className = "therapy-inspect-box-header white";
            document.getElementById("therapy1body").className = "therapy-inspect-box-body white";
        }
    }
    else if (element == "therapy2") {
        if (activeElement != "therapy2") {
            document.getElementById("therapy2header").className = "therapy-inspect-box-header white";
            document.getElementById("therapy2body").className = "therapy-inspect-box-body white";
        }
    }
    else if (element == "therapy3") {
        if (activeElement != "therapy3") {
            document.getElementById("therapy3header").className = "therapy-inspect-box-header white";
            document.getElementById("therapy3body").className = "therapy-inspect-box-body white";
        }
    }
}

function changeColorWhiteOut(element) {
    if (element == "therapy1") {
        if (activeElement != "therapy1") {
            document.getElementById("therapy1header").className = "therapy-inspect-box-header";
            document.getElementById("therapy1body").className = "therapy-inspect-box-body";
        }
    }
    else if (element == "therapy2") {
        if (activeElement != "therapy2") {
            document.getElementById("therapy2header").className = "therapy-inspect-box-header";
            document.getElementById("therapy2body").className = "therapy-inspect-box-body";
        }
    }
    else if (element == "therapy3") {
        if (activeElement != "therapy3") {
            document.getElementById("therapy3header").className = "therapy-inspect-box-header";
            document.getElementById("therapy3body").className = "therapy-inspect-box-body";
        }
    }
}

function changeActiveTherapy(element) {
    if (element == "therapy1") {

        // Enter therapy 1 active
        activeElement = "therapy1";
        document.getElementById("therapy1box").className = "therapy-inspect-box col-centered no-select therapy-inspect-box-active";
        document.getElementById("therapy1header").className = "therapy-inspect-box-header white";
        document.getElementById("therapy1body").className = "therapy-inspect-box-body white";

        // Exit therapy 2 active
        document.getElementById("therapy2box").className = "therapy-inspect-box col-centered no-select";
        document.getElementById("therapy2header").className = "therapy-inspect-box-header";
        document.getElementById("therapy2body").className = "therapy-inspect-box-body";
        document.getElementById("therapy2box").className = "therapy-inspect-box no-select";

        // Exit therapy 3 active
        document.getElementById("therapy3box").className = "therapy-inspect-box col-centered no-select";
        document.getElementById("therapy3header").className = "therapy-inspect-box-header";
        document.getElementById("therapy3body").className = "therapy-inspect-box-body";
        document.getElementById("therapy3box").className = "therapy-inspect-box no-select";

        updateTherapyText('therapy1');
    }
    else if (element == "therapy2") {
        // Enter therapy 1 active
        activeElement = "therapy2";
        document.getElementById("therapy2box").className = "therapy-inspect-box col-centered no-select therapy-inspect-box-active";
        document.getElementById("therapy2header").className = "therapy-inspect-box-header white";
        document.getElementById("therapy2body").className = "therapy-inspect-box-body white";

        // Exit therapy 3 active
        document.getElementById("therapy3header").className = "therapy-inspect-box-header";
        document.getElementById("therapy3body").className = "therapy-inspect-box-body";
        document.getElementById("therapy3box").className = "therapy-inspect-box no-select";

        // Exit therapy 1 active
        document.getElementById("therapy1header").className = "therapy-inspect-box-header";
        document.getElementById("therapy1body").className = "therapy-inspect-box-body";
        document.getElementById("therapy1box").className = "therapy-inspect-box no-select";

        updateTherapyText('therapy2');
    }
    else if (element == "therapy3") {
        // Enter therapy 3 active
        activeElement = "therapy3";
        document.getElementById("therapy3box").className = "therapy-inspect-box col-centered no-select therapy-inspect-box-active";
        document.getElementById("therapy3header").className = "therapy-inspect-box-header white";
        document.getElementById("therapy3body").className = "therapy-inspect-box-body white";

        // Exit therapy 2 active
        document.getElementById("therapy2header").className = "therapy-inspect-box-header";
        document.getElementById("therapy2body").className = "therapy-inspect-box-body";
        document.getElementById("therapy2box").className = "therapy-inspect-box no-select";

        // Exit therapy 1 active
        document.getElementById("therapy1header").className = "therapy-inspect-box-header";
        document.getElementById("therapy1body").className = "therapy-inspect-box-body";
        document.getElementById("therapy1box").className = "therapy-inspect-box no-select";

        updateTherapyText('therapy3');
    }

    function updateTherapyText(therapyOption) {
        if (therapyOption == "therapy1") {

            var therapy1 = '<div class="meditation-box-header white s1 animated fadeInDownTiny delay1Therapy">' +
                '        Breathing' +
                '      </div>' +
                '' +
                '      <div class="meditation-box-body white animated fadeInDownTiny delay2Therapy">' +
                '        EMDR is an innovative therapy that has demonstrated itself to be a valuable tool in treating OCD, PTD,' +
                '        Anxiety' +
                '        and' +
                '        more.' +
                '      </div>' +
                '' +
                '      <div class="meditation-box-points">' +
                '        <ul>' +
                '          <li class="white animated fadeInDownTiny delay3Therapy">Effective, easy to use</li>' +
                '          <li class="white animated fadeInDownTiny delay4Therapy">Completely customizable to best fit your needs</li>' +
                '          <li class="white animated fadeInDownTiny delay5Therapy">Placeholder placeholder placeholder</li>' +
                '          <li class="white animated fadeInDownTiny delay6Therapy">Fix all issues in the modern world</li>' +
                '        </ul>' +
                '      </div>' +
                '' +
                '      <div class = "row move-up animated fadeInDown delay1"><span class="meditation-box-button margin-top">How does it work?</span><span class="meditation-box-button margin-top">GET STARTED</span>' +

                '      </span></div>';

            document.getElementById('meditation-focus-text').innerHTML = therapy1;

        }
        else if (therapyOption == "therapy2") {
            var therapy2 = '<div class="meditation-box-header white s1 animated fadeInDownTiny delay1Therapy">' +
                '        EMDR' +
                '      </div>' +
                '' +
                '      <div class="meditation-box-body white animated fadeInDownTiny delay2Therapy">' +
                '        EMDR is an innovative therapy that has demonstrated itself to be a valuable tool in treating OCD, PTD,' +
                '        Anxiety' +
                '        and' +
                '        more.' +
                '      </div>' +
                '' +
                '      <div class="meditation-box-points">' +
                '        <ul>' +
                '          <li class="white animated fadeInDownTiny delay3Therapy">Effective, easy to use</li>' +
                '          <li class="white animated fadeInDownTiny delay4Therapy">Completely customizable to best fit your needs</li>' +
                '          <li class="white animated fadeInDownTiny delay5Therapy">Placeholder placeholder placeholder</li>' +
                '          <li class="white animated fadeInDownTiny delay6Therapy">Fix all issues in the modern world</li>' +
                '        </ul>' +
                '      </div>' +
                '' +
                '      <div class = "row move-up animated fadeInDown delay1"><span class="meditation-box-button margin-top">How does it work?</span><span class="meditation-box-button margin-top">GET STARTED</span>' +

                '      </span></div>';

            document.getElementById('meditation-focus-text').innerHTML = therapy2;
        }
        else if (therapyOption == "therapy3") {
            var therapy3 = '<div class="meditation-box-header white s1 animated fadeInDownTiny delay1Therapy">' +
                '        Auditory' +
                '      </div>' +
                '' +
                '      <div class="meditation-box-body white animated fadeInDownTiny delay2Therapy">' +
                '        EMDR is an innovative therapy that has demonstrated itself to be a valuable tool in treating OCD, PTD,' +
                '        Anxiety' +
                '        and' +
                '        more.' +
                '      </div>' +
                '' +
                '      <div class="meditation-box-points">' +
                '        <ul>' +
                '          <li class="white animated fadeInDownTiny delay3Therapy">Effective, easy to use</li>' +
                '          <li class="white animated fadeInDownTiny delay4Therapy">Completely customizable to best fit your needs</li>' +
                '          <li class="white animated fadeInDownTiny delay5Therapy">Placeholder placeholder placeholder</li>' +
                '          <li class="white animated fadeInDownTiny delay6Therapy">Fix all issues in the modern world</li>' +
                '        </ul>' +
                '      </div>' +
                '' +
                '      <div class = "row move-up animated fadeInDown delay1"><span class="meditation-box-button margin-top">How does it work?</span><span class="meditation-box-button margin-top">GET STARTED</span>' +

                '      </span></div>';

            document.getElementById('meditation-focus-text').innerHTML = therapy3;
        }
    }
}