const NOME_IMPUT = document.getElementById('nome_input')
const N1_IMPUT = document.getElementById('n1_input')
const N2_IMPUT = document.getElementById('n2_input')
const N3_IMPUT = document.getElementById('n3_input')

const NOME_OUTPUT = document.getElementById('nome')
const MEDIA_OUTPUT = document.getElementById('media')
const STATUS_OUTPUT = document.getElementById('resultado')
const FORMULARIO = document.getElementById('formulario')

FORMULARIO.addEventListener('submit', (e) => {
    e.preventDefault()

    console.log(media())
})

function media() {
    let nome = NOME_IMPUT.value
    let n1 = parseInt(N1_IMPUT.value)
    let n2 = parseInt(N2_IMPUT.value)
    let n3 = parseInt(N3_IMPUT.value)

    localStorage.setItem('nome', nome)
    localStorage.setItem('n1', n1)
    localStorage.setItem('n2', n2)
    localStorage.setItem('n3', n3)

    let resultado = (n1 + n2 + n3)/3
    
    NOME_OUTPUT.innerHTML = localStorage.getItem('nome')
    MEDIA_OUTPUT.innerHTML = resultado
    
    if(resultado >= 7){
    STATUS_OUTPUT.innerHTML = "Aprovado"
    }else if(resultado <= 4){
        STATUS_OUTPUT.innerHTML = 'Reprovado'
    }
    else{
        STATUS_OUTPUT.innerHTML = Recuperação
    }

}

