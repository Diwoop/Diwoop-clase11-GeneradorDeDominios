let opcionesPronoun = ['the', 'our', 'your', 'their'];
let opcionesAdj = ['great', 'big', 'messy', 'flawless'];
let opcionesNoun = ['jogger', 'racoon', 'company', 'cat','coffee'];
let opcionesDominio= [".com", ".net", ".us", ".io"];

function dominiosRandom(){
    for (let i = 0; i < opcionesPronoun.length; i++){
        for (let j = 0; j < opcionesAdj.length; j++){
            for (let k = 0; k < opcionesNoun.length; k++){
                for (let g = 0; g < opcionesDominio.length; g++){
                    console.log(`${opcionesPronoun[i]}${opcionesAdj[j]}${opcionesNoun[k]}${opcionesDominio[g]}`);
                }
            }
        }
    }
}
dominiosRandom();