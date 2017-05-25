let selectorTable = document.getElementById('selectorTable')
let tablero = document.getElementById('tablero')
let lista = document.getElementById('lista')

function getElementByKeyCode(keyCode){
  return document.querySelector(`[data-key="${keyCode}"]`)
}

function activate(keyCode){
  const el = getElementByKeyCode(keyCode)
  el.classList.add('active')
  setTimeout(() => deactivate(el), 200)
}

function deactivate(el){
  el.className = 'tabla'
}

window.addEventListener('keydown', onkeydown)
window.addEventListener('click', setTable)

function onkeydown(ev){
  activate(ev.keyCode)
  selectorTable.className ='selectorTable'
  tablero.classList.add('active')
  window.removeEventListener('keydown', onkeydown)
}

function goFs(){
  document.body.requestFullscreen();
}

function setTable(n){
  selectorTable.className ='selectorTable'
  tablero.classList
  .add('active')
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
        document.getElementById('multiply').innerHTML = `${numero} x ${i} = ${numero * i}`
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
