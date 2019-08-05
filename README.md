# Jogo Rick e Morty QUIZZ

## Como jogar.

- Aperte botão iniciar.
- Escreva o nome do personagem.
- Aperte o botão tentar.

### Ferramentas utilizadas

- Utilizamos em `Javascript` a função `Callback`, `FUNCTION`, `IF` e `ELSE`.
- Em `CSS` somente propriedades simples.
- Em `HTML` usamos `ID`.
---
*Ex: Função Verificar Personagem*
~~~
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
~~~ 

### Membros do grupo

- Jessica Franco
- Karen Queiroz
- Lucas Miguel
- Pedro Furlan

- Link API [Clique Aqui](https://rickandmortyapi.com/api/)

- Quer Jogar [Clique Aqui](https://lucasbarletta.github.io/Atividade-RickAndMorty/)
