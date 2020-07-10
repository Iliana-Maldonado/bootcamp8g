
const express = require('express')

const app = express()

//GET
//POST
//PUT
//DELETE
//PATCH

//Endpoint
app.get('/hola', (request, response) => {
    response.write('Hola Mundo')
    request.end()
})

app.post('/hola', (request, response) => {
    response.write('Hola Mundo')
    request.end()
})

app.listen(8080, () => {
    console.log('Server is ready on port 8080')
})

