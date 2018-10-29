


function returnHome() {
    window.location = "index.html";
}



//EMDR Element
var element = document.getElementById('alternate');
var positionInfo = element.getBoundingClientRect();
var width = positionInfo.width - 175;

var alternate = anime({
    targets: '#alternate .el',
    translateX: width,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutQuart'
});



$("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "flipInX",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 5100,
    complete: function () {
        // Called after the entrance animation is executed.
    }
});

function removeFocus() {
    document.getElementById("header-nav").blur();
    document.getElementById("first-nav").blur();
    document.getElementById("second-nav").blur();
    document.getElementById("third-nav").blur();
    document.getElementById("fourth-nav").blur();
}

window.addEventListener('resize', fitToContainer);

function resizeCanvas() {
    console.log('s');
}

ScrollReveal({ distance: '-15px' });
ScrollReveal().reveal('.e1');
ScrollReveal().reveal('.e2', { delay: 100 });
ScrollReveal().reveal('.e3', { delay: 200 });
ScrollReveal().reveal('.e4', { delay: 300 });
ScrollReveal().reveal('.e5', { delay: 400 });
ScrollReveal().reveal('.e6', { delay: 500 });

ScrollReveal().reveal('.s1', { delay: 70 });
ScrollReveal().reveal('.s2', { delay: 140 });
ScrollReveal().reveal('.s3', { delay: 210 });
ScrollReveal().reveal('.s4', { delay: 280 });
ScrollReveal().reveal('.s5', { delay: 350 });
ScrollReveal().reveal('.s6', { delay: 420 });
ScrollReveal().reveal('.s7', { delay: 490 });

ScrollReveal().reveal('.x1', { delay: 100 });
ScrollReveal().reveal('.x2', { delay: 200 });
ScrollReveal().reveal('.x3', { delay: 300 });

ScrollReveal().reveal('.y1', { delay: 300 });

ScrollReveal().reveal('.f1', { delay: 100 });
ScrollReveal().reveal('.f2', { delay: 200 });
ScrollReveal().reveal('.f3', { delay: 300 });

ScrollReveal().reveal('.u1', { delay: 50 });
ScrollReveal().reveal('.u2', { delay: 100 });
ScrollReveal().reveal('.u3', { delay: 150 });
ScrollReveal().reveal('.u4', { delay: 200 });


//var canvas = document.querySelector('canvas');
fitToContainer();

function fitToContainer() {
    console.log('s');
    var canvas = document.getElementById("bubbly");

    canvas.style.width = '100%';
    canvas.style.height = '100%';

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}

bubbly({
    colorStart: '#fff4e6',
    colorStop: '#ffe9e4',
    blur: 1,
    compose: 'source-over',
    canvas: document.querySelector("#bubbly"), // default is created and attached
    bubbleFunc: () => `hsla(${Math.random() * 50}, 100%, 50%, .3)`
});

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

        document.getElementById("therapyOption1").className = "no-select white meditation-option highlight-color";
        document.getElementById("therapyOption2").className = "no-select white meditation-option white margin-left-right";
        document.getElementById("therapyOption3").className = "no-select white meditation-option white";

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

        document.getElementById("therapyOption2").className = "no-select white meditation-option margin-left-right highlight-color";
        document.getElementById("therapyOption1").className = "no-select white meditation-option white";
        document.getElementById("therapyOption3").className = "no-select white meditation-option white";

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

        document.getElementById("therapyOption3").className = "no-select white meditation-option highlight-color";
        document.getElementById("therapyOption1").className = "no-select white meditation-option white";
        document.getElementById("therapyOption2").className = "no-select white meditation-option white margin-left-right";

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

function enterTracking(trackingMethod) {

    if (trackingMethod == "substanceAbuse") {
        document.getElementById("substanceAbuse").className = "tracking-box col-centered no-select selected-tracker";
        document.getElementById("moodTracking").className = "tracking-box col-centered no-select";
        document.getElementById("dreamTracking").className = "tracking-box col-centered no-select";
        document.getElementById("journaling").className = "tracking-box col-centered no-select";
        document.getElementById("other1").className = "tracking-box col-centered no-select";
        document.getElementById("other2").className = "tracking-box col-centered no-select";

        changeChart("substanceAbuse");
    }
    else if (trackingMethod == "moodTracking") {
        document.getElementById("substanceAbuse").className = "tracking-box col-centered no-select";
        document.getElementById("moodTracking").className = "tracking-box col-centered no-select selected-tracker";
        document.getElementById("journaling").className = "tracking-box col-centered no-select";
        document.getElementById("dreamTracking").className = "tracking-box col-centered no-select";
        document.getElementById("other1").className = "tracking-box col-centered no-select";
        document.getElementById("other2").className = "tracking-box col-centered no-select";
    }
    else if (trackingMethod == "dreamTracking") {
        document.getElementById("substanceAbuse").className = "tracking-box col-centered no-select";
        document.getElementById("moodTracking").className = "tracking-box col-centered no-select";
        document.getElementById("journaling").className = "tracking-box col-centered no-select";
        document.getElementById("dreamTracking").className = "tracking-box col-centered no-select selected-tracker";
        document.getElementById("other1").className = "tracking-box col-centered no-select";
        document.getElementById("other2").className = "tracking-box col-centered no-select";
    }
    else if (trackingMethod == "journaling") {
        document.getElementById("substanceAbuse").className = "tracking-box col-centered no-select";
        document.getElementById("moodTracking").className = "tracking-box col-centered no-select";
        document.getElementById("journaling").className = "tracking-box col-centered no-select selected-tracker";
        document.getElementById("dreamTracking").className = "tracking-box col-centered no-select";
        document.getElementById("other1").className = "tracking-box col-centered no-select";
        document.getElementById("other2").className = "tracking-box col-centered no-select";
    }
    else if (trackingMethod == "other1") {
        document.getElementById("substanceAbuse").className = "tracking-box col-centered no-select";
        document.getElementById("moodTracking").className = "tracking-box col-centered no-select";
        document.getElementById("journaling").className = "tracking-box col-centered no-select";
        document.getElementById("dreamTracking").className = "tracking-box col-centered no-select";
        document.getElementById("other1").className = "tracking-box col-centered no-select selected-tracker";
        document.getElementById("other2").className = "tracking-box col-centered no-select";
    }
    else if (trackingMethod == "other2") {
        document.getElementById("substanceAbuse").className = "tracking-box col-centered no-select";
        document.getElementById("moodTracking").className = "tracking-box col-centered no-select";
        document.getElementById("journaling").className = "tracking-box col-centered no-select";
        document.getElementById("dreamTracking").className = "tracking-box col-centered no-select";
        document.getElementById("other1").className = "tracking-box col-centered no-select";
        document.getElementById("other2").className = "tracking-box col-centered no-select selected-tracker";
    }
}

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

function changeChart(trackingOption) {
    myChart.destroy();
    if (trackingOption == "substanceAbuse") {
        var ctx = document.getElementById("myChart");
        var myBubbleChart = new Chart(ctx, {
            type: 'bubble',
            data: data,
            options: options
        });
    }
}



/*new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
*/

