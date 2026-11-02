import { produtos } from './produtos.js';
import { montarCards } from './cards.js';

montarCards(produtos, document.querySelector('#lista-lotes'));

const ano = document.querySelector('#ano');
if (ano) {
  ano.textContent = new Date().getFullYear();
}
