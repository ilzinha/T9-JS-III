const form = document.querySelector('#swForm');
const input = document.querySelector('#swInput');
const swPlaceHolder = document.querySelector('#swPlaceholder')

const callRequest = (e) => {
    e.preventDefault();

    const request = new XMLHttpRequest();
    const pegaApi = 'GET';
    const valorInput = input.value
    const linkApi = `https://swapi.dev/api/people/${valorInput}/`;

    request.open(pegaApi, linkApi, true);

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const pegaDados = JSON.parse(request.response);
            console.log(pegaDados)
            swPlaceHolder.innerText = pegaDados.name;

            for (let i = 0; i < pegaDados.films.length; i++) {
                console.log(pegaDados.films[i])
            }


        } else {
            swPlaceHolder.innerText = 'Sem resposta da API'
        }
    })

    request.send()
}

form.addEventListener('submit', (e) => callRequest(e));