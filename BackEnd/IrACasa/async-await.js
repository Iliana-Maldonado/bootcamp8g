// async & await
// asinc: asincrono
// await: esperar


/*async function queryDB () {
    const respuestaDB = await db.select('koders')
    db.select('mentores')
    console.log('respuestaDB: ', respuestaDB)
}

async function otraAsync () {.....}

async function main () {
    const query = await queryDB()
    const otra = await otraAsync()
}

main()
    .then()
    .catch()*/

/*function build (wallToBuild, callback) {

    setTimeout(() => {
        wallToBuild.isBuilt = true
        console.log('wall is built')

        const error = wallToBuild.isBuilt
        ? null
        : 'cannot build'

        callback(error, wallToBuild)

    }, 3000)
}

function planish (wallToPlanish, callback) {
    console.log('planished')

    setTimeout(() => {
        wallToPlanish.isPlanished = true
        console.log('wall is planish')

        const error = wallToPlanish.isPlanished
        ? null
        : 'cannot planished'

        callback(error, wallToPlanish)

    }, 2000)
}

function paint (wallToPaint, callback) {
    console.log('paint')

    setTimeout(() => {
        wallToPaint.isPainted = true
        console.log('wall is painted')

        const error =wallToPaint.isPainted
        ? null
        : 'cannot planished'

        callback(error, wallToPaint)

    }, 4000)
}

async function main () {
    const builtWall = await build({})
    const planishedWall = await planish(builtWall)
    const paintedWall = await paint(planishedWall)
    console.log('paintedWall: ', paintedWall)
    return paintedWall
}

main()
.then(() => {
    console.log('DONE')
})
.catch(error => {
    console.error('Error: ', error)
})*/

// Kodemia 

function interview (letsInterview) {
    console.log ("Entrevista con Vero")
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            letsInterview.isInterview = true
            if (letsInterview.isInterview){
                resolve (letsInterview);
            } else {
                reject ('No pasaste la entrevista :(')
            }
        }, 5000);
    })
}
function offer (offerReceived) {
    console.log ("Recibí una oferta!")
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            offerReceived.hasOffer = true
            if (offerReceived.hasOffer){
                resolve (offerReceived);
            } else {
                reject ('No acepté la oferta')
            }
        }, 5000);
    })
}
function payment (payDeposit) {
    console.log ("Haz el depósito correspondiente, Paga ahora :)")
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            payDeposit.hasMoney = true
            if (payDeposit.hasMoney){
                resolve (payDeposit);
            } else {
                reject ('No hay dineros :(')
            }
        }, 5000);
    })
}
function firstClass (student) {
    console.log ("Entré a Kodemia!")
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            student.firstClass = true
            if (student.firstClass){
                resolve (student);
            } else {
                reject ('Estoy chiquito para ir a la clase :(')
            }
        }, 5000);
    })
}
async function process () {
    const interviewed = await interview ({})
    const offered = await offer (interviewed)
    const payed = await payment (offered)
    const assistance = await firstClass (payed)
    console.log ('koder: ', assistance)
    return assistance
}
process ()
.then (() =>{
    console.log('YA ENTRÉ A KODEMIA!')
})
.catch (error =>{
    console.error ('Error: ', error)
})

