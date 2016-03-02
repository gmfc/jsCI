var assert = require("assert");
var App = require("../app/app");

describe('Teste HW', function() {
    
    var appInst;
    beforeEach(function() {
        appInst = new App();
    });
    
    
    it('Testa wh( mundo ),', function() {
        var resultado = appInst.hw("MUNDO!");
        assert.equal(resultado, "Olá MUNDO!");
    });
    
    
});