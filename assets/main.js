/**
 * Created by cheer on 10/20/16.
 */

$(document).ready(function () {
    var pdfWrapper = $("#pdfWrapper");
    var icon = $("#pdfToggle>i").first();
    $("#rootContainer").css("min-height", $(window).height() - 232);

    $("#pdfToggle").click(function (event) {
        var pdfWrapperHeight = $(window).height() - 82 - 35;
        var pdfWrapperWidth = $(window).width() - 70;

        if (pdfWrapper.height() === 0) {
            pdfWrapper.animate({
                height: pdfWrapperHeight,
                width: pdfWrapperWidth
            })
            icon.removeClass("icon-folder-open");
            icon.addClass("icon-folder-close");
        } else {
            pdfWrapper.animate({
                height: "0",
                width: "0"
            })
            icon.removeClass("icon-folder-close");
            icon.addClass("icon-folder-open");
        }
    })
})

$(window).resize(function () {
    var pdfWrapper = $("#pdfWrapper");
    $("#rootContainer").css("min-height", $(window).height() - 232);
    if (pdfWrapper.height() > 0) {
        pdfWrapper.height($(window).height() - 82 - 35);
        pdfWrapper.width($(window).width() - 70);
    }
})
