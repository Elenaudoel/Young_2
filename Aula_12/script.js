const DIAS_EL = document.querySelector('.Dias')
const HORAS_EL = document.querySelector('.Horas')
const MINUTOS_EL = document.querySelector('.Minutos')
const SEGUNDOS_EL = document.querySelector('.Segundos')

const DATA_NIVER = '26 December 2023'

function contagem(){
    const DATA_FORMADA = new Date(DATA_NIVER)
    const DATA_ATUAL = new Date()
    const TOTAL_SEGUNDOS = (DATA_FORMADA - DATA_ATUAL) / 1000             
    
    let dia = Math.floor(TOTAL_SEGUNDOS / 3600 / 24)
    let horas = Math.floor(TOTAL_SEGUNDOS / 3600) % 24
    let minutos = Math.floor(TOTAL_SEGUNDOS / 60) % 60
    let segundos = Math.floor(TOTAL_SEGUNDOS) % 60

    console.log(dia,horas, minutos ,segundos)

    DIAS_EL.innerHTML = dia
    HORAS_EL.innerHTML = horas
    MINUTOS_EL.innerHTML = minutos
    SEGUNDOS_EL.innerHTML = segundos
}

contagem()