let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function jogoDeAdivinhacao() {
    const palpiteDigitado = pegarPalpiteDigitado();
            
    if (!palpiteDigitado) {
        alert("Digite um valor válido");
        return;
    } else if (palpiteDigitado < 0) {
        alert("O número deve estar entre 0 e 100");
        return;
    } else if (palpiteDigitado > 100) {
        alert("O número deve estar entre 0 e 100");
        return;
    }

    if (palpiteDigitado === numeroAleatorio) {
        alert ("Parabéns, você adivinhou!");
        reiniciarJogo();
        return;
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

    const pontuacaoAtual = pegarPontuacao();
    if (pontuacaoAtual === "Você tem 0 pontos") {
        alert("deu ruim, daqui não passarás!");
        reiniciarJogo();
    }
}

function reiniciarJogo() {
    const vaiReiniciar = confirm("Deseja sair do jogo atual e começar um novo jogo?");

    if(vaiReiniciar === true) {
        numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        tentativas = 0;
        atualizarPalpitesFalhos("");
        atualizarPontuacao(100);
        atualizarFeedback("");
        limparPalpiteDigitado();
    }
}



