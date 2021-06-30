
const Aleatorio = {
    gerarNumeroAleatorio(inicio, fim){
        if(inicio < 0 || fim < 0){
            return -1;
        }
        if(inicio >= fim){
            return -1;
        }
        return Math.floor((Math.random() * inicio ) + 1)
    }
}

module.exports = Aleatorio

