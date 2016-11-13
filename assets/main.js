/**
 * Created by cheer on 10/20/16.
 */

$(document).ready(function () {
    var pdfWrapper = $("#pdfWrapper");

    $("#pdfToggle").click(function (event) {
        var pdfWrapperWidth = $(window).width() - 250;
        if (pdfWrapper.width() == 0) {
            pdfWrapper.animate({width: pdfWrapperWidth});
        } else {
            pdfWrapper.animate({width: "0"})
        }
    });
})

