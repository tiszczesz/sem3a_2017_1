window.onload = start;

function start(){
    document.getElementById("generuj").onclick = generuj;
}
function generuj(){
    
    var rows = parseInt(document.getElementById("rows").value);
    var cols = parseInt(document.getElementById("cols").value);
    if(isNaN(rows) || isNaN(cols)){
        document.getElementById("wynik").innerHTML = "Błedne dane";
    }else{
        document.getElementById("wynik").innerHTML = rysuj(rows,cols);
    }
}
function rysuj(rows,cols){
    rows = (rows<=0 || rows > 100) ? 20 : rows;
    //if(rows<=0 || rows > 100) rows = 20;
    cols = (cols<=0 || cols > 100) ? 20 : cols;
    var html = "<table>\n";
    for(var i=1;i<=rows;i++){
        html += "<tr>\n";
        for(var j=1;j<=cols;j++){
            var first = (i===1 || j===1) ? " class='first'" : "";
            html += "<td"+first+">"+(i*j)+"</td>";
        }
        html += "</tr>\n";
    }
   // console.log(html);
    return html + "</table>";
}