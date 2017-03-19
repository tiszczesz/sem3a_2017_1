
window.onload = start;
var obrazki = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
var kolory = ["white","green","yellow","grey","red"
    ,"purple","#ff9999","#66ff66","#6Aff66","#12aff66"];
var actual = 0;
function start() {
    document.getElementById("obrazek").setAttribute("src", "images/"
            + obrazki[actual]);
    document.getElementById("podpis").innerHTML = obrazki[actual];
    document.getElementById("down").onclick = down;
    document.getElementById("up").onclick = up;
    setInterval(zmien,3000);
    setInterval(function(){
        var index = Math.floor(Math.random()*kolory.length);
        document.body.style.backgroundColor = kolory[index];
    },4000);
}
function zmien(){
    var index = Math.floor(Math.random()*obrazki.length);
   // console.log(index);
   document.getElementById("obrazek").setAttribute("src", "images/"
            + obrazki[index]);
    document.getElementById("podpis").innerHTML = obrazki[index];
}
function up() {
    actual++;
    actual = actual >= obrazki.length ? actual - obrazki.length : actual;
    //console.log(actual);
    document.getElementById("obrazek").setAttribute("src", "images/"
            + obrazki[actual]);
    document.getElementById("podpis").innerHTML = obrazki[actual];
}
function down() {   
    actual--;
    actual = actual < 0 ? actual + obrazki.length : actual;
   // console.log(actual);
    document.getElementById("obrazek").setAttribute("src", "images/"
            + obrazki[actual]);
    document.getElementById("podpis").innerHTML = obrazki[actual];
}