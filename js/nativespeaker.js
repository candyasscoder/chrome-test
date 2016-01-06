var NativeSpeaker = function() {
    var self = this;
    var tvoices = window.speechSynthesis.getVoices();
    self.voices = {};
    tvoices.forEach(function(v) {
        self.voices[v.name] = v;
    })
    this.useVoice("Samantha");
}

NativeSpeaker.prototype.useVoice = function(voice) {
    this.voice = this.voices[voice];
}
 
NativeSpeaker.prototype.speak = function(txt, callback) {
    msg = new SpeechSynthesisUtterance(txt);
    msg.voice = this.voice;
    msg.onend = callback;
    msg.pitch = 2;
    speechSynthesis.speak(msg);
}
