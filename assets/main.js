/**
 * Created by cheer on 10/20/16.
 */

$(document).ready(function () {
    var pdfWrapper = $("#pdfWrapper");
    $("#rootContainer").css("min-height", $(window).height() - 232);
    pdfWrapper.height($(window).height() - 172);
    console.log($(window).height())
})

$(window).resize(function () {
    $("#rootContainer").css("min-height", $(window).height() - 232);
    $("#pdfWrapper").height($(window).height() - 172)
})
