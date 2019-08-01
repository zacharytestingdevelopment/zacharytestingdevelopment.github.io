var headerType;

var defaultCoverOptions = false;
var d = new Date();

var entrySavedOnPage = false;
var oldEntrySaving = false;
var gradientBoxID;
var currentEntryID;
var coverOptionSelected = "coverOption3";
var tagsForNote = [];
var buildingWord = "";
var isUsingGradient = false;

var toolbarOptions = [
    [{ 'header': [false, 1, 2, 3, 4, 5, 6] }],
    [{ 'color': [] }, { 'background': [] }],

    ['italic', 'underline', 'strike'],

    [{ 'list': 'ordered' }, { 'list': 'bullet' }],

    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
];

var quill = new Quill('#editor', {
    modules: {
        toolbar: toolbarOptions
    },
    theme: 'snow',
    placeholder: 'Your entry here...',
});

$("#tagInput").keypress(function (event) {
    console.log("Key was pushed!");
    // alert(String.fromCharCode(event.which));
    //buildingWord += String.fromCharCode(event.which);
    //console.log("Word: " + buildingWord);
});

//viewGradientOptions();

function processTags() {

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

    document.getElementById("journal-header").className = "journal-header-img-entry " + gradientInput;

}

function closeGradientSelection() {
    /*
    $('html, body').css({
        overflow: 'scroll',
        height: 'auto'
    });
    */

    $("#gradient-selection").addClass("analysis-box-hidden");
    $("#mainNav").removeClass("opacity-hide");
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

function viewGradientOptions() {
    $("#gradient-selection").animate({ scrollTop: 0 }, "fast");
    $("#gradient-selection").removeClass("analysis-box-hidden");
    $("#mainNav").addClass("opacity-hide");
    checkUsingGradient();
}


function startNewNote() {

    deleteAllTags();
    entrySavedOnPage = false;

    if (document.getElementById("therapyCheckPause").checked) {
        updateCurrentNote('newNote');
    }

    $("#note-already-taken-modal").modal('hide');
    $("html, body").animate({ scrollTop: 0 }, "slow");

    quill.setContents('');
    document.getElementById("entryTitle").value = "";
    document.getElementById("entryDate").value = "";

}


function loadTest() {
    //Test the text entry by seeing if you can enter a default value. 
    //document.getElementById("data").innerHTML = "sdas";
}

function getEntryDate() {
    var dateData = document.getElementById("entryDate").value;
    var completedDateString;

    var year = parseInt(dateData.substring(0, 4));
    var month = parseInt(dateData.substring(5, 7));
    var day = parseInt(dateData.substring(8, 10));

    if (month == 1) {
        month = "January";
    }
    else if (month == 2) {
        month = "February";
    }
    else if (month == 3) {
        month = "March";
    }
    else if (month == 4) {
        month = "April";
    }
    else if (month == 5) {
        month = "May";
    }
    else if (month == 6) {
        month = "June";
    }
    else if (month == 7) {
        month = "July";
    }
    else if (month == 8) {
        month = "August";
    }
    else if (month == 9) {
        month = "September";
    }
    else if (month == 10) {
        month = "October";
    }
    else if (month == 11) {
        month = "November";
    }
    else if (month == 12) {
        month = "December";
    }

    completedDateString = month + " " + day + ", " + year;


    if (Number.isNaN(day) || Number.isNaN(month) || Number.isNaN(year)) {
        completedDateString = getCurrentDate();
    }

    return completedDateString;
}

function updateCurrentNote(updateType) {

    var user = firebase.auth().currentUser;
    var d = new Date();
    var data = quill.root.innerHTML;
    var dataObject = quill.getContents();

    var entryDateVal = getEntryDate();

    var importantToggled = document.getElementById("importantToggle").checked;

    //get snippet of their note.

    var promptUsed;

    if (headerType == "normal") {
        promptUsed = "WRITE ENTRY";
    }
    else {
        promptUsed = document.getElementById("prompt-entry-data").innerText;
    }

    firebase.database().ref('users/' + user.uid + "/journaling" + "/entries/" + currentEntryID).update({

        entryData: data,
        entryTitle: returnTitle(),
        entryDate: entryDateVal,
        coverType: coverOptionSelected,
        importantToggled: importantToggled,
        entryTags: getTagValues(),
        numTags: getTagsLength(),
        dayEntered: getCurrentDay(),
        entryDataObject: dataObject,
        promptUsed: promptUsed
    });

    if (updateType == "currentNote") {
        swal({
            title: "Your entry has been updated!",
            icon: "success",
            text: "You can close this dialog to continue working on the entry.",
            buttons: {
                confirm: {
                    value: "OK",
                },
            },
        })
    }
    else if (updateType = "newNote") {
        swal({
            title: "Your previous entry has been saved!",
            icon: "success",
            text: "You can start working on your new one now.",
            buttons: {
                confirm: {
                    value: "OK",
                },
            },
        })
    }


}

function checkSaveType() {
    if (!entrySavedOnPage) {
        saveEntry();
    }
    else {
        $("#note-already-taken-modal").modal('toggle');
    }
}

function deleteAllTags() {
    var tags = $('#myTags').tagEditor('getTags')[0].tags;
    for (i = 0; i < tags.length; i++) { $('#myTags').tagEditor('removeTag', tags[i]); }
}

function getTagValues() {
    var tagArray = $('#myTags').tagEditor('getTags')[0].tags
    if (tagArray.length <= 0) {
        tagArray = "empty";
    }
    return tagArray;
}

function getTagsLength() {
    var tagArray = $('#myTags').tagEditor('getTags')[0].tags;
    return tagArray.length;
}

function checkSaveEntry() {
    if (quill.getLength() <= 1) {
        swal({
            icon: "warning",
            title: "Your entry is empty!",
            text: "Are you sure that you still want to save it?",
            buttons:
            {
                cancel: {
                    text: "Cancel",
                    visible: true,
                    closeModal: true

                },
                confirm:
                {
                    value: "yes",
                    text: "Yes, save it",
                    visible: true,
                    closeModal: true
                }
            }
        }).then((value) => {
            switch (value) {

                case "yes":
                    if (!entrySavedOnPage) {
                        saveEntry();
                    }
                    else {
                        $("#note-already-taken-modal").modal('toggle');
                        //updateCurrentNote('currentNote');
                    }
                    break;

            }
        });
    }
    else {
        if (!entrySavedOnPage) {
            saveEntry();
        }
        else {
            $("#note-already-taken-modal").modal('toggle');
            //updateCurrentNote('currentNote');
        }
    }
}

function titleUpdate() {
    var currentVal = document.getElementById("entryTitle").value;
    if (currentVal.length > 0) {
        document.getElementById("header-title").innerText = currentVal;
    }
    else {
        document.getElementById("header-title").innerText = "Write your entry";
    }
}

function loadJournalHeader() {

    if (sessionStorage.getItem("currentPrompt") == "none") {

        var normalHeader = "";
        normalHeader += "<div class=\"col col-11 col-md-10 col-lg-9 col-centered write-entry-text text-center white\"";
        normalHeader += "                style=\"text-align:center;\">";
        normalHeader += "                WRITE ENTRY";
        normalHeader += "            <\/div>";

        document.getElementById("journal-entry-header-title").innerHTML = "<div class = 'animated fadeIn'>" + normalHeader + "</div>";
        headerType = "normal";
    }
    else {

        var promptHeader = "";
        promptHeader += " <span class=\"prompt-announcement no-select\">YOUR PROMPT<\/span>";
        promptHeader += "            <div class=\"prompt-announcement-divider margin-top col-centered\"><\/div>";
        promptHeader += "            <div id = 'prompt-entry-data' class=\"margin-top-tiny no-select prompt-body col col-11 col-centered\">" + sessionStorage.getItem("currentPrompt");
        promptHeader += "           <\/div>";

        document.getElementById("journal-entry-header-title").innerHTML = "<div class = 'animated fadeIn'>" + promptHeader + "</div>";
        headerType = "prompt";
    }
}

function naVoCtion(action) {
    if (action == "view") {
        $("#mainNav").removeClass("opacity-hide");
    }
    else if (action == "hide") {
        $("#mainNav").addClass("opacity-hide");
    }
}

function openPrompts() {
    naVoCtion('hide');
    $("#prompts-panel").removeClass("analysis-box-hidden");
    $("#prompts-panel").addClass("analysis-box-visible");
}

function closePrompts() {
    naVoCtion('view');
    $("#prompts-panel").removeClass("analysis-box-visible");
    $("#prompts-panel").addClass("analysis-box-hidden");
}

function getCurrentDay() {
    var d = new Date();
    return d.getDay();
}

function updateGoalProgress(goalInput) {
    var user = firebase.auth().currentUser;
    var inputUpdated = goalInput + 1;
    firebase.database().ref('users/' + user.uid + "/journaling/journalAnalysis").update({
        goalSessionsProgress: inputUpdated
    });
}

function saveEntry() {

    var user = firebase.auth().currentUser;

    var d = new Date();
    var timeSet = d.getTime();

    var data = quill.root.innerHTML;
    var dataObject = quill.getContents();

    var entryDateVal = getEntryDate();

    var importantToggled = document.getElementById("importantToggle").checked;

    var promptUsed;

    if (headerType == "normal") {
        promptUsed = "WRITE ENTRY";
    }
    else {
        promptUsed = document.getElementById("prompt-entry-data").innerText;
    }

    var descTemp = firebase.database().ref('users/' + user.uid + "/journaling/journalAnalysis");
    descTemp.once('value', function (snapshot) {
        if (snapshot.exists()) {
            if (snapshot.val().goalActive == "yes") {
                var goalSessionsProg = snapshot.val().goalSessionsProgress;
                updateGoalProgress(goalSessionsProg);
            }
        }
    });


    firebase.database().ref('users/' + user.uid + "/journaling" + "/entries/" + timeSet).set({
        entryData: data,
        entryDataObject: dataObject,
        entryTitle: returnTitle(),
        entryDate: entryDateVal,
        coverType: coverOptionSelected,
        importantToggled: importantToggled,
        entryTags: getTagValues(),
        numTags: getTagsLength(),
        dayEntered: getCurrentDay(),
        idRef: timeSet,
        promptUsed: promptUsed
    });

    if (!entrySavedOnPage) {

        if (oldEntrySaving) {
            entrySavedOnPage = false;
            oldEntrySaving = false;

            swal({
                title: "Your old entry has been saved!",
                icon: "success",
                text: "You can start working on your new one now.",
                buttons: {
                    confirm: {
                        value: "View journal",
                    },
                },
            })

        }
        else {
            entrySavedOnPage = true;
            currentEntryID = timeSet;
            swal({
                title: "Your entry has been saved!",
                icon: "success",
                /*html:
                    'You can <a href = "journal.html" class = "link-style">return to your journal</a>, or close this ' +
                    'dialog to continue editing.',*/
                buttons: {

                    confirm: {
                        value: "View journal",
                    },
                },
            })

        }

    }
    else {
        $("#note-already-taken-modal").modal('toggle');
    }

    //console.log("Saving: " + currentEntryID);


    /*
var desc = firebase.database().ref('users/' + user.uid + "/journaling/1556588068477");


desc.on('value', function (snapshot) {
    console.log(snapshot.val().entryData);
    quill.setContents(snapshot.val().entryData);

});
*/

}

function returnDate() {
    document.getElementById("entryDate").value;
}

function returnText() {
    return document.getElementById("data").innerHTML;
}

function returnTitle() {
    var returnedText;

    if (document.getElementById("entryTitle").value.length > 0) {
        returnedText = document.getElementById("entryTitle").value;
    }
    else {
        returnedText = getCurrentDate();
    }

    return returnedText;
}

function getCurrentDate() {

    var returnedDate;
    var d = new Date();

    var day = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();

    if (month == 0) {
        month = "January";
    }
    else if (month == 1) {
        month = "February";
    }
    else if (month == 2) {
        month = "March";
    }
    else if (month == 3) {
        month = "April";
    }
    else if (month == 4) {
        month = "May";
    }
    else if (month == 5) {
        month = "June";
    }
    else if (month == 6) {
        month = "July";
    }
    else if (month == 7) {
        month = "August";
    }
    else if (month == 8) {
        month = "September";
    }
    else if (month == 9) {
        month = "October";
    }
    else if (month == 10) {
        month = "November";
    }
    else if (month == 11) {
        month = "December";
    }

    returnedDate = month + " " + day + ", " + year;


    return returnedDate;
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

}

function customCoverColor() {
    var colorChange = document.getElementById("background-color").value;
    document.getElementById("journal-header").className = "header journal-header pb-5";
    document.getElementById("journal-header").style.background = $("#background-color").val();
}

function changeDefault(choice) {
    if (choice == "first") {
        document.getElementById("default1").className = "default-box default-box-active landing1 margin-top-setting";
        document.getElementById("default2").className = "default-box landing2 margin-top-setting";
        document.getElementById("default3").className = "default-box landing3 margin-top-setting";

        document.getElementById("journal-header").className = "header bg-dark journal-header journal-header-1 pb-5";
    }
    else if (choice == "second") {
        document.getElementById("default1").className = "default-box landing1 margin-top-setting";
        document.getElementById("default2").className = "default-box default-box-active landing2 margin-top-setting";
        document.getElementById("default3").className = "default-box landing3 margin-top-setting";

        document.getElementById("journal-header").className = "header bg-dark journal-header journal-header-3 pb-5";
    }
    else if (choice == "third") {
        document.getElementById("default1").className = "default-box landing1 margin-top-setting";
        document.getElementById("default2").className = "default-box landing2 margin-top-setting";
        document.getElementById("default3").className = "default-box default-box-active landing3 margin-top-setting";

        document.getElementById("journal-header").className = "header bg-dark journal-header journal-header-2 pb-5";
    }
}