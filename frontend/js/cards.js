export function criarCard(produto) {
  const doacao = produto.tipo === 'doacao';

  const selo = doacao
    ? '<span class="lote-selo lote-selo-doacao">DOAÇÃO R$ 0,00</span>'
    : '<span class="lote-selo">VENDA B2B</span>';

  const unidade = produto.unidade
    ? '<span class="lote-unidade">' + produto.unidade + '</span>'
    : '';

  const preco = doacao
    ? '<p class="lote-preco lote-preco-doacao">' + produto.preco + '</p>'
    : '<p class="lote-preco">' + produto.preco + unidade + '</p>';

  const prazo = produto.urgente ? 'lote-prazo lote-prazo-curto' : 'lote-prazo';

  return `
    <article class="lote">
      <div class="lote-foto">
        <img src="${produto.foto}" alt="${produto.alt}" loading="lazy">
        ${selo}
      </div>
      <div class="lote-corpo">
        <h3>${produto.nome}</h3>
        <p class="lote-local">${produto.produtor} · ${produto.cidade} · ${produto.distancia} km</p>
        <p class="lote-detalhe">${produto.quantidade} · ${produto.embalagem}</p>
        ${preco}
        <p class="${prazo}">${produto.prazo}</p>
        <p class="lote-botao">
          <a class="botao botao-verde" href="catalogo.html">Ver detalhes do lote</a>
        </p>
      </div>
    </article>
  `;
}

export function montarCards(lista, destino) {
  if (!destino) return;

  destino.innerHTML = lista
    .map(function (produto) {
      return '<div class="col revela">' + criarCard(produto) + '</div>';
    })
    .join('');
}
