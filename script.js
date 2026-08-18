const botoesFiltro = document.querySelectorAll(".filtro");
const personagens = document.querySelectorAll(".personagem");

const modal = document.getElementById("modal");
const imagemModal = document.getElementById("imagemModal");
const fechar = document.getElementById("fechar");
const anterior = document.getElementById("anterior");
const proxima = document.getElementById("proxima");
const contador = document.getElementById("contador");

let imagensVisiveis = [];
let indiceAtual = 0;

// Filtro.
botoesFiltro.forEach((botao) => {
    botao.addEventListener("click", () => {
        botoesFiltro.forEach((item) => item.classList.remove("ativo"));
        botao.classList.add("ativo");

        const filtro = botao.dataset.personagem;

        personagens.forEach((personagem) => {
            const deveMostrar =
                filtro === "todos" ||
                personagem.dataset.personagem === filtro;

            personagem.classList.toggle("oculto", !deveMostrar);
        });
    });
});

// Abre a imagem selecionada em uma janela.
document.querySelectorAll(".imagem-galeria").forEach((imagem) => {
    imagem.addEventListener("click", () => {
        const grupo = imagem.closest(".personagem");
        imagensVisiveis = [...grupo.querySelectorAll(".imagem-galeria")];
        indiceAtual = imagensVisiveis.indexOf(imagem);
        abrirModal();
    });
});

function abrirModal() {
    imagemModal.src = imagensVisiveis[indiceAtual].src;
    imagemModal.alt = imagensVisiveis[indiceAtual].alt;
    contador.textContent = `${indiceAtual + 1} / ${imagensVisiveis.length}`;
    modal.classList.add("aberto");
    modal.setAttribute("aria-hidden", "false");
}

function fecharModal() {
    modal.classList.remove("aberto");
    modal.setAttribute("aria-hidden", "true");
}

function mostrarAnterior() {
    indiceAtual =
        (indiceAtual - 1 + imagensVisiveis.length) %
        imagensVisiveis.length;
    abrirModal();
}

function mostrarProxima() {
    indiceAtual =
        (indiceAtual + 1) % imagensVisiveis.length;
    abrirModal();
}

fechar.addEventListener("click", fecharModal);
anterior.addEventListener("click", mostrarAnterior);
proxima.addEventListener("click", mostrarProxima);

// Permite navegar pelo teclado.
document.addEventListener("keydown", (event) => {
    if (!modal.classList.contains("aberto")) return;

    if (event.key === "Escape") fecharModal();
    if (event.key === "ArrowLeft") mostrarAnterior();
    if (event.key === "ArrowRight") mostrarProxima();
});

// Fecha o modal.
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        fecharModal();
    }
});
