let data = new Date()
//let hora = data.getHours()//hora exatado dia
let hora = window.prompt('que horas são???')

let msg = document.getElementById('msg')
let img = document.getElementById('foto')
let corpo = document.getElementsByTagName('body')

let manha = 'https://images.ecycle.com.br/wp-content/uploads/2022/10/07112402/oc-gonzalez-xg8z_KhSorQ-unsplash-scaled.jpg.webp'
let tarde = 'https://static.vecteezy.com/system/resources/previews/002/030/159/non_2x/sunset-on-the-tropical-beach-free-photo.jpg'
let noite = 'https://i.pinimg.com/736x/4e/36/5e/4e365e3d21f8b3ea48614a1272341bd3.jpg'


msg.innerHTML = `Agora são exatamente ${hora} horas.`

if (hora >= 4 && hora < 12)
{
   corpo[0].style.background = '#ef9e2d'
   img.src = manha 
}
else if (hora <= 18){
    corpo[0].style.background = '#ee5412'
    img.src = tarde
}
else{
    corpo[0].style.background = '#002a36'
    img.src = noite
}