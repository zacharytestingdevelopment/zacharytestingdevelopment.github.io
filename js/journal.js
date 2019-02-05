
var defaultCoverOptions = false;


function loadTest() {
    //Test the text entry by seeing if you can enter a default value. 
    //document.getElementById("data").innerHTML = "sdas";
}

function defaultCover(decision) {

    if (decision == "yes") {
        if (!defaultCoverOptions) {
            defaultCoverOptions = true;
            document.getElementById("cover-button1").className = "tag-button no-select";
            document.getElementById("cover-button2").className = "tag-button tag-button-active no-select";

            var coverPhotos = "";
            coverPhotos += "<div class=\"text-center-small animated fadeIn\">";
            coverPhotos += "                                                    <span onclick=\"changeDefault('first')\" id=\"default1\" class=\"default-box landing2 margin-top-setting\"><\/span>";
            coverPhotos += "                                                    <span id=\"default2\" onclick=\"changeDefault('second')\" class=\"default-box landing1 margin-top-setting\"><\/span>";
            coverPhotos += "                                                    <span id=\"default3\" onclick=\"changeDefault('third')\" class=\"default-box landing2 margin-top-setting\"><\/span>";
            coverPhotos += "";
            coverPhotos += "                                                    <div>";
            coverPhotos += "                                                        <span id=\"custom-default\" class=\"setting-category margin-top-setting\">Custom";
            coverPhotos += "                                                            banner";
            coverPhotos += "                                                            color —";
            coverPhotos += "                                                        <\/span>";
            coverPhotos += "";
            coverPhotos += "                                                        <input class=\"color-pick\" id=\"background-color\" type=\"color\"";
            coverPhotos += "                                                            name=\"color\" value=\"#ffffff\" onchange=\"customCoverColor()\" \/>";
            coverPhotos += "                                                        <span id=\"custom-color\" class=\"custom-color-active\">Custom";
            coverPhotos += "                                                            color";
            coverPhotos += "                                                            active<\/span>";
            coverPhotos += "                                                    <\/div>";
            coverPhotos += "                                                <\/div>";


            document.getElementById("spawn-defaults").innerHTML = coverPhotos;
        }
    }
    else {
        if (defaultCoverOptions) {
            defaultCoverOptions = false;
            document.getElementById("cover-button2").className = "tag-button no-select";
            document.getElementById("cover-button1").className = "tag-button tag-button-active no-select";
            document.getElementById("spawn-defaults").innerHTML = "";
        }
    }



}

function customCoverColor() {
    var colorChange = document.getElementById("background-color").value;
    document.getElementById("journal-header").className = "header journal-header pb-5";
    document.getElementById("journal-header").style.background = $("#background-color").val();
}

function changeDefault(choice) {
    if (choice == "first") {
        document.getElementById("default1").className = "default-box default-box-active landing2 margin-top-setting";
        document.getElementById("default2").className = "default-box landing1 margin-top-setting";
        document.getElementById("default3").className = "default-box landing2 margin-top-setting";

        document.getElementById("journal-header").className = "header bg-dark journal-header journal-header-1 pb-5";
    }
    else if (choice == "second") {
        document.getElementById("default1").className = "default-box landing2 margin-top-setting";
        document.getElementById("default2").className = "default-box default-box-active landing1 margin-top-setting";
        document.getElementById("default3").className = "default-box landing2 margin-top-setting";

        document.getElementById("journal-header").className = "header bg-dark journal-header journal-header-2 pb-5";
    }
    else if (choice == "third") {
        document.getElementById("default1").className = "default-box landing2 margin-top-setting";
        document.getElementById("default2").className = "default-box landing1 margin-top-setting";
        document.getElementById("default3").className = "default-box default-box-active landing2 margin-top-setting";

        document.getElementById("journal-header").className = "header bg-dark journal-header journal-header-1 pb-5";
    }
}