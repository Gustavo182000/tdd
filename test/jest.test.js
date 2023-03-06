

test('Devo conhecer as principais assertivas do jest',()=>{
    expect(null).toBe(null); // Espera-se Null
    expect(null).not.toBe(5); // Espera-se que não seja 5
    expect(8).not.toBeGreaterThan(9); // Espera-se que não seja maior que 9
})

