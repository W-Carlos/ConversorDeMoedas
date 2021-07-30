/* Pegando o valor do input */
let botao = document.getElementById('botao')
let select = document.getElementById('select-moedas')

// Função reponsavel pela conversão das moedas
async function converterMoedas(){

    //Pegando os valores atuais das moedas
    //API utilizada: https://docs.awesomeapi.com.br/api-de-moedas
    let moedas = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL').then(function(resposta){
       return resposta.json()
    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high

    let inputValorEmReais = Number(document.getElementById('input').value)
    let inputMoedas = document.getElementById('input-moedas')
    let textoReal = document.getElementById('texto-real')

    if(select.value === "US$ Dólar Americano") {

        let ValorEmDolar = inputValorEmReais / dolar
        inputMoedas.innerHTML = ValorEmDolar.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }

    if(select.value === "€ Euro") {

        let ValorEmEuro = inputValorEmReais / euro
        inputMoedas.innerHTML = ValorEmEuro.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
    }    

    textoReal.innerHTML = inputValorEmReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

}

// Função responsavel pela troca das bandeiras e o nome das moedas
function trocaDeMoeda(){

    let textoMoedas = document.getElementById('texto-moedas')
    let bandeiraMoedas = document.getElementById('bandeira-moedas')

    if(select.value === "US$ Dólar Americano") {
        textoMoedas.innerHTML = 'Dólar Americano'
        bandeiraMoedas.src = 'assets/eua.png'
    }

    if(select.value === "€ Euro") {
        textoMoedas.innerHTML = 'Euro'
        bandeiraMoedas.src = 'assets/euro.png'
    }

    converterMoedas()
}

botao.addEventListener("click", converterMoedas)
select.addEventListener("change", trocaDeMoeda)

//toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))