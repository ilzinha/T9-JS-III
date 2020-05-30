const cepInput = document.getElementById("cep");
const logradouroInput = document.getElementById("logradouro");
const complementoInput = document.getElementById("complemento");
const bairroInput = document.getElementById("bairro");
const localidadeInput = document.getElementById("localidade");
const ufInput = document.getElementById("uf");
const cepErro = document.getElementById("cep-error")


cepInput.addEventListener("blur", () => {
    cepErro.style.display = 'none'

    fetch(`https://viacep.com.br/ws/${cepInput.value}/json/`)
        .then( (response) => {
            return response.json()
        })
        .then( (dadoParseado) => {
            logradouroInput.value = dadoParseado.logradouro;
            bairroInput.value = dadoParseado.bairro;
            localidadeInput.value = dadoParseado.localidade;
            ufInput.value = dadoParseado.uf
        })
        .catch( (erro) => {
            cepErro.style.display = 'block'
            cepErro.innerText = 'CEP inválido'
        })
});
