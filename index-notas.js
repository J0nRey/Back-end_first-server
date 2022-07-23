const http = require('http')

const server = http.createServer((request, response) => {


/*  Podemos saber desde donde nos llaman, saber cual es la url.
    Puedo obtener informacion de la peticion por que es parte 
    de lo que me estan pidiendo, esto con el atributo del 
    OBJETO request.url */
    console.log('URL: ', request.url )

    /*
URL:  /            -> peticion a la raiz del servidor localhost:8080
URL:  /hola        -> le llamamos a una ruta diferente localhost:8080/hola
URL:  /favicon.ico -> la segunda peticion es un favicon.ico, el navegador normalmente
                      la hace cuando cargamos una pagina por que revisa  si existe un 
                      icono que pueda poner en la pestama del navegador, y esto solo 
                      pasa en el navegador.
*/


/*  Podemos saber con que metodo nos llamaron, con el atributo del 
    OBJETO request.method  */
console.log('METHOD: ', request.method )

    /*
URL:  /hola        -> Ruta diferente localhost:8080/hola
METHOD:  GET       -> El metodo llamado
URL:  /favicon.ico -> La segunda peticion es un favicon.ico
METHOD:  GET       -> El metodo llamado nuevamente

*/


    response.write('Hola desde un servidor en node first-server/index.js')
    response.end()
})

server.listen(8080, () => {
     console.log('Servidor escuchando en el puerto 8080')
})

/* nos da la linea al servidos, esta escuchando el puerto 8080 pero
 no nos regresa el pront para seguir tirando otros comandos, por que
 el proceso se queda activo, esta escuchando peticiones, esta atento
 a ver a a que hora recibe una peticion para poder escucharla, entonces
 se va a quedar asi nuestra terminal hasta que nosotros detengamos 
 este proceso.

 realizamos una llamada desde el navegador con nuestro localhost...
 http://localhost:8080/
 
 para detener el servidor que tenia es con Ctrl + c, se debe detener para actualizar

 y las podemos ver en el navegador de la siguiente manera:
 navegador click derecho/inspeccionar/Network

 */

// hay puestos que estan reservados para el sistema, ocupador por defecto de comunicacion.
// 80   Recibe conecciones http por defecto
// 443  Recibe conecciones https por protocolo
// 8080 para pruebas al levantar un servidor

//Pero se pueden ocupar el 8081 8082 4000 5000 3000 etc que esten disponibles