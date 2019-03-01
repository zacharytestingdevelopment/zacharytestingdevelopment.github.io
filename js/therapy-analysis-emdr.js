
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

            document.getElementById("load-more-box-put").innerHTML = "<div class = 'col col-12 top-split animated flipInX text-center col-centered'>" + noNotes + "</div>";
        }

        loadSessionsCompleted();
        loadDaysUsed();
        loadGoal();

    });
}

function updateDaysCounter() {
    console.log("DAYS: " + daysCounter);
    daysCounter--;
}

function loadDaysUsed() {
    var user = firebase.auth().currentUser;
    daysCounter = therapyResults.length - 1;

    for (i = therapyResults.length - 1; i >= 0; i--) {

        var desc = firebase.database().ref('users/' + user.uid + "/emdr/therapyResults/" + therapyResults[i]);
        desc.on('value', function (snapshot) {

            var tempStr = therapyResults[daysCounter];
            updateDaysCounter();
            console.log(tempStr);

            //var 
            console.log(snapshot.val().dayOfSession);
            //var tempStr = therapyResults[count];
            //updateCountDays(snapshot.val().dayOfSession, endDaysCount);
            //console.log("DAY: " + snapshot.val().dayOfSession);
        });
    }

    //console.log("DAYS: " + monday);
}

function loadResults() {
    console.log("INIT TOTAL: " + totalLoadCount);
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
                console.log("BREAK AT ---- " + totalLoadCount);
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

    console.log("Load count: " + totalLoadCount);
}

function loadMoreNotes() {
    var user = firebase.auth().currentUser;
    var startingIndex;
    var destinationIndex;

    startingIndex = amountToLoad() - 1;
    var destinationIndex = startingIndex - 9;

    console.log("Notes remaining to load: " + amountToLoad());
    console.log("Starting index: " + startingIndex);
    console.log("Destination index: " + destinationIndex);

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
        document.getElementById("error-message-box").innerHTML = "<div class = 'col col-8 col-centered animated flipInX'> <span class = 'error-message'>No more sessions to load!</span></div>"

    }
}

function amountToLoad() {
    return therapyResults.length - totalLoadCount;

}

function analyzeSet(set) {
    console.log("Analyze this set: " + set);
}




function loadSessionsCompleted() {
    document.getElementById("sessions-completed").innerHTML = "<span class = 'animated fadeIn'>" + therapyResults.length + "</span>";
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

/*
function updateCountDays(day, dayCount) {

    if (day == 0) {
        sunday++;
    }
    else if (day == 1) {
        monday++;
    }
    else if (day == 2) {
        tuesday++;
    }
    else if (day == 3) {
        wednesday++;
    }
    else if (day == 4) {
        thursday++;
    }
    else if (day == 5) {
        friday++;
    }
    else if (day == 6) {
        saturday++;
    }
}
*/

function loadGoal() {
    var user = firebase.auth().currentUser;
    var desc = firebase.database().ref('users/' + user.uid + "/emdr/therapyAnalysis");

    var goalBox = "";
    goalBox += "<div class=\"dashboard-goal margin-top-tiny\">";
    goalBox += "                                            I want to complete";
    goalBox += "                                            <input id=\"goal-number\" onfocusout=\"checkGoalNumber()\" type=\"number\" min=\"1\"";
    goalBox += "                                                value=\"5\" class=\"text-center dashboard-goal-input\" \/>";
    goalBox += "                                            sessions this";
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
    goalBox += "                                            <div class=\"margin-top\">";
    goalBox += "                                                <span onclick=\"saveGoal()\"";
    goalBox += "                                                    class=\"no-select goal-button large-goal-button\">Save my";
    goalBox += "                                                    goal<\/span>";
    goalBox += "                                            <\/div>";
    goalBox += "";
    goalBox += "                                        <\/div>";

    document.getElementById("dashboard-goal-box").innerHTML = "<div class = 'animated fadeIn'>" + goalBox + "</div>";
    desc.on('value', function (snapshot) {

        document.getElementById("goal-number").value = snapshot.val().userGoalNumber;
        document.getElementById("goal-time").innerText = snapshot.val().userGoalTime;
    });
}

function viewGoal() {
    $('#view-goal-modal').modal('toggle');
    var user = firebase.auth().currentUser;
    var desc = firebase.database().ref('users/' + user.uid + "/emdr/therapyAnalysis");
    desc.on('value', function (snapshot) {

        document.getElementById("modal-goal-number").innerHTML = "<span class = 'animated flipInX white'>" + snapshot.val().userGoalNumber + "</span>";
        document.getElementById("modal-goal-time").innerHTML = "<span class = 'animated flipInX white'>" + snapshot.val().userGoalTime + "</span>";
        //console.log("goal number: " + snapshot.val().userGoalNumber);
        //document.getElementById("goal-number").value = snapshot.val().userGoalNumber;
        //document.getElementById("goal-time").innerText = snapshot.val().userGoalTime;
    });
}

function saveGoal() {
    var goalNumber;
    var goalTime;
    var user = firebase.auth().currentUser;

    goalNumber = document.getElementById("goal-number").value;
    goalTime = document.getElementById("goal-time").innerText;

    firebase.database().ref('users/' + user.uid + "/emdr/therapyAnalysis").update({
        userGoalNumber: goalNumber,
        userGoalTime: goalTime
    });

    swal("SUCCESS!", "Your goal has been saved.", "success");
}

function checkGoalNumber() {
    if (document.getElementById("goal-number").value <= 0) {
        document.getElementById("goal-number").value = 1;
    }
}
