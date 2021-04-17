/**
 * 
 */

let disponible = document.getElementById("disponible");
let openerd = document.getElementById("open");
let disponibilidad = 8;


/******* start count */
disponible.innerHTML = disponibilidad;

const card = document.querySelectorAll(".card").forEach((e) => {
    e.addEventListener("click", () => {
        if (disponibilidad > 0 && !e.classList.contains('active')) {
            start(e, "2")
        } else {
            stop(e)
        }
    });
});

function disponibilidadUp(){
    disponible.innerHTML = (disponibilidad = disponibilidad + 1);
}
function disponibilidadDown(){
    disponible.innerHTML = (disponibilidad = disponibilidad - 1);
}

function start (e, tiempo){
    e.classList.add("active");
    disponibilidadDown();
    tiempo = tiempo * 60;

    e.interval = setInterval(()=> {
        minutos = Math.floor(tiempo / 60)
        segundos = tiempo % 60
        
        if(new String(segundos).length == 1) segundos = "0"+segundos

        e.getElementsByClassName('timer')[0].innerHTML =`${minutos}:${segundos}`

        if(minutos == 0) stop(e)
        tiempo--
    },1000)
}


const stop = (e) =>{
    e.classList.remove("active");
    disponibilidadUp();
    console.log("parar");

    clearInterval(e.interval);
    e.getElementsByClassName('timer')[0].innerHTML = `00:00`
}

setInterval(() => {
  momentoActual = new Date(null,null,null,9,44,34,00,null);
    //   momentoActual = new Date();
  hora = momentoActual.getHours();
  minuto = momentoActual.getMinutes();
  segundo = momentoActual.getSeconds();

  str_segundo = new String(segundo);
  if (str_segundo.length == 1) segundo = "0" + segundo;

  str_minuto = new String(minuto);
  if (str_minuto.length == 1) minuto = "0" + minuto;

  str_hora = new String(hora);
  if (str_hora.length == 1) hora = "0" + hora;

    if (hora >= 8 || 19 <= hora) {
        openerd.classList.remove("openered");
    } else {
        openerd.classList.add("openered");
    }
  horaImprimible = `${hora}:${minuto}:${segundo}`;

  document.form_reloj.reloj.value = horaImprimible;
  
},1000);
