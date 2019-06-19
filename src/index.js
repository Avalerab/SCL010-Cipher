 const btncifrar = document.getElementById("mcifrar");
 btncifrar.addEventListener("click", ()=> {
 //Traemos el mensaje a cifrar id=mCifrar desde el HTML
 let m = document.getElementById("mCifrar").value;
 //Traemos el Offset a emplear en la formula y lo convertimos en "numero" con el parseInt
 let e = document.getElementById("ns").value;
 //Mostramos el resultado en el HTML con el innerHTML 
    document.getElementById("resultado").innerHTML = "Tu mensaje cifrado es: " +cifrado;
 }
 
 const btndescifrar = document.getElementById("mcifrar");
 btndescifrar.addEventListener("click", () =>{
   //Traemos el mensaje a descifrar (id=mCifrar) desde el HTML
   let m = document.getElementById("mCifrar").value;
   //Traemos el Offset desde el HTML
    let e = document.getElementById("ns").value;
   //Mostramos el mensaje original en el HTML (como el resultado esperado)
   document.getElementById("resultado").innerHTML = "Tu mensaje descifrado es: " +mdescifrado;
 }