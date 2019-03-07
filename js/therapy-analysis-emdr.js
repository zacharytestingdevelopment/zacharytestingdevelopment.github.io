
var userID;
var rootRef;
var newRoot;
var therapyResults = [];
var resultsLoaded = 0;
var resultsToLoad = 10;
var getDate = "";
var str = "";
var pubStr;
var count = 0;

var monday = 0;
var tuesday = 0;
var wednesday = 0;
var thursday = 0;
var friday = 0;
var saturday = 0;
var sunday = 0;
var endDaysCount = 0;
var totalLoadCount = 0;
var loadMoreCount;
var daysCounter = 0;


//var a = moment([2007, 0, 29]);
//var b = moment([2007, 0, 28]);
///a.diff(b, 'days') // 1

//Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday 
var days = [0, 0, 0, 0, 0, 0, 0];

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        userID = firebase.auth().currentUser.uid;
        rootRef = firebase.database().ref('users');
        newRoot = rootRef.child(userID + "/emdr").child('therapyResults')

        prepareResults();

    } else {
        console.log("No user is signed in");
    }
});

function getCurrentDate() {
    var d = new Date();
    var currentTime = ([d.getFullYear(), d.getMonth(), d.getDate()]);
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
            console.log("No notes found");
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
    });
}

function updateDaysCounter() {

    daysCounter++;
}

function loadDaysUsed() {
    var user = firebase.auth().currentUser;
    //daysCounter = therapyResults.length - 1;

    for (i = therapyResults.length - 1; i >= 0; i--) {

        //console.log(therapyResults[i]);

        var desc = firebase.database().ref('users/' + user.uid + "/emdr/therapyResults/" + therapyResults[i]);
        desc.on('value', function (snapshot) {
            incrementDays(snapshot.val().dayOfSession);
        });
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

    console.log("Original days input: " + daysInput);

    var maxIndex = indexOfMax(daysInput);
    var commonDayNumber = daysInput[maxIndex];

    if (commonDayNumber == 1) {
        document.getElementById("most-common-day-number").innerHTML = commonDayNumber + " session on ";
    }
    else {
        document.getElementById("most-common-day-number").innerHTML = commonDayNumber + " sessions on ";
    }

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

    var ctx = document.getElementById('dayChart').getContext('2d')
    var dayChart = new Chart(ctx,
        {
            type: 'doughnut',
            data: {
                labels: daysLabel,
                datasets: [{
                    backgroundColor: ["#E9463E", "#3ee986", "#3EE4E9", "#E93EB3", "#A83EE9", "#E9E63E"],
                    data: daysInput
                }]
            }
        });
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
            resultsVar += "<tr id=" + id + " class = 'animated fadeIn entry' onclick='analyzeSet(\"" + str + "\");'\">";
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

function loadMoreNotes() {
    var user = firebase.auth().currentUser;
    var startingIndex;
    var destinationIndex;

    startingIndex = amountToLoad() - 1;
    var destinationIndex = startingIndex - 9;

    /*
    console.log("Notes remaining to load: " + amountToLoad());
    console.log("Starting index: " + startingIndex);
    console.log("Destination index: " + destinationIndex);
    */
    //You have notes to load
    if (amountToLoad() > 0) {
        for (i = startingIndex; i >= destinationIndex; i--) {
            if (totalLoadCount >= therapyResults.length) {
                console.log("No more notes to load at: " + totalLoadCount);
                break;
            }
            else {
                console.log("Note loaded");
                console.log("Index accessed: " + i);
                str = therapyResults[i].replace(/\s+/g, '');
                console.log("TEMPSTR: " + str);

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
                console.log("THERAPYSTR: " + therapyResults[i]);

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
        console.log("You have no notes at all to be loaded");
        document.getElementById("error-message-box").innerHTML = "<div class = 'col col-11 col-md-8 col-lg-8 col-centered animated flipInX'> <span class = 'error-message no-select'>No more sessions to load!</span></div>"

    }
}

function amountToLoad() {
    return therapyResults.length - totalLoadCount;
}

function analyzeSet(set) {
    console.log("Analyze this set: " + set);
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

        totalDays = starting.diff(ending, 'days');
        averageNumber = parseFloat(((therapyResults.length / totalDays)).toFixed(2));

        if (averageNumber <= 1) {
            sessionText = "session";
        }
        else {
            sessionText = "sessions";
        }

        document.getElementById("average-day-count").innerHTML = "<span class = 'highlight-color-green-darker'>Average of " + averageNumber + " " + sessionText + " per day</span>";
    });



    //return 1 + " sessions";
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

function updateCount() {
    count--;
}

function loadGoal() {

    var user = firebase.auth().currentUser;
    var desc = firebase.database().ref('users/' + user.uid + "/emdr/therapyAnalysis");

    var goalBox = "";
    goalBox += "<div class=\"dashboard-goal margin-top-tiny\">";
    goalBox += "                                            I want to complete";
    goalBox += "                                            <input id=\"goal-number\" onfocusout=\"checkGoalNumber()\" type=\"number\" min=\"1\"";
    goalBox += "                                                value=\"5\" class=\"text-center dashboard-goal-input\" \/>";
    goalBox += "                                            sessions every";
    goalBox += "";
    goalBox += "                                            <a id=\"goal-time\" class=\"dashboard-time-input dropdown-toggle\" href=\"#\"";
    goalBox += "                                                role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\"";
    goalBox += "                                                aria-haspopup=\"true\" aria-expanded=\"false\">";
    goalBox += "                                                <span class=\"eggshell\" id=\"timeline\">week<\/span>";
    goalBox += "                                            <\/a>";
    goalBox += "";
    goalBox += "                                            <div id=\"timelineDropdown\" class=\"dropdown-menu\"";
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
    goalBox += "                                                <span onclick=\"saveGoal()\"";
    goalBox += "                                                    class=\"no-select margin-top-tiny goal-button large-goal-button\">Save my";
    goalBox += "                                                    goal<\/span>";
    goalBox += "                                                <span";
    goalBox += "                                                    class=\"margin-top-tiny no-select goal-button large-goal-button\">View past";
    goalBox += "                                                    results<\/span>";
    goalBox += "                                            <\/div>";
    goalBox += "";
    goalBox += "                                        <\/div>";

    document.getElementById("dashboard-goal-box").innerHTML = "<div class = 'animated fadeIn'>" + goalBox + "</div>";

    desc.on('value', function (snapshot) {

        var timeInterval = snapshot.val().userGoalTime;

        document.getElementById("goal-number").value = snapshot.val().userGoalNumber;
        document.getElementById("goal-time").innerText = timeInterval;

        var d = new Date();
        var currentYear = d.getFullYear();
        var currentMonth = d.getMonth();
        var currentDay = d.getDate();
        var currentDate = [currentYear, currentMonth + 1, currentDay];
        console.log(currentDate);

        var a = moment(currentDate);
        // var a = moment([parseInt(snapshot.val().dateGoalStart.substring(6, 10)), parseInt(snapshot.val().dateGoalStart.substring(3, 5)), parseInt(snapshot.val().dateGoalStart.substring(0, 2))]);
        var b = moment([parseInt(snapshot.val().dateGoalEnd.substring(6, 10)), parseInt(snapshot.val().dateGoalEnd.substring(3, 5)), parseInt(snapshot.val().dateGoalEnd.substring(0, 2))]);

        var diffDisplay = b.diff(a, 'days');

        if (diffDisplay == 1) {
            document.getElementById("days-remaining").innerHTML = "<span class = 'animated days-remaining-goal no-select fadeInDown highlight-color-green-specific'>" + diffDisplay + " day left</span>";
        }
        else {
            document.getElementById("days-remaining").innerHTML = "<span class = 'animated days-remaining-goal no-select fadeInDown highlight-color-green-specific'>" + diffDisplay + " days left</span>";
        }

        //Pass the goal number and time interval to calculate goal progress
        updateGoalProgress(snapshot.val().userGoalNumber);
    });



    /*
    desc.on('value', function (snapshot) {
        if (snapshot.exists()) {
            var timeInterval = snapshot.val().userGoalTime;

            document.getElementById("goal-number").value = snapshot.val().userGoalNumber;
            document.getElementById("goal-time").innerText = timeInterval;

            var daysToAdd;
            if (timeInterval == "day") {
                var newDate = moment(snapshot.val().dateGoalSet).add(1, 'days').format("DD MM YYYY");
            }
            else if (timeInterval == "week") {
                var newDate = moment(snapshot.val().dateGoalSet).add(7, 'days').format("DD MM YYYY");
            }
            else if (timeInterval == "month") {
                var newDate = moment(snapshot.val().dateGoalSet).add(1, 'months').format("DD MM YYYY");
            }
            else if (timeInterval == "year") {
                var newDate = moment(snapshot.val().dateGoalSet).add(1, 'years').format("DD MM YYYY");
            }

            var dateSavedArray = moment(snapshot.val().dateGoalSet).format("DD MM YYYY");;
            //console.log("original date: " + dateSavedArray);
            //console.log("new date: " + newDate);


            //var newDateFormatted = moment([parseInt(newDate.substring(6, 10)), parseInt((newDate.substring(3, 5)) - 1), parseInt(newDate.substring(0, 2))]);

            //var newDateFormatted = moment([parseInt(newDate.substring(6, 10)), parseInt((newDate.substring(3, 5)) - 1), parseInt(newDate.substring(0, 2))]);
            //var diffDisplay = (newDateFormatted.diff(moment(snapshot.val().dateGoalSet), 'days'));

            var diffDisplay =

                //console.log("New date: " + diffDisplay);

                /*
                if (diffDisplay == 1) {
                    document.getElementById("days-remaining").innerHTML = "<span class = 'animated days-remaining-goal no-select fadeInDown highlight-color-green-specific'>" + diffDisplay + " day left</span>";
                }
                else {
                    document.getElementById("days-remaining").innerHTML = "<span class = 'animated days-remaining-goal no-select fadeInDown highlight-color-green-specific'>" + diffDisplay + " days left</span>";
                }
                
                //Pass the goal number and time interval to calculate goal progress
                updateGoalProgress(snapshot.val().userGoalNumber);


        }
    });*/
}

function updateGoalProgress(number) {
    var returnNumber = parseFloat(((therapyResults.length / number) * 100).toFixed(2));
    document.getElementById("goal-progress-percentage").innerHTML = "<span class = 'animated fadeIn'>" + returnNumber + "%</span>";
    document.getElementById("progress-bar").style.width = (returnNumber + "%");
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
            modalGoals += "You want to complete <span id=\"modal-goal-number\" class=\"modal-focus\"><\/span> " + sessionsText + " a";
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


function saveGoal() {
    var goalNumber;
    var goalTime;
    var goalEndDate;

    var user = firebase.auth().currentUser;

    goalNumber = document.getElementById("goal-number").value;
    goalTime = document.getElementById("goal-time").innerText;

    var currentDate = getCurrentDate();
    //var goalEndDate = [

    if (goalTime == "day") {
        goalEndDate = moment(currentDate).add(1, 'days').format("DD MM YYYY");
    }
    else if (goalTime == "week") {
        goalEndDate = moment(currentDate).add(7, 'days').format("DD MM YYYY");
    }
    else if (goalTime == "month") {
        goalEndDate = moment(currentDate).add(1, 'months').format("DD MM YYYY");
    }
    else if (goalTime == "year") {
        goalEndDate = moment(currentDate).add(1, 'years').format("DD MM YYYY");
    }

    currentDate = moment(currentDate).format("DD MM YYYY");

    firebase.database().ref('users/' + user.uid + "/emdr/therapyAnalysis").update({
        userGoalNumber: goalNumber,
        userGoalTime: goalTime,
        dateGoalStart: currentDate,
        dateGoalEnd: goalEndDate
    });
    /*
        desc.on('value', function (snapshot) {
            if (snapshot.exists()) {
                var timeInterval = snapshot.val().userGoalTime;
    
                document.getElementById("goal-number").value = snapshot.val().userGoalNumber;
                document.getElementById("goal-time").innerText = timeInterval;
    
                var daysToAdd;
                if (timeInterval == "day") {
                    var newDate = moment(snapshot.val().dateGoalSet).add(1, 'days').format("DD MM YYYY");
                }
                else if (timeInterval == "week") {
                    var newDate = moment(snapshot.val().dateGoalSet).add(7, 'days').format("DD MM YYYY");
                }
                else if (timeInterval == "month") {
                    var newDate = moment(snapshot.val().dateGoalSet).add(1, 'months').format("DD MM YYYY");
                }
                else if (timeInterval == "year") {
                    var newDate = moment(snapshot.val().dateGoalSet).add(1, 'years').format("DD MM YYYY");
                }
    
                var dateSavedArray = moment(snapshot.val().dateGoalSet).format("DD MM YYYY");;
                console.log("original date: " + dateSavedArray);
                console.log("new date: " + newDate);
    
    
                //var newDateFormatted = moment([parseInt(newDate.substring(6, 10)), parseInt((newDate.substring(3, 5)) - 1), parseInt(newDate.substring(0, 2))]);
    
                //var newDateFormatted = moment([parseInt(newDate.substring(6, 10)), parseInt((newDate.substring(3, 5)) - 1), parseInt(newDate.substring(0, 2))]);
                //var diffDisplay = (newDateFormatted.diff(moment(snapshot.val().dateGoalSet), 'days'));
    
                var diffDisplay = 
    
                //console.log("New date: " + diffDisplay);
    
                /*
                if (diffDisplay == 1) {
                    document.getElementById("days-remaining").innerHTML = "<span class = 'animated days-remaining-goal no-select fadeInDown highlight-color-green-specific'>" + diffDisplay + " day left</span>";
                }
                else {
                    document.getElementById("days-remaining").innerHTML = "<span class = 'animated days-remaining-goal no-select fadeInDown highlight-color-green-specific'>" + diffDisplay + " days left</span>";
                }
                
                //Pass the goal number and time interval to calculate goal progress
                updateGoalProgress(snapshot.val().userGoalNumber);
    
    
            }
        });*/

    swal("SUCCESS!", "Your goal has been saved.", "success");
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