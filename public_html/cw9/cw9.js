window.onload = start;

function start(){
    document.getElementById("zatwierdz").onclick = klik;
}
function klik(){
    var imie = document.getElementById("imie");
    var nazwisko = document.getElementById("nazwisko");
    var imOK = Validate(imie);
    var nazOK = Validate(nazwisko);
    if(imOK && nazOK){
        document.getElementById("wynik").innerHTML="OK";
    }else{
        document.getElementById("wynik").innerHTML = "ERROR";
    }
}
function Validate(elem){
    var wzorzec = /^[A-ZŁŻŹŚĆÓĄĘŃ][a-zęąźżńółść]*$/;
    var wynik = wzorzec.test(elem.value);
    elem.nextElementSibling.innerHTML = wynik ? "" : "Błędne dane!";
    return wynik;
}