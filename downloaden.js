/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/
/* Verhaal downloaden*/

//haalt download uit html 
var downloadButton = document.querySelector('#download');
//als er geklikt wordt download function uitvoeren.
downloadButton.addEventListener('click', download);

//element ophalen bij id
function download() {
    var link = document.getElementById("download");

    var img1 = "raket.gif";
    link.src = img1;

    var img2 = "knop@5x.png";
    link.src = img1;

    //3 sec de tijd om naar img 2 te veranderen 
    setTimeout(function () {
        link.src = img2;
    }, 4000);
}
