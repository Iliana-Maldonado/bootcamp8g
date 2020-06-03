//-Crear una función que reciba una palabra del usuario
//-Si el usuario escribe más de una palabra, indicarle que debe ingresar sólo una palabra
//-Si el usuario ingresa al menos un número dentro de la palabra, indicarle que no puede ingresar números
//-si el usuario ingresa una palabra, evaluar si esa palabra es un palíndromo

const wordUser = () => {
    let insertWord = prompt(Hola! Inserta una palabra)
    if (wordUser)
}

//-crear una función que reciba un número del usuario
//-si el usuario ingresa algo diferente a un número, indicarle que debe ingresar un número
//-si el usuario ingresa más de un número ( por ejemplo 22 10, ó 25,15,89) indicarle que debe ingresar únicamente un número
// -si el usuario ingresa un número, descomponer ese número en sus factores primos
//-concatenar cada factor primo encontrado en un string, y entregar ese string como resultado final al usuario.
 
const count_input = string => string.trim().replace(',',' ').split(' ').length;
const get_number = () => {
    let number = prompt("Ingresa un numero")
    if(count_input(number) > 1){
    return 'solo ingresar un numero'
    }
    if(filter_number(number)){
        return 'Favor de ingresar solo números'
    }
    let arrayPrimeNumbers= get_prime_number_array(parseInt(number))
    let primeFactor = get_prime_factor(number,arrayPrimeNumbers);
    if(primeFactor){
        return `Los factores primo de ${number} son: ${primeFactor}`;
    }else{
        return `No pudimo obtener el factor primo de ${number}`
    } 
}
const filter_number = number => {
    if(number.match(/\D/)){
        return true;
    }
    return false;
}
const get_prime_number_array = number => {
    let arrayNumber =[]
    for( let i = 2; i <= number; i++){
        if(is_prime_number(i)){
            arrayNumber.push(i);
        }
    }    
    return arrayNumber;
}
const is_prime_number = number => {
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
const get_prime_factor = (number,arrayPrimeNumbers) => {
    let primeFactorArr = [],
        flag = true
    while(flag == true){
        let firstNumber = get_first_number (arrayPrimeNumbers)
        if(number % firstNumber === 0){
            primeFactorArr.push(firstNumber);
            number /= firstNumber;
        }else{
            arrayPrimeNumbers.shift();
        }
        flag = arrayPrimeNumbers.length === 0 ? false : true;
    }
    return primeFactorArr.join(',');
}
const get_first_number = numberArr => numberArr[0]
console.log(get_number());