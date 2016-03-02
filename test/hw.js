var assert = require("assert");
var App = require("../app/app");

describe('Teste HW', function() {
    
    var appInst;
    beforeEach(function() {
        appInst = new App();
    });
    
    
    it('Testa wh( GENTE! ),', function() {
        var resultado = appInst.hw("GENTE!");
        assert.equal(resultado, "Olá GENTE!");
    });
    
    it('Testa wh( mundo! ),', function() {
        var resultado = appInst.hw("mundo!");
        assert.equal(resultado, "Olá mundo!");
    });
    
    
});
