// Calculates and sets height of main code container div
var windowHeight = $(window).height();
var menuBarHeight = $("#menuBar").height();
var codeContainerHeight = windowHeight - menuBarHeight

$(".codeContainer").height(codeContainerHeight+"px");
$("iframe").height(codeContainerHeight+"px");

setLabelPos();

// Li toggling
$(".toggle").click(function(){
    // Don't toggle off if there's only 1 active section
    if (numActive() > 1 || !$(this).hasClass("selected")) {
        $(this).toggleClass("selected");

        // Toggle appearance
        var activeDiv = $(this).html();
        $("#"+activeDiv+"Container").toggle();

        // Resize based on num of active sections
        var width = (100 / numActive()) + "%";
        $(".codeContainer").css("width", width);

        setLabelPos();
    }
})

// Loads HTML and CSS into iframe, runs javascriptCode
$("#runButton").click(function() {
    $("iframe").contents().find("html").html("<style>" + $("#cssCode").val() + "</style>" + $("#htmlCode").val());

    document.getElementById("resultFrame").contentWindow.eval($("#javascriptCode").val());
})

// From: https://stackoverflow.com/questions/6140632/how-to-handle-tab-in-textarea
// For normal tab functionality in text area
$("textarea").keydown(function(e) {
    if(e.keyCode === 9) { // tab was pressed
        // get caret position/selection
        var start = this.selectionStart;
        var end = this.selectionEnd;

        var value = $this.val();

        // set textarea value to: text before caret + tab + text after caret
        $(this).val(value.substring(0, start)
                    + "\t"
                    + value.substring(end));

        // put caret at right position again (add one for the tab)
        $(this).selectionStart = $(this).selectionEnd = start + 1;

        // prevent the focus lose
        e.preventDefault();
    }
});

// Returns number of active code containers
function numActive() {
    return showingDivs = $(".codeContainer").filter(function(){
        return ($(this).css("display") != "none")
    }).length;
}

// Centers code label above individual div
function setLabelPos() {
    $(".codeLabel").css("left", $(".codeContainer").width()/2);
}
