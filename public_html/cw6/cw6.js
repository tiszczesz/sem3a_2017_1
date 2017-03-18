
window.onload = start;

function start(){
    var radios = document.getElementsByName("wybor");
    document.getElementsByTagName("p")[0].style.fontSize = "12px";
    document.getElementById("wielkosc").onclick = zmien;
    for(var i=0;i<radios.length;i++){
        radios[i].onclick = klik;
    }
}
function zmien(){
    document.getElementsByTagName("p")[0].style.fontSize = this.value;
    //alert(this.value);
}
function klik(){
    document.getElementsByTagName("p")[0].className = this.value;
}
