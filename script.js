// document --> pagina inteira do html
// getElementByID --> procura pelo atributo id = " "
// filme-principal --> id q eu quero

// const elemento = document.getElementById('filme-principal')

// console.log(elemento)
// console.log(elemento.tagName)

function selecionarPorId(){

const tituloFilme = document.getElementById('titulo-filme')

console.log(tituloFilme)
console.log(tituloFilme.tagName) // H3
console.log(tituloFilme.textContent) // o conteudo do H3
console.log(tituloFilme.id) // confirmando o ID


tituloFilme.classList.add('elemento-selecionado') // adicionando uma classe ao elemento

}