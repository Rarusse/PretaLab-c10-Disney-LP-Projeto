let numeroAleatorio = Math.floor(Math.random() * 100);
let tentativas = 0;

function jogoDeAdivinhacao() {
    const palpiteDigitado = pegarPalpiteDigitado();
            
    if (!palpiteDigitado) {
        alert("Digite um valor válido");
        return;
    }

    if (palpiteDigitado === numeroAleatorio) {
        alert ("Parabéns, você adivinhou!");
    } else if (palpiteDigitado > numeroAleatorio) {
        tentativas++;
        atualizarFeedback ("Esse número é muito alto, tente novamente.");
    } else if (palpiteDigitado < numeroAleatorio)  { 
        tentativas++;
        atualizarFeedback ("Esse número é muito baixo, tente novamente.");
    }

    const novaPontuacao = 100 - (tentativas * 10);
    atualizarPontuacao(novaPontuacao);

    const palpitesFalhos = pegarPalpitesFalhos();
    const novosPalpitesFalhos = palpitesFalhos + " " + palpiteDigitado;
    atualizarPalpitesFalhos(novosPalpitesFalhos);
}

function reiniciarJogo() {
    const vaiReiniciar = confirm("Deseja sair do jogo atual e começar um novo jogo?");

    if(vaiReiniciar === true) {
        atualizarPalpitesFalhos("");
        atualizarPontuacao(100);
        atualizarFeedback("");
        limparPalpiteDigitado();
    }
}

