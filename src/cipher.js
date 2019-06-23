window.cipher = {
  encode: (mensaje, offset) => {
    //console.log(mensaje);
    //Declaro todas las variables a usar, paso a mayusculas las letras y defino el offset como un numero
    /*let isUpperCase = mensaje.toUpperCase();*/
    let isUpperCase = mensaje.toUpperCase();
    let numero = parseInt(offset);
    let ASCii = "";
    let nuevoASCii = "";
    let cifrado ="";
    //Para cifrar cada letra del string, iteramos con un for
    for (let i=0; i < isUpperCase.length; i++){ 
     //Obtengo los ASCii del string
     ASCii = isUpperCase.charCodeAt(i);
     if (ASCii===32) {nuevoASCii=32}
     if (ASCii!=32) {
     nuevoASCii = (ASCii - 65 + numero)%26 + 65;}
     cifrado += String.fromCharCode(nuevoASCii);
    }
     // Para que el HTML me lea el resultado obtenido, uso la funcion retur
      return cifrado;
    },
    
    
  decode: (mensaje, offset) => {
    //Descifrado de mensaje
    let descifrado = "";
    let isUpperCase = mensaje.toUpperCase();
    let ASCii = "";
    let nuevoASCii = "";
    let numero = parseInt(offset);
    for (let i=0; i<mensaje.length; i++){ 
    //console.log(mensaje);
    ASCii = isUpperCase.charCodeAt(i);
    if (ASCii === 32){nuevoASCii=32}
    if (ASCii !=32){
    nuevoASCii = (ASCii - numero);}
    descifrado += String.fromCharCode(nuevoASCii);
    //console.log(descifrado);
    } 
    return descifrado;
  }
}        
