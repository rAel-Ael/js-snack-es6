const biciclette = [
    {
    nome: "decathlonElops900",
    peso: 15
},
{
    nome: "bianchi",
    peso: 9
    },
{
    nome: "specializedTurbo",
    peso: 14
    },
{
    nome: "pinarelloDogmaF",
    peso: 6
},
{
    nome: "cannondaleQuick",
    peso: 10
}
]


let  biciPiuLeggera = biciclette[0]; // 15 -> 9 -> 6

for (let i = 1; i < biciclette.length; i++) {
    console.log('sono dentro il for, indice: ', i)
    if (biciclette[i].peso < biciPiuLeggera.peso) {
        console.log('sono dentro l\'if')
        console.log('elemento corrente:', biciclette[i])
        console.log('elemento memorizzato:', biciPiuLeggera)
        biciPiuLeggera = biciclette[i];
    }
}

console.log(biciPiuLeggera);