var Speaker = function() {
    var self = this;
    this.audio = new Audio();
    this.audio.addEventListener("canplay", function() {
        self.audio.play();
    })
    this.audio.addEventListener("ended", function() {
        self.finishCallback();
    })
    this.voices = {
        robotic: function(txt) {
            return "http://mary.dfki.de:59125/process?INPUT_TYPE=TEXT&OUTPUT_TYPE=AUDIO&INPUT_TEXT="+encodeURIComponent(txt)+"&OUTPUT_TEXT=&effect_Volume_selected=on&effect_Volume_parameters=amount%3A3.0%3B&effect_Volume_default=Default&effect_Volume_help=Help&effect_TractScaler_selected=on&effect_TractScaler_parameters=amount%3A1.0%3B&effect_TractScaler_default=Default&effect_TractScaler_help=Help&effect_F0Scale_selected=&effect_F0Scale_parameters=f0Scale%3A2.0%3B&effect_F0Scale_default=Default&effect_F0Scale_help=Help&effect_F0Add_selected=on&effect_F0Add_parameters=f0Add%3A60.0%3B&effect_F0Add_default=Default&effect_F0Add_help=Help&effect_Rate_selected=&effect_Rate_parameters=durScale%3A1.5%3B&effect_Rate_default=Default&effect_Rate_help=Help&effect_Robot_selected=on&effect_Robot_parameters=amount%3A80.0%3B&effect_Robot_default=Default&effect_Robot_help=Help&effect_Whisper_selected=&effect_Whisper_parameters=amount%3A100.0%3B&effect_Whisper_default=Default&effect_Whisper_help=Help&effect_Stadium_selected=&effect_Stadium_parameters=amount%3A10.0&effect_Stadium_default=Default&effect_Stadium_help=Help&effect_Chorus_selected=on&effect_Chorus_parameters=delay1%3A466%3Bamp1%3A0.24%3Bdelay2%3A600%3Bamp2%3A-0.10%3Bdelay3%3A250%3Bamp3%3A0.30&effect_Chorus_default=Default&effect_Chorus_help=Help&effect_FIRFilter_selected=on&effect_FIRFilter_parameters=type%3A3%3Bfc1%3A200.0%3Bfc2%3A3000.0&effect_FIRFilter_default=Default&effect_FIRFilter_help=Help&effect_JetPilot_selected=&effect_JetPilot_parameters=&effect_JetPilot_default=Default&effect_JetPilot_help=Help&HELP_TEXT=F0%20mean%20shifting%20effect%20for%20HMM%20voices%3A%0AShifts%20the%20mean%20F0%20value%20by%20%3Cf0Add%3E%20Hz%20for%20HMM%20voices.%0AParameter%3A%0A%20%20%20%3Cf0Add%3E%20%20%20Definition%20%3A%20F0%20shift%20of%20mean%20value%20in%20Hz%20for%20synthesized%20speech%20output%0A%20%20%20Range%20%20%20%20%20%20%3A%20%5B-300.0%2C300.0%5D%0AExample%3A%0Af0Add%3A50.0%3B&exampleTexts=&VOICE_SELECTIONS=cmu-slt-hsmm%20en_US%20female%20hmm&AUDIO_OUT=WAVE_FILE&LOCALE=en_US&VOICE=cmu-slt-hsmm&AUDIO=WAVE_FILE";
        },
        clear: function(txt) {
            return "http://mary.dfki.de:59125/process?INPUT_TYPE=TEXT&OUTPUT_TYPE=AUDIO&INPUT_TEXT="+encodeURIComponent(txt)+"&OUTPUT_TEXT=&effect_Volume_selected=&effect_Volume_parameters=amount%3A2.0%3B&effect_Volume_default=Default&effect_Volume_help=Help&effect_TractScaler_selected=on&effect_TractScaler_parameters=amount%3A1.1%3B&effect_TractScaler_default=Default&effect_TractScaler_help=Help&effect_F0Scale_selected=on&effect_F0Scale_parameters=f0Scale%3A3.0%3B&effect_F0Scale_default=Default&effect_F0Scale_help=Help&effect_F0Add_selected=on&effect_F0Add_parameters=f0Add%3A180.0%3B&effect_F0Add_default=Default&effect_F0Add_help=Help&effect_Rate_selected=&effect_Rate_parameters=durScale%3A1.5%3B&effect_Rate_default=Default&effect_Rate_help=Help&effect_Robot_selected=&effect_Robot_parameters=amount%3A100.0%3B&effect_Robot_default=Default&effect_Robot_help=Help&effect_Whisper_selected=&effect_Whisper_parameters=amount%3A100.0%3B&effect_Whisper_default=Default&effect_Whisper_help=Help&effect_Stadium_selected=&effect_Stadium_parameters=amount%3A100.0&effect_Stadium_default=Default&effect_Stadium_help=Help&effect_Chorus_selected=&effect_Chorus_parameters=delay1%3A466%3Bamp1%3A0.54%3Bdelay2%3A600%3Bamp2%3A-0.10%3Bdelay3%3A250%3Bamp3%3A0.30&effect_Chorus_default=Default&effect_Chorus_help=Help&effect_FIRFilter_selected=&effect_FIRFilter_parameters=type%3A3%3Bfc1%3A500.0%3Bfc2%3A2000.0&effect_FIRFilter_default=Default&effect_FIRFilter_help=Help&effect_JetPilot_selected=&effect_JetPilot_parameters=&effect_JetPilot_default=Default&effect_JetPilot_help=Help&HELP_TEXT=&exampleTexts=&VOICE_SELECTIONS=cmu-slt-hsmm%20en_US%20female%20hmm&AUDIO_OUT=WAVE_FILE&LOCALE=en_US&VOICE=cmu-slt-hsmm&AUDIO=WAVE_FILE";
        }
    }
    this.voice = this.voices.clear;
}

Speaker.prototype.useVoice = function(voice) {
    this.voice = this.voices[voice];
}
 
Speaker.prototype.speak = function(txt, callback) {
    this.finishCallback = callback||function() {};
    this.audio.src = this.voice(txt);  
    this.audio.load();
}
