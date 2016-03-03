function App(){
    this.text = "Olá ";
}

module.exports = App;

App.prototype.hw = function(textToApp){
    return this.text + textToApp;
};
