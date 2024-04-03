function calcular() {
    let numero = Number(prompt("Ingresa el número a calcular (entre 1 y 20)"));
    if (numero > 0 && numero <= 20) {
        for (let i = 1; i <= numero; i++) {
            let multi = numero * i;
            console.log(`${i} x ${numero} = ${multi}`);
            let res = 1;
            for (let j = 1; j <= i; j++) {
                res = res * j;
            }
            console.log("Factorial de " + i + " es: " + res);
        }

    } else {
        alert("Número fuera del rango")
    }
}
calcular()

// function validar() {
//     let num = Number(prompt("Ingresa el número a calcular (entre 1 y 20)"));
//     if (num > 0 && num <= 20) {
//         alert("Número dentro del rango");
//     } else {
//         alert("Número fuera del rango");
//     }
// }

// function multiplicar() {
//     // num = 7;
//     for (let i = 1; i <= num; i++) {
//         let resultado = num * i;
//         console.log(`${i} x ${num} = ${resultado}`);
//     }

// }

// function factorial() {
//     // num = 2;
//     for (let i = 1; i <= num; i++) {
//         let resultado = num * i;
//         console.log(`${i} x ${num} = ${resultado}`);
//         let res = 1;
//         for (let j = 1; j <= i; j++) {
//             res = res * j;
//         }
//         console.log("Factorial de " + i + " es: " + res);
//     }
// }

