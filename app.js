// Este é o nosso projeto de sorteio de Amigo Secreto.
// Vamos começar com a lista dos participantes.
// Embora seja um projeto pessoal, ele estará aberto a modificações e colaborações de terceiros.
// A lista de amigos já começa com os nomes predefinidos que você forneceu.
let amigosParticipantes = [
    'André', 
    'Gabriella', 
    'Dalva', 
    'Marlene', 
    'Antônio', 
    'Dalmacio', 
    'Max', 
    'Raphael', 
    'Kellyta', 
    'Catarina'
];

// Função para adicionar novos amigos à nossa lista.
// Ela pega o nome que o usuário digitou e faz algumas checagens
// antes de colocá-lo na lista.
function amigosAdicionais() {
    // Primeiro, vamos pegar o nome do campo de texto.
    const amigoInput = document.getElementById('amigo');
    const nomeAmigo = amigoInput.value.trim(); // O .trim() é para tirar espaços extras.

    // A primeira validação: se o nome estiver em branco, avisamos o usuário.
    if (nomeAmigo === '') {
        alert('Opa, parece que você esqueceu de digitar um nome! Por favor, insira um.');
        return; // Paramos a função aqui.
    }

    // A segunda validação: checamos se o nome já foi adicionado para evitar repetições.
    if (amigosParticipantes.includes(nomeAmigo)) {
        alert('Este nome já está na lista. Que tal tentar outro?');
        amigoInput.value = '';
        return;
    }

    // Se tudo estiver certo, adicionamos o nome na nossa lista de participantes.
    amigosParticipantes.push(nomeAmigo);
    
    // Agora, chamamos a função para atualizar a lista na tela,
    // para que o usuário veja o nome que acabou de adicionar.
    atualizarListaAmigos();

    // E para finalizar, limpamos o campo de texto para o próximo nome.
    amigoInput.value = '';
}

// Esta função tem um único trabalho: garantir que a lista de amigos
// na tela do site seja a mesma que a nossa lista no código.
// Este bloco de código atende ao seu pedido de uma função para atualizar
// a lista. Ela obtém o elemento, limpa o conteúdo e adiciona os amigos um por um.
function atualizarListaAmigos() {
    // 1. Obter o elemento da lista.
    const listaAmigosElement = document.getElementById('listaAmigos');
    
    // 2. Limpar a lista existente.
    listaAmigosElement.innerHTML = '';
    
    // 3. Percorrer o array e 4. Adicionar elementos à lista.
    amigosParticipantes.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosElement.appendChild(li);
    });
}

// Esta é a função mais importante, onde a mágica acontece.
// Ela pega a lista e faz o sorteio do Amigo Secreto.
function sortearAmigo() {
    // Uma regra importante: precisamos de pelo menos 4 pessoas para o sorteio funcionar bem.
    if (amigosParticipantes.length < 4) {
        alert('Precisamos de pelo menos 4 amigos para fazer um sorteio justo. Por favor, adicione mais nomes!');
        return;
    }

    // Vamos embaralhar a nossa lista de forma aleatória.
    // É isso que garante que o sorteio será justo!
    amigosParticipantes.sort(() => Math.random() - 0.5);

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = ''; // Limpamos qualquer resultado de sorteios anteriores.

    // Agora, criamos os pares. Cada pessoa vai tirar a próxima da lista embaralhada.
    for (let i = 0; i < amigosParticipantes.length; i++) {
        const dador = amigosParticipantes[i];
        const receptor = amigosParticipantes[(i + 1) % amigosParticipantes.length];
        
        // Criamos um parágrafo para exibir o resultado.
        const p = document.createElement('p');
        p.textContent = `${dador} tirou ${receptor}`;
        resultadoElement.appendChild(p);
    }
}