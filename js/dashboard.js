
var customizeLeft = document.getElementById('customize-left'), customizeRight = document.getElementById('customize-right');
var customizeDashActive = false;
var isUsingGradient = false;
var coverOptionSelected = "";


new Sortable(customizeLeft, {
    ghostClass: "ghost",
    group: 'shared',
    onEnd: function (evt) {
        $('.list-group li').each(function (index) {
            var newIndex = index + 1 + '.';
            $(this).find('.index').html(newIndex);
        });
    }
});

new Sortable(customizeRight, {
    ghostClass: "ghost",
    group: 'shared',
    onEnd: function (evt) {
        $('.list-group li').each(function (index) {
            var newIndex = index + 1 + '.';
            $(this).find('.index').html(newIndex);
        });
    }
});


function openBlog(value) {
    if (value == "dashboard") {
        localStorage.setItem("blogOrigin", "dashboard");
        setTimeout(function () { window.location = "blog.html"; }, 300);
    }
}

function openInstructions() {
    $("#instructions-panel").removeClass("analysis-box-hidden");
    $("#instructions-panel").addClass("analysis-box-visible");
}

function closeInstructions() {
    $("#instructions-panel").removeClass("analysis-box-visible");
    $("#instructions-panel").addClass("analysis-box-hidden");
}

function moveArrowOut(arrowType) {
    if (arrowType == "instructions") {
        $("#instructions-arrow").addClass("larger-arrow-moved");
    }
    else if (arrowType == "professionals") {
        $("#professionals-arrow").addClass("larger-arrow-moved");
    }
}

function moveArrowBack(arrowType) {
    if (arrowType == "instructions") {
        $("#instructions-arrow").removeClass("larger-arrow-moved");
    }
    else if (arrowType == "professionals") {
        $("#professionals-arrow").removeClass("larger-arrow-moved");
    }
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

function viewGradientOptions() {
    $("#gradient-selection").animate({ scrollTop: 0 }, "fast");
    $("#gradient-selection").removeClass("analysis-box-hidden");

    checkUsingGradient();
}

function closeGradientSelection() {
    $("#gradient-selection").addClass("analysis-box-hidden");
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

}

function changeGoalTimeline(timeline) {
    //also turn white
    document.getElementById("goal-time").innerText = timeline;
}

function customizeDash() {
    $("#full-body-wrap").addClass("full-body-wrap-visible");
    $("body").addClass("stop-scrolling");
    $('body').bind('touchmove', function (e) { e.preventDefault() });
    customizeDashActive = true;
}

function closeDash(type) {
    if (type == "general") {
        //Ask if you want to save

        $("#full-body-wrap").removeClass("full-body-wrap-visible");
        $("body").removeClass("stop-scrolling");
        $('body').unbind('touchmove');
        customizeDashActive = false;
    }
    else if (type == "save") {
        //Save values 

        $("#full-body-wrap").removeClass("full-body-wrap-visible");
        $("body").removeClass("stop-scrolling");
        $('body').unbind('touchmove');
        customizeDashActive = false;
    }
    else if (type == "default") {
        //Revert to default 

        $("#full-body-wrap").removeClass("full-body-wrap-visible");
        $("body").removeClass("stop-scrolling");
        $('body').unbind('touchmove');
        customizeDashActive = false;
    }
}