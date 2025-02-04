let amigos = [];

function adicionar () {
    let amigo = document.getElementById('nome-amigo');

    if (amigo.value === '') {
        alert('Informe o nome do amigo!');
        return;
    }

    if(amigos.includes(amigo.value)) {
        alert('Nome já adicionado! Caso tenha uma pessoa com o mesmo nome, adicione um sobrenome ou apelido.');
        return;
    }

    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value);
    if (lista.textContent === '') {
    lista.textContent = amigo.value;
    } else {
    lista.textContent += ', ' + amigo.value;
    } 
    amigo.value = '';
}

function sortear () {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 pessoas!');
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {

        if (i === amigos.length - 1) {
        sorteio.innerHTML += `<li>${amigos[i]} --> ${amigos[0]}</li>`;
        } else {
        sorteio.innerHTML += `<li>${amigos[i]} --> ${amigos[i + 1]}</li>`;
        }
    }

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

      const indiceAleatorio = Math.floor(Math.random() * indice);

      // atribuição via destructuring
      [lista[indice - 1], lista[indiceAleatorio]] = 
        [lista[indiceAleatorio], lista[indice - 1]];
    }
  }

  function reiniciar () {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    lista.textContent = '';
    sorteio.textContent = '';
  }

