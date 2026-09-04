// document --> pagina inteira do html
// getElementByID --> procura pelo atributo id = " "
// filme-principal --> id q eu quero

// const elemento = document.getElementById('filme-principal')

// console.log(elemento)
// console.log(elemento.tagName)

function selecionarPorId() {

    const tituloFilme = document.getElementById('titulo-filme')

    console.log(tituloFilme)
    console.log(tituloFilme.tagName) // H3
    console.log(tituloFilme.textContent) // o conteudo do H3
    console.log(tituloFilme.id) // confirmando o ID


    tituloFilme.classList.add('elemento-selecionado') // adicionando uma classe ao elemento

}

function selecionarPorClasse() {

    const elementos = document.getElementsByClassName('.genero-acao')

    console.log("quantidade: " + elementos.length) // quantidade de elementos encontrados

    for (let i = 0; i < elementos.length; i++) {

        console.log(elementos[i].textContent.trim()) // trim - remove os espacos

        elementos[i].classList.add('elemento-selecionado')

    }
}

// queryselector -> retorna o primeiro elemento encontrado

function selecionarPorQuery() {

    const elemento = document.querySelector('.filme-mini') // se for classe tem que por ponto

    console.log(elemento)

    elemento.classList.add('elemento-selecionado')

}

// queryselector all -> retorna todos os encontrados

function selecionarTodos() {

    const selecionado = document.querySelectorAll('.filme-mini')

    // => arrow function
    // el - elemento atual | indice = posicao (0, 1, 2...)

    selecionado.forEach((el, indice) => {

        console.log(indice, el.textContent.trim())
        el.classList.add('elemento-selecionado')
    }
    )
}

function mudarTexto() {

    // seleciona o elemento que vai ser modificado

    const titulo = document.getElementById('titulo-destaque')

    titulo.textContent = document.getElementById('input-busca').value

    console.log('novo teste', titulo.textContent)

}

function adicionarBadge() {

    // create element 'span' = criar o elemento
    const badge = document.createElement('span')

    badge.className = 'badge'
    badge.textContent = '⭐ Em Alta'

    // procura um elemento do HTML pelo ID
    const container = document.getElementById('badge-container')

    // remove tudo oq estiver dentro do container
    container.innerHTML = ' '

    // adiciona um elemento filho dentro do outro elemento
    container.appendChild(badge)
}

function mudarPoster(){

    const poster = document.getElementById('poster-destaque')
    const titulo = document.getElementById('titulo-destaque')

    const opcoes = [

        {
            url: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
            nome: 'The Last of Us'
        },
        {
            url: 'https://image.tmdb.org/t/p/w500/qZtAf4Z1lazGQoYVXiHOrvLr5lI.jpg',
            nome: 'Wednesday'
        },
        {
            url: 'https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg',
            nome: 'Breaking Bad'
        },
        {
            url: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
            nome: 'Round 6'
        },
        {
            url: 'https://image.tmdb.org/t/p/w500/twfKp60THrcOIep9sjHODOOfO8d.jpg',
            nome: 'Stranger Things'
        }
    ];

    const sorteado = opcoes[Math.floor(Math.random() * opcoes.length)];

    poster.src = sorteado.url
    poster.alt = sorteado.nome
    titulo.textContent = sorteado.nome

    console.log("poster trocado para: " + sorteado.nome)

    poster.style.opacity = '0'
    poster.style.transition = 'opacity 0.3s';

    // funcao anonima

    setTimeout(() => {

        poster.style.opacity = '1';
        poster.classList.add('poster-fade-in')

        //  remover uma classe apos 600ms

        setTimeout(() => poster.classList.remove('poster-fade-in'), 600)

    }, 300 // 300ms | 3000 = 3 seg
)
}

function lerInput(){
    
    const input = document.getElementById('input-busca').value.trim()

    if(input === ' '){
        alert(" digite algo no campo! ")
        return;
    }

const titulo = document.getElementById('titulo-destaque')

titulo.textContent = input
titulo.classList.add('texto-animado')
}