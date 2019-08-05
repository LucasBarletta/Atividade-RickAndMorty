let imagem = document.querySelector("img");
let botaoIniciar = document.querySelector("#iniciar");
let botaoTeste = document.querySelector("#tentar");
let texto = document.querySelector("h1");
let textoPersonagem = document.querySelector("input");
let pontuacao = document.querySelector("p");
let i = 0;

pesquisarPersonagem = () =>{
    let numero = Math.ceil(Math.random()* 493)
    fetch(`https://rickandmortyapi.com/api/character/${numero}`)
    .then(function(result){
        return result.json()
    })
    .then(function(data){
        criarPersonagem(data);
    })
}


function criarPersonagem(data){
    console.log(data.name);
    imagem.src = data.image;
    if(i < 0){
        pontuacao.innerHTML = "Você Perdeu! Página irá recarregar!"
        botaoIniciar.style.display = "none";
        botaoTeste.style.display = "none";
        location.reload();
        
    }
    function verificarPersonagem(){
        if(textoPersonagem.value != "" && textoPersonagem.value == data.name){
            i++;
            pontuacao.innerHTML = `Pontuação ${i}`;
            setTimeout(pesquisarPersonagem, 1000);
            
        }
        else{
            i--;
            pontuacao.innerHTML = `Pontuação ${i}`;
            setTimeout(pesquisarPersonagem, 1000);
        }
    }
    botaoTeste.onclick = verificarPersonagem;   
}



botaoIniciar.onclick = pesquisarPersonagem;
