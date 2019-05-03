
var monday = 0;
var tuesday = 0;
var wednesday = 0;
var thursday = 0;
var friday = 0;
var saturday = 0;
var sunday = 0;

var userID;
var rootRef;
var entryRef;
var count = 0;
var totalLoadCount = 0;
var resultsLoaded = 0;
var str = "";

var journalResults = [];

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        userID = firebase.auth().currentUser.uid;
        rootRef = firebase.database().ref('users');
        newRoot = rootRef.child(userID + "/journaling");
        //goalRoot = rootRef.child(userID + "/emdr").child('goalResults');

        prepareResults();

    } else {
        console.log("No user is signed in");
    }
});

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

function loadResults() {
    count = journalResults.length - 1;

    for (i = journalResults.length - 1; i >= 0; i--) {

        if (totalLoadCount < journalResults.length) {
            //console.log("UPDATED TOTAL: " + totalLoadCount);

            str = journalResults[i].replace(/\s+/g, '');
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
        var desc = firebase.database().ref('users/' + userID + "/journaling/" + journalResults[i]);
        desc.on('value', function (snapshot) {
            var tempStr = journalResults[count];
            updateCount();

            //document.getElementById("date" + tempStr).innerHTML = tempStr;
            document.getElementById("date" + tempStr).innerHTML = snapshot.val().entryDate;
            document.getElementById("notes" + tempStr).innerHTML = snapshot.val().coverType;
            document.getElementById("setUsed" + tempStr).innerHTML = snapshot.val().entryTitle;

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
}

function updateCount() {
    count--;
}