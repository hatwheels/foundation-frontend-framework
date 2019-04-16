$(document).foundation()


$(document).ready(function() {
    console.log('init')
    $("a.cell.small-2").hover(function() {
        var orgEl = $(this).find(".org")[0];
        if ($(orgEl).hasClass("invisible")) {
            $(orgEl).removeClass("invisible");
        } else {
            $(orgEl).addClass("invisible");
        }
    });
});