var valor1;
var valor2;
var operador;


function init(){
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
}

cero.onclick = function(e){
    resultado.textContent += "0";
}
uno.onclick = function(e){
    resultado.textContent += "1";
}
dos.onclick = function(e){
    resultado.textContent += "2";
}
tres.onclick = function(e){
    resultado.textContent += "3";
}
cuatro.onclick = function(e){
    resultado.textContent += "4";
}
cinco.onclick = function(e){
    resultado.textContent += "5";
}
seis.onclick = function(e){
    resultado.textContent += "6";
}
siete.onclick = function(e){
    resultado.textContent += "7";
}
ocho.onclick = function(e){
    resultado.textContent += "8";
}
nueve.onclick = function(e){
    resultado.textContent += "9";
}

reset.onclick = function(e){
    clear();
}

suma.onclick = function(e){
    valor1 = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    valor1 = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    valor1 = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    valor1 = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    valor2 = resultado.textContent;
    solucion();
}

function limpiar(){
    resultado.textContent = "";
  }
  function clear(){
    resultado.textContent = "";
    valor1 = 0;
    valor2 = 0;
    operacion = "";
  }

  function solucion(){
    var total = 0;
    switch(operacion){
      case "+":
        total = parseFloat(valor1) + parseFloat(valor2);
        break;
      case "-":
          total = parseFloat(valor1) - parseFloat(valor2);
          break;
      case "*":
        total = parseFloat(valor1) * parseFloat(valor2);
        break;
      case "/":
        total = parseFloat(valor1) / parseFloat(valor2);
        break;
    }
    clear();
    resultado.textContent = total;
  }