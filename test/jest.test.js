

test('Devo conhecer as principais assertivas do jest',()=>{

    let arr = [0,1,2,3,4];

    expect(null).toBe(null); // Espera-se Null
    expect(null).not.toBe(5); // Espera-se que não seja 5
    expect(1).toBe(1); // Espera-se que seja 1
    expect(8).not.toBeGreaterThan(9); // Espera-se que não seja maior que 9
    expect(8).not.toBeLessThan(5); // Espera-se que não seja menor que 8
    expect(null).toBeNull();// Espera-se que o valor seja Null
    expect(undefined).toBeUndefined(); // Espera-se que o valor seja undefined
    expect(1).toBeDefined(); // Espera-se que o valor não seja undefined
    expect(1).toBeTruthy(); // Espera-se que o valor seja True
    expect(0).toBeFalsy(); // Espera-se que o valor seja Falso
    expect(arr).toContain(2); // Espera-se que o array contenha 2
    

})

test('Devo conhecer as principais assertivas do jest com objetos',()=>{
    const obj = {name: 'John', mail: 'john@mail.com'};

    expect(obj).toHaveProperty('name'); // Espera-se que tenha a proprierade 'name'
    expect(obj).toHaveProperty('name','John'); // Espera-se que tenha a proprierade 'name' e o valor seja 'John'
    expect(obj.mail).toBe('john@mail.com'); // Espera-se que a propriedade mail seja 'john@mail.com'

    const obj2 = {name: 'John', mail: 'john@mail.com'};

    expect(obj).toStrictEqual(obj2); // Espera-se que o obj seja igual ao obj2, toBe não passa o teste
    

})