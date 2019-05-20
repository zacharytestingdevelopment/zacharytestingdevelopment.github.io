
var moodChartActive = false;
var recallChartActive = false;
var sudsChartActive = false;
var vacChartActive = false;

var activeGoal;
var ctx2, ctx3, ctx4, ctx5;
var dataMood, dataSUDS, dataVAC, dataRecall, optionsMain, optionsMood, optionsSUDS, optionsVAC, optionsRecall;
var currentlyAnalyzingSession;
var longestDataInstance = [];
var goalNumber, goalTime;
var userID;
var rootRef;
var newRoot;
var goalRoot;
var therapyResults = [];
var goalResults = [];
var resultsLoaded = 0;
var isGoalAnalytics = false;
var goalResultsLoaded = 0;
var resultsToLoad = 10;
var getDate = "";
var str = "";
var pubStr;
var count = 0;
var goalCount = 0;
var headerCtx;
var headerChart;

var monday = 0;
var tuesday = 0;
var wednesday = 0;
var thursday = 0;
var friday = 0;
var saturday = 0;
var sunday = 0;
var endDaysCount = 0;
var totalLoadCount = 0;
var totalLoadCountGoal = 0;
var loadMoreCount;
var loadMoreCountGoals;
var daysCounter = 0;

var activityLabels = [];
var activityData = [];
var pastActivityDate = "";
var pastActivityDateCount = 0;
var activityDataCount = 0;
var originalGoalTime;
var goalTime;
var goalResultsInitLoadOnce = false;

var goalActiontype = "";
var goalResultsVisible = false;
var totalCompletedGoals = 0;

var goalCompletedResultsArray = [];
var averageGoalPoints = 0;
var goalPointCount = 0;

var moodResultsArray = [];
var recallResultsArray = [];
var sudsResultsArray = [];
var vacResultsArray = [];


//var a = moment([2007, 0, 29]);
//var b = moment([2007, 0, 28]);
///a.diff(b, 'days') // 1

//Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday 
var days = [0, 0, 0, 0, 0, 0, 0];

//Header chart testing

dataHeader = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [{
        label: 'Mood value',
        //backgroundColor: '#3ee986',
        hoverBackgroundColor: "#3ee986",
        pointBackgroundColor: '#3ee986',
        borderWidth: 2,
        fill: false,
        borderColor: '#3ee986',
        data: [3, 5, 7, 6, 8],
        showTooltips: true

    }]
};

dataMainChart = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [{
        label: 'Mood value',
        //backgroundColor: '#3ee986',
        hoverBackgroundColor: "#3ee986",
        pointBackgroundColor: '#3ee986',
        borderWidth: 2,
        fill: false,
        borderColor: '#3ee986',
        data: [9, 5, 7, 6, 1],
        showTooltips: true

    }]
};

var optionsVAC = {
    bezierCurve: false,
    responsive: true,
    maintainAspectRatio: false,
    intersect: false,
    animation: {
        easing: 'easeInOutQuad',
        duration: 965
    },
    scales: {
        xAxes: [{
            gridLines: {
                color: 'rgba(66,87,178, 0.1)',
                lineWidth: 1,
                drawTicks: false,
                drawOnChartArea: false,
                defaultFontStyle: 'normal',
                defaultFontSize: 40,
                //drawBorder: false
            },
            ticks: {
                fontColor: '#95aac9',
                defaultFontStyle: 'normal',
                fontSize: 13,
                fontFamily: 'Montserrat',
                padding: 20

            }
        }],
        yAxes: [{
            gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: 'rgba(149,170,201, 0.21)',
                drawBorder: false,
                drawTicks: false,
                lineWidth: 0,
                zeroLineWidth: 0,
                zeroLineColor: 'rgba(149,170,201, 0.21)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2]
            },
            ticks: {
                max: 7,
                padding: 10,
                beginAtZero: true,
                fontColor: '#95aac9',
                fontSize: 13,
                defaultFontStyle: 'normal',
                fontFamily: 'Montserrat',
                userCallback: function (label, index, labels) {
                    // when the floored value is the same as the value we have a whole number
                    if (Math.floor(label) === label) {
                        return label;
                    }

                },
                maxBarThickness: 10
            }
        }]
    },
    elements: {
        line: {
            tension: 0
        }
    },
    legend: {
        display: false
    },
    point: {
        backgroundColor: 'white'
    },
    tooltips: {
        opacity: '0.4',
        position: 'average',
        // intersect: false,
        titleFontFamily: 'Montserrat',
        bodyFontFamily: 'Montserrat',
        bodyFontStyle: 'bold',
        borderColor: '#000',
        borderWidth: 2,
        bodyFontColor: '#000',
        backgroundColor: 'rgba(255,255,255, 0.91)',
        titleFontColor: '#000',
        color: '#000',
        caretSize: 5,
        cornerRadius: 5,
        xPadding: 20,
        yPadding: 10
    }
};

var optionsMain = {

    showTooltips: true,
    bezierCurve: false,
    responsive: true,
    maintainAspectRatio: false,
    intersect: false,

    animation: {
        easing: 'easeInOutQuad',
        duration: 965
    },
    scales: {
        xAxes: [{
            gridLines: {
                color: 'rgba(66,87,178, 0.1)',
                lineWidth: .2,
                drawTicks: false,
                drawOnChartArea: false,
                defaultFontStyle: 'normal',
                defaultFontSize: 40,
                //drawBorder: false
            },
            ticks: {
                fontColor: '#95aac9',
                defaultFontStyle: 'normal',
                fontSize: 13,
                fontFamily: 'Montserrat',
                padding: 20

            }
        }],

        yAxes: [{
            gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: 'rgba(149,170,201, 0.21)',
                drawBorder: false,
                drawTicks: false,
                lineWidth: 1,
                zeroLineWidth: 0,
                zeroLineColor: 'rgba(149,170,201, 0.21)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2]
            },
            ticks: {
                max: 10,
                padding: 10,
                beginAtZero: true,
                fontColor: '#95aac9',
                fontSize: 13,
                defaultFontStyle: 'normal',
                fontFamily: 'Montserrat',
                userCallback: function (label, index, labels) {
                    // when the floored value is the same as the value we have a whole number
                    if (Math.floor(label) === label) {
                        return label;
                    }

                },
                maxBarThickness: 10
            }
        }]
    },
    elements: {
        point: { radius: 3 },
        line: { tension: 0 }


    },
    legend: {
        display: false
    },
    point: {
        backgroundColor: 'white'
    },
    tooltips: {
        intersect: false,
        opacity: '0.4',
        position: 'average',
        // intersect: false,
        titleFontFamily: 'Montserrat',
        bodyFontFamily: 'Montserrat',
        bodyFontStyle: 'bold',
        borderColor: '#000',
        borderWidth: 2,
        bodyFontColor: '#000',
        backgroundColor: 'rgba(255,255,255, 0.91)',
        titleFontColor: '#000',
        color: '#000',
        caretSize: 5,
        cornerRadius: 5,
        xPadding: 20,
        yPadding: 10,
    }
};

var optionsMainHeader = {

    showTooltips: true,
    bezierCurve: true,
    responsive: true,
    maintainAspectRatio: false,
    intersect: false,

    animation: {
        easing: 'easeInOutQuad',
        duration: 965
    },
    scales: {
        xAxes: [{
            gridLines: {
                color: 'rgba(66,87,178, 0.1)',
                lineWidth: .2,
                drawTicks: false,
                drawOnChartArea: false,
                defaultFontStyle: 'normal',
                defaultFontSize: 40,
                //drawBorder: false
            },
            ticks: {
                fontColor: '#95aac9',
                defaultFontStyle: 'normal',
                fontSize: 13,
                fontFamily: 'Montserrat',
                padding: 20

            }
        }],

        yAxes: [{
            gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: 'rgba(149,170,201, 0.21)',
                drawBorder: false,
                drawTicks: false,
                lineWidth: 1,
                zeroLineWidth: 0,
                zeroLineColor: 'rgba(149,170,201, 0.21)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2]
            },
            ticks: {
                max: 10,
                padding: 10,
                beginAtZero: true,
                fontColor: '#95aac9',
                fontSize: 13,
                defaultFontStyle: 'normal',
                fontFamily: 'Montserrat',
                userCallback: function (label, index, labels) {
                    // when the floored value is the same as the value we have a whole number
                    if (Math.floor(label) === label) {
                        return label;
                    }

                },
                maxBarThickness: 10
            }
        }]
    },
    elements: {
        point: { radius: 2 },


    },
    legend: {
        display: false
    },
    point: {
        backgroundColor: 'white'
    },
    tooltips: {
        intersect: false,
        opacity: '0.4',
        position: 'average',
        // intersect: false,
        titleFontFamily: 'Montserrat',
        bodyFontFamily: 'Montserrat',
        bodyFontStyle: 'bold',
        borderColor: '#000',
        borderWidth: 2,
        bodyFontColor: '#000',
        backgroundColor: 'rgba(255,255,255, 0.91)',
        titleFontColor: '#000',
        color: '#000',
        caretSize: 5,
        cornerRadius: 5,
        xPadding: 20,
        yPadding: 10,
    }
};



headerCtx = document.getElementById('main-chart').getContext('2d');


headerChart = new Chart(headerCtx, {
    type: 'line',
    data: dataHeader,
    options: optionsMain

});


var mainChart = document.getElementById("headerChart").getContext('2d');

myMainChart = new Chart(mainChart, {
    type: 'line',
    data: dataMainChart,
    options: optionsMainHeader
});


/*
headerCtx = document.getElementById('main-chart').getContext('2d');


headerChart = new Chart(headerCtx, {
    type: 'line',
    data: dataHeader,
    options: optionsMain

});
*/

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        userID = firebase.auth().currentUser.uid;
        rootRef = firebase.database().ref('users');
        newRoot = rootRef.child(userID + "/emdr").child('therapyResults');
        goalRoot = rootRef.child(userID + "/emdr").child('goalResults');



        prepareResults();
        highlightCover();
        var desc = firebase.database().ref('users/' + userID + "/userData/" + 'userPrefs/journaling');
        desc.once('value', function (snapshot) {
            jQuery('#loader').fadeOut(330);
        });

    } else {
        console.log("No user is signed in");
    }
});

function highlightCover() {

}

/*
function changeChart(chart) {
}
*/

function getCurrentDate() {
    var d = new Date();
    var currentTime = ([d.getFullYear(), d.getMonth(), d.getDate()]);
    //console.log("CURRENT TIME: " + currentTime);
    return currentTime;
}

/*
function getTotalDays() {
    var totalDays;
    var user = firebase.auth().currentUser;
    var desc = firebase.database().ref('users/' + user.uid + "/userData/");
    desc.on('value', function (snapshot) {
        var starting = moment(getCurrentDate());
        var ending = moment([snapshot.val().yearCreatedUser, snapshot.val().monthCreatedUser, snapshot.val().dayCreatedUser]);
        totalDays = starting.diff(ending, 'days');
    });
}
*/

function viewGoalResults() {

    $("#view-goal-modal").modal('hide');

    if (!goalResultsVisible) {
        $("#goal-analysis").removeClass("analysis-box-hidden");


        /*
        $('body').css({
            overflow: 'hidden',
            height: '100%'
        });
        */

        prepareGoalResults();
        goalResultsVisible = true;
    }
    else {

        /*
        $('body').css({
            overflow: 'auto',
            height: 'auto'
        });
        */


        $("#goal-analysis").addClass("analysis-box-hidden");
        goalResultsVisible = false;

        setTimeout(function () {
            $("#goal-analysis").animate({ scrollTop: 0 }, "fast");
            $("#goal-summary-line").removeClass("goal-results-summary-header-line-active");
            $("#goal-summary-line").addClass("goal-results-summary-header-line-inactive");
            $("#goal-summary-line-mobile").removeClass("goal-results-summary-header-line-active");
            $("#goal-summary-line-mobile").addClass("goal-results-summary-header-line-inactive");
        }, 300);
    }
}

function prepareGoalResults() {
    console.log("Goal results being prepared\n-----------------------");


    setTimeout(function () {
        $("#goal-summary-line").removeClass("goal-results-summary-header-line-inactive");
        $("#goal-summary-line").addClass("goal-results-summary-header-line-active");
        $("#goal-summary-line-mobile").removeClass("goal-results-summary-header-line-inactive");
        $("#goal-summary-line-mobile").addClass("goal-results-summary-header-line-active");
    }, 210);

    if (!goalResultsInitLoadOnce) {
        goalRoot.once('value', function (snapshot) {
            snapshot.forEach(function (_child) {
                var childElement = _child.key;
                goalResults.push(childElement);
            });



            if (goalResults.length >= 1) {
                $("#goal-summary-section").removeClass("hidden-opacity");
                loadGoalResults();
            }
            else {
                //No results
                var noGoal = "";
                noGoal += "<div class = 'col col-12 col-centered'><div class = 'animated flipInX text-centered col-centered row'><div";
                noGoal += "                    class=\"loading-green-box loading-green-box-larger no-select col col-11 col-md-7 col-lg-6 col-centered\">";
                noGoal += "                    No goal results found";
                noGoal += "                <\/div>";
                noGoal += "";
                noGoal += "                <div class=\"col col-12 text-center margin-top-medium green-text col-centered\">";
                noGoal += "                    You can set a goal on the main analytics page. <span onclick='viewGoalResults()' class = 'no-select green-link-style'>Just close this panel!</span>";
                noGoal += "                <\/div></div></div>";

                document.getElementById("populate-goal-analytics").innerHTML = noGoal;

                $("#goal-summary-section").addClass("hidden-opacity");
            }
        });

        goalResultsInitLoadOnce = true;
    }


}

function prepareResults() {
    newRoot.once('value', function (snapshot) {
        snapshot.forEach(function (_child) {
            var childElement = _child.key;
            therapyResults.push(childElement);
        });

        if (therapyResults.length >= 1) {
            //You have results

            var loadMore = "";
            loadMore += "<div id = 'error-message-box'><span onclick=\"loadMoreNotes()\" class=\"load-more no-select margin-top-large\">";
            loadMore += "                                    Load more";
            loadMore += "                                <\/span></div>";

            document.getElementById("load-more-box").innerHTML = loadMore;

            loadResults();

        }
        else {
            //No results

            var noNotes = "";
            noNotes += "<span class=\"no-notes-text\">You have no sessions saved!<\/span>";
            noNotes += "                                <div>";
            noNotes += "                                    <a href=\"emdr.html\" class=\"kill-link-style\">";
            noNotes += "                                        <div class=\"no-notes-button no-select\">";
            noNotes += "                                            Get started";
            noNotes += "                                        <\/div>";
            noNotes += "                                    <\/a>";
            noNotes += "                                <\/div>";

            document.getElementById("load-more-box-put").innerHTML = "<div class = 'col col-11 col-md-8 col-lg-8 top-split animated flipInX text-center col-centered'>" + noNotes + "</div>";
        }

        loadSessionsCompleted();
        loadDaysUsed();
        loadGoal();
        if (therapyResults.length > 0) {
            triggerActivityData();
        }
        else {
            document.getElementById("therapies-are-saved").className = "hidden";
        }
    });
}

function updateDaysCounter() {
    daysCounter++;
}

function triggerActivityData() {
    newRoot.once('value', function (snapshot) {
        snapshot.forEach(function (_child) {
            var childElement = _child.key;
            populateActivityData(childElement);
        });
    });
}

function populateActivityData(child) {

    var user = firebase.auth().currentUser;
    var desc = firebase.database().ref('users/' + user.uid + "/emdr/therapyResults/" + child);

    desc.once('value', function (snapshot) {

        if (activityDataCount <= therapyResults.length) {
            activityDataCount++

            if (pastActivityDate == "") {
                pastActivityDate = snapshot.val().setDate;
            }

            if (pastActivityDate == snapshot.val().setDate) {
                pastActivityDateCount++;
            }
            else {

                activityLabels.push(pastActivityDate);
                activityData.push(pastActivityDateCount);

                pastActivityDate = snapshot.val().setDate;
                pastActivityDateCount = 0;
                pastActivityDateCount++;

            }

            if (activityDataCount == therapyResults.length) {


                if (activityLabels[activityLabels.length - 1] != snapshot.val().setDate) {
                    activityLabels.push(snapshot.val().setDate);
                    activityData.push(pastActivityDateCount);
                }

                //console.log("We have finished\n----------------------------\nActivity labels: " + activityLabels + "\nActivity data: " + activityData);

                if (activityLabels.length > 1) {
                    loadActivityChart('multiple');
                }
                else {
                    loadActivityChart('one');
                }
            }

        }
    });
}

function loadActivityChart(activityNumber) {
    var user = firebase.auth().currentUser;
    var desc = firebase.database().ref('users/' + user.uid + "/emdr/therapyResults/");

    if (activityNumber == "one") {
        desc.on('value', function (snapshot) {

            console.log("Labels: " + activityLabels);
            activityLabels.push(activityLabels[0]);
            activityData.push(activityData[0]);

            if (snapshot.exists()) {
                document.getElementById("your-activity-loading").innerHTML = "Your activity";
                var ctx = document.getElementById('activityChart').getContext('2d')
                var activityChart = new Chart(ctx,
                    {
                        legend: {
                            display: false
                        },
                        tooltips: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    return tooltipItem.yLabel;
                                }
                            }
                        },
                        options: {
                            showTooltips: true,
                            bezierCurve: false,
                            responsive: true,
                            maintainAspectRatio: false,
                            intersect: false,
                            animation: {
                                easing: 'easeInOutQuad',
                                duration: 965
                            },
                            scales: {
                                xAxes: [{
                                    //offset: true,
                                    gridLines: {
                                        color: 'rgba(66,87,178, 0.1)',
                                        lineWidth: .2,
                                        drawTicks: false,
                                        drawOnChartArea: false,
                                        defaultFontStyle: 'normal',
                                        defaultFontSize: 40,
                                        //drawBorder: false
                                    },
                                    ticks: {

                                        display: false,
                                        fontColor: '#95aac9',
                                        defaultFontStyle: 'normal',
                                        fontSize: 13,
                                        fontFamily: 'Montserrat',
                                        padding: 20

                                    }
                                }],

                                yAxes: [{

                                    gridLines: {
                                        borderDash: [2],
                                        borderDashOffset: [2],
                                        color: 'rgba(149,170,201, 0.21)',
                                        drawBorder: false,
                                        drawTicks: false,
                                        lineWidth: 1,
                                        zeroLineWidth: 0,
                                        zeroLineColor: 'rgba(149,170,201, 0.21)',
                                        zeroLineBorderDash: [2],
                                        zeroLineBorderDashOffset: [2]
                                    },
                                    ticks: {

                                        //max: 10,
                                        padding: 10,
                                        beginAtZero: true,
                                        fontColor: '#95aac9',
                                        fontSize: 13,
                                        defaultFontStyle: 'normal',
                                        fontFamily: 'Montserrat',
                                        userCallback: function (label, index, labels) {
                                            // when the floored value is the same as the value we have a whole number
                                            if (Math.floor(label) === label) {
                                                return label;
                                            }

                                        },
                                        maxBarThickness: 10
                                    }
                                }]
                            },
                            elements: {
                                point: { radius: 3 },

                                line: {
                                    tension: 0
                                }
                            },
                            legend: {
                                display: false
                            },
                            point: {
                                backgroundColor: 'white'
                            },
                            tooltips: {
                                intersect: false,
                                opacity: '0.4',
                                position: 'average',
                                // intersect: false,
                                titleFontFamily: 'Montserrat',
                                bodyFontFamily: 'Montserrat',
                                bodyFontStyle: 'bold',
                                borderColor: '#000',
                                borderWidth: 2,
                                bodyFontColor: '#000',
                                backgroundColor: 'rgba(255,255,255, 0.91)',
                                titleFontColor: '#000',
                                color: '#000',
                                caretSize: 5,
                                cornerRadius: 5,
                                xPadding: 20,
                                yPadding: 10,
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: true,
                        type: 'line',
                        data: {
                            //labels: ['3', '', '', '', ''],
                            labels: activityLabels,
                            datasets: [{
                                borderColor: '#4257b2',
                                pointBorderColor: '#4257b2',
                                pointBackgroundColor: '#4257b2',
                                //data: [40, 25, 15, 10, 50]
                                data: activityData
                            }]
                        }
                    });
            }
            else {

            }

        });
    }
    else if (activityNumber == "multiple") {
        desc.on('value', function (snapshot) {
            if (snapshot.exists()) {
                document.getElementById("your-activity-loading").innerHTML = "Your activity";
                var ctx = document.getElementById('activityChart').getContext('2d');
                var activityChart = new Chart(ctx,
                    {
                        legend: {
                            display: false
                        },
                        tooltips: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    return tooltipItem.yLabel;
                                }
                            }
                        },

                        options: {
                            showTooltips: true,
                            bezierCurve: false,
                            responsive: true,
                            maintainAspectRatio: false,
                            intersect: false,
                            animation: {
                                easing: 'easeInOutQuad',
                                duration: 965
                            },
                            scales: {
                                xAxes: [{
                                    offset: true,
                                    gridLines: {
                                        color: 'rgba(66,87,178, 0.1)',
                                        lineWidth: .2,
                                        drawTicks: false,
                                        drawOnChartArea: false,
                                        defaultFontStyle: 'normal',
                                        defaultFontSize: 40,
                                        //drawBorder: false
                                    },
                                    ticks: {
                                        display: false,
                                        fontColor: '#95aac9',
                                        defaultFontStyle: 'normal',
                                        fontSize: 13,
                                        fontFamily: 'Montserrat',
                                        padding: 40

                                    }
                                }],

                                yAxes: [{
                                    gridLines: {
                                        borderDash: [2],
                                        borderDashOffset: [2],
                                        color: 'rgba(149,170,201, 0.21)',
                                        drawBorder: false,
                                        drawTicks: false,
                                        lineWidth: 1,
                                        zeroLineWidth: 0,
                                        zeroLineColor: 'rgba(149,170,201, 0.21)',
                                        zeroLineBorderDash: [2],
                                        zeroLineBorderDashOffset: [2]
                                    },
                                    ticks: {

                                        //max: 10,
                                        padding: 10,
                                        beginAtZero: true,
                                        fontColor: '#95aac9',
                                        fontSize: 13,
                                        defaultFontStyle: 'normal',
                                        fontFamily: 'Montserrat',
                                        userCallback: function (label, index, labels) {
                                            // when the floored value is the same as the value we have a whole number
                                            if (Math.floor(label) === label) {
                                                return label;
                                            }

                                        },
                                        maxBarThickness: 10
                                    }
                                }]
                            },
                            elements: {
                                point: { radius: 3 },

                                line: {
                                    tension: 0
                                }
                            },
                            legend: {
                                display: false
                            },
                            point: {
                                backgroundColor: 'white'
                            },
                            tooltips: {
                                intersect: false,
                                opacity: '0.4',
                                position: 'average',
                                // intersect: false,
                                titleFontFamily: 'Montserrat',
                                bodyFontFamily: 'Montserrat',
                                bodyFontStyle: 'bold',
                                borderColor: '#000',
                                borderWidth: 2,
                                bodyFontColor: '#000',
                                backgroundColor: 'rgba(255,255,255, 0.91)',
                                titleFontColor: '#000',
                                color: '#000',
                                caretSize: 5,
                                cornerRadius: 5,
                                xPadding: 20,
                                yPadding: 10,
                            }
                        },
                        type: 'line',
                        data: {
                            labels: activityLabels,
                            datasets: [{
                                fill: false,
                                borderColor: '#4257b2',
                                pointBorderColor: '#4257b2',
                                pointBackgroundColor: '#4257b2',
                                data: activityData
                            }]
                        }
                    });
            }
            else {

            }

        });
    }
}

function loadDaysUsed() {

    var user = firebase.auth().currentUser;
    //daysCounter = therapyResults.length - 1;

    if (therapyResults.length > 0) {
        for (i = therapyResults.length - 1; i >= 0; i--) {
            //console.log(therapyResults[i]);
            var desc = firebase.database().ref('users/' + user.uid + "/emdr/therapyResults/" + therapyResults[i]);
            desc.on('value', function (snapshot) {
                incrementDays(snapshot.val().dayOfSession);
            });
        }
    }
    else {

    }

}

function incrementDays(day) {
    if (daysCounter <= therapyResults.length - 1) {
        if (day == 0) {
            days[0] = (days[0] + 1);
        }
        else if (day == 1) {
            days[1] = (days[1] + 1);
        }
        else if (day == 2) {
            days[2] = (days[2] + 1);
        }
        else if (day == 3) {
            days[3] = (days[3] + 1);
        }
        else if (day == 4) {
            days[4] = (days[4] + 1);
        }
        else if (day == 5) {
            days[5] = (days[5] + 1);
        }
        else if (day == 6) {
            days[6] = (days[6] + 1);
        }

        updateDaysCounter();


        if (daysCounter == therapyResults.length) {
            populateDaysChart(days);
        }
    }
    return days;
}

function removeElementsWithValue(arr, val) {
    var i = arr.length;
    while (i--) {
        if (arr[i] === val) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

function populateDaysChart(daysInput) {
    var daysLabel = [];
    var labelIndex = 0;

    //console.log("Original days input: " + daysInput);

    var maxIndex = indexOfMax(daysInput);
    var commonDayNumber = daysInput[maxIndex];

    if (commonDayNumber == 1) {
        document.getElementById("most-common-day-number").innerHTML = commonDayNumber + " session on ";
    }
    else {
        document.getElementById("most-common-day-number").innerHTML = commonDayNumber + " sessions on ";
    }

    //console.log("brrt:" + maxIndex);
    if (maxIndex == 0) {
        document.getElementById("most-common-day").innerHTML = "Sundays";
        document.getElementById("most-active-day").innerHTML = "Sunday";
    }
    else if (maxIndex == 1) {
        document.getElementById("most-common-day").innerHTML = "Mondays";
        document.getElementById("most-active-day").innerHTML = "Monday";
    }
    else if (maxIndex == 2) {
        document.getElementById("most-common-day").innerHTML = "Tuesdays";
        document.getElementById("most-active-day").innerHTML = "Tuesday";
    }
    else if (maxIndex == 3) {
        document.getElementById("most-common-day").innerHTML = "Wednesdays";
        document.getElementById("most-active-day").innerHTML = "Wednesday";
    }
    else if (maxIndex == 4) {
        document.getElementById("most-common-day").innerHTML = "Thursdays";
        document.getElementById("most-active-day").innerHTML = "Thursday";
    }
    else if (maxIndex == 5) {
        document.getElementById("most-common-day").innerHTML = "Fridays";
        document.getElementById("most-active-day").innerHTML = "Friday";
    }
    else if (maxIndex == 6) {
        document.getElementById("most-common-day").innerHTML = "Saturdays";
        document.getElementById("most-active-day").innerHTML = "Saturday";
    }

    if (daysInput[0] > 0) {
        daysLabel[labelIndex] = "Sunday";
        labelIndex++;
    }
    if (daysInput[1] > 0) {
        daysLabel[labelIndex] = "Monday";
        labelIndex++;
    }
    if (daysInput[2] > 0) {
        daysLabel[labelIndex] = "Tuesday";
        labelIndex++;
    }
    if (daysInput[3] > 0) {
        daysLabel[labelIndex] = "Wednesday";
        labelIndex++;
    }
    if (daysInput[4] > 0) {
        daysLabel[labelIndex] = "Thursday";
        labelIndex++;
    }
    if (daysInput[5] > 0) {
        daysLabel[labelIndex] = "Friday";
        labelIndex++;
    }
    if (daysInput[6] > 0) {
        daysLabel[labelIndex] = "Saturday";
        labelIndex++;
    }

    daysInput = removeElementsWithValue(daysInput, 0);

    var ctx = document.getElementById('dayChart').getContext('2d');
    var dayChart = new Chart(ctx,
        {
            type: 'doughnut',
            options: {
                legend: {
                    display: false
                }, cutoutPercentage: 72

            },

            data: {
                labels: daysLabel,

                borderWidth: 3,
                datasets: [{
                    backgroundColor: ["#3ee986", "#E9463E", "#3EE4E9", "#E93EB3", "#A83EE9", "#E9E63E", "#EEB94F"],
                    data: daysInput
                }]
            }
        });
}

function tryGoalAgain() {
    $("#goal-details-modal").modal('hide');
    var user = firebase.auth().currentUser;

    var desc = firebase.database().ref('users/' + user.uid + "/emdr/therapyAnalysis");
    //console.log("goal action type: " + goalActiontype);
    desc.on('value', function (snapshot) {
        if (snapshot.exists()) {
            if (snapshot.val().goalActive == "yes") {
                $("#reset-goal-modal").modal('toggle');
            }
            else {
                goalAction('reset');
            }
        }
        else {
            goalAction('reset');
        }
    });
}

function goalDetails(goal) {
    console.log(goal);

    activeGoal = goal;

    $("#goal-details-modal").modal('toggle');

    var user = firebase.auth().currentUser;
    var desc = firebase.database().ref('users/' + user.uid + "/emdr/goalResults/" + goal);
    desc.on('value', function (snapshot) {
        document.getElementById("session-count-goal").innerHTML = snapshot.val().setGoalNumber;
        document.getElementById("session-count-timescale").innerHTML = snapshot.val().setGoalTimescale
        document.getElementById("goal-date-beginning").innerHTML = snapshot.val().setStartingDate;
        document.getElementById("goal-date-ending").innerHTML = snapshot.val().setCompletedDate;

        if (snapshot.val().setCompleted == "yes") {
            //You completed this goal
            $("#goal-completed-modal").removeClass("goal-completed-highlight-red");
            $("#goal-completed-modal").addClass("goal-completed-highlight-green");
        }
        else {
            //You did not complete this goal
            $("#goal-completed-modal").removeClass("goal-completed-highlight-green");
            $("#goal-completed-modal").addClass("goal-completed-highlight-red");
        }

        document.getElementById("goal-number-completed").innerHTML = snapshot.val().setCompletedNumber;
        document.getElementById("goal-number-goal").innerHTML = snapshot.val().setGoalNumber;

        document.getElementById("goal-completed-modal").innerHTML = snapshot.val().setCompleted;

        document.getElementById("goal-percentage-completed").innerHTML = snapshot.val().completedPercentage + "%";
        //console.log(snapshot.val().completedPercentage);
    });

}

function loadGoalResults() {

    var user = firebase.auth().currentUser;
    //var totalLoadCountLocal = totalLoadCountGoal - 1;

    goalCount = goalResults.length - 1;

    if (!isGoalAnalytics) {

        if (goalResults.length > 1) {
            document.getElementById("goal-num-count").innerHTML = goalResults.length + " goals";
            document.getElementById("goal-num-count-mobile").innerHTML = goalResults.length + " goals";
        }
        else {
            document.getElementById("goal-num-count").innerHTML = goalResults.length + " goal";
            document.getElementById("goal-num-count-mobile").innerHTML = goalResults.length + " goal";
        }

        document.getElementById("populate-goal-analytics").innerHTML = "";

        var countingVar = 0;
        var endCount = goalResults.length;

        for (i = goalResults.length - 1; i >= 0; i--) {
            var desc = firebase.database().ref('users/' + user.uid + "/emdr/goalResults/" + goalResults[i]);
            desc.on('value', function (snapshot) {

                if (snapshot.val().setCompleted == "yes") {
                    totalCompletedGoals++;
                }

                goalPointCount += snapshot.val().completedPercentage;

                countingVar++;

                if (countingVar == endCount) {

                    //console.log("Total points: " + goalPointCount);



                    averageGoalPoints = goalPointCount / endCount;
                    averageCompleted = totalCompletedGoals / endCount;

                    if (averageGoalPoints % 1 == 0) {
                        averageGoalPoints = parseFloat(Math.round(goalPointCount) / endCount).toFixed(0);
                    }
                    else {
                        averageGoalPoints = parseFloat(Math.round(goalPointCount) / endCount).toFixed(2);
                    }

                    if (averageCompleted % 1 == 0) {
                        averageCompleted = parseFloat(Math.round(totalCompletedGoals * 100) / endCount).toFixed(0);
                    }
                    else {
                        averageCompleted = parseFloat(Math.round(totalCompletedGoals * 100) / endCount).toFixed(2);
                    }

                    goalCompletedResultsArray = [(100 - averageCompleted), averageCompleted];

                    document.getElementById("goal-completed-percentage").innerHTML = averageCompleted + "%";
                    document.getElementById("goal-completed-percentage-mobile").innerHTML = averageCompleted + "%";

                    document.getElementById("goal-average-points").innerHTML = averageGoalPoints + "%";
                    document.getElementById("goal-average-points-mobile").innerHTML = averageGoalPoints + "%";

                    var ctx = document.getElementById('averageGoalCompleted').getContext('2d')
                    var averageGoalChart = new Chart(ctx,
                        {
                            type: 'doughnut',
                            options: {
                                tooltips: {
                                    mode: "dataset",
                                    label: false
                                },
                                legend: {
                                    display: false
                                },
                                cutoutPercentage: 72

                            },
                            data: {
                                labels: ["Completed", "Not completed"],
                                datasets: [{
                                    backgroundColor: ["#E9463E", "#3ee986"],
                                    data: goalCompletedResultsArray
                                }]
                            }
                        });

                    var ctx2 = document.getElementById('averageGoalCompleted2').getContext('2d')
                    var averageGoalChart2 = new Chart(ctx2,
                        {
                            type: 'doughnut',
                            options: {
                                tooltips: {
                                    mode: "dataset",
                                    label: false
                                },
                                legend: {
                                    display: false
                                },
                                cutoutPercentage: 72

                            },
                            data: {
                                labels: ["Completed", "Not completed"],
                                datasets: [{
                                    backgroundColor: ["#E9463E", "#3ee986"],
                                    data: goalCompletedResultsArray
                                }]
                            }
                        });
                }



            });
        }


        for (i = goalResults.length - 1; i >= 0; i--) {
            if (totalLoadCountGoal < goalResults.length) {
                str = goalResults[i].replace(/\s+/g, '');
                id = "box" + str;

                if (goalResultsLoaded >= 10) {
                    //console.log("BREAK AT ---- " + totalLoadCount);
                    break;
                }
                //goalResult++;
                goalResultsLoaded++;
                totalLoadCountGoal++;


                var goalResultsVar = "";
                goalResultsVar += "<span class = 'col col-12 col-centered fixDis'><div id=" + str + " ";
                goalResultsVar += "                    class=\"col col-11 margin-top animated fadeIn no-select col-lg-11 col-xl-9 col-centered goal-results-box\" onclick='goalDetails(\"" + str + "\");'\">";
                goalResultsVar += "                    <div id=goalDate" + str + " class=\"goal-results-box-header no-select inherit\">Ended February 31rd, 2019";
                goalResultsVar += "                    <\/div>";
                goalResultsVar += "                   ";
                goalResultsVar += "                    <span class=\"block-mobile\">";
                goalResultsVar += "                        <span> <span class=\"goal-results-divider\"><\/span><span id=goalPercentage" + str + " class=\"goal-percentage no-select inherit\">100%<\/span></span>";
                goalResultsVar += "                        <span class=\"goal-percentage-bar\">";
                goalResultsVar += "                            <div id=goalPercentageBar" + str + " class=\"goal-percentage-fill\">";
                goalResultsVar += "";
                goalResultsVar += "                            <\/div>";
                goalResultsVar += "                        <\/span>";
                goalResultsVar += "                    <\/span>";
                goalResultsVar += "                <\/div></span>";

                document.getElementById("populate-goal-analytics").innerHTML += goalResultsVar;
            }
            else {
                break;
            }

            //console.log(goalResults[i]);
            var desc = firebase.database().ref('users/' + user.uid + "/emdr/goalResults/" + goalResults[i]);
            desc.on('value', function (snapshot) {

                if (snapshot.exists()) {

                    var tempStr = goalResults[goalCount];
                    document.getElementById("goalDate" + tempStr).innerHTML = snapshot.val().setCompletedDate;
                    document.getElementById("goalPercentage" + tempStr).innerHTML = snapshot.val().completedPercentage + "%";
                    if (snapshot.val().setCompleted != "no") {
                        document.getElementById(tempStr).className = "col col-11 margin-top-medium col-lg-11 col-xl-9 col-centered goal-results-box goal-results-box-green";
                    }
                    else {
                        document.getElementById(tempStr).className = "col col-11 margin-top-medium col-lg-11 col-xl-9 col-centered goal-results-box goal-results-box-red";
                    }

                    setTimeout(function () {
                        //console.log(snapshot.val().completedPercentage);
                        if (parseFloat(snapshot.val().completedPercentage) < 100) {
                            document.getElementById("goalPercentageBar" + tempStr).style.width = (parseFloat(snapshot.val().completedPercentage) + "%");
                        }
                        else if (parseFloat(snapshot.val().completedPercentage) >= 100) {
                            document.getElementById("goalPercentageBar" + tempStr).style.width = "100%";
                        }


                    }, 210);



                    updateGoalCount();
                    //console.log(tempStr);
                }

            });

        }

        $("#goal-summary-line").removeClass("goal-results-summary-header-line-inactive");
        $("#goal-summary-line").addClass("goal-results-summary-header-line-active");
        $("#goal-summary-line-mobile").removeClass("goal-results-summary-header-line-inactive");
        $("#goal-summary-line-mobile").addClass("goal-results-summary-header-line-active");

    }

    populateGoalSummary();

    document.getElementById("load-more-container").innerHTML = "<span class = 'animated fadeIn'> <span onclick='loadMoreGoals()' class='load-more-button'>Load more</span></span>"
    isGoalAnalytics = true;
}

function populateGoalSummary() {
    //maybe make goal chart and summary two different blocks
    //yea that sounds good homie
}

function loadResults() {

    //console.log("INIT TOTAL: " + totalLoadCount);
    var user = firebase.auth().currentUser;
    var totalLoadCountLocal = totalLoadCount - 1;
    count = therapyResults.length - 1;
    //totalLoadCount = totalLoadCount;
    //totalLoadCount = totalLoadCount - 1;
    for (i = therapyResults.length - 1; i >= 0; i--) {

        if (totalLoadCount < therapyResults.length) {
            //console.log("UPDATED TOTAL: " + totalLoadCount);

            str = therapyResults[i].replace(/\s+/g, '');
            id = "box" + str;

            var resultsVar = "";
            resultsVar += "<tr id=" + id + " class = 'animated fadeIn entry no-select' onclick='analyzeSet(\"" + str + "\");'\">";
            resultsVar += "                                        <td id=date" + str + " class=\"goal-project\">";
            resultsVar += "                                            1\/2\/2019";
            resultsVar += "                                        <\/td>";
            resultsVar += "                                        <td id=completionStatus" + str + " class=\"goal-status\">";
            resultsVar += "                                            <span class=\"text-warning\">●<\/span> Started";
            resultsVar += "                                        <\/td>";
            resultsVar += "                                        <td id=notes" + str + " class=\"goal-progress\">";
            resultsVar += "                                            5";
            resultsVar += "                                        <\/td>";
            resultsVar += "                                        <td class=\"goal-date\">";
            resultsVar += "                                            <time id=setUsed" + str + " datetime=\"2018-10-24\">Quick set<\/time>";
            resultsVar += "                                        <\/td>";
            resultsVar += "";
            resultsVar += "                                        <td class=\"text-right\">";
            resultsVar += "                                            <span class=\"analyze-link no-select\">Analyze session<\/span>";
            resultsVar += "                                            <div class=\"dropdown\">";
            resultsVar += "                                                <a href=\"#!\" class=\"dropdown-ellipses dropdown-toggle\" role=\"button\"";
            resultsVar += "                                                    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"";
            resultsVar += "                                                    data-boundary=\"window\">";
            resultsVar += "                                                    <i class=\"fe fe-more-vertical\"><\/i>";
            resultsVar += "                                                <\/a>";
            resultsVar += "                                                <div class=\"dropdown-menu dropdown-menu-right\">";
            resultsVar += "                                                    <a href=\"#!\" class=\"dropdown-item\">";
            resultsVar += "                                                        Action";
            resultsVar += "                                                    <\/a>";
            resultsVar += "                                                    <a href=\"#!\" class=\"dropdown-item\">";
            resultsVar += "                                                        Another action";
            resultsVar += "                                                    <\/a>";
            resultsVar += "                                                    <a href=\"#!\" class=\"dropdown-item\">";
            resultsVar += "                                                        Something else here";
            resultsVar += "                                                    <\/a>";
            resultsVar += "                                                <\/div>";
            resultsVar += "                                            <\/div>";
            resultsVar += "                                        <\/td>";
            resultsVar += "                                    <\/tr>";


            if (resultsLoaded >= 10) {
                //console.log("BREAK AT ---- " + totalLoadCount);
                break;
            }
            resultsLoaded++;
            totalLoadCount++;
            document.getElementById("results-body").innerHTML += resultsVar;
        }
        else {
            break;
        }
        var desc = firebase.database().ref('users/' + user.uid + "/emdr/therapyResults/" + therapyResults[i]);
        desc.on('value', function (snapshot) {
            var tempStr = therapyResults[count];
            updateCount();

            //document.getElementById("date" + tempStr).innerHTML = tempStr;
            document.getElementById("date" + tempStr).innerHTML = snapshot.val().setDate;
            document.getElementById("notes" + tempStr).innerHTML = snapshot.val().notesTaken;
            document.getElementById("setUsed" + tempStr).innerHTML = snapshot.val().setUsed;

            if (snapshot.val().completionStatus == true) {
                var complete = "";
                complete += "<td class=\"goal-status\">";
                complete += "                                            <span class=\"text-success\">●<\/span> Completed";
                complete += "                                        <\/td>";

                document.getElementById("completionStatus" + tempStr).innerHTML = complete;

            }
            else {
                var incomplete = "";
                incomplete += "<td class=\"goal-status\">";
                incomplete += "                                            <span class=\"text-warning\">●<\/span> Incomplete";
                incomplete += "                                        <\/td>";

                document.getElementById("completionStatus" + tempStr).innerHTML = incomplete;
            }

        });
    }

    //console.log("Load count: " + totalLoadCount);
}

function loadMoreGoals() {
    var user = firebase.auth().currentUser;
    var startingIndex;
    var destinationIndex;

    startingIndex = amountToLoadGoals() - 1;
    var destinationIndex = startingIndex - 9;
    //console.log(startingIndex + "das");

    console.log("Amount of goals to load: " + amountToLoadGoals());
    console.log("Total goals loaded: " + totalLoadCountGoal);

    if (amountToLoadGoals() > 0) {
        for (i = startingIndex; i >= destinationIndex; i--) {
            if (totalLoadCountGoal >= goalResults.length) {
                //console.log("No more notes to load at: " + totalLoadCount);
                break;
            }
            else {
                str = goalResults[i].replace(/\s+/g, '');
                id = "box" + str;
                var goalResultsVar = "";
                goalResultsVar += "<span class = 'animated col col-12 col-centered fadeIn fixDis'> <div id=" + str + " ";
                goalResultsVar += "                    class=\"col col-11 margin-top no-select col-lg-11 col-xl-9 col-centered goal-results-box\" onclick='goalDetails(\"" + str + "\");'\">";
                goalResultsVar += "                    <div id=goalDate" + str + " class=\"goal-results-box-header no-select inherit\">Ended February 31rd, 2019";
                goalResultsVar += "                    <\/div>";
                goalResultsVar += "                    <span class=\"goal-results-divider\"><\/span>";
                goalResultsVar += "                    <span class=\"block-mobile\">";
                goalResultsVar += "                        <span id=goalPercentage" + str + " class=\"goal-percentage no-select inherit\">100%<\/span>";
                goalResultsVar += "                        <span class=\"goal-percentage-bar\">";
                goalResultsVar += "                            <div id=goalPercentageBar" + str + " class=\"goal-percentage-fill\">";
                goalResultsVar += "";
                goalResultsVar += "                            <\/div>";
                goalResultsVar += "                        <\/span>";
                goalResultsVar += "                    <\/span>";
                goalResultsVar += "                <\/div></span>";

                totalLoadCountGoal++;

                document.getElementById("populate-goal-analytics").innerHTML += goalResultsVar;

                var desc = firebase.database().ref('users/' + user.uid + "/emdr/goalResults/" + goalResults[i]);
                desc.on('value', function (snapshot) {
                    if (snapshot.exists()) {

                        var tempStr = goalResults[goalCount];
                        document.getElementById("goalDate" + tempStr).innerHTML = snapshot.val().setCompletedDate;
                        document.getElementById("goalPercentage" + tempStr).innerHTML = snapshot.val().completedPercentage + "%";
                        if (snapshot.val().setCompleted != "no") {
                            document.getElementById(tempStr).className = "col col-11 margin-top-medium col-lg-11 col-xl-9 col-centered goal-results-box goal-results-box-green";
                        }
                        else {
                            document.getElementById(tempStr).className = "col col-11 margin-top-medium col-lg-11 col-xl-9 col-centered goal-results-box goal-results-box-red";
                        }

                        setTimeout(function () {
                            //console.log(snapshot.val().completedPercentage);
                            if (parseFloat(snapshot.val().completedPercentage) < 100) {
                                document.getElementById("goalPercentageBar" + tempStr).style.width = (parseFloat(snapshot.val().completedPercentage) + "%");
                            }
                            else if (parseFloat(snapshot.val().completedPercentage) >= 100) {
                                document.getElementById("goalPercentageBar" + tempStr).style.width = "100%";
                            }
                            //document.getElementById("goalPercentageBar" + tempStr).innerHTML = "dasdas";
                            //document.getElementById("goalPercentageBar" + tempStr).style.width = parseFloat(snapshot.val().completedPercentage);
                        }, 210);

                        updateGoalCount();
                        //console.log(tempStr);
                    }
                });

            }
        }
    }
    else {
        console.log("No more goals");
        //document.getElementById("load-more-container").innerHTML = "<span class = 'animated flipInX'><span class='no-select text-center no-more-goals'>No more goals to load!</span></span>";
        //<div class = 'col col-11 col-md-8 col-lg-8 top-split animated flipInX text-center col-centered'>" + noNotes + "</div>"
        document.getElementById("load-more-container").innerHTML = "<div class = 'col col-11 col-md-8 col-lg-8 animated flipInX text-center col-centered'>" + "<span class='no-select text-center no-more-goals'>No more goals to load!</span>" + "</span>";
    }
}

function loadMoreNotes() {
    var user = firebase.auth().currentUser;
    var startingIndex;
    var destinationIndex;

    startingIndex = amountToLoad() - 1;
    var destinationIndex = startingIndex - 9;

    //You have notes to load
    if (amountToLoad() > 0) {
        for (i = startingIndex; i >= destinationIndex; i--) {
            if (totalLoadCount >= therapyResults.length) {
                //console.log("No more notes to load at: " + totalLoadCount);
                break;
            }
            else {
                //console.log("Note loaded");
                //console.log("Index accessed: " + i);
                str = therapyResults[i].replace(/\s+/g, '');
                //console.log("TEMPSTR: " + str);

                id = "box" + str;
                var resultsVar = "";
                resultsVar += "<tr id=" + id + " class = 'animated fadeIn entry' onclick='analyzeSet(\"" + str + "\");'\">";
                resultsVar += "                                        <td id=datex" + str + " class=\"goal-project\">";
                resultsVar += "                                            1\/2\/2019";
                resultsVar += "                                        <\/td>";
                resultsVar += "                                        <td id=completionStatusx" + str + " class=\"goal-status\">";
                resultsVar += "                                            <span class=\"text-warning\">●<\/span> Started";
                resultsVar += "                                        <\/td>";
                resultsVar += "                                        <td id=notesx" + str + " class=\"goal-progress\">";
                resultsVar += "                                            5";
                resultsVar += "                                        <\/td>";
                resultsVar += "                                        <td class=\"goal-date\">";
                resultsVar += "                                            <time id=setUsedx" + str + " datetime=\"2018-10-24\">Quick set<\/time>";
                resultsVar += "                                        <\/td>";
                resultsVar += "";
                resultsVar += "                                        <td class=\"text-right\">";
                resultsVar += "                                            <span class=\"analyze-link no-select\">Analyze session<\/span>";
                resultsVar += "                                            <div class=\"dropdown\">";
                resultsVar += "                                                <a href=\"#!\" class=\"dropdown-ellipses dropdown-toggle\" role=\"button\"";
                resultsVar += "                                                    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"";
                resultsVar += "                                                    data-boundary=\"window\">";
                resultsVar += "                                                    <i class=\"fe fe-more-vertical\"><\/i>";
                resultsVar += "                                                <\/a>";
                resultsVar += "                                                <div class=\"dropdown-menu dropdown-menu-right\">";
                resultsVar += "                                                    <a href=\"#!\" class=\"dropdown-item\">";
                resultsVar += "                                                        Action";
                resultsVar += "                                                    <\/a>";
                resultsVar += "                                                    <a href=\"#!\" class=\"dropdown-item\">";
                resultsVar += "                                                        Another action";
                resultsVar += "                                                    <\/a>";
                resultsVar += "                                                    <a href=\"#!\" class=\"dropdown-item\">";
                resultsVar += "                                                        Something else here";
                resultsVar += "                                                    <\/a>";
                resultsVar += "                                                <\/div>";
                resultsVar += "                                            <\/div>";
                resultsVar += "                                        <\/td>";
                resultsVar += "                                    <\/tr>";


                totalLoadCount++;

                document.getElementById("results-body").innerHTML += resultsVar;

                var desc = firebase.database().ref('users/' + user.uid + "/emdr/therapyResults/" + str);
                //console.log("THERAPYSTR: " + therapyResults[i]);

                desc.on('value', function (snapshot) {
                    var tempStr = therapyResults[i];
                    //console.log("TEMPSTR: " + tempStr);

                    updateLoadMoreCount();

                    document.getElementById("datex" + tempStr).innerHTML = snapshot.val().setDate;
                    //document.getElementById("datex" + tempStr).innerHTML = snapshot.val().setDate;
                    document.getElementById("notesx" + tempStr).innerHTML = snapshot.val().notesTaken;
                    document.getElementById("setUsedx" + tempStr).innerHTML = snapshot.val().setUsed;
                    //console.log(snapshot.val().setUsed);

                    if (snapshot.val().completionStatus == true) {
                        var complete = "";
                        complete += "<td class=\"goal-status\">";
                        complete += "                                            <span class=\"text-success\">●<\/span> Completed";
                        complete += "                                        <\/td>";

                        document.getElementById("completionStatusx" + tempStr).innerHTML = complete;

                    }
                    else {
                        var incomplete = "";
                        incomplete += "<td class=\"goal-status\">";
                        incomplete += "                                            <span class=\"text-warning\">●<\/span> Incomplete";
                        incomplete += "                                        <\/td>";

                        document.getElementById("completionStatusx" + tempStr).innerHTML = incomplete;
                    }
                });
            }
        }
    }
    //You have no notes to load
    else {
        document.getElementById("error-message-box").innerHTML = "<div class = 'col col-11 col-md-8 col-lg-8 col-centered animated flipInX'> <span class = 'error-message no-select'>No more sessions to load!</span></div>";

    }
}

function amountToLoad() {
    return therapyResults.length - totalLoadCount;
}

function amountToLoadGoals() {
    console.log("Length: " + goalResults.length);
    console.log("Count: " + totalLoadCountGoal);

    return goalResults.length - totalLoadCountGoal;
}

function spawnNotes(setAnalyzed) {

    var notesCount = 0;
    //var user = firebase.auth().currentUser;
    var root = rootRef.child(userID + "/emdr" + "/therapyResults/" + setAnalyzed).child('setDescriptionProgress');

    var notesResults = [];


    root.once('value', function (snapshot) {
        snapshot.forEach(function (_child) {

            var childElement = _child.key;
            notesResults.push(childElement);
            //console.log(notesResults);
        });


        //Notes were found
        document.getElementById("spawnNotes").innerHTML = "";

        var desc = firebase.database().ref('users/' + userID + "/emdr/therapyResults/" + setAnalyzed);

        desc.on('value', function (snapshot) {

            if (snapshot.val().notesTaken > 0) {
                var notesArray = snapshot.val().setDescriptionProgress;
                for (var i = 0; i < notesResults.length; i++) {
                    //console.log(notesArray[i]);

                    if (notesArray[i] != "empty") {
                        var notesBox = "";
                        notesBox += "<div class=\"col col-11 col-md-11 text-left col-lg-10 col-centered inline-block-norm expand-analyze-section-mobile\">";
                        notesBox += "                            <a class=\"kill-link-style toggle-element no-select\" data-toggle=\"collapse\" href=\"#analyze" + i + "\"";
                        notesBox += "                                role=\"button\" aria-expanded=\"false\" aria-controls=\"analyze1\">";
                        notesBox += "                                <div class=\"margin-top section-card-header-analyze\">Session " + parseInt(i + 1);
                        notesBox += "                                    <ion-icon id=\"analyzeArrow" + i + "\" class=\"collapse-arrow highlight-color-blue arrow-down\"";
                        notesBox += "                                        name=\"arrow-dropup\"><\/ion-icon>";
                        notesBox += "                                <\/div>";
                        notesBox += "                            <\/a>";
                        notesBox += "                            <div id=\"analyze" + i + "\" class=\"collapse multi-collapse\">";
                        notesBox += "                                <div class=\"section-card blue-card animated fadeIn\">";
                        notesBox += "                                    <div class=\"white padding-analyze\">" + notesArray[i];
                        notesBox += "                                    <\/div>";
                        notesBox += "                                <\/div>";
                        notesBox += "                            <\/div>";
                        notesBox += "                        <\/div>";
                        document.getElementById("spawnNotes").innerHTML += notesBox;
                    }
                }
            }
            else {

                //Notes were not found

                document.getElementById("spawnNotes").innerHTML = "<div class = 'col col-11 col-md-9 col-lg-8 col-centered no-notes'>You didn't take any notes during this therapy session.</div>";

            }
        });



    });
}

function analyzeSession(setAnalyzed) {

    moodResultsArray = [];
    recallResultsArray = [];
    sudsResultsArray = [];
    vacResultsArray = [];

    document.getElementById("analysis-mood").className = "hide-analysis";
    document.getElementById("analysis-recall").className = "hide-analysis";
    document.getElementById("analysis-suds").className = "hide-analysis";
    document.getElementById("analysis-vac").className = "hide-analysis";

    var desc = firebase.database().ref('users/' + userID + "/emdr/therapyResults/" + setAnalyzed);

    desc.on('value', function (snapshot) {

        var moodResultsData = [];
        var recallResultsData = [];
        var sudsResultsData = [];
        var vacResultsData = [];

        var averageMoodResult = "empty";
        var averageRecallResult = "empty";
        var averageSudsResult = "empty";
        var averageVacResult = "empty";

        if (snapshot.val().averageMoodResult != "empty") {
            averageMoodResult = snapshot.val().averageMoodResult;
            moodResultsData = snapshot.val().setMoodResults;
            calculateSessionCount(snapshot.val().setMoodResults, "mood");
            convertToInt(moodResultsArray);

            moodChartActive = true;
        }

        if (snapshot.val().averageRecallResult != "empty") {
            averageRecallResult = snapshot.val().averageRecallResult;
            recallResultsData = snapshot.val().setRecallProgress;
            calculateSessionCount(snapshot.val().setRecallProgress, "recall");
            convertToInt(recallResultsArray);

            recallChartActive = true;
        }

        if (snapshot.val().averageSudsResult != "empty") {
            averageSudsResult = snapshot.val().averageSudsResult;
            sudsResultsData = snapshot.val().setSudsProgress;
            calculateSessionCount(snapshot.val().setSudsProgress, "suds");
            convertToInt(sudsResultsArray);

            sudsChartActive = true;
        }

        if (snapshot.val().averageVacAverage != "empty") {
            averageVacResult = snapshot.val().averageVacAverage;
            vacResultsData = snapshot.val().setVacProgress;
            calculateSessionCount(snapshot.val().setVacProgress, "vac");
            convertToInt(vacResultsArray);

            vacChartActive = true;
        }

        longestData(convertToInt(moodResultsArray), convertToInt(recallResultsArray), convertToInt(sudsResultsArray), convertToInt(vacResultsArray));

        if ((averageMoodResult != "empty" && moodResultsData.length > 0) && (averageRecallResult != "empty" && recallResultsData.length > 0)) {

            console.log("Recall data: " + recallResultsData);
            document.getElementById("analysis-mood").className = "col col-12 col-md-6 col-lg-6 margin-top-large visible";
            document.getElementById("analysis-recall").className = "col col-12 col-md-6 col-lg-6 margin-top-large visible";

            document.getElementById("average-mood").innerHTML = calculateAverageScore(moodResultsData);
            document.getElementById("average-recall").innerHTML = calculateAverageScore(recallResultsData);
        }
        else if ((averageMoodResult == "empty") && (recallResultsData.length > 0)) {
            document.getElementById("analysis-mood").className = "col col-12 margin-top-large hide-analysis";
            document.getElementById("analysis-recall").className = "col col-12 margin-top-large visible";

            document.getElementById("average-recall").innerHTML = calculateAverageScore(recallResultsData);
        }
        else if ((averageMoodResult != "empty" && moodResultsData.length > 0) && (averageRecallResult == "empty" && recallResultsData.length <= 0)) {

            document.getElementById("analysis-mood").className = "col col-12 margin-top-large visible";
            document.getElementById("analysis-recall").className = "col col-12 col-md-6 col-lg-6 margin-top-large hide-analysis";

            document.getElementById("average-mood").innerHTML = calculateAverageScore(moodResultsData);

        } else if (averageMoodResult == "empty" && (averageRecallResult != "empty" && recallResultsData.length > 0)) {
            document.getElementById("analysis-mood").className = "col col-12 margin-top-large hide-analysis";
            document.getElementById("analysis-recall").className = "col col-12 margin-top-large visible";

            document.getElementById("average-recall").innerHTML = calculateAverageScore(recallResultsData);
        }


        if ((averageSudsResult != "empty" && sudsResultsData.length > 0) && (averageVacResult != "empty" && vacResultsData.length > 0)) {
            document.getElementById("analysis-suds").className = "col col-12 col-md-6 col-lg-6 margin-top-large visible";
            document.getElementById("analysis-vac").className = "col col-12 col-md-6 col-lg-6 margin-top-large visible";

            document.getElementById("average-suds").innerHTML = calculateAverageScore(sudsResultsData);
            document.getElementById("average-vac").innerHTML = calculateAverageScore(vacResultsData);
        }
        else if ((averageSudsResult != "empty" && sudsResultsData.length > 0) && (averageVacResult == "empty")) {
            document.getElementById("analysis-suds").className = "col col-12 margin-top-large visible";
            document.getElementById("analysis-vac").className = "col col-12 col-md-6 col-lg-6 margin-top-large hide-analysis";

            document.getElementById("average-suds").innerHTML = calculateAverageScore(sudsResultsData);
        }
        else if (averageSudsResult == "empty" && (averageVacResult != "empty" && vacResultsData.length > 0)) {
            document.getElementById("analysis-suds").className = "col col-12 margin-top-large hide-analysis";
            document.getElementById("analysis-vac").className = "col col-12 col-lg-12 margin-top-large visible";

            document.getElementById("average-vac").innerHTML = calculateAverageScore(vacResultsData);
        }

        ctx2 = document.getElementById('myChart2').getContext('2d'),
            gradient = ctx2.createLinearGradient(0, 0, 0, 450);

        ctx3 = document.getElementById('myChart3').getContext('2d'),
            gradient = ctx2.createLinearGradient(0, 0, 0, 450);

        ctx4 = document.getElementById('myChart4').getContext('2d'),
            gradient = ctx2.createLinearGradient(0, 0, 0, 450);

        ctx5 = document.getElementById('myChart5').getContext('2d'),
            gradient = ctx2.createLinearGradient(0, 0, 0, 450);

        gradient.addColorStop(0, 'rgba(66,87,178, 0.92)');
        gradient.addColorStop(0.5, 'rgba(66,87,178, 0.64)');
        gradient.addColorStop(1, 'rgba(66,87,178, 0.35)');

        dataMood = {
            labels: moodResultsArray,
            datasets: [{
                label: 'Mood value',
                backgroundColor: gradient,
                hoverBackgroundColor: "#4257b2",
                pointBackgroundColor: '#4257b2',
                borderWidth: 3,
                borderColor: '#4257b2',
                data: convertToInt(moodResultsData)
            }]
        };


        dataSUDS = {
            labels: sudsResultsArray,
            datasets: [{
                label: 'SUDS value',
                backgroundColor: gradient,
                hoverBackgroundColor: "#4257b2",
                pointBackgroundColor: '#4257b2',
                borderWidth: 3,
                borderColor: '#4257b2',
                data: convertToInt(sudsResultsData)
            }]
        };

        dataVAC = {
            labels: vacResultsArray,
            datasets: [{
                label: 'VAC value',
                backgroundColor: gradient,
                hoverBackgroundColor: "#4257b2",
                pointBackgroundColor: '#4257b2',
                borderWidth: 3,
                borderColor: '#4257b2',
                data: convertToInt(vacResultsData)
            }]
        };

        dataRecall = {
            labels: recallResultsArray,
            datasets: [{
                label: 'Recall value',
                backgroundColor: gradient,
                hoverBackgroundColor: "#4257b2",
                pointBackgroundColor: '#4257b2',
                borderWidth: 3,
                borderColor: '#4257b2',
                data: convertToInt(recallResultsData)
            }]
        };


        optionsMain = {
            bezierCurve: false,
            responsive: true,
            maintainAspectRatio: false,
            intersect: false,
            animation: {
                easing: 'easeInOutQuad',
                duration: 965
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: 'rgba(66,87,178, 0.1)',
                        lineWidth: 1,
                        drawTicks: false,
                        drawOnChartArea: false,
                        defaultFontStyle: 'normal',
                        defaultFontSize: 40,
                        //drawBorder: false
                    },
                    ticks: {
                        fontColor: '#95aac9',
                        defaultFontStyle: 'normal',
                        fontSize: 13,
                        fontFamily: 'Montserrat',
                        padding: 20

                    }
                }],
                yAxes: [{
                    gridLines: {
                        borderDash: [2],
                        borderDashOffset: [2],
                        color: 'rgba(149,170,201, 0.21)',
                        drawBorder: false,
                        drawTicks: false,
                        lineWidth: 0,
                        zeroLineWidth: 0,
                        zeroLineColor: 'rgba(149,170,201, 0.21)',
                        zeroLineBorderDash: [2],
                        zeroLineBorderDashOffset: [2]
                    },
                    ticks: {
                        max: 10,
                        padding: 10,
                        beginAtZero: true,
                        fontColor: '#95aac9',
                        fontSize: 13,
                        defaultFontStyle: 'normal',
                        fontFamily: 'Montserrat',
                        userCallback: function (label, index, labels) {
                            // when the floored value is the same as the value we have a whole number
                            if (Math.floor(label) === label) {
                                return label;
                            }

                        },
                        maxBarThickness: 10
                    }
                }]
            },
            elements: {
                line: {
                    tension: 0
                }
            },
            legend: {
                display: false
            },
            point: {
                backgroundColor: 'white'
            },
            tooltips: {
                opacity: '0.4',
                position: 'average',
                // intersect: false,
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                bodyFontStyle: 'bold',
                borderColor: '#000',
                borderWidth: 2,
                bodyFontColor: '#000',
                backgroundColor: 'rgba(255,255,255, 0.91)',
                titleFontColor: '#000',
                color: '#000',
                caretSize: 5,
                cornerRadius: 5,
                xPadding: 20,
                yPadding: 10
            }
        };

        optionsMainHeader = {
            bezierCurve: true,
            responsive: true,
            maintainAspectRatio: false,
            intersect: false,
            animation: {
                easing: 'easeInOutQuad',
                duration: 965
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: 'rgba(66,87,178, 0.1)',
                        lineWidth: 1,
                        drawTicks: false,
                        drawOnChartArea: false,
                        defaultFontStyle: 'normal',
                        defaultFontSize: 40,
                        //drawBorder: false
                    },
                    ticks: {
                        fontColor: '#95aac9',
                        defaultFontStyle: 'normal',
                        fontSize: 13,
                        fontFamily: 'Montserrat',
                        padding: 20

                    }
                }],
                yAxes: [{
                    gridLines: {
                        borderDash: [2],
                        borderDashOffset: [2],
                        color: 'rgba(149,170,201, 0.21)',
                        drawBorder: false,
                        drawTicks: false,
                        lineWidth: 0,
                        zeroLineWidth: 0,
                        zeroLineColor: 'rgba(149,170,201, 0.21)',
                        zeroLineBorderDash: [2],
                        zeroLineBorderDashOffset: [2]
                    },
                    ticks: {
                        max: 10,
                        padding: 10,
                        beginAtZero: true,
                        fontColor: '#95aac9',
                        fontSize: 13,
                        defaultFontStyle: 'normal',
                        fontFamily: 'Montserrat',
                        userCallback: function (label, index, labels) {
                            // when the floored value is the same as the value we have a whole number
                            if (Math.floor(label) === label) {
                                return label;
                            }

                        },
                        maxBarThickness: 10
                    }
                }]
            },
            elements: {
                line: {
                    tension: 0
                }
            },
            legend: {
                display: false
            },
            point: {
                backgroundColor: 'white'
            },
            tooltips: {
                opacity: '0.4',
                position: 'average',
                // intersect: false,
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                bodyFontStyle: 'bold',
                borderColor: '#000',
                borderWidth: 2,
                bodyFontColor: '#000',
                backgroundColor: 'rgba(255,255,255, 0.91)',
                titleFontColor: '#000',
                color: '#000',
                caretSize: 5,
                cornerRadius: 5,
                xPadding: 20,
                yPadding: 10
            }
        };

        optionsVAC = {
            bezierCurve: false,
            responsive: true,
            maintainAspectRatio: false,
            intersect: false,
            animation: {
                easing: 'easeInOutQuad',
                duration: 965
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: 'rgba(66,87,178, 0.1)',
                        lineWidth: 1,
                        drawTicks: false,
                        drawOnChartArea: false,
                        defaultFontStyle: 'normal',
                        defaultFontSize: 40,
                        //drawBorder: false
                    },
                    ticks: {
                        fontColor: '#95aac9',
                        defaultFontStyle: 'normal',
                        fontSize: 13,
                        fontFamily: 'Montserrat',
                        padding: 20

                    }
                }],
                yAxes: [{
                    gridLines: {
                        borderDash: [2],
                        borderDashOffset: [2],
                        color: 'rgba(149,170,201, 0.21)',
                        drawBorder: false,
                        drawTicks: false,
                        lineWidth: 0,
                        zeroLineWidth: 0,
                        zeroLineColor: 'rgba(149,170,201, 0.21)',
                        zeroLineBorderDash: [2],
                        zeroLineBorderDashOffset: [2]
                    },
                    ticks: {
                        max: 7,
                        padding: 10,
                        beginAtZero: true,
                        fontColor: '#95aac9',
                        fontSize: 13,
                        defaultFontStyle: 'normal',
                        fontFamily: 'Montserrat',
                        userCallback: function (label, index, labels) {
                            // when the floored value is the same as the value we have a whole number
                            if (Math.floor(label) === label) {
                                return label;
                            }

                        },
                        maxBarThickness: 10
                    }
                }]
            },
            elements: {
                line: {
                    tension: 0
                }
            },
            legend: {
                display: false
            },
            point: {
                backgroundColor: 'white'
            },
            tooltips: {
                opacity: '0.4',
                position: 'average',
                // intersect: false,
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                bodyFontStyle: 'bold',
                borderColor: '#000',
                borderWidth: 2,
                bodyFontColor: '#000',
                backgroundColor: 'rgba(255,255,255, 0.91)',
                titleFontColor: '#000',
                color: '#000',
                caretSize: 5,
                cornerRadius: 5,
                xPadding: 20,
                yPadding: 10
            }
        };

        if (averageSudsResult != "empty") {
            chartInstance2 = new Chart(ctx2, {
                type: 'line',
                data: dataSUDS,
                options: optionsMain
            });
        }

        if (averageVacResult != "empty") {
            chartInstance3 = new Chart(ctx3, {
                type: 'line',
                data: dataVAC,
                options: optionsMain
            });
        }

        if (averageRecallResult != "empty") {
            chartInstance4 = new Chart(ctx4, {
                type: 'line',
                data: dataRecall,
                options: optionsMain
            });
        }

        if (averageMoodResult != "empty") {
            chartInstance5 = new Chart(ctx5, {
                type: 'line',
                data: dataMood,
                options: optionsMain
            });
        }

        $('#barChart2').on('click', function () {

            $("#lineChart2").removeClass("analyze-box-section-choice-selected");
            $("#barChart2").addClass("analyze-box-section-choice-selected");

            chartInstance2.destroy();
            chartInstance2 = new Chart(ctx2, {
                type: 'bar',
                data: dataSUDS,
                options: optionsMain
            });
        });

        $('#lineChart2').on('click', function () {

            $("#lineChart2").addClass("analyze-box-section-choice-selected");
            $("#barChart2").removeClass("analyze-box-section-choice-selected");

            chartInstance2.destroy();
            chartInstance2 = new Chart(ctx2, {
                type: 'line',
                data: dataSUDS,
                options: optionsMain
            });
        });

        $('#barChart3').on('click', function () {

            $("#lineChart3").removeClass("analyze-box-section-choice-selected");
            $("#barChart3").addClass("analyze-box-section-choice-selected");

            chartInstance3.destroy();
            chartInstance3 = new Chart(ctx3, {
                type: 'bar',
                data: dataVAC,
                options: optionsMain
            });
        });

        $('#lineChart3').on('click', function () {

            $("#lineChart3").addClass("analyze-box-section-choice-selected");
            $("#barChart3").removeClass("analyze-box-section-choice-selected");

            chartInstance3.destroy();
            chartInstance3 = new Chart(ctx3, {
                type: 'line',
                data: dataVAC,
                options: optionsMain
            });
        });

        $('#barChart4').on('click', function () {

            $("#barChart4").addClass("analyze-box-section-choice-selected");
            $("#lineChart4").removeClass("analyze-box-section-choice-selected");

            chartInstance4.destroy();
            chartInstance4 = new Chart(ctx4, {
                type: 'bar',
                data: dataRecall,
                options: optionsMain
            });
        });

        $('#lineChart4').on('click', function () {

            $("#barChart4").removeClass("analyze-box-section-choice-selected");
            $("#lineChart4").addClass("analyze-box-section-choice-selected");

            chartInstance4.destroy();
            chartInstance4 = new Chart(ctx4, {
                type: 'line',
                data: dataRecall,
                options: optionsMain
            });
        });

        $('#barChart5').on('click', function () {

            $("#barChart5").addClass("analyze-box-section-choice-selected");
            $("#lineChart5").removeClass("analyze-box-section-choice-selected");

            chartInstance5.destroy();
            chartInstance5 = new Chart(ctx5, {
                type: 'bar',
                data: dataMood,
                options: optionsMain
            });
        });

        $('#lineChart5').on('click', function () {

            $("#barChart5").removeClass("analyze-box-section-choice-selected");
            $("#lineChart5").addClass("analyze-box-section-choice-selected");

            chartInstance5.destroy();
            chartInstance5 = new Chart(ctx5, {
                type: 'line',
                data: dataMood,
                options: optionsMain
            });
        });

    });

}

function calculateAverageScore(scoreToAverage) {
    console.log(scoreToAverage);

    var arrayLength = scoreToAverage.length;
    var average = 0;
    var numOfValues = scoreToAverage.length;

    for (var i = 0; i < arrayLength; i++) {
        if (scoreToAverage[i] == "empty") {
            numOfValues--;
        }
        else {
            average += parseFloat(scoreToAverage[i]);
        }
    }

    return parseFloat((average / numOfValues).toFixed(2));
}

function longestData(array1, array2, array3, array4) {

    var max = Math.max(array1.length, array2.length, array3.length, array4.length);

    for (i = 0; i < max; i++) {
        if (i == 0) {
            longestDataInstance.push("Initial");
        }
        else {
            longestDataInstance.push(i);
        }
    }

    console.log("Longest data: " + longestDataInstance);
}

function convertToInt(array) {

    var arrayLength = array.length;

    for (var i = 0; i < arrayLength; i++) {
        if (array[i] == "empty") {
            array.splice(i, 1);
        }
    }

    return array;
}

function calculateSessionCount(array, type) {

    if (type == "mood") {
        for (var i = 0; i < array.length; i++) {
            if (array[i] != "empty") {
                if (i == 0) {
                    moodResultsArray.push("Initial");
                }
                else {
                    moodResultsArray.push(i.toString());
                }
            }
        }
        console.log("Mood: " + moodResultsArray);
    }
    else if (type == "recall") {
        for (var i = 0; i < array.length; i++) {
            if (array[i] != "empty") {
                if (i == 0) {
                    recallResultsArray.push("Initial");
                }
                else {
                    recallResultsArray.push(i.toString());
                }
            }
        }
        console.log("Recall: " + recallResultsArray);

    }
    else if (type == "suds") {
        for (var i = 0; i < array.length; i++) {
            if (array[i] != "empty") {
                if (i == 0) {
                    sudsResultsArray.push("Initial");
                }
                else {
                    sudsResultsArray.push(i.toString());
                }
            }
        }
        console.log("Suds: " + sudsResultsArray);

    }
    else if (type == "vac") {
        for (var i = 0; i < array.length; i++) {
            if (array[i] != "empty") {
                if (i == 0) {
                    vacResultsArray.push("Initial");
                }
                else {
                    vacResultsArray.push(i.toString());
                }
            }
        }
        console.log("Vac: " + vacResultsArray);
    }
}


function analyzeSet(set) {
    currentlyAnalyzingSession = set;
    console.log("Analyze this set: " + set);
    spawnNotes(set);
    analyzeSession(set);
    $("#therapy-results").addClass("results-box-active");


    //$("#therapy-results-tab").removeClass("fixed-hidden");
    //$("#therapy-results-tab").addClass("fixed-visible");
    // $("#session-analytics-box").removeClass("analysis-box-hidden");
    //$("#therapy-results").animate({ scrollTop: 0 }, "fast");
    /*
    $('body').css({
        overflow: 'hidden',
        height: '100%'
    });
    */

}

function closeAnalyzeSet() {

    if (sudsChartActive) {
        chartInstance2.destroy();
    }

    if (vacChartActive) {
        chartInstance3.destroy();
    }

    if (recallChartActive) {
        chartInstance4.destroy();
    }

    if (moodChartActive) {
        chartInstance5.destroy();
    }

    $("#lineChart2").addClass("analyze-box-section-choice-selected");
    $("#barChart2").removeClass("analyze-box-section-choice-selected");

    $("#lineChart3").addClass("analyze-box-section-choice-selected");
    $("#barChart3").removeClass("analyze-box-section-choice-selected");

    $("#lineChart4").addClass("analyze-box-section-choice-selected");
    $("#barChart4").removeClass("analyze-box-section-choice-selected");

    $("#lineChart5").addClass("analyze-box-section-choice-selected");
    $("#barChart5").removeClass("analyze-box-section-choice-selected");

    longestDataInstance = [];

    $("#therapy-results").removeClass("results-box-active");
    $("#therapy-results").animate({ scrollTop: 0 }, "fast");

    moodChartActive = false;
    recallChartActive = false;
    sudsChartActive = false;
    vacChartActive = false;
    /*
    $('body').css({
        overflow: 'auto',
        height: 'auto'
    });
    */
}

function averageSessionsPerDay() {

    var user = firebase.auth().currentUser;
    var desc = firebase.database().ref('users/' + user.uid + "/emdr/therapyAnalysis");


    var totalDays;
    var user = firebase.auth().currentUser;
    var desc = firebase.database().ref('users/' + user.uid + "/userData/");
    desc.on('value', function (snapshot) {
        var sessionText;
        var averageNumber;

        var starting = moment(getCurrentDate());
        var ending = moment([snapshot.val().yearCreatedUser, snapshot.val().monthCreatedUser, snapshot.val().dayCreatedUser]);


        totalDays = starting.diff(ending, 'days') + 1;
        averageNumber = parseFloat(((therapyResults.length / totalDays)).toFixed(2));

        if (!isNaN(averageNumber)) {
            if (averageNumber == 1) {
                sessionText = "session";
            }
            else {
                sessionText = "sessions";
            }
            document.getElementById("average-day-count").innerHTML = "<span class = 'highlight-color-green-darker'>Average of " + averageNumber + " " + sessionText + " per day</span>";
        }
        else {
            document.getElementById("average-day-count").innerHTML = "<span class = 'highlight-color-green-darker'>No sessions yet</span>";
        }

        if (averageNumber == 0) {
            sessionText = "sessions";
            document.getElementById("average-day-count").innerHTML = "<span class = 'highlight-color-green-darker'>Average of " + "0" + " " + sessionText + " per day</span>";
        }

    });
}

function loadSessionsCompleted() {
    document.getElementById("sessions-completed").innerHTML = "<span class = 'animated fadeIn'>" + therapyResults.length + "</span>";
    document.getElementById("sessions-daily").innerHTML = "<span class='badge badge-soft-success mt--1'><span class = 'animated fadeIn highlight-color-green-darker'><span id = 'average-day-count'></span></span></span>";
    averageSessionsPerDay();
}

function changeStrVar(input) {
    pubStr = input;
}

function updateLoadMoreCount() {
    loadMoreCount--;
}

function updateLoadMoreCountGoals() {
    loadMoreCountGoals--;
}

function updateCount() {
    count--;
}

function updateGoalCount() {
    goalCount--;
}


function returnFormattedDate(date) {
    var stringDay;
    var stringMonth;
    var stringYear;

    //console.log("DATE: " + date);
    stringDay = date[2];

    if (date[1] == 0) {
        stringMonth = "January";
    }
    else if (date[1] == 1) {
        stringMonth = "February";
    }
    else if (date[1] == 2) {
        stringMonth = "March";
    }
    else if (date[1] == 3) {
        stringMonth = "April";
    }
    else if (date[1] == 4) {
        stringMonth = "May";
    }
    else if (date[1] == 5) {
        stringMonth = "June";
    }
    else if (date[1] == 6) {
        stringMonth = "July";
    }
    else if (date[1] == 7) {
        stringMonth = "August";
    }
    else if (date[1] == 8) {
        stringMonth = "September";
    }
    else if (date[1] == 9) {
        stringMonth = "October";
    }
    else if (date[1] == 10) {
        stringMonth = "November";
    }
    else if (date[1] == 11) {
        stringMonth = "December";
    }

    stringYear = date[0];

    //console.log("dAte: " + date);
    return stringMonth + " " + stringDay + ", " + stringYear;
}

function setCompletedDate() {

    //currently returns undefined because you can't return data from within firebase call 

    var user = firebase.auth().currentUser;
    var desc = firebase.database().ref('users/' + user.uid + "/emdr/therapyAnalysis");
    var x;
    desc.on('value', function (snapshot) {

        var timeInterval = snapshot.val().userGoalTime;
        var endingDateDisplay;

        if (timeInterval == "day") {
            endingDateDisplay = moment(snapshot.val().dateGoalStart).add(1, 'days').format();
        }
        else if (timeInterval == "week") {
            endingDateDisplay = moment(snapshot.val().dateGoalStart).add(1, 'weeks').format();
        }
        else if (timeInterval == "month") {
            endingDateDisplay = moment(snapshot.val().dateGoalStart).add(1, 'months').format();
        }
        else if (timeInterval == "year") {
            endingDateDisplay = moment(snapshot.val().dateGoalStart).add(1, 'years').format();
        }

        //var endingDateDisplay = moment(snapshot.val().dateGoalStart).add(1, 'days').format();

        console.log(endingDateDisplay);
        var endingYear = parseInt(endingDateDisplay.substring(0, 4));
        var endingMonth = parseInt(endingDateDisplay.substring(5, 7)) - 1;
        var endingDay = parseInt(endingDateDisplay.substring(8, 10));

        var returnArray = [endingYear, endingMonth, endingDay];
        console.log("sss" + returnArray);
        x = returnArray;
        //console.log("Array to be returned: " + returnArray);
        //console.log("Formatted array: " + returnFormattedDate(returnArray));

        //var endingMonth = parseInt(endingDateDisplay.substring(5, 8));
        //console.log(endingYear);
        //console.log(endingMonth);
        //console.log(endingDay);
        // console.log(snapshot.val().dateGoalStart);
        //endingDate = moment(snapshot.val().dateGoalStart).add(1, 'days');
    });

    return x;
}

function loadGoal() {

    var user = firebase.auth().currentUser;
    var desc = firebase.database().ref('users/' + user.uid + "/emdr/therapyAnalysis");

    var goalBox = "";
    goalBox += "<div class=\"dashboard-goal margin-top-tiny\">";
    goalBox += "                                            I want to do";
    goalBox += "                                            <input id=\"goal-number\" onfocusout=\"checkGoalNumber()\" type=\"number\" min=\"1\"";
    goalBox += "                                                value=\"5\" class=\"text-center dashboard-goal-input\" \/>";
    goalBox += "                                            sessions this";
    goalBox += "";
    goalBox += "                                            <a id=\"goal-time\" class=\"dashboard-time-input force-top dropdown-toggle\" href=\"#\"";
    goalBox += "                                                role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\"";
    goalBox += "                                                aria-haspopup=\"true\" aria-expanded=\"false\">";
    goalBox += "                                                <span class=\"eggshell\" id=\"timeline\">week<\/span>";
    goalBox += "                                            <\/a>";
    goalBox += "";
    goalBox += "                                            <div id=\"timelineDropdown\" class=\"force-top dropdown-menu\"";
    goalBox += "                                                aria-labelledby=\"dropdownMenuLink\">";
    goalBox += "                                                <span class=\"dropdown-item\"";
    goalBox += "                                                    onclick=\"changeGoalTimeline('day')\">Day<\/span>";
    goalBox += "                                                <span class=\"dropdown-item\"";
    goalBox += "                                                    onclick=\"changeGoalTimeline('week')\">Week<\/span>";
    goalBox += "                                                <span class=\"dropdown-item\"";
    goalBox += "                                                    onclick=\"changeGoalTimeline('month')\">Month<\/span>";
    goalBox += "                                                <span class=\"dropdown-item\"";
    goalBox += "                                                    onclick=\"changeGoalTimeline('year')\">Year<\/span>";
    goalBox += "                                            <\/div>";
    goalBox += "";
    goalBox += "                                            <div class = \"margin-top-jump\" >";
    goalBox += "                                                <span onclick=\"checkGoal()\"";
    goalBox += "                                                    class=\"no-select margin-top-tiny goal-button large-goal-button\">Save my";
    goalBox += "                                                    goal<\/span>";
    goalBox += "                                                <span onclick=\"viewGoalResults()\"";
    goalBox += "                                                    class=\"margin-top-tiny no-select goal-button large-goal-button\">View past";
    goalBox += "                                                    results<\/span>";
    goalBox += "                                            <\/div>";
    goalBox += "";
    goalBox += "                                        <\/div>";

    document.getElementById("dashboard-goal-box").innerHTML = "<div class = 'animated fadeIn'>" + goalBox + "</div>";

    desc.on('value', function (snapshot) {
        if (snapshot.exists()) {

            //setCompletedDate();

            //console.log("Goal exists");

            if (snapshot.val().goalActive == "yes") {

                var badge = "";
                badge += "<span class = 'animated fadeIn'><span class=\"badge badge-soft-success mt--1\">";
                badge += "                                            <span class=\"highlight-color-green-badge\">Goal active<\/span>";
                badge += "                                        <\/span></span>";
                document.getElementById("is-goal-active").innerHTML = badge;
            }
            else {
                var badge = "";
                badge += "<span class=\"badge badge-soft-danger mt--1\">";
                badge += "                                            <span class=\"highlight-color-red-badge\">No goal active<\/span>";
                badge += "                                        <\/span>";
                document.getElementById("is-goal-active").innerHTML = badge;
            }


            var timeInterval = snapshot.val().userGoalTime;

            document.getElementById("goal-number").value = snapshot.val().userGoalNumber;
            document.getElementById("goal-time").innerText = timeInterval;
            originalGoalTime = timeInterval;

            var d = new Date();
            var currentYear = d.getFullYear();
            var currentMonth = d.getMonth();
            var currentDay = d.getDate();
            var endingDate;
            var currentDate = [currentYear, currentMonth, currentDay];

            if (timeInterval == "day") {
                endingDate = moment(snapshot.val().dateGoalStart).add(1, 'days');
            }
            else if (timeInterval == "week") {
                endingDate = moment(snapshot.val().dateGoalStart).add(1, 'weeks');
            }
            else if (timeInterval == "month") {
                endingDate = moment(snapshot.val().dateGoalStart).add(1, 'months');
            }
            else if (timeInterval == "year") {
                endingDate = moment(snapshot.val().dateGoalStart).add(1, 'years');
            }


            //endingDate.diff(currentDate)
            var diffDisplay = endingDate.diff(currentDate, 'days');
            //console.log("Difference: " + diffDisplay);
            if (diffDisplay > 0) {
                if (diffDisplay == 1) {
                    document.getElementById("days-remaining").innerHTML = "<span class = 'animated days-remaining-goal no-select fadeInDown highlight-color-green-specific'>" + diffDisplay + " day left</span>";
                }
                else {
                    document.getElementById("days-remaining").innerHTML = "<span class = 'animated days-remaining-goal no-select fadeInDown highlight-color-green-specific'>" + diffDisplay + " days left</span>";
                }
            }
            else {


                //check goal active variable 

                if (snapshot.val().goalActive == "yes") {

                    var returnNumber = parseFloat(((snapshot.val().goalSessionsProgress / snapshot.val().userGoalNumber) * 100).toFixed(2));
                    if (returnNumber >= 100) {
                        document.getElementById("days-remaining").innerHTML = "<span class = 'animated days-remaining-goal no-select fadeInDown highlight-color-green-specific'>" + returnNumber + ' percent of goal was completed' + "</span>";
                        var user = firebase.auth().currentUser;
                        var d = new Date();
                        var timeSet = d.getTime();

                        //Add starting and ending dates
                        firebase.database().ref('users/' + user.uid + "/emdr" + "/goalResults" + "/" + timeSet).set({
                            setCompleted: 'yes',
                            completedPercentage: returnNumber,
                            setStartingDate: returnFormattedDate(snapshot.val().dateGoalStart),
                            setCompletedDate: returnFormattedDate(setCompletedDate()),
                            setCompletedNumber: parseInt(snapshot.val().goalSessionsProgress),
                            setGoalNumber: parseInt(snapshot.val().userGoalNumber),
                            setGoalTimescale: snapshot.val().userGoalTime,
                            goalNumberCompleted: snapshot.val().goalSessionsProgress
                            //setGoalCompletedNumber: snapshot.val().setCompletedNumber
                        });
                    }
                    else {
                        document.getElementById("days-remaining").innerHTML = "<span class = 'animated days-remaining-goal days-remaining-goal-incomplete no-select fadeInDown highlight-color-green-specific'>" + returnNumber + ' percent of goal was completed' + "</span>";
                        var user = firebase.auth().currentUser;
                        var d = new Date();
                        var timeSet = d.getTime();
                        //setCompletedDate();

                        firebase.database().ref('users/' + user.uid + "/emdr" + "/goalResults" + "/" + timeSet).set({
                            setCompleted: 'no',
                            completedPercentage: returnNumber,
                            setStartingDate: returnFormattedDate(snapshot.val().dateGoalStart),
                            setCompletedDate: returnFormattedDate(setCompletedDate()),
                            setCompletedNumber: parseInt(snapshot.val().goalSessionsProgress),
                            setGoalNumber: parseInt(snapshot.val().userGoalNumber),
                            setGoalTimescale: snapshot.val().userGoalTime,
                            goalNumberCompleted: snapshot.val().goalSessionsProgress
                            //setGoalCompletedNumber: snapshot.val().setCompletedNumber
                        });

                    }

                    firebase.database().ref('users/' + user.uid + "/emdr/therapyAnalysis").update({
                        goalActive: 'no'
                    });
                }
                else {
                    var returnNumber = parseFloat(((snapshot.val().goalSessionsProgress / snapshot.val().userGoalNumber) * 100).toFixed(2));
                    //document.getElementById("days-remaining").innerHTML = "";

                    if (returnNumber >= 100) {
                        document.getElementById("days-remaining").innerHTML = "<span class = 'animated days-remaining-goal no-select fadeInDown highlight-color-green-specific'>" + returnNumber + ' percent of goal was completed' + "</span>";
                    }
                    else {
                        document.getElementById("days-remaining").innerHTML = "<span class = 'animated days-remaining-goal-incomplete days-remaining-goal no-select fadeInDown highlight-color-green-specific'>" + returnNumber + ' percent of goal was completed' + "</span>";
                    }
                }
            }

            //Pass the goal number and time interval to calculate goal progress

            //updateGoalProgressTrigger();
            updateGoalProgress(snapshot.val().userGoalNumber);
        }
        else {

            var animateRed = "";
            animateRed += " <div id=\"progress-bar\" class=\"animate-smooth red-bar progress-bar\"";
            animateRed += "                                                    role=\"progressbar\" style=\"width: -30%\" aria-valuenow=\"85\"";
            animateRed += "                                                    aria-valuemin=\"0\" aria-valuemax=\"100\"><\/div>";

            var badge = "";
            badge += "<span class=\"badge badge-soft-danger mt--1\">";
            badge += "                                            <span class=\"highlight-color-red-badge\">No goal active<\/span>";
            badge += "                                        <\/span>";
            document.getElementById("is-goal-active").innerHTML = badge;

            document.getElementById("populate-progress-bar").innerHTML = animateRed;
            document.getElementById("goal-progress-percentage").innerHTML = "<span class = 'animated fadeIn'>No goal found</span>";
            document.getElementById("progress-bar").className = "animate-smooth red-bar progress-bar";
            document.getElementById("progress-bar").style.width = "100%";
        }
    });
}

/*
getEmail () {
  var test = firebase.database().ref('/users/' + user).once('value')
    .then(function (snapshot) {
      var email = snapshot.val().email
      return email
    })
  console.log(test)
}
*/

function returnResultsLength() {
    var user = firebase.auth().currentUser;

    var desc = firebase.database().ref('users/' + user.uid + "/emdr/therapyAnalysis");

    desc.once('value').then(function (snapshot) {
        // console.log(snapshot.val().goalSessionsProgress);
        var progress = snapshot.val().goalSessionsProgress;
        return progress
    });


    /*
    var desc = firebase.database().ref('users/' + user.uid + "/emdr/therapyAnalysis");
 
    desc.on('value', function (snapshot) {
        console.log("kdpoajfjds: " + snapshot.val().goalSessionsProgress);
        return parseFloat(snapshot.val().goalSessionsProgress);
    });
    */
}


function updateGoalProgress(number) {

    var user = firebase.auth().currentUser;
    var desc = firebase.database().ref('users/' + user.uid + "/emdr/therapyAnalysis");

    desc.once('value').then(function (snapshot) {

        var returnNumber = parseFloat(((snapshot.val().goalSessionsProgress / number) * 100).toFixed(2));
        //console.log(returnNumber);
        document.getElementById("goal-progress-percentage").innerHTML = "<span class = 'animated fadeIn'>" + returnNumber + "%</span>";
        document.getElementById("progress-bar").style.width = (returnNumber + "%");

        /*
        console.log(snapshot.val().goalSessionsProgress);
        var progress = snapshot.val().goalSessionsProgress;
        return progress
        */
    });

    /*
        console.log("num: " + number);
        console.log(returnResultsLength() + "/" + number);
        var returnNumber = parseFloat(((returnResultsLength() / number) * 100).toFixed(2));
        document.getElementById("goal-progress-percentage").innerHTML = "<span class = 'animated fadeIn'>" + returnNumber + "%</span>";
        document.getElementById("progress-bar").style.width = (returnNumber + "%");
        */
}

function viewSessionDetails() {
    console.log(currentlyAnalyzingSession);
    var user = firebase.auth().currentUser;
    var desc = firebase.database().ref('users/' + user.uid + "/emdr/therapyResults/" + currentlyAnalyzingSession);
    desc.on('value', function (snapshot) {

        document.getElementById("therapy-set").innerHTML = snapshot.val().setUsed;
        document.getElementById("therapy-date").innerHTML = snapshot.val().setDate;
        document.getElementById("therapy-sessions-completed").innerHTML = snapshot.val().sessionProgress;
        document.getElementById("therapy-sessions-total").innerHTML = snapshot.val().totalSessions;
        document.getElementById("therapy-notes-count").innerHTML = snapshot.val().notesTaken;

        $("#sessionDetails").modal('toggle');
    });
}


function viewGoal() {

    $('#view-goal-modal').modal('toggle');

    var user = firebase.auth().currentUser;
    var desc = firebase.database().ref('users/' + user.uid + "/emdr/therapyAnalysis");
    desc.on('value', function (snapshot) {
        if (snapshot.exists()) {

            var userNum = snapshot.val().userGoalNumber;
            var sessionsText;

            if (userNum > 1) {
                sessionsText = "sessions";
            }
            else {
                sessionsText = "session";
            }

            var modalGoals = "";
            modalGoals += "You want to do <span id=\"modal-goal-number\" class=\"modal-focus\"><\/span> " + sessionsText + " a";
            modalGoals += "                            <span id=\"modal-goal-time\" class=\"modal-focus\"><\/span>";

            document.getElementById("modal-goal-container").innerHTML = "<span class = 'animated fadeIn'>" + modalGoals + "</span>";


            document.getElementById("modal-goal-number").innerHTML = "<span class = 'animated flipInX white'>" + snapshot.val().userGoalNumber + "</span>";
            document.getElementById("modal-goal-time").innerHTML = "<span class = 'animated flipInX white'>" + snapshot.val().userGoalTime + "</span>";

        }
        else {
            document.getElementById("modal-goal-container").innerHTML = "<span class ='animated fadeIn'>Your goal will be displayed here once you set it!";

        }
    });
}

function goalAction(action) {
    if (action == "update") {
        goalActiontype = "update";
        saveGoal('update');
    }
    else if (action == "reset") {
        goalActiontype = "reset";
        saveGoal('reset')
    }
    else if (action == "revert") {
        goalActiontype = "revert";
        saveGoal('revert');
    }
    else if (action == "overwrite") {
        goalActiontype = "overwrite";
        saveGoal("overwrite");
    }
}

function checkGoal() {
    var user = firebase.auth().currentUser;
    var desc = firebase.database().ref('users/' + user.uid + '/emdr/therapyAnalysis');
    goalTime = document.getElementById("goal-time").innerText;

    desc.once('value', function (snapshot) {

        if (snapshot.exists() && snapshot.val().goalActive == "yes") {


            $("#set-goal-modal").modal('toggle');
        }
        else {
            saveGoal('reset');
        }
    });
}

function checkTimeScale() {
    console.log("Checking time scale");

    $("#set-goal-modal").modal('hide');

    var user = firebase.auth().currentUser;

    var desc = firebase.database().ref('users/' + user.uid + "/emdr/therapyAnalysis");
    //console.log("goal action type: " + goalActiontype);
    desc.on('value', function (snapshot) {
        if (snapshot.exists() && snapshot.val().goalActive == "yes") {
            if (goalTime != snapshot.val().userGoalTime) {
                //console.log("WHY IS THIS TRIGGERING");
                $("#same-scale-modal").modal('toggle');
            }
            else {
                saveGoal('update');
            }
        }
        else {
            saveGoal('reset');
        }
    });
}

function saveGoal(goalAction) {

    var user = firebase.auth().currentUser;

    $('#set-goal-modal').modal('hide');
    $('#same-scale-modal').modal('hide');

    if (goalAction != "overwrite") {
        goalNumber = document.getElementById("goal-number").value;
        goalTime = document.getElementById("goal-time").innerText;
    }
    else {
        var desc = firebase.database().ref('users/' + user.uid + "/emdr/goalResults/" + activeGoal);
        desc.once('value', function (snapshot) {
            goalNumber = snapshot.val().setGoalNumber;
            goalTime = snapshot.val().setGoalTimescale;
        });
    }
    /*
    var desc = firebase.database().ref('users/' + user.uid + "/emdr/therapyAnalysis");
    desc.on('value', function (snapshot) {
        if (snapshot.exists()) {
            if (snapshot.val().userGoalTime == goalTime) {
                //console.log("equals");
            }
        }
    });
    */

    // var user = firebase.auth().currentUser;

    var goalStartDate;
    var goalEndDate;

    var currentDate = getCurrentDate();
    var currentDateFormatted;
    var endingDate;

    if (goalTime == "day") {
        endingDate = moment(currentDate).add(1, 'days');
    }
    else if (goalTime == "week") {
        endingDate = moment(currentDate).add(1, 'weeks');
    }
    else if (goalTime == "month") {
        endingDate = moment(currentDate).add(1, 'months');
    }
    else if (goalTime == "year") {
        endingDate = moment(currentDate).add(1, 'years');
    }

    currentDateFormatted = moment(currentDate);

    var diffDisplay = endingDate.diff(currentDate, 'days');

    if (goalAction == "reset") {
        swal("SUCCESS!", "Your goal has been saved.", "success");

        //console.log("--------");
        firebase.database().ref('users/' + user.uid + "/emdr/therapyAnalysis").set({
            userGoalNumber: goalNumber,
            userGoalTime: goalTime,
            dateGoalStart: currentDate,
            dateGoalDifference: diffDisplay,
            //dateGoalEnd: goalEndDate,
            goalActive: 'yes',
            goalSessionsProgress: 0
        });
        loadGoal();
    }
    else if (goalAction == "update") {
        swal("SUCCESS!", "Your goal has been saved.", "success");
        firebase.database().ref('users/' + user.uid + "/emdr/therapyAnalysis").update({
            userGoalNumber: goalNumber,
            userGoalTime: goalTime,
            //dateGoalStart: currentDate,
            //dateGoalDifference: diffDisplay,
            //dateGoalEnd: goalEndDate,
            goalActive: 'yes'
        });
        loadGoal();
    }
    else if (goalAction == "revert") {
        $("#same-scale-modal").modal('hide');
        document.getElementById("goal-time").innerText = originalGoalTime;
    }
    else if (goalAction == "overwrite") {
        $("#reset-goal-modal").modal('hide');
        swal("SUCCESS!", "Your goal has been saved.", "success");
        firebase.database().ref('users/' + user.uid + "/emdr/therapyAnalysis").set({
            userGoalNumber: goalNumber,
            userGoalTime: goalTime,
            dateGoalStart: currentDate,
            dateGoalDifference: diffDisplay,
            //dateGoalEnd: goalEndDate,
            goalActive: 'yes',
            goalSessionsProgress: 0
        });
        loadGoal()
    }

    var animateRed = "";
    animateRed += " <div id=\"progress-bar\" class=\"animate-smooth progress-bar\"";
    animateRed += "                                                    role=\"progressbar\" style=\"width: -30%\" aria-valuenow=\"85\"";
    animateRed += "                                                    aria-valuemin=\"0\" aria-valuemax=\"100\"><\/div>";

    document.getElementById("populate-progress-bar").innerHTML = animateRed;

}

function checkGoalNumber() {
    if (document.getElementById("goal-number").value <= 0) {
        document.getElementById("goal-number").value = 1;
    }
}

function daysInThisMonth() {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
}

function days_of_a_year(year) {

    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}