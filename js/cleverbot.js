var Cleverbot = function() {
    this.state = "";
    this.url = "//cleverbot-server.herokuapp.com/write";
}

Cleverbot.prototype.restart = function() {
    this.state = "";
}

Cleverbot.prototype.speak = function(text, callback) {
    var self = this;
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": this.url,
        "method": "POST",
        "headers": {
            "content-type": "application/json",
        },
        "processData": false,
        "data": JSON.stringify({
            message: text,
            state: this.state
        })
    }

    $.ajax(settings).done(function (response) {
        self.state = response.state;
        callback(response.response);
    });
}
