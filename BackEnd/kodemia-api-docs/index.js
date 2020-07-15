//Read => GET
//Create => POST
//Update => PATCH
//Delete => DELETE

const fs = require('fs')

const express = require('express')

const app = express()

// recurso/identificador
//kodemia org
// koders <= GET - POST - DELETE - PATCH
// PUT
// PATCH /koders/:id/password <= jerarquía
// PATCH /koders/password/:id
//mentores
//bootcamps
//temarios
//clases

// koders koder

app.use(express.json())
// 1.- checa el header content-type de cada request
// 2.- si el content-type es json entonces parsea el contenido como un json
// 3.- el json resultante nos lo provee en request.body


app.get('/koders',(request,response) => {
    const k = JSON.parse(fs.readFileSync('./kodemia.json'))
    const koders = k.koders
    console.log('koders:', koders)

    response.json({
        success: true,
        data: {
            koders
        }
    })
})

//POST /koders
app.post('/koders', (request, response) => {

    const kodemia = JSON.parse(fs.readFileSync('./kodemia.json'))
    
    kodemia.koders.push(request.body)

    const jsonAsString = JSON.stringify(kodemia, '\n', 2)

    fs.writeFileSync('./kodemia.json', jsonAsString)

    response.json({
        success: true,
        data: kodemia.koders
    })
})


app.delete('/koders/:name', (request, response) => {
    const name = request.params.name

    const kodemia = JSON.parse(fs.readFileSync('./kodemia.json'))

    const filterKoders = kodemia.koders.filter((koder) => {
        return koder.name
    })

    response.json({
        success: true,
        data: {
            filteredKoders
        }
    })
})


app.listen(8080, () => {
    console.log('Server is ready')
})

promise().then()

const promesaDeVuelta = promise()
promesaDeVuelta.then()

//patch