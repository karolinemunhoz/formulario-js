document.getElementById('meuFormulario').addEventListener('submit', function(event){
    event.preventDefault();

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const mensagem = document.getElementById('mensagem');

    if (campoB > campoA) {
        mensagem.textContent = 'Formulário Válido!';
        mensagem.style.color = 'green';
    } else {
        mensagem.textContent = 'Formulário inválido! O Campo B precisa ser maior que o Campo A.';
        mensagem.style.color = 'red';
    }

});
