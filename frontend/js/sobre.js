// Sobre nós — carrossel de valores
const valores = [
  {
    titulo: "Só fazemos o que resolve problema de verdade",
    texto:
      "Cada coisa nova no site precisa resolver algo real: o frete que não compensa, a caixa de verdura que ia estragar, a prateleira vazia da ONG. Se não resolve, a gente não faz.",
    textoCurto:
      "Cada coisa nova no site precisa resolver algo real: o frete que não compensa, a caixa de verdura que ia estragar, a prateleira vazia da ONG.",
    foto: "assets/valor-1.jpg",
    alt: "Caixas de tomate sendo carregadas na caçamba de uma picape antiga"
  },
  {
    titulo: "Quem precisa mais vem primeiro",
    texto: "O pequeno agricultor e as ONGs vêm na frente nas decisões, até na ordem do catálogo.",
    foto: "assets/valor-2.jpg",
    alt: "Voluntários organizando alimentos doados"
  },
  {
    titulo: "Simples de usar no celular",
    texto: "Botão grande, letra que dá para ler e palavra fácil, para quem tem pouca familiaridade com aplicativo.",
    foto: "assets/valor-3.jpg",
    alt: "Agricultor usando o celular na lavoura"
  },
  {
    titulo: "Todo mundo tem que ganhar",
    texto: "Se um lado sai perdendo, para nós não está certo.",
    foto: "assets/valor-4.jpg",
    alt: "Produtor e comerciante apertando as mãos sobre uma caixa de frutas"
  }
];

const elFoto = document.getElementById("valores-foto");
const elContador = document.getElementById("valores-contador");
const elTitulo = document.getElementById("valores-titulo");
const elTexto = document.getElementById("valores-texto");
const pontos = document.querySelectorAll(".valores-ponto");
const btnAnterior = document.getElementById("valores-anterior");
const btnProximo = document.getElementById("valores-proximo");
const celular = window.matchMedia("(max-width: 767.98px)");

let atual = 0;

valores.forEach((v) => {
  const img = new Image();
  img.src = v.foto;
});

function comScrollFixo(fn) {
  const y = window.scrollY;
  fn();
  requestAnimationFrame(() => {
    window.scrollTo(0, y);
  });
}

function mostrar(indice) {
  atual = (indice + valores.length) % valores.length;
  const v = valores[atual];

  elFoto.src = v.foto;
  elFoto.alt = v.alt;
  elContador.textContent = `Valor ${atual + 1} de ${valores.length}`;
  elTitulo.textContent = v.titulo;
  elTexto.textContent = celular.matches && v.textoCurto ? v.textoCurto : v.texto;

  pontos.forEach((ponto, i) => {
    if (i === atual) ponto.setAttribute("aria-current", "true");
    else ponto.removeAttribute("aria-current");
  });
}

function aoTrocar(indice, alvo) {
  comScrollFixo(() => {
    mostrar(indice);
    if (alvo instanceof HTMLElement) alvo.blur();
  });
}

pontos.forEach((ponto, i) => {
  ponto.addEventListener("click", (e) => {
    e.preventDefault();
    aoTrocar(i, ponto);
  });
});
btnAnterior?.addEventListener("click", (e) => {
  e.preventDefault();
  aoTrocar(atual - 1, btnAnterior);
});
btnProximo?.addEventListener("click", (e) => {
  e.preventDefault();
  aoTrocar(atual + 1, btnProximo);
});
celular.addEventListener("change", () => mostrar(atual));

mostrar(0);

// Ano no rodapé
const ano = document.getElementById("ano");
if (ano) ano.textContent = new Date().getFullYear();
