//Iteración 1
const products = [
    'Camiseta de Pokemon', 
    'Pantalón coquinero', 
    'Gorra de gansta', 
    'Camiseta de Basket', 
    'Cinrurón de Orión', 
    'AC/DC Camiseta'
]

    var camisetas = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].includes("Camiseta")){
            camisetas.push(products[i]);
        }
    }

    console.log("Los productos que contienen 'camisetas' son: " + camisetas);