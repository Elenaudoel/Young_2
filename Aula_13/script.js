const QUESTOES_QUIZ = [
    {
        questao: 'Melhor professor?',
        a:'Daniel',
        b:'Rodrigo',
        c:'Diego',
        d:'Arthur',
        correta:'c'
    },
    {
        questao: 'Usado para estilizar a pagina',
        a:'CSS',
        b:'JAVA',
        c:'JS',
        d:'HTML',
        correta:'a'
    },
    {
        questao: 'Qual a moeda da Ctrlplay',
        a:'Euro',
        b:'Real',
        c:'Ctrlcash',
        d:'Dolar',
        correta:'c'
    },
    {
        questao: 'O que o professor Diego toma em sua caneca',
        a:'Agua',
        b:'Lagrimas de alunos',
        c:'Capuccino',
        d:'Café',
        correta:'d'
    },
    {
        questao: 'Qual a logo da Ctrlplay',
        a:'Computador',
        b:'Foguete',
        c:'Controle de jogo',
        d:'Um robo',
        correta:'b'
    },
]

const TITULO_QUIZ = document.querySelector('.titulo-questao')
const ALTERNATIVA_A = document.getElementById('texto-a')
const ALTERNATIVA_B = document.getElementById('texto-b')
const ALTERNATIVA_C = document.getElementById('texto-c')
const ALTERNATIVA_D = document.getElementById('texto-d')
const BOTAO =  document.getElementById('enviar')
const RESPOSTAS = document.querySelectorAll('.resposta')
const CONTEINER_QUIZ = document.querySelector('.conteiner-quiz')

let questao_atual = 0 
let qtd_corretas = 0

function carregar_questoes(){
    const QUESTAO = QUESTOES_QUIZ[questao_atual]
    TITULO_QUIZ.innerHTML = QUESTAO.questao
    ALTERNATIVA_A.innerHTML = QUESTAO.a
    ALTERNATIVA_B.innerHTML = QUESTAO.b
    ALTERNATIVA_C.innerHTML = QUESTAO.c
    ALTERNATIVA_D.innerHTML = QUESTAO.d
}
carregar_questoes()