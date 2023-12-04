const textturismo = document.getElementById ("infoturismo")
const buttonjardim = document.getElementById ("jardimbotao")
const buttonarco = document.getElementById ("arcobotao")
const buttonmuseu = document.getElementById ("museubotao")
const buttoncatedral = document.getElementById ("catedralbotao")
const buttonsena = document.getElementById ("senaboato")
const buttontorre = document.getElementById ("torrebotao")
const maps = document.getElementById ("localizacao")
const buttonmaps = document.getElementById ("buttonmaps")

function torre(){
    return textturismo.innerHTML = "UWU", maps.href = "https://www.google.com/maps/dir//Champ+de+Mars,+5+Av.+Anatole+France,+75007+Paris,+França/@48.8583407,2.2120809,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47e66e2964e34e2d:0x8ddca9ee380ef7e0!2m2!1d2.2944813!2d48.8583701?entry=ttu" 
}

function jardim(){
    return textturismo.innerHTML = "C", maps.href = "https://www.google.com/maps/dir//75006+Paris,+França/@48.846585,2.2539305,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47e671db36de687b:0x791dd61b089f98b!2m2!1d2.3363309!2d48.8466144?entry=ttu" 
}

function arco(){
    return textturismo.innerHTML = "A", maps.href = "https://www.google.com/maps/dir//Pl.+Charles+de+Gaulle,+75008+Paris,+França/@48.8737623,2.2126271,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47e66fec70fb1d8f:0xd9b5676e112e643d!2m2!1d2.2950275!2d48.8737917?entry=ttu" 
}

function museu(){
    return textturismo.innerHTML = "P", maps.href = "https://www.google.com/maps/dir//75001+Paris,+França/@48.8605817,2.2552436,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47e671d877937b0f:0xb975fcfa192f84d4!2m2!1d2.337644!2d48.8606111?entry=ttu" 
}

function catedral(){
    return textturismo.innerHTML = "O", maps.href = "https://www.google.com.br/maps/dir//Catedral+de+Notre-Dame+de+Paris,+6+Parvis+Notre-Dame+-+Pl.+Jean-Paul+II,+75004+Paris,+França/@48.8529682,2.3473218,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47e671e19ff53a01:0x36401da7abfa068d!2m2!1d2.3499021!2d48.8529682?entry=ttu" 
}

function sena(){
    return textturismo.innerHTML = "UU",buttonmaps.value = "sena" ,buttonmaps.addEventListener("click",()=>{
        window.open("https://www.google.com/maps/place/Rio+Sena/@48.597768,2.3868971,6z/data=!4m6!3m5!1s0x47edb722f69c5dc7:0x4a812c1e7a4bad61!8m2!3d48.6382687!4d2.4489006!16zL20vMGYzdno?entry=ttu")
    }) 
}

function mapsfuction(){
    if(buttonmaps.value=="")
    alert("Selecione um dos pontos turísticos")
}

buttontorre.addEventListener ('click', torre)
buttonarco.addEventListener ('click', arco)
buttoncatedral.addEventListener ('click', catedral)
buttonjardim.addEventListener ('click', jardim)
buttonmuseu.addEventListener ('click', museu)
buttonsena.addEventListener ('click', sena)
buttonmaps.addEventListener ('click', mapsfuction)

const carousel = document.querySelector(".carousel-container");
const slide = document.querySelector(".carousel-slide");

function handleCarouselMove(positive = true) {
  const slideWidth = slide.clientWidth;
  carousel.scrollLeft = positive ? carousel.scrollLeft + slideWidth : carousel.scrollLeft - slideWidth;
}

