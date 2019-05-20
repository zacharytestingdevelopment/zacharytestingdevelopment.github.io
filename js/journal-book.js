
var monday = 0;
var tuesday = 0;
var wednesday = 0;
var thursday = 0;
var friday = 0;
var saturday = 0;
var sunday = 0;

var goalNumber, goalTime;
var activeGoal;
var userID;
var rootRef;
var entryRef;
var count = 0;
var totalLoadCount = 0;
var resultsLoaded = 0;
var str = "";
var loadMoreCount;
var isUsingGradient = false;
var goalResultsVisible = false;
var currentlyAnalyzingEntry;

var journalResults = [];

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        userID = firebase.auth().currentUser.uid;
        rootRef = firebase.database().ref('users');
        newRoot = rootRef.child(userID + "/journaling/entries");
        //goalRoot = rootRef.child(userID + "/emdr").child('goalResults');

        prepareResults();

        var desc = firebase.database().ref('users/' + userID + "/userData/" + 'userPrefs/journaling');
        desc.once('value', function (snapshot) {
            if (snapshot.exists()) {
                document.getElementById("journal-header").className = "journal-header-img " + snapshot.val().coverUsing;

            }
            jQuery('#loader').fadeOut(330);
        });

    } else {
        console.log("No user is signed in");
    }
});


function changeTimelineColor(type) {
    if (type == "on") {
        $("#timeline").addClass("blue-text");
    }
    else if (type == "off") {
        $("#timeline").removeClass("blue-text");
    }
}

function viewGoal() {

    $('#view-goal-modal').modal('toggle');

    /*
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
    */
}

function loadGoal() {

    var desc = firebase.database().ref('users/' + userID + "/journaling/journalAnalysis");

    var goalBox = "";
    goalBox += "<div class=\"dashboard-goal margin-top-tiny\">";
    goalBox += "                                            I want to do";
    goalBox += "                                            <input id=\"goal-number\" onfocusout=\"checkGoalNumber()\" type=\"number\" min=\"1\"";
    goalBox += "                                                value=\"5\" class=\"text-center dashboard-goal-input\" \/>";
    goalBox += "                                            sessions this";
    goalBox += "";
    goalBox += "                                            <a id=\"goal-time\" onfocusout=\"changeTimelineColor('off')\" onclick=\"changeTimelineColor('on')\" class=\"dashboard-time-input force-top dropdown-toggle\" href=\"#\"";
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

    /*
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
                    
                    if (returnNumber >= 100) {
                        document.getElementById("days-remaining").innerHTML = "<span class = 'animated days-remaining-goal no-select fadeInDown highlight-color-green-specific'>" + returnNumber + ' percent of goal was completed' + "</span>";
                    }
                    else {
                        document.getElementById("days-remaining").innerHTML = "<span class = 'animated days-remaining-goal-incomplete days-remaining-goal no-select fadeInDown highlight-color-green-specific'>" + returnNumber + ' percent of goal was completed' + "</span>";
                    }
                }
            }

            
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
    */
}

function navAction(action) {
    if (action == "view") {
        $("#mainNav").removeClass("opacity-hide");
    }
    else if (action == "hide") {
        $("#mainNav").addClass("opacity-hide");
    }
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

function viewGoalResults() {

    /*
    $("#gradient-selection").animate({ scrollTop: 0 }, "fast");
    $("#gradient-selection").removeClass("analysis-box-hidden");
    */

    if (!goalResultsVisible) {
        $("#goal-analysis").removeClass("analysis-box-hidden");
        setTimeout(function () { navAction('hide') }, 315);
        goalResultsVisible = true;
    }
    else {
        $("#goal-analysis").animate({ scrollTop: 0 }, "fast");
        $("#goal-analysis").addClass("analysis-box-hidden");
        navAction('view');
        goalResultsVisible = false;
    }
}

function prepareResults() {
    newRoot.once('value', function (snapshot) {
        snapshot.forEach(function (_child) {
            var childElement = _child.key;
            journalResults.push(childElement);
        });

        if (journalResults.length >= 1) {
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
            noNotes += "<span class=\"no-notes-text\">You have no journal entries!<\/span>";
            noNotes += "                                <div>";
            noNotes += "                                    <a href=\"journal-entry.html\" class=\"kill-link-style\">";
            noNotes += "                                        <div class=\"no-notes-button no-select\">";
            noNotes += "                                            Get started";
            noNotes += "                                        <\/div>";
            noNotes += "                                    <\/a>";
            noNotes += "                                <\/div>";

            document.getElementById("load-more-box-put").innerHTML = "<div class = 'col col-11 col-md-8 col-lg-8 top-split animated flipInX text-center col-centered'>" + noNotes + "</div>";
        }

        loadGoal();
        loadSelectedCover();
        loadEntriesCompleted();

        /*
        loadSessionsCompleted();
        loadDaysUsed();
        loadGoal();
        if (therapyResults.length > 0) {
            triggerActivityData();
        }
        else {
            document.getElementById("therapies-are-saved").className = "hidden";
        }
        */
    });
}

function loadSelectedCover() {
    var desc = firebase.database().ref('users/' + userID + "/userData/userPrefs/journaling");
    desc.once('value', function (snapshot) {

        var coverUsing = snapshot.val().coverUsing;

        if (coverUsing != "journal-header-1" && coverUsing != "journal-header-2" && coverUsing != "journal-header-3") {
            //Using gradient cover

            gradientBoxID = coverUsing;

            $("#" + coverUsing).addClass("grad-element-box-selected");

            if (!isUsingGradient) {
                isUsingGradient = true;
                checkUsingGradient();
            }

            var badge = "";
            badge += "<span class = 'animated fadeIn'><span class=\"badge badge-soft-success mt--1\">";
            badge += "                                            <span class=\"highlight-color-green-badge\">Currently using gradient cover<\/span>";
            badge += "                                        <\/span></span>";
            document.getElementById("cover-active-box").innerHTML = badge;
        }
        else {
            //Not using gradient cover

            var badge = "";
            badge += "<span class=\"badge badge-soft-danger animated flipInX mt--1\">";
            badge += "                                            <span class=\"highlight-color-red-badge\">Not currently using gradient cover<\/span>";
            badge += "                                        <\/span>";
            document.getElementById("cover-active-box").innerHTML = badge;

            if (coverUsing == "journal-header-1") {

                //coverOptionSelected = "journal-header-1";

                $("#coverOption1").addClass("cover-option-box-selected");
                $("#coverOption2").removeClass("cover-option-box-selected");
                $("#coverOption3").removeClass("cover-option-box-selected");
            }
            else if (coverUsing == "journal-header-2") {
                //coverOptionSelected = "journal-header-3";

                $("#coverOption1").removeClass("cover-option-box-selected");
                $("#coverOption2").removeClass("cover-option-box-selected");
                $("#coverOption3").addClass("cover-option-box-selected");
            }
            else if (coverUsing == "journal-header-3") {
                //coverOptionSelected = "journal-header-2";

                $("#coverOption1").removeClass("cover-option-box-selected");
                $("#coverOption2").addClass("cover-option-box-selected");
                $("#coverOption3").removeClass("cover-option-box-selected");
            }
        }
    });
}

function checkGoalNumber() {
    if (document.getElementById("goal-number").value <= 0) {
        document.getElementById("goal-number").value = 1;
    }
}

function loadEntriesCompleted() {
    document.getElementById("sessions-completed").innerHTML = "<span class = 'animated fadeIn'>" + journalResults.length + "</span>";
    document.getElementById("sessions-daily").innerHTML = "<span class='badge badge-soft-success mt--1'><span class = 'animated fadeIn highlight-color-green-darker'><span id = 'average-day-count'></span></span></span>";
    averageSessionsPerDay();
}

function averageSessionsPerDay() {

    //var user = firebase.auth().currentUser;
    //var desc = firebase.database().ref('users/' + userID + "/journaling");

    var totalDays;

    var desc = firebase.database().ref('users/' + userID + "/userData/");
    desc.on('value', function (snapshot) {
        var sessionText;
        var averageNumber;

        var starting = moment(getCurrentDate());
        var ending = moment([snapshot.val().yearCreatedUser, snapshot.val().monthCreatedUser, snapshot.val().dayCreatedUser]);


        totalDays = starting.diff(ending, 'days') + 1;
        averageNumber = parseFloat(((journalResults.length / totalDays)).toFixed(2));

        if (!isNaN(averageNumber)) {
            if (averageNumber == 1) {
                sessionText = "entry";
            }
            else {
                sessionText = "entries";
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

function getCurrentDate() {
    var d = new Date();
    var currentTime = ([d.getFullYear(), d.getMonth(), d.getDate()]);

    return currentTime;
}

function viewGradientOptions() {
    $("#gradient-selection").animate({ scrollTop: 0 }, "fast");
    $("#gradient-selection").removeClass("analysis-box-hidden");

    setTimeout(function () { navAction('hide') }, 315);
    checkUsingGradient();
}

function closeGradientSelection() {
    $("#gradient-selection").addClass("analysis-box-hidden");
    navAction('view');
}

function amountToLoad() {
    return journalResults.length - totalLoadCount;
}

function updateLoadMoreCount() {
    loadMoreCount--;
}

function noteAction(action) {
    if (action == "edit") {

    }
    else if (action == "trash") {

    }
}

function returnDayUsed(dayInput) {
    var dayReturned = "n/a";

    if (dayInput == 0) {
        dayReturned = "Monday";
    }
    else if (dayInput == 1) {
        dayReturned = "Tuesday";
    }
    else if (dayInput == 2) {
        dayReturned = "Wednesday";
    }
    else if (dayInput == 3) {
        dayReturned = "Thursday";
    }
    else if (dayInput == 4) {
        dayReturned = "Friday";
    }
    else if (dayInput == 5) {
        dayReturned = "Saturday";
    }
    else if (dayInput == 6) {
        dayReturned = "Sunday";
    }

    return dayReturned;
}

function viewEntryDetails() {
    console.log("Your entry: " + currentlyAnalyzingEntry);

    var desc = firebase.database().ref('users/' + userID + "/journaling/entries/" + currentlyAnalyzingEntry);
    desc.once('value', function (snapshot) {
        document.getElementById("entry-date-modal").innerHTML = snapshot.val().entryDate;
        document.getElementById("entry-name-modal").innerHTML = snapshot.val().entryTitle;
        document.getElementById("entry-day-modal").innerHTML = returnDayUsed(snapshot.val().dayEntered);
        document.getElementById("entry-tags-modal").innerHTML = snapshot.val().numTags;

        if (!(snapshot.val().importantToggled)) {
            //If not toggled important
            document.getElementById("entry-important-modal").innerHTML = "No";

            $("#entry-important-modal").addClass("goal-completed-highlight-red");
            $("#entry-important-modal").removeClass("goal-completed-highlight-green");
        }
        else {
            //If toggled important
            document.getElementById("entry-important-modal").innerHTML = "Yes";

            $("#entry-important-modal").removeClass("goal-completed-highlight-red");
            $("#entry-important-modal").addClass("goal-completed-highlight-green");
        }
    });

    /*
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
    */

    $("#entryDetails").modal('toggle');
}

function analyzeEntry(entry) {
    navAction('hide');

    currentlyAnalyzingEntry = entry;


    var desc = firebase.database().ref('users/' + userID + '/journaling/entries/' + entry);

    desc.once('value', function (snapshot) {

        var coverTypeLocal = snapshot.val().coverType;
        if (coverTypeLocal == "coverOption3") {
            document.getElementById("entry-header").className = "journal-header-img journal-header-2";
        }
        else {
            document.getElementById("entry-header").className = "journal-header-img " + coverTypeLocal;
        }

        document.getElementById("entry-title").innerHTML = snapshot.val().entryTitle;
        document.getElementById("entry-date").innerHTML = snapshot.val().entryDate;

        var entryBody = snapshot.val().entryData;

        document.getElementById("entry-body").innerHTML = entryBody;

        //document.getElementById("entry-body").innerHTML = entryBody;

        /*
        if (coverTypeLocal != "coverOption3" && coverTypeLocal != "journal-header-2" && coverTypeLocal != "journal-header-3") {
            //Gradient cover
            document.getElementById("entry-header").className = "journal-header-img " + coverTypeLocal;
        }
        else {
            //Picture cover
            console.log(coverTypeLocal);
            if (coverTypeLocal == "coverOption3") {
                document.getElementById("entry-header").className = "journal-header-img journal-header-2";
            }
            else if (coverTypeLocal == "coverOption2") {
                console.log("entered");
                document.getElementById("entry-header").className = "journal-header-img journal-header-3";
            }
            else if (coverTypeLocal == "coverOption1") {
                document.getElementById("entry-header").className = "journal-header-img journal-header-1";
            }
        }
        */
    });

    $("#entry-result").removeClass("analysis-box-hidden");
    $("#entry-result").addClass("analysis-box-visible");
}

function closeAnalyzeEntry() {
    navAction('view');
    $("#entry-result").animate({ scrollTop: 0 }, "fast");
    $("#entry-result").removeClass("analysis-box-visible");
    $("#entry-result").addClass("analysis-box-hidden");
}

function checkUsingGradient() {
    if (isUsingGradient) {
        var isGrad = "";
        isGrad += "<div class=\"is-using-gradient-box animated flipInX gradient-active\">You are using a gradient cover<\/div>";

    }
    else {
        var isGrad = "";
        isGrad += "<div class=\"is-using-gradient-box animated flipInX gradient-inactive\">You are not using a gradient cover<\/div>";

    }

    document.getElementById("is-using-gradient-box").innerHTML = isGrad;

}

function setCover(decision) {

    if (isUsingGradient) {
        var badge = "";
        badge += "<span class=\"badge badge-soft-danger animated flipInX mt--1\">";
        badge += "                                            <span class=\"highlight-color-red-badge\">Not currently using gradient cover<\/span>";
        badge += "                                        <\/span>";
        document.getElementById("cover-active-box").innerHTML = badge;

        isUsingGradient = false;
        $("#" + gradientBoxID).removeClass("grad-element-box-selected");
    }

    if (decision == "coverOption1") {

        coverOptionSelected = "journal-header-1";

        $("#coverOption1").addClass("cover-option-box-selected");
        $("#coverOption2").removeClass("cover-option-box-selected");
        $("#coverOption3").removeClass("cover-option-box-selected");

        $("#journal-header").removeClass("journal-header-2");
        $("#journal-header").removeClass("journal-header-3");
        $("#journal-header").addClass("journal-header-1");

    }
    else if (decision == "coverOption2") {
        coverOptionSelected = "journal-header-3";

        $("#coverOption1").removeClass("cover-option-box-selected");
        $("#coverOption2").addClass("cover-option-box-selected");
        $("#coverOption3").removeClass("cover-option-box-selected");

        $("#journal-header").removeClass("journal-header-2");
        $("#journal-header").removeClass("journal-header-1");
        $("#journal-header").addClass("journal-header-3");
    }
    else if (decision == "coverOption3") {

        coverOptionSelected = "journal-header-2";

        $("#coverOption1").removeClass("cover-option-box-selected");
        $("#coverOption2").removeClass("cover-option-box-selected");
        $("#coverOption3").addClass("cover-option-box-selected");

        $("#journal-header").addClass("journal-header-2");
        $("#journal-header").removeClass("journal-header-1");
        $("#journal-header").removeClass("journal-header-3");
    }

    firebase.database().ref('users/' + userID + "/userData" + "/userPrefs/journaling").set({
        coverUsing: coverOptionSelected
    });
}

function selectGradientCover(gradientInput) {

    coverOptionSelected = gradientInput;

    if (!isUsingGradient) {
        isUsingGradient = true;
        checkUsingGradient();
    }

    gradientBoxID = gradientInput;

    $(".cover-option-box").removeClass("cover-option-box-selected");
    $(".grad-element-box").removeClass("grad-element-box-selected");
    $("#" + gradientBoxID).addClass("grad-element-box-selected");

    var badge = "";
    badge += "<span class = 'animated fadeIn'><span class=\"badge badge-soft-success mt--1\">";
    badge += "                                            <span class=\"highlight-color-green-badge\">Currently using gradient cover<\/span>";
    badge += "                                        <\/span></span>";
    document.getElementById("cover-active-box").innerHTML = badge;

    document.getElementById("journal-header").className = "journal-header-img " + gradientInput;

    firebase.database().ref('users/' + userID + "/userData" + "/userPrefs/journaling").set({
        coverUsing: gradientInput
    });
}

function checkGoal() {
    var desc = firebase.database().ref('users/' + userID + '/journaling/journalAnalysis');
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



    var desc = firebase.database().ref('users/' + userID + "/journaling/journalAnalysis");
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

    if (goalAction != "overwrite") {
        goalNumber = document.getElementById("goal-number").value;
        goalTime = document.getElementById("goal-time").innerText;
    }
    else {
        var desc = firebase.database().ref('users/' + userID + "/journaling/goalResults/" + activeGoal);
        desc.once('value', function (snapshot) {
            goalNumber = snapshot.val().setGoalNumber;
            goalTime = snapshot.val().setGoalTimescale;
        });
    }

    console.log("yeet");

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
        firebase.database().ref('users/' + userID + "/journaling/journalAnalysis").set({
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
        firebase.database().ref('users/' + userID + "/journaling/journalAnalysis").update({
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
        firebase.database().ref('users/' + userID + "/journaling/journalAnalysis").set({
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


    console.log(endingDate);



    /*

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
*/
}

function loadResults() {
    count = journalResults.length - 1;

    for (i = journalResults.length - 1; i >= 0; i--) {

        if (totalLoadCount < journalResults.length) {
            //console.log("UPDATED TOTAL: " + totalLoadCount);

            str = journalResults[i].replace(/\s+/g, '');
            id = "box" + str;

            var resultsVar = "";
            resultsVar += "<tr id=" + id + " class = 'animated fadeIn entry no-select' onclick='analyzeEntry(\"" + str + "\");'\">";
            resultsVar += "                                        <td id=title" + str + " class=\"goal-project\">";
            resultsVar += "                                            1\/2\/2019";
            resultsVar += "                                        <\/td>";
            resultsVar += "                                        <td id=important" + str + " class=\"goal-status\">";
            resultsVar += "                                            <span class=\"text-warning\">●<\/span> Started";
            resultsVar += "                                        <\/td>";
            resultsVar += "                                        <td id=tags" + str + " class=\"goal-progress\">";
            resultsVar += "                                            5";
            resultsVar += "                                        <\/td>";
            resultsVar += "                                        <td class=\"goal-date\">";
            resultsVar += "                                            <time id=date" + str + " datetime=\"2018-10-24\">Quick set<\/time>";
            resultsVar += "                                        <\/td>";
            resultsVar += "";
            resultsVar += "                                        <td class=\"text-right\">";
            resultsVar += "                                            <span class=\"analyze-link no-select\">Analyze entry<\/span>";
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

        var desc = firebase.database().ref('users/' + userID + "/journaling/entries/" + journalResults[i]);
        desc.on('value', function (snapshot) {
            var tempStr = journalResults[count];
            var truncatedTitle = snapshot.val().entryTitle;
            updateCount();

            //document.getElementById("date" + tempStr).innerHTML = tempStr;

            //return string.substring(0,5)+'...'
            if (truncatedTitle.length > 40) {
                truncatedTitle = snapshot.val().entryTitle.substring(0, 40) + "..."
            }

            document.getElementById("title" + tempStr).innerHTML = truncatedTitle;
            document.getElementById("tags" + tempStr).innerHTML = snapshot.val().numTags;
            document.getElementById("date" + tempStr).innerHTML = snapshot.val().entryDate;

            if (snapshot.val().importantToggled == true) {
                var complete = "";
                complete += "<td class=\"goal-status\">";
                complete += "                                            <span class=\"text-success\">●<\/span> Important";
                complete += "                                        <\/td>";

                document.getElementById("important" + tempStr).innerHTML = complete;

            }
            else {
                var incomplete = "";
                incomplete += "<td class=\"goal-status\">";
                incomplete += "                                            <span class=\"text-warning\">●<\/span> Normal priority";
                incomplete += "                                        <\/td>";

                document.getElementById("important" + tempStr).innerHTML = incomplete;
            }

        });
    }
}

function loadMoreNotes() {

    var startingIndex;
    var destinationIndex;

    startingIndex = amountToLoad() - 1;
    destinationIndex = startingIndex - 9;
    //console.log("INIT STR: " + str);
    var desc;

    if (amountToLoad() > 0) {
        for (var i = startingIndex; i >= destinationIndex; i--) {
            if (totalLoadCount >= journalResults.length) {
                break;
            }
            else {
                str = journalResults[i].replace(/\s+/g, '');
                desc = desc = firebase.database().ref('users/' + userID + "/journaling/entries/" + str);
                desc.on('value', function (snapshot) {

                    var addStr = snapshot.val().idRef;

                    var id = "box" + addStr;

                    //var ref = snapshot.val();
                    //console.log(ref);

                    //console.log("id: " + id);
                    var resultsVar = "";
                    resultsVar += "<tr id=" + id + " class = 'animated fadeIn entry' onclick='analyzeEntry(\"" + addStr + "\");'\">";
                    resultsVar += "                                        <td id=titlex" + addStr + " class=\"goal-project\">";
                    resultsVar += "                                            1\/2\/2019";
                    resultsVar += "                                        <\/td>";
                    resultsVar += "                                        <td id=importantx" + addStr + " class=\"goal-status\">";
                    resultsVar += "                                            <span class=\"text-warning\">●<\/span> Started";
                    resultsVar += "                                        <\/td>";
                    resultsVar += "                                        <td id=tagsx" + addStr + " class=\"goal-progress\">";
                    resultsVar += "                                            5";
                    resultsVar += "                                        <\/td>";
                    resultsVar += "                                        <td class=\"goal-date\">";
                    resultsVar += "                                            <time id=datex" + addStr + " datetime=\"2018-10-24\">Quick set<\/time>";
                    resultsVar += "                                        <\/td>";
                    resultsVar += "";
                    resultsVar += "                                        <td class=\"text-right\">";
                    resultsVar += "                                            <span class=\"analyze-link no-select\">Analyze entry<\/span>";
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

                    document.getElementById("results-body").innerHTML += resultsVar;

                    var truncatedTitle = snapshot.val().entryTitle;

                    if (truncatedTitle.length > 40) {
                        truncatedTitle = snapshot.val().entryTitle.substring(0, 40) + "..."
                    }

                    document.getElementById("titlex" + addStr).innerHTML = truncatedTitle;
                    document.getElementById("tagsx" + addStr).innerHTML = snapshot.val().numTags;
                    document.getElementById("datex" + addStr).innerHTML = snapshot.val().entryDate;

                    if (snapshot.val().importantToggled == true) {
                        var complete = "";
                        complete += "<td class=\"goal-status\">";
                        complete += "                                            <span class=\"text-success\">●<\/span> Important";
                        complete += "                                        <\/td>";

                        document.getElementById("importantx" + addStr).innerHTML = complete;

                    }
                    else {
                        var incomplete = "";
                        incomplete += "<td class=\"goal-status\">";
                        incomplete += "                                            <span class=\"text-warning\">●<\/span> Normal priority";
                        incomplete += "                                        <\/td>";

                        document.getElementById("importantx" + addStr).innerHTML = incomplete;
                    }

                });
                totalLoadCount++;
            }
        }
    }
    else {

        document.getElementById("error-message-box").innerHTML = "<div class = 'col col-11 col-md-8 col-lg-8 col-centered animated flipInX'> <span class = 'error-message no-select'>No more entries to load!</span></div>";
    }
}

function updateCount() {
    count--;
}