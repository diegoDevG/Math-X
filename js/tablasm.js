'use strict';

var selectorTable = document.getElementById('selectorTable');
var tablero = document.getElementById('tablero');
var lista = document.getElementById('lista');
var menu = document.getElementById('menu');
var levelbox = document.getElementById('levelbox');
var aprendizProbar = document.getElementById('aprendizProbar');
var entrada = document.getElementById('resultado');
var nivelMedio = document.getElementById('medio');
var nivelexperto = document.getElementById('experto');
var cont = 0;
var defaultText = 'Respuesta...';
var valResultado = 0;
var multiplicacion = document.getElementById('multiply');
var operacion = document.getElementById('operacion');
var producto = 0;
var res = 0;
var numeroTest = void 0;
var controlador = 0;
var aciertos = 0;
var errores = 0;
var iterador = 0;
var rfinal = 0;
var valor1 = 0;
var valor2 = 0;

function aprender() {
  selectorTable.classList.add('active');
  inicio.classList.remove('active');
}

function setTable(n) {
  selectorTable.className = 'selectorTable';
  tablero.classList.add('active');
  var numero = void 0;
  if (n < 10) {
    numero = n;
    var i = 0;
    var k = 0;
    swal({
      type: "success",
      timer: 2000,
      title: 'Ok, Practiquemos la tabla del\n         ' + numero,
      showConfirmButton: false
    });

    setInterval(function () {
      if (i <= 10) {
        k++;
        if (i == 0) {}
        multiplicacion.innerHTML = numero + ' x ' + i + ' = ' + numero * i;
        document.getElementById('lista').innerHTML += '<br> ' + numero + ' x ' + i + ' = ' + numero * i;
        if (k == 6 || k == 12 || k == 15 || k == 21 || k == 24 || k == 27) {
          document.getElementById('lista').innerHTML += '<br> ';
        }
        i++;
        if (i == 4) {
          lista.classList.add('color1');
        }
        if (i == 3 && k == 3) {
          setTimeout(function () {
            swal({
              type: "success",
              timer: 2000,
              title: 'F\xE1cil verdad?\n                Vamos de nuevo!',
              showConfirmButton: false
            });
            document.getElementById('lista').innerHTML = ' ';
          }, 3000);
          i = 0;
        } else if (i == 6 && k == 9) {
          setTimeout(function () {
            lista.classList.add('color2');
            swal({
              type: "success",
              timer: 2000,
              title: 'Muy bien!\n                Ahora un poco mas',
              showConfirmButton: false
            });
            document.getElementById('lista').innerHTML = ' ';
          }, 3000);
          i = 0;
        } else if (i == 9 && k == 18) {
          setTimeout(function () {
            lista.classList.add('color2');
            swal({
              type: "success",
              timer: 2000,
              title: 'Casi terminamos...',
              showConfirmButton: false
            });
            document.getElementById('lista').innerHTML = ' ';
            lista.classList.add('color3');
          }, 3000);
          i = 0;
        } else if (k >= 29) {
          swal({
            type: "success",
            timer: 3000,
            title: 'Felicitaciones, ahora sabes un poco mas...',
            showConfirmButton: false
          });
          swal({
            type: "success",
            title: 'Que tal ahora al rev\xE9s.\n                Veamos!',
            showConfirmButton: true
          }, tablaInvertida(numero));
        }
      }
    }, 5000);
  }
}

function tablaInvertida(numero) {
  if (numero < 10) {
    var i = 0;
    var k = 0;
    swal({
      type: "success",
      timer: 4000,
      title: 'Todos tranquilos, es lo mismo!\n         ',
      showConfirmButton: true
    });

    setInterval(function () {
      if (i <= 10) {
        k++;
        document.getElementById('multiply').innerHTML = i + ' x ' + numero + '  = ' + numero * i;
        document.getElementById('listainvertida').innerHTML += '<br> ' + i + ' x ' + numero + ' = ' + numero * i;
        if (k == 6 || k == 12 || k == 15 || k == 21 || k == 24 || k == 27) {
          document.getElementById('listainvertida').innerHTML += '<br> ';
        }
        i++;
        if (i == 3 && k == 3) {
          setTimeout(function () {
            listainvertida.classList.add('color3');
            swal({
              type: "success",
              timer: 2000,
              title: 'F\xE1cil verdad?\n                Vamos de nuevo!',
              showConfirmButton: false
            });
            document.getElementById('listainvertida').innerHTML = ' ';
          }, 3000);
          i = 0;
        } else if (i == 6 && k == 9) {
          setTimeout(function () {
            listainvertida.classList.add('color3');
            swal({
              type: "success",
              timer: 2000,
              title: 'Muy bien!\n                Ahora un poco mas',
              showConfirmButton: false
            });
            document.getElementById('listainvertida').innerHTML = ' ';
          }, 3000);
          i = 0;
        } else if (i == 9 && k == 18) {
          setTimeout(function () {
            listainvertida.classList.add('color2');
            swal({
              type: "success",
              timer: 2000,
              title: 'Casi terminamos...',
              showConfirmButton: false
            });
            document.getElementById('listainvertida').innerHTML = ' ';
          }, 3000);
          i = 0;
        } else if (k >= 29) {
          swal({
            type: "success",
            timer: 13000,
            title: 'Felicitaciones, sigue con ese animo...',
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            cancelButtonColor: "#33f109",
            confirmButtonText: "Otra vez!",
            cancelButtonText: "Seleccionar otra tabla",
            closeOnConfirm: false,
            closeOnCancel: false
          }, function (isConfirm) {
            if (isConfirm) {
              n = numero;
              document.getElementById('lista').innerHTML = ' ';
              document.getElementById('listainvertida').innerHTML = ' ';
              setTable(n);
              swal("Perfecto!", 'Practiquemos la tabla del ' + numero + ' otra vez!', "success");
            } else {
              // location.reload()
              swal("Ok", "Vamos por otra! :)", "success");
            }
          });
        }
      }
    }, 5000);
  }
}

function showMenu() {
  menu.classList.toggle('active');
}

//Gestos touch con Hammer js
var $body = document.body;
var gestos = new Hammer($body);
gestos.on('swipeleft', showMenu);
gestos.on('swiperight', showMenu);

//Cuanto sé?


function test() {
  aprendizProbar.classList.remove('active');
  document.getElementById('aprendiz').classList.remove('active');
  levelbox.classList.add('active');
  menu.classList.toggle('active');
  controlador = 0;
}

function aprendiz() {
  levelbox.classList.remove('active');
  aprendizProbar.classList.add('active');
}

function tablaTest(numero) {
  aprendizProbar.classList.remove('active');
  nivelMedio.classList.remove('active');
  document.getElementById('aprendiz').classList.add('active');
  operacion.innerHTML = numero + ' x 0 = ';
  numeroTest = numero;
  iterador = 0;
}

function insert(digito) {
  cont++;
  if (cont == 1) {
    entrada.innerHTML = digito;
    valResultado = entrada.innerHTML;
  } else {
    entrada.innerHTML += digito;
    valResultado = entrada.innerHTML;
  }
  if (valResultado > 100) {
    entrada.innerHTML = 'hmm no!';
    cont = 0;
  } else {
    producto = entrada.innerHTML;
  }
}

function borrar() {
  entrada.innerHTML = defaultText;
  cont = 0;
}

function enviar() {
  if (controlador <= 10) {
    if (producto == numeroTest * controlador) {
      controlador++;
      aciertos++;
      swal({
        title: "Bien!",
        type: "success",
        text: "Sigue avanzando",
        timer: 2000,
        showConfirmButton: false
      });
      iterador = 0;
      borrar();
    } else if (iterador != 0) {
      swal({
        title: numeroTest + ' x ' + controlador + ' = ' + numeroTest * controlador,
        type: "error",
        text: 'Debes practicar mas',
        timer: 3000,
        showConfirmButton: false
      });
      borrar();
      iterador = 0;
    } else {
      iterador = controlador;
      errores++;
      swal({
        title: "Ups!",
        type: "error",
        text: "Seguro? intenta de nuevo",
        timer: 2000,
        showConfirmButton: false
      });
      borrar();
    }
    if (controlador != 11) {
      operacion.innerHTML = numeroTest + ' x ' + controlador + ' = ';
    }
    if (controlador == 11) {
      rfinal = aciertos - errores;
      terminar();
    }
  }
}

function terminar() {
  if (rfinal < 5) {
    swal("Apenas empiezas, revisa el modulo de aprendizaje, Animo!!");
  } else if (rfinal < 8) {
    swal("Vas bien, pero te falta practicar mas", "Revisa el modulo de aprendizaje y vuelve a intentarlo, Animo!!");
  } else if (rfinal == 8) {
    swal("Casi lo logras, practica un poco mas");
  } else if (rfinal == 9) {
    swal("Te faltó poco, prueba de nuevo");
  } else {
    swal('Buen trabajo!! Ya dominas la tabla del ' + numeroTest, 'Sigue con ese buen desempe\xF1o!');
  }
  levelbox.classList.add('active');
  nivelMedio.classList.remove('active');
  aprendizProbar.classList.remove('active');
  document.getElementById('aprendiz').classList.remove('active');
  controlador = 0;
}

function medio() {
  levelbox.classList.remove('active');
  nivelMedio.classList.add('active');
}

function experto() {
  levelbox.classList.remove('active');
  document.getElementById('aprendiz').classList.add('active');
  document.getElementById('enviarAprendiz').classList.add('unactive');
  document.getElementById('enviarExperto').classList.remove('unactive');
  generateRandom();
}

function generateRandom() {
  var min = 0;
  var max = 10;
  valor1 = Math.round(Math.random() * (max - min) + min);
  valor2 = Math.round(Math.random() * (max - min) + min);
  console.log(valor1, valor2);
  operacion.innerHTML = valor1 + ' x ' + valor2 + ' = ';
}

function enviarExp() {
  if (controlador <= 20) {
    if (producto == valor1 * valor2) {
      controlador++;
      aciertos++;
      swal({
        title: "Bien!",
        type: "success",
        text: "Sigue avanzando",
        timer: 2000,
        showConfirmButton: false
      });
      iterador = 0;
      console.log(controlador);
      borrar();
      generateRandom();
    } else if (iterador != 0) {
      swal({
        title: valor1 + ' x ' + valor2 + ' = ' + valor1 * valor2,
        type: "error",
        text: 'Debes practicar mas',
        timer: 3000,
        showConfirmButton: false
      });
      borrar();
      iterador = 0;
    } else {
      iterador = controlador;
      errores++;
      swal({
        title: "Ups!",
        type: "error",
        text: "Seguro? intenta de nuevo",
        timer: 2000,
        showConfirmButton: false
      });
      borrar();
    }
    if (controlador != 21) {
      operacion.innerHTML = valor1 + ' x ' + valor2 + ' = ';
    }
    if (controlador == 21) {
      rfinal = aciertos - errores;
      terminarexp();
    }
  }
}


function terminarexp() {
  if (rfinal < 15) {
    swal("hmm aun no eres Pro, debes practicar mas, revisa el modulo de aprendizaje, Animo!!");
  }else {
    swal('Buen trabajo!! Eres todo un Experto ');
  }
  levelbox.classList.add('active');
  nivelMedio.classList.remove('active');
  aprendizProbar.classList.remove('active');
  document.getElementById('aprendiz').classList.remove('active');
  controlador = 0;
}
