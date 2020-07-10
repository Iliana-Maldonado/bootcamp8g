
const fs = require('fs')

fs.writeFile('hola.txt', 'Hola mundo desde node ', 'utf8', (error) => {
    if (error) return console.log('No se pudo crear el archivo')

    console.log('Se creo el archivo')

    fs.readFile('hola.txt','utf8', (error, data) => {
        if (error) return console.error('No se puede leer el archivo')
    
        console.log(data)

        fs.appendFile('hola.txt', 'Esta linea se agregó con append ','utf8', (error) => {
            if (error) return console.log('no se pudo agregar la linea')

            fs.readFile('hola.txt','utf8', (error, data) => {
                if (error) return console.error('No se puede leer el archivo')
            
                console.log(data)
            })
            console.log('Se agrego')
        })
    })
})

const create = (fileName, data, destination) => {
    fs.unlink(fileName, (error) => {
        if(error) return console.log('no se pudo eliminar el archivo')

        console.log()
    })
}



