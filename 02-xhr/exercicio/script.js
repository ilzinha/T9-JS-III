// Criar uma mini aplicação que recebe o nome de um pokemon, acessa sua API e retorna seu nome e imagem
// A API a ser usada é https://pokeapi.co/api/v2/pokemon/${nome_do_pokemon}/
// Ver documentação em https://pokeapi.co/
// A imagem deve ser ter essa URL https://pokeres.bastionbot.org/images/pokemon/${id_do_pokemon}.png
// Essa id é retirada da API anterior

const form = document.getElementById('pkmForm');
const input = document.getElementById('pkmInput');
const pkmPlaceholder = document.getElementById('pkmPlaceholder');

const chamarRequisicao = (e) => {
  e.preventDefault();
  // https://pokeapi.co/api/v2/pokemon/ditto/


  const request = new XMLHttpRequest();
  const pegaApi = 'GET';
  const nome = input.value; 
  const api = `https://pokeapi.co/api/v2/pokemon/${nome}/`

  //abrir a requisição
  request.open(pegaApi, api, true);

  request.addEventListener('readystatechange', () => {

    if (request.readyState === 4 && request.status === 200) {
      // transforma o json num objeto, response é o conteudo do requisito, resposta do servidor
      const dadoParseado = JSON.parse(request.response);
console.log(dadoParseado)
      
      pkmPlaceholder.textContent = dadoParseado.name;
      const img = document.createElement('img');
      img.setAttribute('src', `https://pokeres.bastionbot.org/images/pokemon/${dadoParseado.id}.png` )
      pkmPlaceholder.appendChild(img)
      
    } else {
      pkmPlaceholder.textContent = 'Sem resposta da API'
    }
  })

  request.send();
}

form.addEventListener('submit', (e) => chamarRequisicao(e));