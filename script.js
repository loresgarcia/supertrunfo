var cartaHermione = {
	nome: "Hermione Granger",
  imagem: "https://criticalhits.com.br/wp-content/uploads/2020/10/estas-afirmacoes-hermione-granger-harry-potter-sao-verdadeiras.jpg",
	atributos: {
		ataque: 95,
		defesa: 90,
		magia: 100
	}
}

var cartaHarry = {
	nome: "Harry Potter",
  imagem: "https://files.nsctotal.com.br/s3fs-public/graphql-upload-files/aniversario%20Harry%20Potter_5.jpg?MNG0Vjy_cW1O6YJAFqRd_wizJYhkperu",
	atributos: {
		ataque: 100,
		defesa: 70,
		magia: 90
	}
}

var cartaRony = {
	nome: "Ronald Weasley",
  imagem: "https://pbs.twimg.com/media/B_BRDvOXEAE4bdP.jpg",
	atributos: {
		ataque: 70,
		defesa: 50,
		magia: 70
	}
}

var cartaDraco = {
	nome: "Draco Malfoy",
	imagem: "https://i.pinimg.com/originals/3b/d1/24/3bd12469d0b746df9c75a480ceab5ae6.jpg",
	atributos: {
		ataque: 65,
		defesa: 50,
		magia: 30
	}
}

var cartaGinny = {
	nome: "Ginny Weasley",
	imagem: "https://rollingstone.uol.com.br/media/_versions/gina_wesley_-_reproducao_widelg.jpg",
	atributos: {
		ataque: 70,
		defesa: 70,
		magia: 90
	}
}

var cartaFred = {
	nome: "Fred Weasley",
	imagem: "https://p3-tt.byteimg.com/origin/pgc-image/9322649c450a4909a3eb2ccf5a929352",
	atributos: {
		ataque: 70,
		defesa: 60,
		magia: 75
	}
}

var cartaGeorge = {
	nome: "George Weasley",
	imagem: "https://formatted-decks.s3.amazonaws.com/image/9bf376f0-76a4-405e-9289-5fb3aa2504ba.jpg",
	atributos: {
		ataque: 70,
		defesa: 65,
		magia: 75
	}
}

var cartaDumbledore = {
	nome: "Albus Dumbledore",
	imagem: "https://images.ctfassets.net/usf1vwtuqyxm/6iqz6gF6Zaa84emmKeSIKo/9ba3bafda4c0c74189f4cd0f5ce61e22/AlbusDumbledore_WB_F5_DumbledoreClosingDoors_Promo_080615_Land.jpg",
	atributos: {
		ataque: 100,
		defesa: 100,
		magia: 100
	}
}

var cartaSnape = {
 nome: "Severus Snape",
 imagem: "https://pbs.twimg.com/media/EPVFkBaWsAAyLGN.jpg",
 atributos: {
 ataque: 70,
 defesa: 40, 
 magia: 65
  }
}

var cartaLupin = {
 nome: "Remus Lupin", 
 imagem: "https://static.wikia.nocookie.net/9a112620-58b7-4011-a1de-2325bced8d92", 
 atributos: {
  ataque: 80,
  defesa: 75,
  magia: 90
 }
}


var cartaMaquina
var cartaJogador
var cartas = [cartaHermione, cartaHarry, cartaRony, cartaDraco, cartaGinny, cartaFred, cartaGeorge, cartaDumbledore, cartaSnape, cartaLupin]

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
	var divQuantidadeCartas = document.getElementById('quantidade-cartas')
	var html = "Quantidade de cartas no jogo: " + cartas.length
	
	divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar() {
	var divPlacar = document.getElementById('placar')
	var html = "Você " + pontosJogador + "/" + pontosMaquina + " Oponente"
	
	divPlacar.innerHTML = html
}

function sortearCarta() {
	var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
	cartaMaquina = cartas [numeroCartaMaquina]
  cartas.splice(numeroCartaMaquina, 1)
	
	var numeroCartaJogador = parseInt(Math.random() * cartas.length)
	cartaJogador = cartas[numeroCartaJogador]
  cartas.splice(numeroCartaJogador, 1)
  
	document.getElementById('btnSortear').disabled = true
	document.getElementById('btnJogar').disabled = false
  
  exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById('carta-jogador')
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' checked value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
	var radioAtributo = document.getElementsByName('atributo')
  
	for (var i = 0; i < radioAtributo.length; i++) {
		if (radioAtributo[i].checked) {
			return radioAtributo[i].value
		}
	}
}

function jogar() {
  var divResultado = document.getElementById('resultado')
	var atributoSelecionado = obtemAtributoSelecionado()
	
	if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
		htmlResultado = '<p class="resultado-final">Venceu</p>'
    pontosJogador++
	} else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
		htmlResultado = '<p class="resultado-final">Perdeu</p>'
    pontosMaquina++
	} else {
		htmlResultado = '<p class="resultado-final">Empatou</p>'
	}
  
  if (cartas.length == 0) {
    alert("A batalha chegou ao fim!")
    if (pontosJogador > pontosMaquina) {
      htmlResultado = '<p class="resultado-final">Venceu 🥳</p>'
    } else if (pontosMaquina > pontosJogador) {
      htmlResultado = '<p class="resultado-final">Perdeu 😭</p>'
    } else {
      htmlResultado = '<p class="resultado-final">Empatou 🤗</p>'
    }
  } else {
    document.getElementById('btnProximaRodada').disabled = false
  }
  
  divResultado.innerHTML = htmlResultado
  document.getElementById('btnJogar').disabled = true
  
  atualizaPlacar()
  exibeCartaMaquina()
  atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById('carta-maquina')
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
	var divCartas = document.getElementById('cartas')
	
	divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
	
	document.getElementById('btnSortear').disabled = false
	document.getElementById('btnJogar').disabled = true
	document.getElementById('btnProximaRodada').disabled = true
	
	var divResultado = document.getElementById('resultado')
	divResultado.innerHTML = ""
}