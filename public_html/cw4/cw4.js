

var akceptacja = confirm("Czy zgadzasz się z regulaminem serwisu?");

if(akceptacja!==true){
    window.location = "brak.html";
}
window.onload = start;
function start(){
    document.getElementById("oblicz").onclick = oblicz;
}
function oblicz(){
   var a = parseFloat( document.getElementById("a").value);
   var b = parseFloat(document.getElementById("b").value);
   if(isNaN(a) || isNaN(b)){
       document.getElementById("wynik").style.color = "red";
       document.getElementById("wynik").innerHTML = "błędne dane";
   }else{
       document.getElementById("wynik").style.color = "black";
       document.getElementById("wynik")
               .innerHTML = a + " + " + b + " = "+(a+b);
       var wynik = b!==0 ? (a/b).toFixed(2) : "Brak wyniku!";
       document.getElementById("wynik").innerHTML 
               +=  "<br>"+a + " / " + b + " = "+wynik;
   }
}