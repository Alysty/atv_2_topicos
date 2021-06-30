const Utilitario = require("../ex2")
const Extremos = require("../Ex2_Extremos")

test('entrada com valor nulo',()=>{
    expect(()=>Utilitario.acharExtremos(null)).toThrow("vetor nao pode ser nulo")
})
test('entrada com vetor vazio',()=>{
    expect(() =>Utilitario.acharExtremos([])).toThrow("vetor com zero elementos")
})
test('entrada com vetor {1, 2, 3, 4, 5, 6}',()=>{
    expect(Utilitario.acharExtremos([1, 2, 3, 4, 5, 6])).toBe(Extremos.Extremos(1, 0, 6, 5 ))
})
test('entrada com vetor {1, 99, 3, -5, 8}',()=>{
    expect(Utilitario.acharExtremos([1, 99, 3, -5, 8])).toBe(Extremos.Extremos(-5, 3, 99, 2 ))
})
