// // let opcao = Number(prompt("Escolha uma opção: \n\n1. Ainda estou na tolerância \n2. Calcular valor"))

// // if (opcao === 1) {
// //     alert("Você ainda está na tolerância!")

// // } else {

// //     let valor = Math.ceil(prompt("Informe quantas horas:"))
// //     let veiculo = Number(prompt("Informe qual o tipo de veículo: \n\n1 - Moto \n2 - Carro"))

// //     function calcularValor(horas) {

// //         if (veiculo === 1) {
// //             const resultado = valor * 3
// //             console.log("O valor total é: R$" + resultado + ".")
// //         }
// //         else if (veiculo === 2) {
// //             const resultado2 = valor * 6
// //             console.log("O valor total é: R$" + resultado2 + ".")
// //         }
// //     }

// //     calcularValor()
// // }

// let horaEntrada = Number(prompt("Informe o horário de entrada:"))
// let horaSaida = Number(prompt("Informe o horário de saída:"))


// const totalHora = horaSaida - horaEntrada

// function calcularValor() {

// }

// if (totalHora <= 0.15) {
//     console.log("Você ainda está na tolerância!")
// }

// let veiculo = Number(prompt("Informe qual o tipo de veículo: \n\n1 - Moto \n2 - Carro"))


// if (totalHora >= 1 && veiculo === 1) { // moto

//     let calculo = Math.ceil(totalHora - 1)
//     let calculo2 = (calculo * 1.5) + 3

//     console.log(calculo2)

//     calcularValor()


// } else if (totalHora >= 1 && veiculo === 2) { // valor p carro

//     let calculo = Math.ceil(totalHora - 1)
//     let calculo2 = (calculo * 3) + 6

//     console.log(calculo2)

//     calcularValor()
     
// } else if (horaEntrada >= 22 && veiculo === 2) { // carro noturno
    
//     let calculo = Math.ceil(totalHora - 1)
//     let calculo2 = (calculo * 6) + 6

//     console.log(calculo2)

//     calcularValor()
     
// } else if (horaEntrada >= 22 && veiculo === 1) { // moto noturno

//     let calculo = Math.ceil(totalHora - 1)
//     let calculo2 = (calculo * 3) + 3

//     console.log(calculo2)

//     calcularValor()

// }

// // function calcularValornivel1(horas){

// //     const horasCobradas = Math.ceil(horas);
// //     return horasCobradas *6
// // }

// // console.log(calcularValornivel1(1))
// // console.log(calcularValornivel1(1.2))
// // console.log(calcularValornivel1(3))

// // function calcularValornivel2 (horas, tipo){

// //     const precoHora = tipo === "moto" ? 3 : 6;

// //     const horasCobradas = Math.ceil(horas);

// //     return horasCobradas * precoHora
// // }

// // console.log(calcularValornivel1(1, "carro"))


