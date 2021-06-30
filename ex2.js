
const Extremos = require("./Ex2_Extremos")

const Utilitario = {
    acharExtremos(v){
        if(v == null){
            throw 'vetor nao pode ser nulo'
        }
        if (v.length == 0){
            throw 'vetor com zero elementos'
        }
        let menor = v[0]
        let maior = v[0]
        let indiceMenor = 0
        let indiceMaior = 0

        for (var i = 1; i < v.length; i++){
            if(v[1]<menor){
                menor = v[i]
                indiceMenor = i;
            }
            if(v[1]> maior){
                maior = v[i]
                indiceMaior = i;
            }
        }
        return Extremos.Extremos(menor, indiceMenor, maior, indiceMaior )
    }
}

module.exports = Utilitario
