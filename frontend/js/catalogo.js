import { montarCards } from './cards.js';
import { produtos } from './produtos.js';

document.addEventListener('DOMContentLoaded', () => {
  const containerDoacoes = document.getElementById('container-doacoes');
  const containerVendas = document.getElementById('container-vendas');

  if (produtos && Array.isArray(produtos)) {
    // Filtra garantindo que apanha 'doacao' exatamente como está no produtos.js
    const doacoes = produtos.filter(p => p.tipo === 'doacao' || p.tipo === 'doação');
    const vendas = produtos.filter(p => p.tipo === 'venda');

    // Injeta os cards gerados nas divs correspondentes
    if (containerDoacoes) {
      montarCards(doacoes, containerDoacoes);
    }
    
    if (containerVendas) {
      montarCards(vendas, containerVendas);
    }
  }
});