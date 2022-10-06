import cipher from './cipher.js';

//console.log(cipher);

function guardarOffset() {
  const offset = document.getElementById("offsetDerecha").value;
  localStorage.setItem('offset', offset);
}

function mostrarOffset() {
  const offset = localStorage.getItem('offset');
  const offsetCifrado = "Tu offset es " + offset;
  document.getElementById("offsetCifrado").innerText = offsetCifrado;
}

function msjACifrar() {
  //const abdcdarioAscii = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]
  //let abdcdarioAscii = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
  const mensaje = document.getElementById("msjCifrado").value;
  const offset = localStorage.getItem('offset');
  const msjYaCifrado = "Tu mensaje es: " + mensaje + " y cifrado es: " + cipher.encode(offset, mensaje);
  document.getElementById("msjYaCifrado").innerText = msjYaCifrado;
}

function onClickCifrar() {
  guardarOffset();
  mostrarOffset();
  msjACifrar();
}

const botonCifrar = document.getElementById("cifrar");
botonCifrar.addEventListener('click', onClickCifrar); 
