function desenhaCabeca() {
  pincel.fillStyle = 'black'
  pincel.beginPath()
  pincel.arc(150, 55, 20, 0, 2 * Math.PI)
  pincel.stroke()
}

function desenhaTronco() {
  pincel.fillStyle = 'black'
  pincel.fillRect(149, 75, 2, 100)
}

function desenhaBracoDireito() {
  pincel.fillStyle = 'black'
  pincel.beginPath()
  pincel.moveTo(151, 90)
  pincel.lineTo(181, 120)
  pincel.closePath()
  pincel.stroke()
}

function desenhaBracoEsquerdo() {
  pincel.fillStyle = 'black'
  pincel.beginPath()
  pincel.moveTo(149, 90)
  pincel.lineTo(119, 120)
  pincel.closePath()
  pincel.stroke()
}

function desenhaPernaDireita() {
  pincel.fillStyle = 'black'
  pincel.beginPath()
  pincel.moveTo(151, 175)
  pincel.lineTo(181, 205)
  pincel.closePath()
  pincel.stroke()
}

function desenhaPernaEsquerda() {
  pincel.fillStyle = 'black'
  pincel.beginPath()
  pincel.moveTo(149, 175)
  pincel.lineTo(119, 205)
  pincel.closePath()
  pincel.stroke()
}

function desenhaForca() {
  pincel.fillStyle = 'black'
  pincel.fillRect(0, 0, 3, 240)

  pincel.fillStyle = 'black'
  pincel.fillRect(0, 0, 151, 3)

  pincel.fillStyle = 'black'
  pincel.fillRect(147.5, 3, 3, 32)
}
