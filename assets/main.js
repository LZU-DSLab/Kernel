/**
 * Created by cheer on 10/20/16.
 */

$(document).ready(function () {
    var togglePdf = $("#toggle-pdf");
    var postWrapper = $("#post-wrapper");
    var pdfWrapper = $("#pdf-wrapper");
    var pdfCanvas = document.getElementById("pdf-canvas");
    var url = $("#url").val();
    var pdfDoc = null;
    var pageNum = 1;
    var scale = 1.3;
    var pageRendering = false;
    var pageNumPending = null;
    var context = pdfCanvas.getContext("2d");

    togglePdf.click(function () {
        postWrapper.toggleClass("post-wrapper-on-pdf-show");
        pdfWrapper.toggleClass("pdf-wrapper-on-pdf-show").promise().done(function () {
            if (postWrapper.hasClass("post-wrapper-on-pdf-show")) {

                PDFJS.getDocument(url).then(function (pdfDoc_) {
                    pdfDoc = pdfDoc_;
                    $("#page-count").html(pdfDoc.numPages);

                    renderPage(pageNum)
                })
            }
        });
    });

    $("#prev").click(function () {
        if (pageNum <= 1) {
            return;
        }

        pageNum--;
        queueRenderPage(pageNum);
    })

    $("#next").click(function () {
        if (pageNum >= pdfDoc.numPages){
            return;
        }

        pageNum++;
        queueRenderPage(pageNum);
    })

    function renderPage(num) {
        pageRendering = true;

        pdfDoc.getPage(num).then(function (page) {
            scale = pdfWrapper[0].offsetWidth / page.getViewport(1).width;
            console.log(scale);
            var viewport = page.getViewport(scale);
            pdfCanvas.height = viewport.height;
            pdfCanvas.width = viewport.width;

            var renderContext = {
                canvasContext: context,
                viewport: viewport
            }
            var renderTask = page.render(renderContext);

            renderTask.promise.then(function () {
                pageRendering = false;
                if (pageNumPending !== null) {
                    renderPage(pageNumPending);
                    pageNumPending = null;
                }
            });
        });

        $("#current-page").html(pageNum);
        if (pageNum <= 1) {
            $("#prev").attr("disabled","disabled");
        } else if (pageNum >= pdfDoc.numPages) {
            $("#next").attr("disabled","disabled");
        } else {
            $("#next").removeAttr("disabled");
            $("#prev").removeAttr("disabled");
        }
    }

    function queueRenderPage(num) {
        if (pageRendering) {
            pageNumPending = num;
        } else {
            renderPage(num);
        }
    }
})
