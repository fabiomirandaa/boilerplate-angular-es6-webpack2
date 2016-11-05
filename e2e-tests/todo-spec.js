describe('angularjs homepage todo list', function() {
    it('Acessando aplicação', function() {
        browser.get('http://localhost:9000/');
    });

    it('Escrevendo no input', function() {

        var name = 'Saiu da Jaula o Monstro';
        var elementName = element(by.model('yourName'));
        var elementResponse = element(by.css('h1'));

        elementName.sendKeys(name);
        browser.sleep(2000); // Deixa o browser parado para vermos o teste

        expect(elementResponse.getText()).toEqual('Já ' + name + '!');
    });

});
