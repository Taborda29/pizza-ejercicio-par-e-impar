
const pizza = ["tomate","masa","aceituna","queso","cebolla","pure de tomate","perejil","oregano","morron","jamon"];

const ParImpar = (array) =>{
    const pares=[];
    const impar=[];

    for (let i=0;i<pizza.length;i++){
        if (pizza[i].length % 2 ===0){
            pares.push(pizza[i]);
        }else{
            impar.push(pizza[i]);
        }
    }
    return console.log(`Los ingredientes impares son: ${impar}`,`y`,`Los ingredientes pares son: ${pares}`);
};
ParImpar()