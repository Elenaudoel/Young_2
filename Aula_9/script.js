const corpo = document.getElementsByTagName('body')
var div = document.getElementById('area')

div.addEventListener(click, clicar)
div.addEventListener(enter, entrar)
div.addEventListener(out, sair)
div.addEventListener(dblclick, duoclick)

function clicar(){
    div.innerText = "clicou!"
    div.style.background = 'green'
}

function entrar(){
    div.innerText = "entrou!"
    div.style.background = 'blue'
}

function sair(){
    div.innerText = 'sair'
    div.style.background  = 'yellow'

}

function duoclick(){
    div.innerText = "duoclick"
    div.style.background = 'purple'
}
