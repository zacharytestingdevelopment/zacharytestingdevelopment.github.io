
var customizeLeft = document.getElementById('customize-left'), customizeRight = document.getElementById('customize-right');
var customizeDashActive = false;

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
