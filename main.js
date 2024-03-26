const formularioTabuada = document.querySelector('form');
const numeroEscolhido = formularioTabuada.querySelector('input');
const menssagemERRO = formularioTabuada.querySelector('.condicaoNaoAceita');
const containerTabuada = formularioTabuada.querySelector('ul');
const itemTabuada = formularioTabuada.querySelectorAll('li');
const calcular = formularioTabuada.querySelector('.calcularTabuada');
const limparFormulario = formularioTabuada.querySelector('.resetTabuada');

function calcularTabuada(e) {
  e.preventDefault();
  if (numeroEscolhido.value < 0 || numeroEscolhido.value === '') {
    menssagemERRO.innerText = 'Valor incorreto, tente novamente!';
    containerTabuada.classList.remove('visivel');
  } else {
    menssagemERRO.innerText = '';
    itemTabuada.forEach((item, index) => {
      if (index < itemTabuada.length) {
        let conta = `${numeroEscolhido.value} x ${index + 1} = `
        let resultado = `${numeroEscolhido.value * (index + 1)}`
        item.innerHTML = `${conta} ${resultado}`;
      }
    });
    containerTabuada.classList.add('visivel');
    numeroEscolhido.value = ''
  }
}

calcular.addEventListener('click', calcularTabuada);

function resetaFomulario(e) {
  e.preventDefault();
  numeroEscolhido.value = '';
  itemTabuada.forEach(item => item.innerHTML = '');
  menssagemERRO.innerText = '';
  containerTabuada.classList.remove('visivel');
}
limparFormulario.addEventListener('click', resetaFomulario);
