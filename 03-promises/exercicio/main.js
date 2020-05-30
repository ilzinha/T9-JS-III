const cep_input = document.getElementById("cep")
const logradouro_input = document.getElementById("logradouro")
const complemento_input = document.getElementById("complemento")
const bairro_input = document.getElementById("bairro")
const localidade_input = document.getElementById("localidade")
const uf_input = document.getElementById("uf")
const cep_error = document.getElementById("cep-error")
cep_error.style.display = 'none'

cep_input.addEventListener('change', () => {
    console.log(cep_input.value)
    
    get_data(`https://viacep.com.br/ws/${cep_input.value}/json/`)
        .then( (dadoJSON) => {
    
            const dadoParseado = JSON.parse(dadoJSON)
           
            return dadoParseado
        })
        .then( (dadoObj) => {
            logradouro_input.value = dadoObj.logradouro
            bairro_input.value = dadoObj.bairro
            localidade_input.value = dadoObj.localidade
            uf_input.value = dadoObj.uf
            
        })
        .catch((erro) => {
            cep_error.style.display = 'block'
        })
})


