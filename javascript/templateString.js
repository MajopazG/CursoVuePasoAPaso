// template string
const numero = (num1, num2) => {
    return `El numero es: ${num1 + num2}`
} 
const resultado = numero(10,20);
console.log(resultado)

//reducir la funcion de arrriba 
const numero2 = (num1, num2) => (`El numero es: ${num1 + num2}`)

const resultado2 = numero2(30,20);
console.log(resultado2)