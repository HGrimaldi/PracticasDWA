//funciones que trabajan como manejador de eventos
//
function init(){ 
//Ingresar los datos a convertir
var op1 = prompt('Ingrese la cantidad de metros','')
var operaciones = document.getElementById('operaciones');
var contenido = '';

contenido += "<header>\n";
contenido += "\t <h1> Calcular </h1> \n";
contenido += "</header>";

contenido += "<nav>\n";
contenido += "<ul>\n";
contenido += "\t<li>\n";
contenido += "\t\t <a href=\"javascript:void(0)\"><input type='button' value='pies'></a>\n";
contenido += "\t</li>\n";
contenido += "</ul>\n";
contenido += "</nav>\n";

operaciones.innerHTML = contenido;
var opciones = document.getElementById('a');

for(var i = 0; < opciones.length; i++ ){ 

}

window.onload= init();
