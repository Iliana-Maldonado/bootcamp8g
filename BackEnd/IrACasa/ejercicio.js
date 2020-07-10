function estudiar (callback){
    let termineDeEstudiar = false
    console.log('estoy estudiando')
    console.log('ya terminé de estudiar')
    termineDeEstudiar = true
    if (termineDeEstudiar) callback(null,'si ya terminé')
    if (!termineDeEstudiar) callback('no puelo', 'toi chiquito')
}

estudiar (function(error, mensaje){
    if(error) return console.error(error, mensaje)
    console.log(mensaje)
})