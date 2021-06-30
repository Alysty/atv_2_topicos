class Extremos{

    _menor;
    _maior;
    _indiceMenor;
    _indiceMaior;

    constructor(menor, indiceMenor, maior, indiceMaior )
    {
        this._menor = menor
        this._indiceMenor = indiceMenor
        this._maior = maior
        this._indiceMaior = indiceMaior
    }

    get menor() {
        return this._menor;
    }

    get maior() {
        return this._maior;
    }

    get indiceMenor() {
        return this._indiceMenor;
    }

    get indiceMaior() {
        return this._indiceMaior;
    }
}

module.exports = Extremos
