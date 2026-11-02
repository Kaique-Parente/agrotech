const ICONE_LOCAL =
  '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"' +
  ' stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
  '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>';

export function criarCard(produto) {
  const doacao = produto.tipo === 'doacao';

  const selo = doacao
    ? '<span class="lote-selo lote-selo-doacao">DOAÇÃO R$ 0,00</span>'
    : '<span class="lote-selo">VENDA B2B</span>';

  const preco = doacao
    ? '<p class="lote-preco lote-preco-doacao">' + produto.preco + '</p>'
    : '<p class="lote-preco">' + produto.preco + '</p>';

  const prazo = produto.urgente ? 'lote-prazo lote-prazo-curto' : 'lote-prazo';

  return `
    <article class="lote">
      <div class="lote-foto">
        <img src="${produto.foto}" alt="${produto.alt}" loading="lazy">
        ${selo}
      </div>
      <div class="lote-corpo">
        <h3>${produto.nome}</h3>
        <p class="lote-local">${ICONE_LOCAL} ${produto.produtor} · ${produto.cidade} · ${produto.distancia} km</p>
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
      return '<div class="col">' + criarCard(produto) + '</div>';
    })
    .join('');
}
