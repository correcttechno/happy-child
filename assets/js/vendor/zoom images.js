function swap(image) {
    "use strict";
    var widthwindow1 = $(window).width();
    document.getElementById("image").src = image.href;
    if(widthwindow1 >= 1024){
        $('#image').elevateZoom({
            zoomType: "inner",
            cursor: "crosshair",
            zoomWindowFadeIn: 375,
            zoomWindowFadeOut: 375
        });
    };
};
