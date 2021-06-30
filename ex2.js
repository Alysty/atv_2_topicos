import Extremos from "./Ex2_Extremos";

class Utilitario{
    acharExtremos(v){
        if (!Array.isArray(v)){
            throw "Deve ser passado um array"
        }
        if(v==null){
            throw "vetor nao pode ser nulo"
        }
        if (v.length){
            throw "vetor com zero elementos"
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
        return new Extremos(menor, indiceMenor, maior, indiceMaior )
    }
}

module.exports = Utilitario
