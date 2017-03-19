
window.onload = start;
function getColors(){
    return [
        "grey",
        "blue",
        "green",
        "yellow",
        "red",
        "purple"
    ];
}
function getColors2(){
    return [
        ["grey","szary"],
        ["blue","niebieski"],
        ["green","zielony"],
        ["yellow","zółty"],
        ["red","czerwony"],
        ["purple","fioletowy"],
        ["black","czarny"]
    ];
}
function generSelect(dane){
    var html = "<select id='wyb2'>";
    for(var i=0;i<dane.length;i++){
       html+= "<option value='"+dane[i][0]+"'>"
               +dane[i][1]+"</option>"; 
    } 
    return html + "</select>";
}
function start(){
    var radios = document.getElementsByName("wybor");
    document.getElementsByTagName("p")[0].style.fontSize = "12px";
    document.getElementById("wielkosc").onclick = zmien;
    for(var i=0;i<radios.length;i++){
        radios[i].onclick = klik;
    }
    var dane = getColors2();
    document.getElementById("wynik").innerHTML = generSelect(dane);
    document.getElementById("wyb2").onclick = kolory;
}
function kolory(){
   // console.log(this.value);
    document.body.style.backgroundColor = this.value;
}
function zmien(){
    document.getElementsByTagName("p")[0].style.fontSize = this.value;
    //alert(this.value);
}
function klik(){
    document.getElementsByTagName("p")[0].className = this.value;
}
