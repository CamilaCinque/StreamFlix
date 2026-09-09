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

function mudarPoster() {

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

function lerInput() {

    const input = document.getElementById('input-busca').value.trim()

    if (input === ' ') {
        alert(" digite algo no campo! ")
        return;
    }

    const titulo = document.getElementById('titulo-destaque')

    titulo.textContent = input
    titulo.classList.add('texto-animado')
}

// function lerInput(){

//      const input =  document.getElementById('input-busca').value.trim()


//      if(input === ''){
//            alert(" ⚠️ Digite algo no campo! ")
//            return; //para processo processo da funcao.
//      }

//     const titulo = document.getElementById('titulo-destaque')

//     titulo.textContent = input

//     titulo.classList.add('texto-animado')


// }

function adicionarFilme() {

    // .trim - elimina os espaços | .value pega o valor q foi digitado
    const input = document.getElementById('input-filme').value.trim()

    if (input == ' ') {
        alert = ('digite o nome de um filme!')

        return; // interrompe a função
    }

    const li = document.createElement('li')
    const span = document.createElement('span')

    span.textContent = input // input é a variavel q guarda o nome do filme

    const btnRemover = document.createElement('button') // criando o botao de remover
    btnRemover.textContent = 'remover' // o conteudo q estara dentro dele

    li.appendChild(span)
    li.appendChild(btnRemover)

    const lista = document.getElementById('minha-lista')
    lista.appendChild(li)

    // botão remover!:

    btnRemover.onclick = function () {
        this.parentElement.remove()

    }

    document.getElementById('input-filme').value = ' ' // p limpar a barra de adicionar a lista

}

// addEventListener - escuta os eventos da página

document.addEventListener('DOMContentLoaded', function () { // ele fica ouvindo o site ser carregado

    const cardFavorito = document.getElementById('card-favorito')
    const statusFavorito = document.getElementById('status-favorito')

    // escutar o evento clique da div (cardFavorito)

    cardFavorito.addEventListener('click', function () { // click - vai ouvir ate q o usuario clique no botap, dai ele faz a ação
        statusFavorito.textContent = '💖 FAVORITADO!' // q nesse caso é escrever favoritado!!!

    })

    const cardDetalhes = document.getElementById('card-detalhes')
    const statusDetalhes = document.getElementById('status-detalhes')

    cardDetalhes.addEventListener('dblclick', function () {
        statusDetalhes.textContent = 'Carregando...'
        statusDetalhes.style.color = "#ffe600"

        setTimeout(() => {
            statusDetalhes.textContent = 'Detalhes carregados!'
            statusDetalhes.style.color = '#3fb950'
        }, 1000); // 1seg
    })

    const inputFiltro = document.getElementById("input-filtro")
    if (inputFiltro){
        inputFiltro.addEventListener("input",function(){
            filtrarFilmes(this.value)
        })
    }

})








const todosFilmes = [
    {
        nome: 'Stranger Things',
        tipo: 'Série',
        img: 'https://image.tmdb.org/t/p/w500/twfKp60THrcOIep9sjHODOOfO8d.jpg'
    },
    {
        nome: 'Breaking Bad',
        tipo: 'Série',
        img: 'https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg'
    },
    {
        nome: 'The Witcher',
        tipo: 'Série',
        img: 'https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg'
    },
    {
        nome: 'La Casa de Papel',
        tipo: 'Série',
        img: 'https://image.tmdb.org/t/p/w500/MoEKaPFHABtA1xKoOteirGaHl1.jpg'
    },
    {
        nome: 'Round 6',
        tipo: 'Série',
        img: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg'
    },
    {
        nome: 'Peaky Blinders',
        tipo: 'Série',
        img: 'https://image.tmdb.org/t/p/w500/i0uajcHH9yogXMfDHpOXexIukG9.jpg'
    },
    {
        nome: 'Wednesday',
        tipo: 'Série',
        img: 'https://image.tmdb.org/t/p/w500/qZtAf4Z1lazGQoYVXiHOrvLr5lI.jpg'
    },
    {
        nome: 'The Last of Us',
        tipo: 'Série',
        img: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg'
    },
    {
        nome: 'Oppenheimer',
        tipo: 'Filme',
        img: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg'
    },
    {
        nome: 'Barbie',
        tipo: 'Filme',
        img: 'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg'
    },
    {
        nome: 'Duna',
        tipo: 'Filme',
        img: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg'
    },
    {
        nome: 'Coringa',
        tipo: 'Filme',
        img: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg'
    },
    {
        nome: 'A Origem',
        tipo: 'Filme',
        img: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg'
    },
    {
        nome: 'Interestelar',
        tipo: 'Filme',
        img: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'
    },
    {
        nome: 'Parasita',
        tipo: 'Filme',
        img: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg'
    },
    {
        nome: 'Vingadores: Ultimato',
        tipo: 'Filme',
        img: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg'
    }
];

function inicializarGaleria(){

    const galeria = document.getElementById("galeria-filmes")

    todosFilmes.forEach( function(filme){

        const card = document.createElement("div")
        card.className = "card-galeria"
        card.dataset.name  = filme.nome

        card.innerHTML = `
                            <img
                                src="${filme.img}"
                                alt="${filme.nome}"
                                onerror="this.style.background='#2a2a2a'"
                            >
                            <div class="card-nome">
                                ${filme.nome}
                            </div>
                            <div class="card-tipo">
                                ${filme.tipo}
                            </div>
               `; 

               galeria.appendChild(card)
    })
    }

inicializarGaleria()


function filtrarFilmes (termoBusca){

    const termo = termoBusca.toLowerCase().trim()
    const cards = document.querySelectorAll(".card-galeria")
    let visiveis = 0

    cards.forEach( function(card){

        const nomeDoFilme = card.dataset.name.toLowerCase()
        const combina = termo === ""  || nomeDoFilme.includes(termo);

         if(combina){

            card.classList.remove("oculto")
            visiveis++
            
         }else{
            card.classList.add("oculto")

         }

         const semResultado = document.getElementById("sem-resultado")
         if(semResultado){

            semResultado.style.display = visiveis === 0 ? "block" : "none"
         }
    }
    )
}