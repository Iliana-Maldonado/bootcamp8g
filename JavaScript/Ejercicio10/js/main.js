// Preguntar al usuario el nombre de una figura geométrica (Cuadrado, Rectángulo, Circulo, Triangulo)//
//Preguntar al usuario que desea calcular (area o perimetro)//
//Dependiendo de la figura y lo que se desea calcular, aplcar la formula correspondiente y mostrar al usuario en un alert el resultado del calculo//

/*var FiguresA = prompt ("Es un Cuadrado, Rectángulo, Círculo o Triángulo?")
console.log("Calcular el area o perimetro")*/

/*const askUserForData = () => {
    let figure = prompt("Escoge entre cuadrado, rectángulo, circulo, triángulo");
    let operation = prompt("Qué deseas calcular? Area o Perímetro?");
    console.log(figure, operation)
}
const getSquareArea = (side) => {
    let squareArea = (side * side);
    return squareArea
}
const getTriangleArea = (base, height) =>{
    let triangleArea = (base * height)/2
    return triangleArea
}*/


//Pedirle al usuario un numero entre 0 y 50//
//Si el numero ingresado por el usuario sale de rango, pedirle que ingrese un numero diferente//
//Si el numero es mayor a 0, imprimir en consola los numeros pares que existan entre 0 y el numero ingresado por el calculo//

/*var NumberUser = prompt ("Ingrese Numero"," "){
    if (NumberUser < 50){
        console.log ("Ingresar un número entre 0 y 50")
    } else (NumberUser %2 == 0 ; NumberUser < 50 )
    console.log ("Numeros pares")
}*/

/*const askUserForNumber = () => {
    let userNumber = parseInt (prompt("Ingresa un número entre 0 y 50"))
    console.log(userNumber)
    if (userNumber > 0 && userNumber < 50){
        for (let i = 0; i <= userNumber; i ++){
            if (i %2 === 0)
            console.log( $ {i} es un número par)
        }
    }
} else {
    alert("Tu número no está dentro del rango")
}*/

/*pedir al usuario su nombre completo*/
/*contar la cantidad de letras que tenga su nombre*/
/*contar la cantidad de vocales que tiene su nombre*/

/*indicarle al usuario si la cantidad de letras en su nombre corresponde a un número primo*/

const getUserName = () => {
    let userName = prompt("Ingresa tu nombre completo")
    let lettersCount = countLetters(userName);
    let vowelsCount = countVowels(userName)
    let isPrime = checkPrimeNumber(lettersCount);
    alert(`Tu nombre tiene ${lettersCount} letras, también tiene ${vowelsCount} vocales`)
    isPrime ? 
        alert("La cantidad de letras corresponde a un número primo") : 
        alert("La cantidad de letras no corresponde a un número primo")
}
const countLetters = (string) => {
    let stringWithoutSpaces = string.replace(/ /g,"")
    let stringLength = stringWithoutSpaces.length;
    return stringLength
}
const countVowels = (string) => {
    var vowelCount = string.match(/[aeiou]/gi)
    return vowelCount.length
}
const checkPrimeNumber = (number) => {
    if(number === 0 || number === 1){
        return false
    } else {
        for( let i = 2; i < number; i++){
            if(number % i === 0){
                return false
            }  
        }
    }
    return true
}
