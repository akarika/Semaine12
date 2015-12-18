var $jeu = document.getElementById('jeu');
var result = document.getElementById('result')


//$jeu.addEventListener('click', function (e) {
//    alert("La case :" + e.target.id)
//}, false);

var div;
compteur = 0;
//    var el2 = e.target.className = "player2";;


jeu.onclick = function div(e) {
    if (compteur % 2 == 1) {
        e.target.className = "player1";
        compteur++;
    } else if (compteur % 2 == 0) {
        e.target.className = "player2";
        compteur++;
    }
};
$jeu.addEventListener('click', div, false);