const textturismo = document.getElementById ("infoturismo")
const buttonmaps = document.getElementById ("buttonmaps")

const botoes = document.querySelectorAll(".turismo button");

const locais = {
    torre:{
        value: "Torre Eiffel",
        texto: "Torre Eiffel",
        link: "https://www.google.com/maps/dir//Champ+de+Mars,+5+Av.+Anatole+France,+75007+Paris,+França/@48.8583407,2.2120809,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47e66e2964e34e2d:0x8ddca9ee380ef7e0!2m2!1d2.2944813!2d48.8583701?entry=ttu",
    },
    jardim:{
        value: "Jardim de Luxemburgo",
        texto: "Jardim de Luxemburgo",
        link: "https://www.google.com/maps/dir//75006+Paris,+França/@48.846585,2.2539305,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47e671db36de687b:0x791dd61b089f98b!2m2!1d2.3363309!2d48.8466144?entry=ttu",
    },
    arco:{
        value: "Arco do Triunfo",
        texto: "Arco do Triunfo",
        link: "https://www.google.com/maps/dir//Pl.+Charles+de1+Gaulle,+75008+Paris,+França/@48.8737623,2.2126271,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47e66fec70fb1d8f:0xd9b5676e112e643d!2m2!1d2.2950275!2d48.8737917?entry=ttu",
    },
    museu:{
        value: "Museu do Louvre",
        texto: "Museu do Louvre",
        link: "https://www.google.com/maps/dir//75001+Paris,+França/@48.8605817,2.2552436,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47e671d877937b0f:0xb975fcfa192f84d4!2m2!1d2.337644!2d48.8606111?entry=ttu" 
    },
    catedral:{
        value: "Catedral de Notre-Dame",
        texto: "Catedral de Notre-Dame",
        link: "https://www.google.com.br/maps/dir//Catedral+de+Notre-Dame+de+Paris,+6+Parvis+Notre-Dame+-+Pl.+Jean-Paul+II,+75004+Paris,+França/@48.8529682,2.3473218,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47e671e19ff53a01:0x36401da7abfa068d!2m2!1d2.3499021!2d48.8529682?entry=ttu" 
    },
    sena:{
        value: "Sena",
        texto: "Rio Sena",
        link: "https://www.google.com/maps/place/Rio+Sena/@48.597768,2.3868971,6z/data=!4m6!3m5!1s0x47edb722f69c5dc7:0x4a812c1e7a4bad61!8m2!3d48.6382687!4d2.4489006!16zL20vMGYzdno?entry=ttu"
    }
}

function setarLocal(objeto){
    return textturismo.innerHTML = `Local Selecionado: <strong>${objeto.texto}</strong>`,buttonmaps.value = objeto.value ,buttonmaps.addEventListener("click",()=>{
        window.open(objeto.link)
    }) }

function mapsfuction(){
    if(buttonmaps.value=="")
    alert("Selecione um dos pontos turísticos")
}

botoes.forEach(botao =>{
    botao.addEventListener("click",()=>{
        setarLocal(locais[botao.value])
    })
})
buttonmaps.addEventListener ('click', mapsfuction)

//carrousel
const carousel = document.querySelector(".carousel-container");
const slide = document.querySelector(".carousel-slide");

function handleCarouselMove(positive = true) {
  const slideWidth = slide.clientWidth;
  carousel.scrollLeft = positive ? carousel.scrollLeft + slideWidth : carousel.scrollLeft - slideWidth;
}

// blur
let imagensCarrousel = document.querySelectorAll(".carousel-slide img");
let body = document.querySelector("body");

function mostrarConteudo(){
    console.log(this.value)
    let blur = document.createElement('div');
    let content = document.createElement("div");

    blur.classList.add('blur');
    content.classList.add("popup");

    content.innerHTML=`
        <img src=${this.src} style="width:100%;aspect-ratio:3/2;"></img>
        <h3>${this.alt}</h3>
        <p>${this.part}</p>
        <button class="lermais" onclick="fecharPopup()">Fechar</button>
    ` ;

    body.appendChild(blur)
    blur.appendChild(content)
}

function fecharPopup(){
    document.querySelector('.blur').remove()
}


window.addEventListener("keyup",function(e){
    console.log(e.key)
    if (e.key == "Escape") fecharPopup();
})
imagensCarrousel.forEach(img=>{
    img.addEventListener('click',mostrarConteudo) 
})