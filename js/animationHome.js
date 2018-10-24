

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

