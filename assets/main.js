/**
 * Created by cheer on 10/20/16.
 */

$(document).ready(function () {
    $("#pdfWrapper").height($(window).height() - 202)
    $("#article").css("min-height", $(window).height() - 213)
})

$(window).resize(function () {
    $("#pdfWrapper").height($(window).height() - 202)
    $("#article").css("min-height", $(window).height() - 213)
})
