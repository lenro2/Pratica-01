function mataremoji() {
    const emoji = document.getElementById("emoji");
    emoji.src="imagens/EmojiMorto.png";
    const coracao = document.getElementById("coracao");
    coracao.classList.remove("inv");
    coracao.classList.add("img");
    const coracao2 = document.getElementById("coracao2");
    coracao2.classList.remove("inv");
    coracao2.classList.add("img");
}

function salvar() {
    emoji.src="imagens/EmojiJoinha.png";
    coracao.classList.remove("img");
    coracao.classList.add("inv");
    coracao2.classList.remove("img");
    coracao2.classList.add("inv");
}