/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

/* Favoriet maken van een verhaal*/

//haal article > button uit html 
var ster = document.querySelector("article > button");

//als hij op ster klikt voer function like uit 
ster.addEventListener('click', like);

//activeer de funtion
function like() {
    this.classList.toggle("active");

    countLike();
}

//function aantal likes tellen
function countLike() {
    var likes = document.querySelectorAll('.active'); //selecteer alle class actives
    var hoeveellikes = likes.length; //tellen hoeveel class .active er zijn

    // haalt function op
    var counter = document.querySelector('.countlike');
    //weergeven hoeveel likes er zijn 
    counter.classList.add('display');
    counter.innerHTML = hoeveellikes;
}
