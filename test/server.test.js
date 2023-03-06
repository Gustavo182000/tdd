const supertest = require('supertest')
const request = supertest('localhost:3001')

 test('Deve responder na porta 3001',()=>{
    // Deve acessar o endereço localhost:3001
   return request.get('/').then((res)=>{
        expect(res.status).toBe(200);
    })
    // Deve retornar 200
});