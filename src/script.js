let numeroAleatorio = 56;
let tentativas = 0;

function jogoDeAdivinhacao() {
    const palpiteDigitado = pegarPalpiteDigitado();
            
    if (!palpiteDigitado) {
        alert("Digite um valor válido")
        return;
        /*1. Não aceita palpite vazio*/
    }

    if (palpiteDigitado === numeroAleatorio) {
        alert ("Parabéns, você adivinhou!")
        /*2. Dar dicas a cada palpite (maior ou menor)*/
    } else if (palpiteDigitado > numeroAleatorio) {
        tentativas++;
        atualizarFeedback ("Esse número é muito alto, tente novamente.")
    } else if (palpiteDigitado < numeroAleatorio)  { 
        tentativas++;
        atualizarFeedback ("Esse número é muito baixo, tente novamente.")
    }

    const novaPontuacao = 100 - (tentativas - 10);
    atualizarPontuacao(novaPontuacao);
    /* falta adicionar função repetir só até chegar no 0*/


     

    
    /*
    Guiado
    ---
    
    3. Atualizar a pontuação a cada palpite errado
    4. Mostrar todos os palpites errados
    5. Deve-se poder reiniciar o jogo a qualquer momento
    6. Se a pontuação chegar a zero, deve ser exibido um alerta e reiniciado o jogo
    
    Individual
    ---
    7. Só deve aceitar numeros entre 1 e 100
    8. Não deve aceitar palpite repetido
    */


    // to-do
}

function reiniciarJogo() {
    // to-do
}
