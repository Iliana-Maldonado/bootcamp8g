// Declarar 1 variable que contenga un numero cualquiera y determinar mediante un mensaje si es par o impar//

var NumberOne = 7;

if (NumberOne %2 == 0){
	console.log(" el número es par")
} else {
	console.log("el número es impar")
}


// Determinar 2 variables (base, altura) e indicar si con ellas se forma un cuadrado o un rectánculo//

var w = 10
var h = 15

if (w == h){
	console.log("se forma un cuadrado")
} else {
	console.log("se forma un rectángulo")
}
// Determinar 1 variable (numeroDeLados) e indicar el nombre de la figura geométrica que tiene esa cantidad de lados, si un numero de lados es mayor que 7, poner un mensjae que diga "tu figura tiene muchos lados"//

var NumberOfSides = 8

if (NumberOfSides == 3){
	console.log("es un triángulo")
} else if (NumberOfSides == 4){
	console.log("es un cuadradro")
} else if (NumberOfSides == 5){
	console.log("es un pentágono")
} else if (NumberOfSides == 6){
	console.log("es un hexágono")
} else if (NumberOfSides >= 7){
	console.log("tu figura tiene muchos lados")
}