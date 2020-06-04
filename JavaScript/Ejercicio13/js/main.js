/*
    crear una función que pida al usuario los siguientes datos:
    nombre, apellidos, calle, número, colonia, código postal, alcaldía o municipio
    esa función debe devolver un objeto con la siguiente estructura:
    {
        nombre:
        apellidos:
        direccion:{
            calle:
            numero:
            colonia:
            cp:
            alcaldia:
        }
    }
*/
const createUserObject = () => {
    var userInfo = {}

    var nombre = prompt("Escribe tu nombre")
    var apellidos = prompt("Escribe tu apellido")
    var calle = prompt("Escribe tu calle")
    var colonia = prompt("Escribe tu colonia")


    userInfo.nombre = nombre
    userInfo.apellidos = apellidos
    userInfo.direccion = {}
    userInfo.direccion.calle = calle
    userInfo.direccion.colonia = colonia

    return userInfo
}
/*
    crear una función que pida al usuario un año (2000, 1989, etc).
    la función debe extraer los autos del array cars, cuyo año sea mayor al indicado por el usuario
    por cada auto extraído, mostrar al usuario un mensaje que diga "Opción ${indice}: ${fabricante del 
    auto} ${nombre del auto} del año ${año de fabricación}, con ${hp} caballos de fuerza"
*/

cars = [
    {
        year:"2000",
        maker:"Toyota",
        model:"Corolla",
        hp:"300"
    },
    {
        year:"1967",
        maker:"Ford",
        model:"Mustang",
        hp:"500"
    },
    {
        year:"2000",
        maker:"Nissan",
        model:"Sentra",
        hp:"128"
    },
    {
        year:"2012",
        maker:"Mitubishi",
        model:"Lancer",
        hp:"300"
    },
    {
        year:"2000",
        maker:"Nissan",
        model:"Altima",
        hp:"200"
    },
    {
        year:"1990",
        maker:"Volkswagen",
        model:"Sedan",
        hp:"80"
    },
    {
        year:"2015",
        maker:"Nissan",
        model:"Tiida",
        hp:"200"
    }
]

var year = prompt("Write a year")
const carsFilteredbyYear= cars.filter(car => {
    return car.year > year
})
console.log (carsFilteredbyYear)
var autos = carsFilteredbyYear.map(function(car,index){
    console.log (index + " " + "fabricante del auto" +" "+ car.maker + " "+ "nombre del auto" + " "+ car.model + " " + "del año" + " "+ car.year+" "+ "con"+ " " + car.hp + " "+ "caballos de fuerza")
})