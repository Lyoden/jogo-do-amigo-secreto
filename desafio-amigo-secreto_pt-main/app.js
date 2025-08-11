let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    input.value = "";

    exibirAmigos();
}

function exibirAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa para que não duplique

    amigos.forEach((amigo) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    // Verifica se o array não está vazio
    if (amigos.length === 0) {
        document.getElementById("resultado").innerHTML = "<li>Nenhum amigo disponível para sortear.</li>";
        return;
    }

    // Gera um índice aleatório 
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // seleciona o amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostra os resultados
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // limpa o ultimo resultado
    const item = document.createElement("li");
    item.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultado.appendChild(item);
}
