document.querySelector('.cancelar').addEventListener('click', () => {
  window.open('index.html', '_self')
})
var Palavranova = document.querySelector('#palavranova')
palavranova.addEventListener('keypress', function (e) {
  var keyCode = e.keyCode ? e.keyCode : e.which

  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault()
  }
})
var Palavranova = document.querySelector('#palavranova')
palavranova.addEventListener('keypress', function (e) {
  if (!checkChar(e)) {
    e.preventDefault()
  }
})
function checkChar(e) {
  var char = String.fromCharCode(e.keyCode)

  console.log(char)
  var pattern = '[a-zA-Z]'
  if (char.match(pattern)) {
    return true
  }
}

function validar() {
  var palavranova = document.formulario.palavranova.value
  var validaPalavranova = false

  if (palavranova == '') {
    document.formulario.palavranova.focus()
    return false
  }

  if (isNaN(palavranova) == true) {
    validaPalavranova = true
  }
  if (validaPalavranova == true) {
    alert('Palavra adicionada com sucesso!')
  }
}
