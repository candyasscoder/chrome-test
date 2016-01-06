(function() {
    //flavor text
    console.log("Initializing...");
    window.speechSynthesis.onvoiceschanged = function() {
        var speaker = new NativeSpeaker();
        console.log("Speech synthesizer module initialized.");
        var listener = new Listener();
        console.log("Voice recognition module initialized.")
        var cleverbot = new Cleverbot();
        console.log("AI module initialized.")

        var loop = function() {
            console.log("Awaiting user speech input.");
            listener.listen(function(text) {
                console.log("User input speech recognized: \"" + text + "\"");
                console.log("Sending data to servers...");
                cleverbot.speak(text, function(response) {
                    speaker.speak(response, loop);
                    console.log("AI Agent response: \"" + response + "\"");
                })
            }, function() {
                console.log("Speech unrecognized. Please try again.");
                console.log("AI Agent response: \"I could not understand you. Please try again.\"");
                speaker.speak("I could not understand you. Please try again.", loop);
            })
        }

        console.log("Chrome agent ready.");
        loop();
    };
})()