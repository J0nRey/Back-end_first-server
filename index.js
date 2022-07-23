const http = require('http')


const server = http.createServer((request, response) => {
    console.log('URL: ', request.url )
    console.log('METHOD: ', request.method )

    if (request.url === '/koders'){
        
        if (request.method === 'GET') {
            response.write('Aqui estan todos los koders')
        } else if (request.method == 'POST') {
            response.write('Aqui puedes crear koders')
        } else {
            response.write('No estaba preparado para esto')
        }

    } else if (request.url === '/mentors') {

        if (request.method === 'GET') {
            response.write('Aqui estan todos los mentores')
        } else if (request.method == 'POST') {
            response.write('Aqui puedes crear mentores')
        } else {
            response.write('No estaba preparado para esto')
        }

    } 
     else {

        response.write('No estaba preparado para esto, / no se que hacer')
    }

    response.end()
})

server.listen(8080, () => {
     console.log('Servidor escuchando en el puerto 8080')
})

//Ejercicio 1:
// /koders
// GET /koders -> Aqui estan todos los koders
// POST /koders -> Aqui puedes crear koders
// X X/ -> No estaba preparado para esto :c 

// GET /mentors -> Aqui estan todos los mentores
// POST /mentors -> Aqui puedes crear mentores
// X X/ -> No estaba preparado para esto :c

// otras url -> No estaba preparado para esto, / no se que hacer


// El problema viene cuando necesitamos agregar otros metodos (put, patch, delete, etc), por que tenemos que agregar nuevos if, o cuando necesitamos agregar otra ruta por que aumentamos las lineas y se vuelve insostenible.