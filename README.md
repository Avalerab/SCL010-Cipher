# Cifrado y Descifrado de Mensajes

La presente aplicación ofrece el *Cifrado y Descifrado de Mensajes*, encriptando la información bajo el método conocido como Cifrado César. El objetivo primordial de la aplicación, es que sea usado por la alta gerencia y CEOs de todas las filiales de **AV Enterprises Corporation** en el manejo de los mensajes confidenciales y de alta complejidad para la corporación. En tal sentido:

- Ofrece el encriptado de mensajes en *forma segura* para todos sus usuarios.
- Es de fácil manejo.
- Brinda una pantalla amigable.
- Emplea letras mayúsculas, minúsculas y espacios entre palabras.

## Limitaciones de la aplicación
La app esta diseñada para el manejo de textos del alfabeto simple (desde la A hasta la Z) y separaciones de palabras por espacios. Sin embargo, los símbolos (%, $, *, etc), ñ y negativos (-) no son usados en esta aplicación.

## Instrucciones de uso
Para usar la aplicación, sólo tiene que ejecutar los siguientes pasos:

*Para cifrar mensajes:*
 - Introduzca el mensaje que desea cifrar en la caja que dice "Mensaje".
 - Introduzca el nivel de seguridad (offset) con que desea cifrar el mensaje en la caja que dice "Offset". *Sólo use números positivos.*
 - Pulse el botón "cifrar".
 - Y el mensaje cifrado aparecerá debajo del título que dice "Resultado".

 *Para descifrar el mensaje:*
 - Introduzca el mensaje que desea descifrar en la caja que dice "Mensaje".
 - Introduzca en la caja que dice "Offset" el nivel de seguridad (offset) con el cual fué codificado el mensaje original. *Sólo use números positivos.*
 - Pulse el botón "descifrar".
 - Y el mensaje descifrado aparecerá debajo del título que dice "Resultado".

 Puede repetir estas operaciones, tantas veces como sea requerido.
  

## Resumen de desarrollo de la aplicación 
En resumen podemos indicar que la aplicación fue desarrollada en 5 grandes fases, como son:

*Recopilación de información*
En esta etapa se definieron los objetivos, requerimientos y usuarios finales de la aplicación. 
![alt text](http://www.imagenonline.com/imagenes/1/1074-56fc7fe1655b70aaf42ae37ad6eea5dbd9e820e6.jpg) 

*Prototipado*
Etapa donde se desarrolló el bosquejo de la aplicación, plasmando las soluciones a los planteamientos recopilados.
![alt text](http://www.imagenonline.com/imagenes/1/1075-0b966146724066f008f756a27b012142e30f2808.jpg)

*Codificación o desarrollo de la aplicación*
Acá desarrollamos la estructura del HTML (index.html), archivos ejecutorios (index.js y cipher.js),  creamos el estilo (style.css) y redactamos el README.
![alt text](http://www.imagenonline.com/imagenes/1/1073-e88c0113b7a0c5d41b635ac8c0b1d2c17f9c5bb8.jpg)

*Revisión de estilo*
Una vez desarrollada la aplicación, realizamos pruebas con usuarios, obteniendo puntos a mejorar, como fueron: 
- Identificar el usuario (colocar logo y nombre de la empresa).
- Indicar brevemente el objetivo de la aplicación en la pantalla inicial.
- Resaltar aún más el resultado obtenido (es decir, resaltar el mensaje cifrado o descifrado), ya que se dispersaba dentro de la misma.

*Pruebas (test)*
Se ejecutaron pruebas con "npm test" obteniendo "check list" para los test implementados para cipher, cipher.encode y cipher.decode, tal y como pueden observar en las fotos anexas.
![alt text](http://www.imagenonline.com/imagenes/1/1072-bf2a26f535af1446e9fd030cbf9b7de55a1978f8.jpg)
![alt text](http://www.imagenonline.com/imagenes/1/1076-e366f727e90a20ae2625ac659982b19cc819f6b1.jpg)

## Copyrigth
AV Software Design - 2019 Todos los Derechos Reservados.


