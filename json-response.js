const http = require('http')

const server = http.createServer( (request, response) => {
// * Los header son objeto con llave-valor {key:'value'}

    //    response.write('hola')
    //response.setHeader('Content-Type', 'application/json')
    // Espesifico que el contenido que voy a mandar esta en formato JSON, es decir un objeto.
    // insomnia: No body returned for response
    
    //Segundo Metodo 
    response.writeHead(500, { 'Content-Type': 'aplication/jason' })
    // No solo se pueden pasar los header que se quiren escribir, ya podemos cambiarle el status.

    const jasonResponse = {massage: 'Hola mundo'}
    // creo un Json y lo guardo en una constante

    const jsonString = JSON.stringify(jasonResponse)
    // Representacion en texto del JSON
    //.stringify Este metodo vuelve a mi objeto a un string el cual puedo responder -> jsonString;  {"massage":"Hola mundo"}
    console.log('jsonString; ', jsonString)

    response.write(jsonString)
    //  paso el string creado con el objeto JSON.jsonString({massage: 'Hola mundo'})

    response.end()

} )

server.listen( 8080 , () => {
    console.log('El servidor esta listo')
} )

//ejercicio 2
// Como respondo un JSON