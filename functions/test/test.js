const chai = require('chai');
const cs = require('../services/character-service');

describe('Test character-service', function() {
    describe('#getAll()', function() {
        it('Gets 20 characters', function() {
            cs.getAll()
                .then((res) => {
                    chai.expect(res).to.have.lengthOf(20);
                });
        });
    });
    
    describe('#getCharacter()', function() {
        it('Gets character with id 1011346', function() {
            cs.getCharacter('1011346')
                .then((res) => {
                    chai.expect(res).to.have.property('id').to.equal(1011346);
                });
        });
    });
});