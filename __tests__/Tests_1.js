const Aleatorio = require("../ex1")

test("inicio negativo retorna -1", ()=>{
    expect(Aleatorio.gerarNumeroAleatorio(-1,3)).toBe(-1)
})

test("final negativo retorna -1", ()=>{
    expect(Aleatorio.gerarNumeroAleatorio(3,1)).toBe(-1)
})

test("inicio maior que final retorna -1", ()=>{
    expect(Aleatorio.gerarNumeroAleatorio(3,1)).toBe(-1)

})
test("inicio igual ao final retorna -1", ()=>{
    expect(Aleatorio.gerarNumeroAleatorio(3,3)).toBe(-1)

})
test("inicio 1 e final 3 retorna numero entre 200 e 3000", ()=>{
    expect(Aleatorio.gerarNumeroAleatorio(200,3000)).toBeGreaterThanOrEqual(200)
    expect(Aleatorio.gerarNumeroAleatorio(200,3000)).toBeLessThanOrEqual(3000)
})
