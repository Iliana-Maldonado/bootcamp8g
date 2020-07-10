
function irACasa (callback = () => {}) {
    let estoyEnCasa = false
    console.log('Estoy caminando a casa')
    estoyEnCasa = true
    if (estoyEnCasa) callback(null, 'todo cool')
    if(!estoyEnCasa) callback('aiiuraa', 'me perdi')
}

irACasa((error, frase) => {
    if (error) return console.error(error, frase)
    console.log(frase)
    console.log('soy la función anónima')
})