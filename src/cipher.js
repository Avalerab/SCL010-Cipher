window.cipher = {
  encode: () => {
    function btncifrar() {
      console.log(m);
      let nss = parseInt(e);
      //Chequeamos el texto, para convertir todas las letras en mayusculas
      let mMayuscula =m.toUpperCase(); 
      console.log(mMayuscula);
      //Obtenemos el codigo ASCii de cada letra del mensaje  
      let cifrado = "";
      let resultadoASCii='';
      let nuevoASCii='';
  
      for (let i=0; i<mMayuscula.length; i++){ 
      resultadoASCii = mMayuscula.charCodeAt(i);
      // Mostramos los ACSii en la consola
      console.log("Esto es el ASCii original" + resultadoASCii);
      nuevoASCii = ((resultadoASCii -65 +nss)%26 + 65);
      console.log(nuevoASCii);
      //Ciframos el mensaje
      cifrado += String.fromCharCode(nuevoASCii);  
      console.log(cifrado);
     }
     }  
    },
  
 decode: ()=> {
      //Decode: Descifrado de mensaje
      function btndescifrar() {
      console.log(m);
      //Convertimos el Offset en numero
      let nss = parseInt(e);
      //Transformamos las letras del mensaje en mayusculas
      let mMayuscula =m.toUpperCase(); 
      console.log(mMayuscula);
      //Obtenemos los codigos ASCii del mensaje a descifrar
      let mdescifrado = "";
      let resultadoASCii2='';
      let nuevoASCii2='';

      for (let i=0; i<mMayuscula.length; i++){ 
      resultadoASCii2 = m.charCodeAt(i);
      nuevoASCii2 = (resultadoASCii2 -nss);
      //Mostramos los codigos ASCii en la consola
      console.log(nuevoASCii2);
      //Obtenemos el mensaje original o descifrado
      mdescifrado += String.fromCharCode(nuevoASCii2);
      //Mostramos el mensaje original en la consola
      console.log("Tu mensaje original era: " +mdescifrado);
      
      }
      }      

    }
  
}
