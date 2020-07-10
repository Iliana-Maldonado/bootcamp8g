
const http = require('http')

const server = http.createServer((request, response) => {
    console.log('Nos mandaron a llamar!!')

    response.writeHead(200, {
        'Content-Type': 'text/html'
    })

    response.write('<h1>Hola mundo desde servidor en Node JS</h1>')
    response.write('<h2>Hola mundo desde servidor en Node JS</h2>')

    response.end()
})

server.listen('8080', () => {
    console.log('El servidor esta escuchando')
})

