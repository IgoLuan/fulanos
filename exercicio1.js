const button = document.querySelector("button")
const preco = document.getElementById("preco")
const quantidade = document.getElementById("quantidade")
const dinheiro = document.getElementById("dinheiro")
const paragrafoResultado = document.getElementById("resultado")

button.addEventListener("click", calcularTroco)

function calcularTroco(){
    const dinheiroDado = dinheiro.value
    const precoValor = preco.value
    const numeroItens = quantidade.value

    if(dinheiroDado < precoValor * numeroItens){
        alert(`Dinheiro insuficiente! valor restante a pagar: {(preco valor * numeroItens) - dinheiroDado}`)
    }else {
        const troco = dinheiroDado - (precoValor * numeroItens)

        paragrafoResultado.textContent = "Troco: " + troco
    }
}
