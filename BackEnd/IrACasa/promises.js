//constructor
/*new Promise() // regresa un objeto promesa
new Promise((resolve, reject) => {
    if('todo ok') resolve('ok')
    if('not ok') reject('ups')
})

function algoAsincrono () {
    return new Promise((resolve,reject) => {
        if('todo ok') resolve('blabla')
        if('not ok') reject('xxxxx')
    })
}

algoAsincrono()
.then(() => {
    console.log('result: ', result) //result: blabla
    console.log('se resolvio')
})
.catch(() => {
    console.error('hubo un error: ', error) //xxxxx
})*/

function build (wallToBuild) {
    console.log('build starts')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            wallToBuild.isBuild = true

            if (wallToBuild.isBuild) {
                resolve(wallToBuild)
            } else {
                reject('cannot build')
            }
        },3000)
    })
}

build({})
.then((buildWall) => {
    console.log('builtWall: ', buildWall)
})
.catch((error) => {
    console.error('build error: ', error)
})