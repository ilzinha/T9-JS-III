// Fazer o fetch pra ver se carregamos o array de cartas
const cardSection = document.getElementById('cards-section')
const errorSection = document.getElementById('error')
const loading = document.getElementById('spinner')
const chamarNovaCartaBtn = document.getElementById('chamarNovaCartaBtn')

renderizaCarta = carta => {
    const novaCarta = new Card(carta).render()
    cardSection.innerHTML = novaCarta
}

const placeHolderCard = {
    nome: 'Carta não carregada',
    tipo: 'Arcanjo maior',
    descricao: 'Sem descrição',
    imagem: "https://via.placeholder.com/250x500",
    link: "https://www.astrolink.com.br/"
}

renderizaCarta(placeHolderCard);

const urlApi = 'https://raw.githubusercontent.com/reprograma/T9-JS-III/master/04-fetch/exercicio/tarot.json'

chamarNovaCartaBtn.addEventListener('click', () => {

    fetch(urlApi)
        .then((response) => {
            return response.json()

        })
        .then((cartaShow) => {
            const numAleatorio = Math.floor(Math.random() * cartaShow.length)

            renderizaCarta(cartaShow[numAleatorio]);


        })
})