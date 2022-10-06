const cipher = {
  
  encode(offset, mensaje) {

      if (offset == null || mensaje == []){
        throw new TypeError("Error, llene los campos en blanco");
      } 

    const ESPACIO = 32;
    let mensajeCifrado = "";

    for (let i = 0; i < mensaje.length; i++) {
      let caracter = mensaje[i]; 
      let codigoDeCaracter = caracter.charCodeAt(0);
      let nuevoCodigo = null;
      if (codigoDeCaracter === ESPACIO){
        nuevoCodigo = ESPACIO;
      }
      else if ((codigoDeCaracter >= 33 && codigoDeCaracter <= 47)||(codigoDeCaracter >= 58 && codigoDeCaracter <= 64)) {
        nuevoCodigo = codigoDeCaracter;
      }
      else if (codigoDeCaracter >= 48 && codigoDeCaracter <= 57) {
        nuevoCodigo = (codigoDeCaracter - 48 + offset % 10 + 10) % 10 + 48;
      }
      else if (codigoDeCaracter >= 65 && codigoDeCaracter <= 90) {
        nuevoCodigo = (codigoDeCaracter - 65 + offset % 26 + 26) % 26 + 65;
      }
      else if (codigoDeCaracter >= 97 && codigoDeCaracter <= 122) {
        nuevoCodigo = (codigoDeCaracter - 97 + offset % 26 + 26) % 26 + 97;
      }
      else if (codigoDeCaracter >= 192 && codigoDeCaracter <= 382) {
        nuevoCodigo = (codigoDeCaracter - 192 + offset % 191 + 191) % 191 + 192;
      }
      mensajeCifrado = mensajeCifrado + String.fromCharCode(nuevoCodigo);
    }

    return mensajeCifrado;
  },

  decode(offset, mensaje) {

    if (offset == null || mensaje == []){
      throw new TypeError("Error, llene los campos en blanco");
    } 

    const ESPACIO = 32;
    let mensajeCifrado = '';

    for (let i = 0; i < mensaje.length; i++) {
      let caracter = mensaje[i]; 
      let codigoDeCaracter = caracter.charCodeAt(0);
      let nuevoCodigo = null;
      if (codigoDeCaracter === ESPACIO){
        nuevoCodigo = ESPACIO;
      }
      else if ((codigoDeCaracter >= 33 && codigoDeCaracter <= 47)||(codigoDeCaracter >= 58 && codigoDeCaracter <= 64)) {
        nuevoCodigo = codigoDeCaracter;
      }
      else if (codigoDeCaracter >= 48 && codigoDeCaracter <= 57) {
        nuevoCodigo = (codigoDeCaracter - 48 + offset % 10 + 10) % 10 + 48;
      }
      else if (codigoDeCaracter >= 65 && codigoDeCaracter <= 90) {
        nuevoCodigo = (codigoDeCaracter - 65 - offset % 26 + 26) % 26 + 65;
      }
      else if (codigoDeCaracter >= 97 && codigoDeCaracter <= 122) {
        nuevoCodigo = (codigoDeCaracter - 97 - offset % 26 + 26) % 26 + 97;
      }
      else if (codigoDeCaracter >= 192 && codigoDeCaracter <= 382) {
        nuevoCodigo = (codigoDeCaracter - 192 - offset % 191 + 191) % 191 + 192;
      }
      mensajeCifrado = mensajeCifrado + String.fromCharCode(nuevoCodigo);
    }

    return mensajeCifrado;
  }
};

export default cipher;