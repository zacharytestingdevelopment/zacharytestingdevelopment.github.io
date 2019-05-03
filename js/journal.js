
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

    /*
    setTimeout(function () {
        $('html, body').css({
            overflow: 'hidden',
            height: '100%'
        });
    }, 400);
    */
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
    var data = quill.getContents();
    var entryDateVal = getEntryDate();

    var importantToggled = document.getElementById("importantToggle").checked;

    firebase.database().ref('users/' + user.uid + "/journaling" + "/" + currentEntryID).update({

        entryData: data,
        entryTitle: returnTitle(),
        entryDate: entryDateVal,
        coverType: coverOptionSelected,
        importantToggled: importantToggled,
        entryTags: getTagValues()
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
    //Error: new entry being created when updating 
    //Tags not always updating when updating entry 
    var tagArray = $('#myTags').tagEditor('getTags')[0].tags
    if (tagArray.length <= 0) {
        tagArray = "empty";
    }

    return tagArray;

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
function saveEntry() {

    var user = firebase.auth().currentUser;

    var d = new Date();
    var timeSet = d.getTime();

    var data = quill.getContents();

    var entryDateVal = getEntryDate();

    var importantToggled = document.getElementById("importantToggle").checked;

    firebase.database().ref('users/' + user.uid + "/journaling" + "/" + timeSet).set({
        entryData: data,
        entryTitle: returnTitle(),
        entryDate: entryDateVal,
        coverType: coverOptionSelected,
        importantToggled: importantToggled,
        entryTags: getTagValues()
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

    console.log("Saving: " + currentEntryID);


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
    }

    isUsingGradient = false;
    $("#" + gradientBoxID).removeClass("grad-element-box-selected");

    if (decision == "coverOption1") {

        coverOptionSelected = "coverOption1";

        $("#coverOption1").addClass("cover-option-box-selected");
        $("#coverOption2").removeClass("cover-option-box-selected");
        $("#coverOption3").removeClass("cover-option-box-selected");

        $("#journal-header").removeClass("journal-header-2");
        $("#journal-header").removeClass("journal-header-3");
        $("#journal-header").addClass("journal-header-1");

    }
    else if (decision == "coverOption2") {
        coverOptionSelected = "coverOption2";

        $("#coverOption1").removeClass("cover-option-box-selected");
        $("#coverOption2").addClass("cover-option-box-selected");
        $("#coverOption3").removeClass("cover-option-box-selected");

        $("#journal-header").removeClass("journal-header-2");
        $("#journal-header").removeClass("journal-header-1");
        $("#journal-header").addClass("journal-header-3");
    }
    else if (decision == "coverOption3") {

        coverOptionSelected = "coverOption3";

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