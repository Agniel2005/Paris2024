let btn_revelar = document.querySelectorAll(".lermais")
let body = document.querySelector("body");

function mostrarConteudo(){
    let blur = document.createElement('div');
    let content = document.createElement("div");

    blur.classList.add('blur');
    content.classList.add("popup");

    content.innerHTML=`
        <h3>${this.parentElement.querySelector('h3').textContent}</h3>
        <p>${this.parentElement.querySelector('p').textContent}</p>
        <button class="lermais" onclick="fecharPopup()">Fechar</button>
    ` ;

    body.appendChild(blur)
    blur.appendChild(content)
}
function fecharPopup(){
    document.querySelector('.blur').remove()
}
btn_revelar.forEach(btn => btn.addEventListener("click",mostrarConteudo))
window.addEventListener("keyup",function(e){
    console.log(e.key)
    if (e.key == "Escape") fecharPopup();
})