//función que trabaja como manejador de eventos

function init() {
    //Ingresar datos a convertir
    var op1 = prompt("Ingrese la cantidad de metros", "");
    if(op1>=0){
        
        var operaciones = document.getElementById("operaciones");
    var resultado = document.getElementById("resultado");
    var contenido = "";
    
    
//Creacion de la table
    contenido += "<header>\n";
    contenido += "\t<h1> Calcular </h1>\n";
    contenido += "</header>\n";

//creacion de los botones
    contenido += "<nav>\n";
    contenido += "\t<ul>\n";
    contenido += "\t\t<li>\n";
    contenido += "\t\t\t<a href = \"javascript:void(0)\"><button type=\"button\">Pies</button></a>\n";
    contenido += "\t\t</li>\n";
    contenido += "\t\t<li>\n";
    contenido += "\t\t\t<a href = \"javascript:void(1)\"><button type=\"button\">Pulgadas</button></a>\n";
    contenido += "\t\t</li>\n";
    contenido += "\t\t<li>\n";
    contenido += "\t\t\t<a href = \"javascript:void(2)\"><button type=\"button\">Yardas</button></a>\n";
    contenido += "\t\t</li>\n";
    contenido += "\t</ul>\n";
    contenido += "</nav>\n";


//Condicionales y elementos 
    operaciones.innerHTML = contenido;

    var opciones = document.getElementsByTagName("a");

    for (let i = 0; i < opciones.length; i++) {
        switch (i) {
            case 0:
                opciones[i].onclick = function () {
                    resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " Metros son equivalente a " + (parseFloat(op1) * parseFloat(3.281)) + " Pies </p>\n";
                }
                break;
                case 1:
                    opciones[i].onclick = function () {    
                    resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " Metros son equivalente a " + (parseFloat(op1) * parseFloat(39.3701)) + " Pulgadas </p>\n";
                    }
                    break;
                case 2:
                    opciones[i].onclick = function () {    
                        resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " Metros son equivalente a " + (parseFloat(op1) * parseFloat(1.09361)) + " Yardas </p>\n";
                        }
                    break;    
        
            default:
                break;
            }
        }
    }
}

window.onload = init();

