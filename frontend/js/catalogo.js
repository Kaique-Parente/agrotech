import { montarCards } from './cards.js';
import { produtos } from './produtos.js';

const doacoes = produtos.filter(function (produto) { return produto.tipo === 'doacao'; });
const vendas = produtos.filter(function (produto) { return produto.tipo === 'venda'; });

montarCards(doacoes, document.querySelector('#container-doacoes'));
montarCards(vendas, document.querySelector('#container-vendas'));

const resumo = document.querySelector('#resumo-lotes');
if (resumo) {
  const plural = function (n, um, muitos) { return n + ' ' + (n === 1 ? um : muitos); };
  resumo.textContent = plural(produtos.length, 'lote disponível', 'lotes disponíveis')
    + ' · ' + plural(doacoes.length, 'doação', 'doações')
    + ' e ' + plural(vendas.length, 'oferta de venda', 'ofertas de venda');
}

const ano = document.querySelector('#ano');
if (ano) { ano.textContent = new Date().getFullYear(); }
