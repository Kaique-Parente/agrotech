const nomeProduto = document.getElementById('nomeProduto');
const tipoOferta = document.getElementById('tipoOferta');
const quantidadeDisponivel = document.getElementById('quantidadeDisponivel');
const unidadeProduto = document.getElementById('unidadeProduto');
const precoUnidade = document.getElementById('precoUnidade');
const municipioProduto = document.getElementById('municipioProduto');
const vendaComercio = document.getElementById('vendaComercio');
const doacaoSocial = document.getElementById('doacaoSocial');

const resumoProduto = document.getElementById('resumoProduto');
const resumoQuantidade = document.getElementById('resumoQuantidade');
const resumoTipo = document.getElementById('resumoTipo');
const resumoMunicipio = document.getElementById('resumoMunicipio');
const resumoValor = document.getElementById('resumoValor');

const formatarMoeda = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function atualizarResumo() {
  const produto = nomeProduto.value.trim();
  const quantidade = quantidadeDisponivel.value.trim();
  const municipio = municipioProduto.value.trim();

  resumoProduto.textContent = produto || '—';
  resumoQuantidade.textContent = quantidade
    ? `${quantidade} ${unidadeProduto.value}`
    : '—';
  resumoTipo.textContent = tipoOferta.value;
  resumoMunicipio.textContent = municipio || '—';

  if (tipoOferta.value === 'Doação') {
    resumoValor.textContent = formatarMoeda.format(0);
    return;
  }

  const quantidadeNumerica = quantidadeDisponivel.valueAsNumber;
  const precoNumerico = precoUnidade.valueAsNumber;

  resumoValor.textContent =
    Number.isFinite(quantidadeNumerica) && Number.isFinite(precoNumerico)
      ? formatarMoeda.format(quantidadeNumerica * precoNumerico)
      : '—';
}

function atualizarModeloComercial() {
  vendaComercio.checked = tipoOferta.value === 'Venda';
  doacaoSocial.checked = tipoOferta.value === 'Doação';
  atualizarResumo();
}

nomeProduto.addEventListener('input', atualizarResumo);
quantidadeDisponivel.addEventListener('input', atualizarResumo);
unidadeProduto.addEventListener('change', atualizarResumo);
precoUnidade.addEventListener('input', atualizarResumo);
municipioProduto.addEventListener('input', atualizarResumo);
tipoOferta.addEventListener('change', atualizarModeloComercial);

vendaComercio.addEventListener('change', () => {
  if (vendaComercio.checked) {
    tipoOferta.value = 'Venda';
    atualizarResumo();
  }
});

doacaoSocial.addEventListener('change', () => {
  if (doacaoSocial.checked) {
    tipoOferta.value = 'Doação';
    atualizarResumo();
  }
});

atualizarModeloComercial();

const imagemProduto = document.getElementById('imagemProduto');
const nomeImagem = document.getElementById('nome-imagem');

if (imagemProduto && nomeImagem) {
  imagemProduto.addEventListener('change', () => {
    nomeImagem.textContent = imagemProduto.files.length
      ? imagemProduto.files[0].name
      : 'Nenhum arquivo selecionado';
  });
}

const anoPublicar = document.getElementById('ano');
if (anoPublicar) { anoPublicar.textContent = new Date().getFullYear(); }
