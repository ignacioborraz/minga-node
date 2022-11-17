const app = require('../app')
const chai = require('chai');
const assert = chai.assert;
const request = require('supertest');
// const assert = require('assert'); // Nativo node

/* 

    Metodos utilizados

    Supertest
        - request()
        - get()
        - expect()
        - end()
        - done()
    
    Mocha
        - describe()
        - it()
    
    Chai
        - assert() y submetodos

*/

// Describe agrupar test cases
describe('GET /api/comidas/:id', function() {

    // it - test cases
    it('Deberia traerme un array ', function(done) {

        const idComida = '636d5775c67698ccc47127d9';
        
        request(app)
            .get('/api/comidas/' + idComida)
            .expect(response => {
                assert.typeOf(response.body.response, 'array', 'Deberia ser un array')
            })
            .end(function(err, res) {
                if(err){
                    return done(err);
                }

                done();
            })
    })

    it('Deberia traerme una sola comida', function(done) {

        const idComida = '636d5775c67698ccc47127d9';
        
        request(app)
            .get('/api/comidas/' + idComida)
            .expect(response => {
                assert.lengthOf(response.body.response, 1)
            })
            .end(function(err, res) {
                if(err){
                    return done(err);
                }

                done();
            })
    })



})
