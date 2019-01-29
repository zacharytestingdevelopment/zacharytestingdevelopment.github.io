function changeGoalTimeline(timeline) {
    //also turn white
    console.log("www");
    document.getElementById("timeline").innerHTML = timeline;
}

function timelineTextStyle(type) {
    if (type == "in") {
        console.log("in");
        document.getElementById("timeline").className = "highlight-color-blue";

    }
    else if (type == "out") {
        console.log("out");
        document.getElementById("timeline").className = "white";
        // document.getElementById('timeline').style.color = '#fff';

    }
}