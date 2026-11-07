const anexo = document.querySelector('#anexo');
const nomeAnexo = document.querySelector('#nome-anexo');

if (anexo && nomeAnexo) {
  anexo.addEventListener('change', function () {
    nomeAnexo.textContent = anexo.files.length
      ? anexo.files[0].name
      : 'Nenhum arquivo selecionado';
  });
}

const telefone = document.querySelector('#whatsapp');

function formatarTelefone(valor) {
  const digitos = valor.replace(/\D/g, '').slice(0, 11);
  if (digitos.length <= 2) { return digitos.length ? '(' + digitos : ''; }
  if (digitos.length <= 6) { return '(' + digitos.slice(0, 2) + ') ' + digitos.slice(2); }
  if (digitos.length <= 10) {
    return '(' + digitos.slice(0, 2) + ') ' + digitos.slice(2, 6) + '-' + digitos.slice(6);
  }
  return '(' + digitos.slice(0, 2) + ') ' + digitos.slice(2, 7) + '-' + digitos.slice(7);
}

if (telefone) {
  telefone.addEventListener('input', function () {
    telefone.value = formatarTelefone(telefone.value);
  });
}

const recados = {
  valueMissing: 'Preencha este campo para continuar.',
  typeMismatch: 'Confira o formato do que você digitou.',
  tooShort: 'Escreva um pouco mais neste campo.',
  patternMismatch: 'Use o formato (DDD) 90000-0000.'
};

function avisar(campo) {
  const estado = campo.validity;
  if (estado.valid) {
    campo.setCustomValidity('');
    return;
  }
  if (estado.valueMissing && campo.type === 'checkbox') {
    campo.setCustomValidity('É preciso aceitar para enviar a mensagem.');
    return;
  }
  if (estado.valueMissing && campo.tagName === 'SELECT') {
    campo.setCustomValidity('Escolha uma das opções da lista.');
    return;
  }
  if (estado.typeMismatch && campo.type === 'email') {
    campo.setCustomValidity('Digite um e-mail válido, como nome@provedor.com.br.');
    return;
  }
  const chave = Object.keys(recados).find(function (nome) { return estado[nome]; });
  campo.setCustomValidity(chave ? recados[chave] : 'Confira este campo.');
}

document.querySelectorAll('form [required]').forEach(function (campo) {
  campo.addEventListener('invalid', function () { avisar(campo); });
  campo.addEventListener('input', function () { campo.setCustomValidity(''); });
  campo.addEventListener('change', function () { campo.setCustomValidity(''); });
});

const ano = document.querySelector('#ano');
if (ano) { ano.textContent = new Date().getFullYear(); }
