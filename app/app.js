function App(){
    this.text = "BATATA ";
}

module.exports = App;

App.prototype.hw = function(textToApp){
    return this.text + textToApp;
};
