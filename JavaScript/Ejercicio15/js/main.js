/*var songsArray = [
    {
        name: "Thunderstruck",
        interpreter: "AC / DC",
        gender: "Rock"
    }, {
        name: "Fear of the dark",
        interpreter: "Iron Maiden",
        gender: "Metal"
    }, {
        name: "Whole lotta Rossie",
        interpreter: "AC / DC",
        gender: "Rock"
    }, {
        name: "Electric Eye",
        interpreter: "Judas Priest",
        gender: "Metal"
    }, {
        name: "The show must go on",
        interpreter: "Queen",
        gender: "Rock"
    }, {
        name: "Sappy",
        interpreter: "Nirvana",
        gender: "Grounge"
    }, {
        name: "Smeels like teen spirit",
        interpreter: "Nirvana",
        gender: "Grounge"
    }, {
        name: "The memory remains",
        interpreter: "Metallica",
        gender: "Trash"
    }, {
        name: "Stairway to heaven",
        interpreter: "Led Zeppelin",
        gender: "Rock"
    }, {
        name: "Leave that thing alone",
        interpreter: "Rush",
        gender: "Progressive Rock"
    }, {
        name: "Confortably numb",
        interpreter: "Pink Floyd",
        gender: "Progressive Rock"
    }
]
var newArray = songsArray.reduce( ( accum, song ) => {
    let songGender = song.gender;
    !accum[songGender] ? ( accum[songGender] = [], accum[songGender].push(song) ) : accum[songGender].push(song);
    return accum
},[])*/

/*var nameInput = document.getElementById('user-name');
console.log(nameInput.value) //Entrega un solo elemento
var inputs = document.getElementsByClassName('form-control');
console.log(inputs) //Entrega un Elemento
var inputsByName = document.getElementsByName('user')
console.log(inputsByName) //Entrega un NodeList
var elementsByTagname = document.getElementsByTagName("input")
console.log(elementsByTagname) //Entrega una HTML collection
var elementByQuery = document.querySelector("input.form-control")
console.log(elementByQuery) //Entrega el primer elemento que coincida
var allElementsByQuery = document.querySelectorAll("input.form-control")
console.log(allElementsByQuery) // Entrega todos los elementos que encuentre en NodeList
*/

/*¿Qué conceptos me ayudarán con la práctica?
Extraer datos del formulario.
-Objetos de javacript ( properties, values )
-ciclos( .forEach, for...)
-métodos de DOM (getElementById, ClassName, Name, etc)
diferencias entre Array, Object, HTMLCollection, NodeLists*/

const createUserObject = () => {

    var inputCollection = document.getElementsByTagName("input")
    console.log(inputCollection)

    var userObject = {}

    for(let i = 0; i < inputCollection; i++){
        console.log(inputCollection[i])
        let objectKey = inputCollection[i].dataset.pointsTo
        let objectValue = inputCollection[i].value
        userObject[objectKey] = objectValue
        console.log(userObject)
    }
}

/*var nameInput = document.getElementById('input-name');
nameInput.addEventListener("keyup", (event)=> {
    let inputValue = event.target.value;
    console.log(inputValue)
})

var adressInput = document.getElementById('input-adress');
console.log(adressInput.value)

var phoneInput = document.getElementById('input-phone');
console.log(adressInput.value)*/

var inputCollection =document.querySelectorAll('input')

console.log(inputCollection)

inputCollection.forEach( element => {
    console.log(element)
    element.addEventListener("keyup", (event) => {
        let inputValue = event.target.value
        console.log(inputValue)
    })
})
