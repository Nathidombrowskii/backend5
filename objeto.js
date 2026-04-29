const bancoAutomotivo = {
    material: "Couro Natural",
    cor: "Caramelo",
    tamanho: "Padrão",
    concluido: false
}

console.log("Material escolhido:", bancoAutomotivo.material);

bancoAutomotivo.concluido = true;
console.log(bancoAutomotivo);

const papelaria = {
    caneta: "Vermelha",
    papel: "Colorido",
    lapis: "12 cores", 
    caderno: "48 páginas",
    mochila: "preto"    
}

console.log("O material escolhido da papelaria, é uma caixa lápis", papelaria.lapis);