function App(){
    this.text = "Olá batata ";
}

module.exports = App;

App.prototype.hw = function(textToApp){
    return this.text + textToApp;
};
