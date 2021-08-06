function changemountImage() {
    var gallery1 = document.getElementsByClassName("gallery-place1")
    for (var i = 0; i < gallery1.length; ++i) {
        var v = gallery1[i].style;
        v.display = 'none';
    };

    var gallery = document.getElementsByClassName("gallery-place")
    for (var i = 0; i < gallery.length; ++i) {
        var v = gallery[i].style;
        v.display = 'block';
    };
    changemountImage();






}

function changeseaImage() {
    var gallery = document.getElementsByClassName("gallery-place")
    for (var i = 0; i < gallery.length; ++i) {
        var v = gallery[i].style;
        v.display = 'none';
    };

    var gallery1 = document.getElementsByClassName("gallery-place1")
    for (var i = 0; i < gallery1.length; ++i) {
        var v = gallery1[i].style;
        v.display = 'block';
    };
    changeseaImage();

}
let currentCd = 0;
const next = document.getElementById("next");
const images = document.querySelector(".scrollable-container");
const prev = document.getElementById("preview");

function clickOnNextButton() {
    const next = document.getElementById("next");
    const images = document.querySelector(".scrollable-container");
    const card = document.querySelector(".card");
    const prev = document.getElementById("preview");

    if (currentCd < images.children.length - 1) {
        currentCd++;

        images.style.transitionDuration = "0.5s";
        images.style.transform = "translate(-" + (document.body.clientWidth * currentCd) + "px)";

    }
}

function clickOnPrevButton() {
    const next = document.getElementById("next");
    const images = document.querySelector(".scrollable-container");
    const prev = document.getElementById("preview");

    if (currentCd != 0) {
        currentCd--;

        images.style.transitionDuration = "0.5s";
        images.style.transform = "translate(" + (document.body.clientWidth * -currentCd) + "px)";
    }

}
