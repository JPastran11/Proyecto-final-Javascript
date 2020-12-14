//JAVASCRIPT CODIGO 
function recogerDatos(){
    var nombreCliente = document.getElementById("nombre").value;
    var telefonoCliente = document.getElementById("telefono").value;
    var emailCliente = document.getElementById("email").value;


    var ciudades = '';

    var hospedajebarcelona = document.getElementById("barcelona");
    var hospedajeparis = document.getElementById("paris");
    var hospedajeamsterdam = document.getElementById("amsterdam");

    if(hospedajebarcelona.checked){
        ciudades = hospedajebarcelona.value;
    } else if(hospedajeparis.checked){
        ciudades = hospedajeparis.value;
    } else {
        ciudades = hospedajeamsterdam.value;
    }

    let duracion = '';
    let duracionDias = document.getElementById("dias");
    let duracionSemanas = document.getElementById("semanas");
    let duracionMeses = document.getElementById("meses");

    if(duracionDias.checked) {
        duracion = duracionDias.value;
    } else if (duracionSemanas.checked){
        duracion = duracionSemanas.value;
    }else {
       duracion =  duracionMeses.value;
    }

var servicios = []


var serviciosaudioguia = document.getElementById("audioguia");
var serviciossinhospedaje = document.getElementById("nohospedaje");

if(serviciosaudioguia.checked){
    servicios.push(serviciosaudioguia.value)
}

if(serviciossinhospedaje.checked){
   servicios.push(serviciossinhospedaje.value);
}



var mensajeFinal = "El cliente de nombre: "+ nombreCliente+
", telefono: "+telefonoCliente+
", email: "+emailCliente+
", ha elegido un paquete para el destino: "+ciudades+
", donde quiere vacacionar durante "+ duracion+
", con los siguientes adicionales: "

for (let i = 0; i < servicios.length; i++){
    const element = servicios[i];
    mensajeFinal+= element + " ";
}
console.log(mensajeFinal);
    swal("Gracias por completar tu formulario exitosamente!")
    
    
}

function Objeto(evento){
    console.log(serviciosfullDay)
    localStorage.setItem("datosFullDay", JSON.stringify(serviciosfullDay));}

var Objeto;
var serviciosfullDay = new Object();
serviciosfullDay.comida = 'Desayuno Incluido';
serviciosfullDay.excursion = 'Excursiones diaria en toda la ciudad.';
serviciosfullDay.bebida = 'Incluidas, excepto alcoholica';

function ObjetoDos(evento){
    console.log(serviciosDesayuno)
    localStorage.setItem("datosDesayuno", JSON.stringify(serviciosDesayuno));}

var ObjetoDos;
var serviciosDesayuno = new Object();
serviciosDesayuno.comida = 'Todo nuestro bufete de desayuno';
serviciosDesayuno.horario = 'Turno Diurno';
serviciosDesayuno.bebida = 'Jugos, agua y cafe ilimitado.';



function Saludo(evento){
    swal("Ingresa Nombre y Apellido Completo!")

};

var alerta;
function Alerta(evento){
    alert("")
};

function updateCounter(evento) {
    alert("")
  }

//JQUERY CODIGO
$('h2').css({ 'fontSize' : '30px', 'font-family': 'Open Sans Condensed', 'color' : 'white' });
$('legend').css( {'font-family': 'Open Sans Condensed', 'color' : 'white' });
$('label').css( {'font-family': 'Open Sans Condensed', 'color' : 'white' });
$('a').css( {'font-family': 'Open Sans Condensed', 'color' : 'white' });
$('div').css( {'font-family': 'Open Sans Condensed', 'color' : 'white' });
$('input').css( {'font-family': 'Open Sans Condensed', 'color' : 'black'});
$('body').css('background-color', '#00264d');
$('#testimonial2').css({ 'fontSize' : '20px', 'font-family': 'Open Sans Condensed', 'color' : 'white', 'text-align' : 'center' });
$('#testimonial4').css({ 'fontSize' : '20px', 'font-family': 'Open Sans Condensed', 'color' : 'white', 'text-align' : 'center' });
$('#testimonial').css({ 'fontSize' : '28px', 'font-family': 'Dancing Script', 'color' : 'white' });
$('#testimonial3').css({ 'fontSize' : '40px', 'font-family': 'Dancing Script', 'color' : 'white' });
$('#resultado').css({ 'fontSize' : '40px', 'font-family': 'Open Sans Condensed', 'color' : 'white', 'background-color': '#e6b800' });
$("input").hover(function(){
    $(this).css("background-color", "#6666ff");
    }, function(){
    $(this).css("background-color", "white");
  });

  $("#testimonial2").hover(function(){
    $(this).css("background-color", "#000033");
    }, function(){
    $(this).slideDown;
  });

  $("#testimonial").hover(function(){
    $(this).css("background-color", "#000033");
    }, function(){
    $(this).css("background-color", "#000033");
  });
  
  $("#testimonial4").hover(function(){
    $(this).css("background-color", "#00004d");
    }, function(){
    $(this).css("background-color", "#00004d");
  });
  

   /*$('#boton').click(function(){
  
    $('.nombre').html('El cliente de nombre es: '+$('#nombre').val());
    $('.telefono').html(' telefono : '+$('#telefono').val());
    $('.email').html('El telefono es: '+$('#email').val());
  });
*/



 
 $('#nombre').keyup(function(){ 
    $('.nombre').html('<b>Informacion de Contacto</b>, El nombre del cliente es: '+$('#nombre').val());
  });
  $('#telefono').keyup(function(){ 
    $('.telefono').html('Telefono de contacto: '+$('#telefono').val());
  });
  $('#email').keyup(function(){ 
    $('.email').html('Email de contacto: '+$('#email').val() +", <b>Por favor verifique los datos antes de enviar<b>");
  });


  $("#formulario").submit(function(e){
    e.preventDefault();
var users= { 
  name: $('input[name="nameUsers"]').val(),
  email: $('input[name="emailUsers"]').val()
  
};
console.log(users);
$.post($(this).attr("action"), users, function(response){
  console.log(response);
}).done(function(){
  localStorage.setItem("Usuario Guardado", JSON.stringify(users));
  swal("Gracias por registrarte!, acabas de acceder a un 20% de descuento por ser socio!");
});
 return false
  });

 
 
  $( "#botonn" ).click(function() {
    $( "#formulario" ).fadeOut( "slow" );
  });
 



   let cotizarSeguro=()=>{
     let region=document.querySelector("#region").value;
     let epoca=document.querySelector("#epoca").value;
     let basico=document.querySelector("#basico");
     let completo=document.querySelector("#completo");

     let divResumen=document.querySelector("#resumen");
     let divResultado=document.querySelector("#resultado");

     let plan="";

     if(basico.checked){
       plan="basico";
     }else if(completo.checked){
       plan="completo";
     }

    if(region ==='' || epoca ==='' || plan ===''){
     swal("Campos Vacios");
      return
    }

    let cotizacion={region, epoca, plan};
    document.querySelector("#msj").style.display="none";

    divResumen.style.display="block";
    divResumen.innerHTML=`<div>
    <img src="./images/hola.gif" width=500 height=300></div>`;
    setTimeout(()=>{
      divResumen.innerHTML=`
      <h2>Resumen de Cotizacion</h2>
      <li>Vacaciones en: ${region}</li>
      <li>Epoca Vacacional: ${epoca}</li>
      <li>Tipo de Seguro: ${plan}</li>
      <li>Empresa Aseguradora: Assist Card.</li>
      `;let cotizacionFinal=cotizar(cotizacion);
      divResultado.style.display="block";
      divResultado.className="divResultado";
      divResultado.innerHTML=`<p>$${cotizacionFinal} </p>`;},
      3000);
      
    
   }


   const cotizar=(cotizacion)=>{
     const {region, epoca, plan}=cotizacion;
     let resultado=8000;
     resultado=calcularRegion(region)*resultado;
    resultado=calcularEpoca(epoca)*resultado;
    const incremetoPlan=obtenerPlan(plan);
    resultado=parseFloat(incremetoPlan*resultado).toFixed(2);
    return (resultado);
   }
const obtenerPlan=plan=>{
  return(plan==='basico')?1.20:1.60;
}



   const calcularEpoca=epoca=>{
let incremento;
switch(epoca){
  case 'Verano': incremento=1.8; break;
  case 'Primavera': incremento=1.4; break;
  case 'Otoño': incremento=1.2; break;
  case 'Invierno': incremento=1.1; break;
  
default: break;
} return incremento;
   }

   const calcularRegion=region=>{
    let incremento1;
    switch(region){
      case 'Europa': incremento1=0.8; break;
      case 'EEUU': incremento1=0.4; break;
      case 'Caribe': incremento1=0.6; break;
     
      
    default: break;
    } return incremento1;
       }




       function ajax(){
        const http = new XMLHttpRequest();
        const url = 'https://reqres.in/api/users'

        http.onreadystatechange = function(){
           if(this.readyState == 4 && this.status == 200){
            
            /* document.getElementById("response").innerHTML = this.responseText*/
           }
        }
        http.open("GET", url);
        http.send();
       }

       document.getElementById("boton").addEventListener("click", function(){
         ajax();
       });

       function alert(){
        swal({
          title: "¡Lo sentimos!",
          text: "Pagina en construccion",
          type: "error",
        });
       }
            


             document.querySelector('#json').addEventListener('click', traerDatos);

      function traerDatos(){
        const xhttp = new XMLHttpRequest();
xhttp.open("GET", "datos.json", true)

xhttp.send();

xhttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    console.log(this.responseText)
    let datosJson = JSON.parse(this.responseText);
   let res = document.querySelector('#res')
   res.innerHTML = '';
    for(let item of datosJson){
        res.innerHTML += `
      <tr>
      <td><b>${item.Tipo}<b></td>
      <td>${item.Incluido}</td>
      <td><b>${item.Monto}<b></td>
      <tr>
        `
    }

  }
 } 
}
