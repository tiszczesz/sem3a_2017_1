
window.onload = function () {
    var size = 20;
    document.getElementById("wynik").innerHTML = function () {
        var html = "<table>";
        for (var i = 0; i < size; i++) {
            html += "<tr>";
            for (var j = 0; j < size; j++) {
                html += "<td></td>";
            }
            html += "</tr>";
        }
        return html + "</table>";
    }(size);
    var tds = document.getElementsByTagName("td");
    for (var i = 0; i < tds.length; i++) {
        tds[i].oncontextmenu = function(event){
            event.preventDefault();
            return false;
        };        
        tds[i].onmousedown = function (event) {
            switch (event.button) {
                case 0 :
                    this.innerHTML = "<img src='krzyzyk.png'/>";
                    break;
                case 1 :
                    this.innerHTML = "<img src='kolko.png'/>";
                    break;
                case 2 :
                    this.innerHTML = "";
                    break;
                default: alert("coś nie tak");
            }
            return false;
        };
    }
};
