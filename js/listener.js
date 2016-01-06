var Listener = function() {
    var self = this;
    this.recognition = new webkitSpeechRecognition();
    this.recognition.onresult = function(event) {
        if(event.results.length === 0) {
            self.errorCallback();
        } else {
            self.successCallback(event.results[0][0].transcript);
        }
    }
}

Listener.prototype.listen = function(successCallback, errorCallback) {
    this.successCallback = successCallback||function() {};
    this.errorCallback = errorCallback||function() {};
    this.recognition.start();
}
