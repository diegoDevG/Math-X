let selectorTable = document.getElementById('selectorTable')
let tablero = document.getElementById('tablero')
let lista = document.getElementById('lista')
let menu = document.getElementById('menu')
let levelbox = document.getElementById('levelbox')
let aprendizProbar = document.getElementById('aprendizProbar')
let entrada = document.getElementById('resultado')
let nivelMedio = document.getElementById('medio')
let cont = 0
let defaultText = 'Respuesta...'
let valResultado = 0
let multiplicacion = document.getElementById('multiply')
let operacion = document.getElementById('operacion')
let producto = 0
let res = 0
let numeroTest
let controlador = 0
let aciertos = 0
let errores = 0
let iterador = 0
let rfinal = 0


function getElementByKeyCode(keyCode){
  return document.querySelector(`[data-key="${keyCode}"]`)
}

// function activate(keyCode){
//   const el = getElementByKeyCode(keyCode)
//   el.classList.add('active')
//   setTimeout(() => deactivate(el), 200)
// }
//
// function deactivate(el){
//   el.className = 'tabla'
// }

// window.addEventListener('keydown', onkeydown)
// window.addEventListener('click', setTable)

// function onkeydown(ev){
//   activate(ev.keyCode)
//   selectorTable.className ='selectorTable'
//   tablero.classList.add('active')
//   // window.removeEventListener('keydown', onkeydown)
// }

// function goFs(){
//   document.body.requestFullscreen();
// }

function setTable(n){
  selectorTable.className ='selectorTable'
  tablero.classList.add('active')
  let numero
  if(n < 10){
    numero = n
    let i = 0
    let k = 0
    swal({
        type:"success",
        timer: 2000,
        title: `Ok, Practiquemos la tabla del
         ${numero}`,
        showConfirmButton: false
      })

    setInterval(function(){
    if(i <= 10){
        k++
        if(i==0){

        }
        multiplicacion.innerHTML = `${numero} x ${i} = ${numero * i}`
        document.getElementById('lista').innerHTML += `<br> ${numero} x ${i} = ${numero * i}`
        if(k==6 || k==12 ||k==15 || k==21 ||k==24 ||k==27){
          document.getElementById('lista').innerHTML += `<br> `
        }
        i++
        if(i==4){
          lista.classList.add('color1')
        }
        if(i==3 && k==3){
          setTimeout(function(){
            swal({
                type:"success",
                timer: 2000,
                title: `Fácil verdad?
                Vamos de nuevo!`,
                showConfirmButton: false
              })
            document.getElementById('lista').innerHTML = ` `
          },3000)
          i=0
        }else if (i==6 && k==9) {
          setTimeout(function(){
            lista.classList.add('color2')
            swal({
                type:"success",
                timer: 2000,
                title: `Muy bien!
                Ahora un poco mas`,
                showConfirmButton: false
              })
            document.getElementById('lista').innerHTML = ` `
          },3000)
          i=0
        }else if (i==9 && k==18) {
          setTimeout(function(){
            lista.classList.add('color2')
            swal({
                type:"success",
                timer: 2000,
                title: `Casi terminamos...`,
                showConfirmButton: false
              })
            document.getElementById('lista').innerHTML = ` `
            lista.classList.add('color3')
          },3000)
          i=0
        }else if (k>=29) {
          swal({
              type:"success",
              timer: 3000,
              title: `Felicitaciones, ahora sabes un poco mas...`,
              showConfirmButton: false
            })
            swal({
                type:"success",
                title: `Que tal ahora al revés.
                Veamos!`,
                showConfirmButton: true
              },
            tablaInvertida(numero))
        }
      }
    }, 5000)
  }
}

function tablaInvertida(numero){
  if(numero < 10){
    let i = 0
    let k = 0
    swal({
        type:"success",
        timer: 4000,
        title: `Todos tranquilos, es lo mismo!
         `,
        showConfirmButton: true
      })


    setInterval(function(){
    if(i <= 10){
        k++
        document.getElementById('multiply').innerHTML = `${i} x ${numero}  = ${numero * i}`
        document.getElementById('listainvertida').innerHTML += `<br> ${i} x ${numero} = ${numero * i}`
        if(k==6 || k==12 ||k==15 || k==21 ||k==24 ||k==27){
          document.getElementById('listainvertida').innerHTML += `<br> `
        }
        i++
        if(i==3 && k==3){
          setTimeout(function(){
            listainvertida.classList.add('color3')
            swal({
                type:"success",
                timer: 2000,
                title: `Fácil verdad?
                Vamos de nuevo!`,
                showConfirmButton: false
              })
            document.getElementById('listainvertida').innerHTML = ` `
          },3000)
          i=0
        }else if (i==6 && k==9) {
          setTimeout(function(){
            listainvertida.classList.add('color3')
            swal({
                type:"success",
                timer: 2000,
                title: `Muy bien!
                Ahora un poco mas`,
                showConfirmButton: false
              })
            document.getElementById('listainvertida').innerHTML = ` `
          },3000)
          i=0
        }else if (i==9 && k==18) {
          setTimeout(function(){
            listainvertida.classList.add('color2')
            swal({
                type:"success",
                timer: 2000,
                title: `Casi terminamos...`,
                showConfirmButton: false
              })
            document.getElementById('listainvertida').innerHTML = ` `
          },3000)
          i=0
        }else if (k>=29) {
          swal({
              type:"success",
              timer: 13000,
              title: `Felicitaciones, sigue con ese animo...`,
              showCancelButton: true,
              confirmButtonColor: "#DD6B55",
              cancelButtonColor: "#33f109",
              confirmButtonText: "Otra vez!",
              cancelButtonText: "Seleccionar otra tabla",
              closeOnConfirm: false,
              closeOnCancel: false
            },
            function(isConfirm){
              if (isConfirm) {
                n=numero
                document.getElementById('lista').innerHTML = ` `
                document.getElementById('listainvertida').innerHTML = ` `
                setTable(n)
                swal("Perfecto!", `Practiquemos la tabla del ${numero} otra vez!`, "success");
              } else {
                location.reload()
                swal("Ok", "Vamos por otra! :)", "success");
              }
            })
        }
      }
    }, 5000)

  }


}

function showMenu(){
  menu.classList.toggle('active')
}


//Gestos touch con Hammer js
var $body = document.body;
var gestos = new Hammer($body);
gestos.on('swipeleft', showMenu);
gestos.on('swiperight', showMenu);


//Cuanto sé?


function test(){
  selectorTable.classList.remove('active')
  levelbox.classList.add('active')
  menu.classList.toggle('active')
  aprendizProbar.classList.remove('active')
  document.getElementById('aprendiz').classList.remove('active')
  controlador = 0
}

function aprendiz(){
  levelbox.classList.remove('active')
  aprendizProbar.classList.add('active')
}

function tablaTest(numero){
  aprendizProbar.classList.remove('active')
  nivelMedio.classList.remove('active')
  document.getElementById('aprendiz').classList.add('active')
    operacion.innerHTML = `${numero} x 0 = `
    numeroTest = numero
    iterador = 0
}

function insert(digito){
  cont ++
  if (cont ==1) {
    entrada.innerHTML =  digito
    valResultado = entrada.innerHTML
  } else{
    entrada.innerHTML+= digito
    valResultado = entrada.innerHTML
  }
  if(valResultado > 100){
    entrada.innerHTML = 'hmm no!'
    cont = 0
  }else{
    producto = entrada.innerHTML
  }
}

function borrar(){
  entrada.innerHTML = defaultText
  cont = 0
}

function enviar(){
if (controlador <= 10) {
  if (producto == numeroTest*controlador) {
    controlador ++
    aciertos++
    swal({
          title: "Bien!",
          type: "success",
          text: "Sigue avanzando",
          timer: 2000,
          showConfirmButton: false
        });
    iterador= 0
    borrar()
  }else if(iterador!=0){
    swal({
          title: `${numeroTest} x ${controlador} = ${numeroTest*controlador}`,
          type: "error",
          text: `Debes practicar mas`,
          timer: 3000,
          showConfirmButton: false
        });
        borrar()
        iterador = 0
  }else {
    iterador = controlador
    errores++
    swal({
          title: "Ups!",
          type: "error",
          text: "Seguro? intenta de nuevo",
          timer: 2000,
          showConfirmButton: false
        });
        borrar()
  }
  if(controlador != 11){
    operacion.innerHTML = `${numeroTest} x ${controlador} = `
  }
  if (controlador == 11) {
    rfinal = aciertos - errores
    terminar()
    }
  }
}

function terminar(){
  if (rfinal<5) {
    swal("Apenas empiezas, revisa el modulo de aprendizaje, Animo!!")
  }else if (rfinal<8) {
    swal("Vas bien, pero te falta practicar mas", "Revisa el modulo de aprendizaje y vuelve a intentarlo, Animo!!")
  }else if (rfinal==8) {
    swal("Casi lo logras, practica un poco mas")
  }else if (rfinal==9) {
    swal("Te faltó poco, prueba de nuevo")
  }else{
  swal(`Buen trabajo!! Ya dominas la tabla del ${numeroTest}`, `Sigue con ese buen desempeño!`)
  }
}

function medio(){
  levelbox.classList.remove('active')
  nivelMedio.classList.add('active')
}
