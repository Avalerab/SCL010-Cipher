 const btncifrar = document.getElementById("btncifrar");
 btncifrar.addEventListener("click", cifrar)
 //Traemos el mensaje a cifrar (id=mensaje) y el offset desde el HTML
 function cifrar() { 
 let mensaje = document.getElementById("mensaje").value;
 //console.log(mensaje);
 let offset = document.getElementById("offset").value;
 //Traemos el resultado obtenido al cifrar desde el chiper.js para mostrarlo en el HTML
  document.getElementById("resultado").innerHTML = window.cipher.encode(mensaje, offset);
  document.getElementById("resultado").style.cssText = "background-color:lightgray;font-size:1.5em;border:1px dashed purple;color:purple;";
}
 
const btndescifrar = document.getElementById("btndescifrar");
 btndescifrar.addEventListener("click", decode);
   //Traemos el mensaje a descifrar (id=mensaje) y offset desde el HTML
   function decode() {
   let mensaje = document.getElementById("mensaje").value;
   let offset = document.getElementById("offset").value;
   //Traemos el resultado desde el cipher.js para mostrarlo en el HTML
   document.getElementById("resultado").innerHTML = window.cipher.decode(mensaje,offset);
   document.getElementById("resultado").style.cssText = "background-color:lightgray;font-size:1.5em;border:1px dashed purple;color:purple;";
 }
