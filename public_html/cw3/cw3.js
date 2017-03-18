window.onload = start;

function start(){
   var pars = document.getElementsByTagName("p");
   alert(pars[1].innerHTML);
   pars[4].innerHTML = "Fajnie tu jest";
   pars[0].style.color = "red";
   for(var i=0;i<pars.length;i++){
       if(i%2!=0){
           pars[i].style.backgroundColor = "yellow";
       }else{
           pars[i].style.border = "solid thin grey";
       }
   }
}
