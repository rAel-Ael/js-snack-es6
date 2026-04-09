const Squadre = [
{
    nome: "Lions",
    punti_fatti: 0,
    falli_subiti: 0,
},
{
    nome: "Dunkers",
    punti_fatti: 0,
    falli_subiti: 0,
},
{
    nome: "Wolves",
    punti_fatti: 0,
    falli_subiti: 0,
    },
{
    nome: "Fast Break",
    punti_fatti: 0,
    falli_subiti: 0,
    },
{
    nome: "Elite",
    punti_fatti: 0,
    falli_subiti: 0,
    },
{
    nome: "Olimpia",
    punti_fatti: 0,
    falli_subiti: 0,
},
]

for (let i = 0; i < Squadre.length; i++) {
    Squadre[i].punti_fatti = Math.floor(Math.random() * 100); 
    Squadre[i].falli_subiti = Math.floor(Math.random() * 100);
}

console.log(Squadre);