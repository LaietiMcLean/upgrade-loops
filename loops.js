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

//Iteración 2
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

let isApproved; 
let texto1 = "Aprobado"
let texto2 = "Suspenso"
let summ = 0;

for (aprov in alumns){
    summ=0;
    if(alumns[aprov].T1 == true) {
        summ++;
    } if(alumns[aprov].T2 == true) {
        summ++;
    } if(alumns[aprov].T3 == true) {
        summ++;
    } if (summ >= 2) {
        isApproved = true;
        console.log(alumns[aprov].name + ": aprobado");
    } if (summ < 2) { 
        isApproved = false;
        console.log(alumns[aprov].name + ": suspenso");
    }  
    
} 





