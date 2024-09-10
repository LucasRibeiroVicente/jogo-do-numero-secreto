//let titulo = document.querySelector('h1'); //document.querySelector é basicamente "vai la naquele documento no texto de html, na linha de código que apresenta especificamente o h1 (h1 = titulo) e selecione ele para realizar uma alteração." e altere, a alteração está logo na linha debaixo. querySelector escrito dessa forma com o S maiusculo por conta dele ser um (case sensitive) que é nada mais uma forma de diferenciar uma letra maiuscula de minuscula."
//titulo.innerHTML = 'Jogo do número secreto'; //aqui colocamos um texto dentro do h1 do documento index (html), lembrar de usar aspas para diferenciar texto de numeros, o innerHTML serve como uma forma de leitura (dentro do html) ou seja, a alteração foi feita no h1 do documento index (html) que apresenta ligação entre esse JS com o HTML.

//let paragrafo = document.querySelector('p'); 
//paragrafo.innerHTML = 'Escolha um número entre 1 a 10';

// function verificarChute() {
// console.log('o botão foi clicado!')}

//function (função) é um trecho de código que apresenta uma determinada função, em outras palavras... responsavel por uma determinada ação.

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio(); 
let tentativas = 1; 

 function exibirNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; //Em formato de leitura está acontecendo o seguinte... função inserir dentro da tag um texto, exemplo: <h1> texto inserido </h1>. No lugar da tag você ira substituir por alguma outra tag presente no index (h1, p, etc...) e ira inserir textos dentro dessa tag, em outras palavras a function tem a mesma funcionalidade porém o trabalho de escrever os códigos é reduzido.
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2})
 }

 function exibirMensagemInicial() {
 exibirNaTela('h1', 'Jogo do número secreto');
 exibirNaTela('p', 'Escolha um número entre 1 a 10');
 }

 exibirMensagemInicial();


 function verificarChute() {
   let chute = document.querySelector('input').value; //input (entrada de dados) .value (valor dado pelo usuario)
   if (chute == numeroSecreto) {
    exibirNaTela('h1', 'Sucesso!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; //palavraTentativa = Tentativas, ou seja.. vai identificar que se for acerto em 1 tentativa = tentativa, se acertar em mais que uma tentativa = tentativas
    let mensagemTentavivas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;//criado a variavel mensagem tentativas para armazenar os valores das variaveis tentativas e palavraTentativa.
    exibirNaTela('p', mensagemTentavivas);
    document.getElementById('reiniciar').removeAttribute('disabled'); //getElementById serve para trazer o elemento do html porém, o elemento está como Id (identificador único) em vez de usar document.querySelector, neste caso deve ser usado para selecionar um id unico o getElementById. removeAttribute() serve para remover um determinado atributo, dentro dos parenteses deve selecionar qual atributo deseja remover.
} else { if(chute > numeroSecreto) {
    exibirNaTela('p', 'número secreto é menor!');
    } else {
      exibirNaTela('p', 'o numero secreto é maior!');
      }
      tentativas++;
      limparCampo();
    }
  }

 function gerarNumeroAleatorio() {
  let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }
  if(listaDeNumerosSorteados.includes(numeroEscolhido)) {//.includes verifica se o elemento está na lista, se tiver é verdadeiro ai é tomado uma decisão, se for falso... toma outra decisão.
    return gerarNumeroAleatorio(); //aqui ele vai pedir que um novo numero seja gerado caso o numero já esteja na lista.
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido); //push adiciona o item ao final da lista
    return numeroEscolhido;
  }  
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = ''; //está função serve após a entrada de dados, limpar o campo do input
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  exibirMensagemInicial();
  tentativas = 1;
  document.getElementById('reiniciar').setAttribute('disabled', true);
}
