const supertest = require('supertest')
const request = supertest('localhost:3001')

test('Deve listar todos os usuários',()=>{
    return request.get('/users').then((res)=>{
        expect(res.status).toBe(200);
        expect(res.body).toHaveLength(1); // Espera-se que o corpo da requisição tenha o tamanho 1
        expect(res.body[0]).toHaveProperty('name','John'); // Espera-se que o primeiro valor tenha a propriedade name com o valor John
        
    })
})

test('Deve inserir um usuário com sucesso',()=>{
    return request.post('/users').send({name: 'Nome teste',mail: 'mailteste@mail.com'}).then((res)=>{
        expect(res.status).toBe(201);
        expect(res.body.name).toBe('Nome teste'); // Espera-se que retorne o usuário cadastrado
    })
})
