import cipher from './cipher.js';

//console.log(cipher);

function guardarOffset() {
  const offset = document.getElementById("offsetDerecha").value;
  localStorage.setItem('offset', offset);
}

function mostrarOffset() {
  //let ecuacion = 0;
  const offset = localStorage.getItem('offset');
  // ecuacion = (offset - 65) % 26 + 65;
  const offsetCifrado = "Tu offset es " + offset;
  document.getElementById("offsetCifrado").innerText = offsetCifrado;
}

function msjADescifrar() {
  const mensaje = document.getElementById("msjDescifrado").value;
  const offset = localStorage.getItem('offset');
  const msjYaDescifrado = "Tu mensaje es: " + mensaje + " y cifrado es: " + cipher.decode(offset, mensaje);
  document.getElementById("msjYaDescifrado").innerText = msjYaDescifrado;
}

function onClickDescifrar() {
  guardarOffset();
  mostrarOffset();
  msjADescifrar();
}

 const botonDescifrar = document.getElementById("descifrar");
 botonDescifrar.addEventListener('click', onClickDescifrar); 