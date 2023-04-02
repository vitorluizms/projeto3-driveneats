function selecionar(item, tipo) {
    console.log(item)
    const item_escolhido= document.querySelector(`${tipo} .select`);
    if (item_escolhido !== null) {
        item_escolhido.classList.remove("select")
    }
    item.classList.add("select")
    finalizarPedido(`.comida`, `.bebida`, `.sobremesa`)
}
function finalizarPedido (tipo1, tipo2, tipo3) {
    const grupo1= document.querySelector(`${tipo1} .select`);
    const grupo2= document.querySelector(`${tipo2} .select`);
    const grupo3= document.querySelector(`${tipo3} .select`);
    if (grupo1 && grupo2 && grupo3) {
        const remover= document.querySelector('.rodape-escondido')
        remover.classList.remove('display-escondido')
    }
}

function realizarPedido (tipo1, tipo2, tipo3) {
    let texto;
    let total;

    const nome= prompt("Digite seu nome!")
    const endereco= prompt("Digite seu endereço!")
    const food= document.querySelector(`${tipo1} .select h2`).innerHTML;
    const drink= document.querySelector(`${tipo2} .select h2`).innerHTML;
    const dessert= document.querySelector(`${tipo3} .select h2`).innerHTML;
    const valor_food= document.querySelector(`${tipo1} .select h4`).innerHTML.slice(3).replace(",",".");
    const valor_drink= document.querySelector(`${tipo2} .select h4`).innerHTML.slice(3).replace(",",".");
    const valor_dessert= document.querySelector(`${tipo3} .select h4`).innerHTML.slice(3).replace(",",".");

    total= Number(valor_food) + Number(valor_drink) + Number(valor_dessert);
    total= total.toFixed(2)
    texto= encodeURIComponent(`Olá, gostaria de fazer o pedido
    -Prato: ${food}
    -Bebida: ${drink}
    -Sobremesa: ${dessert}
    Total: R$ ${total}
    
    Nome: ${nome}
    Endereço: ${endereco}`)

    window.open("https://wa.me/55082998262078?text=" + texto)
}
