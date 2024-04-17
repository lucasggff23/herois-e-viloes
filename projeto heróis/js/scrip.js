function carregarHerois(){

    const requisicaoHttp = new XMLHttpRequest()
    requisicaoHttp.open("GET","https://akabab.github.io/superhero-api/api/all.json",false)
    requisicaoHttp.send()
    
    const resposta = JSON.parse(requisicaoHttp.responseText)
    const heroi = resposta

    for( let index = 0 ; index < heroi.length; index ++){
        const herois = heroi[index]
        
        adicionarCardHeroi(herois)
    }
  

    function adicionarCardHeroi(herois){

        const divCardElemento = document.createElement("div")
        divCardElemento.classList.add("card")
    
        const imagemElemento = document.createElement("img")
        imagemElemento.setAttribute("src", herois.images.sm)
        imagemElemento.style.width="90%"
    
        const textoElemento = document.createElement("h1")
        textoElemento.innerHTML = herois.name
    
        
       
        const divElemento = document.getElementById("conteudo-heroi")

        divCardElemento.appendChild(imagemElemento)
        divCardElemento.appendChild(textoElemento)
    
        divElemento.appendChild(divCardElemento)
      
    
    }
    
}
