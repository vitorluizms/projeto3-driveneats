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
