const divLinhas = document.getElementById('div-linhas')
const btnInicio = document.getElementById('iniciar-jogo')
const btnAdicionar = document.getElementById('adicionarpalavra')
const btnVoltar = document.getElementById('voltar')
const canvas = document.querySelector('canvas')
const heightRatio = 1.14
canvas.height = canvas.width * heightRatio
const pincel = canvas.getContext('2d')
const teclado = document.getElementsByClassName('btn-letras')
const letrasIncorretasBoard = document.getElementById('letras-incorretas')
const mensagemFinal = document.getElementById('mensagem-final')
const palavraCorretaChances = document.getElementById('palavra-correta-chances')

let palavras = [
  'alface',
  'banana',
  'laranja',
  'sol',
  'lua',
  'gato',
  'cachorro',
  'garrafa',
  'uva',
  'chuva',
  'carro',
  'bicicleta',
  'osso',
  'pular',
  'correr',
  'viajar',
  'passageiro',
  'formiga',
  'patinete',
  'batata',
  'estrada',
  'quadro',
  'paisagem',
  'feliz',
  'amor',
  'montanha',
  'oceano',
  'melancia',
  'pensamento',
  'bebida',
  'restaurante',
  'lagoa',
  'aranha',
  'praia',
  'margarida',
  'rosa',
  'vermelho',
  'cebola',
  'arroz',
  'doce',
  'chocolate',
  'festa',
  'nuvem',
  'bala',
  'parede',
  'blusa',
  'cabelo',
  'chuchu',
  'churrasco',
  'estudar'
]

let chances = 6
let letrasIncorretas = []
let posicoes = []
let posicaoLetra

let palavra = {
  palavraSorteada: '',
  letras: '',
  linhas: ''
}

btnInicio.addEventListener('click', startGame)
document.getElementById('restart').addEventListener('click', function () {
  document.getElementById('overlay').style.display = 'none'
  startGame()
})

function startGame() {
  //zerar
  pincel.clearRect(0, 0, canvas.width, canvas.height)
  letrasIncorretasBoard.classList.remove('letras-incorretas')
  abreTabuleiro()

  for (let i = 0; i < teclado.length; i++) {
    teclado[i].classList.remove('btn-selected')
  }

  chances = 6
  letrasIncorretas = []
  posicoes = []
  letrasIncorretasBoard.innerText = ' '

  //sorteio da palavra, separação das letras e criação das linhas
  gerarPalavra(palavra)
  gerarLinhas()

  //captar valor do teclado e comparar letra
  for (i = 0; i < teclado.length; i++) {
    teclado[i].addEventListener('click', compararLetra)
  }
}

function gerarLinhas() {
  return (divLinhas.innerHTML = `<span class="linhas"> ${palavra.linhas.join(
    '  '
  )}</span>`)
}

function compararLetra(e) {
  letraEscolhida = e.currentTarget.value
  if (e.currentTarget.classList.contains('btn-selected')) {
    return
  } else {
    e.currentTarget.classList.add('btn-selected')
    posicaoLetra = palavra.letras.indexOf(letraEscolhida)
    if (posicaoLetra < 0) {
      //incorreto
      chances--
      desenhar()
      letrasIncorretas.push(letraEscolhida)
      letrasIncorretasBoard.classList.add('letras-incorretas')
      letrasIncorretasBoard.innerText = `Letras incorretas: ${letrasIncorretas.join(
        ', '
      )}`
    } else {
      //correto
      do {
        palavra.linhas.splice(posicaoLetra, 1, letraEscolhida)
        gerarLinhas()
        posicoes.push(posicaoLetra)
        posicaoLetra = palavra.letras.indexOf(letraEscolhida, posicaoLetra + 1)
      } while (posicaoLetra !== -1)

      if (palavra.letras.length === posicoes.length) {
        setTimeout(ganhou, 300)
      }
    }
  }
}

function abreTabuleiro() {
  document.getElementById('tabuleiro').style.display = 'flex'
  document.getElementById('titulo').style.display = 'none'
  btnInicio.style.display = 'none'
  btnAdicionar.style.display = 'none'
  stick.style.display = 'none'

  desenhaForca()
}

function desenhar() {
  switch (chances) {
    case 5:
      desenhaCabeca()
      break
    case 4:
      desenhaTronco()
      break
    case 3:
      desenhaBracoDireito()
      break
    case 2:
      desenhaBracoEsquerdo()
      break
    case 1:
      desenhaPernaDireita()
      break
    case 0:
      desenhaPernaEsquerda()
      setTimeout(perdeu, 300)
      break
  }
}

function perdeu() {
  document.getElementById('overlay').style.display = 'block'
  mensagemFinal.textContent = 'Você perdeu!'
  palavraCorretaChances.textContent = `A palavra correta era: ${palavra.palavraSorteada}.`
}

function ganhou() {
  document.getElementById('overlay').style.display = 'block'
  mensagemFinal.textContent = 'Você acertou! 🥳 Parabéns!'
}

function gerarPalavra(obj) {
  let palavraSorteada = palavras[Math.floor(Math.random() * palavras.length)]
  let letras = palavraSorteada.split('')
  let linhas = new Array(letras.length).fill('_')

  obj.palavraSorteada = palavraSorteada
  obj.letras = letras
  obj.linhas = linhas
}

document.querySelector('.voltarfinal').addEventListener('click', () => {
  window.open('index.html', '_self')
})
