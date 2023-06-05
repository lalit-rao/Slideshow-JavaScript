(function () {
   "use strict";

    const myImages = ['./images/groot.jpg', './images/spiderman.jpg', './images/deadpool.jpg', './images/doctorStrange.jpg', "./images/ironman.jpg"];
    let currentImage = 0;

    document.getElementById("next").onclick = nextPhoto;
    document.getElementById("previous").onclick = previousPhoto;

    function nextPhoto() {
        currentImage++;
        if (currentImage > myImages.length - 1){
            currentImage = 0;
        }
        document.getElementById('myimage').src = myImages[currentImage];
    }
    function previousPhoto() {
        currentImage--;
        if (currentImage < 0){
            currentImage = myImages.length - 1;
        }
        document.getElementById('myimage').src = myImages[currentImage];
    }
})()