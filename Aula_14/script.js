const NAME_POKE = document.querySelector('.name_poke')
const NUMBER_POKE = document.querySelector('.num_poke')
const IMG_POKE = document.querySelector('.poke_img')
const FORM = document.querySelector('.forms')
const INPUT = document.querySelector('.input_search')
const PRESV_BTN = document.querySelector('.pre_btn')
const NEXT_BTN = document.querySelector('.next_btn')

let id_pokemon = 1 

const buscar_pokemon = async (pokemon) =>{
    resposta  = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if (resposta.status === 200){
        const info = resposta.json()
        return info
    }
}
const mostrar_pokemon = async (pokemon) =>{
    const json_pokemon = await buscar_pokemon(pokemon)
    if(json_pokemon){
        IMG_POKE.scr = json_pokemon['spites']['versions']['geration-v']['black-white']['animated']['front_default']
    }
}

buscar_pokemon('pikachu')
