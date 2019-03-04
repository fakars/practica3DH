var modal = document.getElementById('modal-fondo');
var vermas1 = document.getElementById('btn1');
var vermas2 = document.getElementById('btn2');
var vermas3 = document.getElementById('btn3');
var vermas4 = document.getElementById('btn4');
var vermas5 = document.getElementById('btn5');
var vermas6 = document.getElementById('btn6');
var vermas7 = document.getElementById('btn7');
var vermas8 = document.getElementById('btn8');
var vermas9 = document.getElementById('btn9');

vermas1.addEventListener('click', abrirModal);
vermas2.addEventListener('click', abrirModal);
vermas3.addEventListener('click', abrirModal);
vermas4.addEventListener('click', abrirModal);
vermas5.addEventListener('click', abrirModal);
vermas6.addEventListener('click', abrirModal);
vermas7.addEventListener('click', abrirModal);
vermas8.addEventListener('click', abrirModal);
vermas9.addEventListener('click', abrirModal);

function abrirModal(){
  modal.style.display='block';  
}

var btnCerrar = document.getElementById('boton-cerrar');

btnCerrar.addEventListener('click', cerrarModal)

function cerrarModal(){
  modal.style.display='none';
}
