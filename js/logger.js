(function() {
    var loggerContainer = document.createElement("div");
    var logger = document.createElement("div");

    loggerContainer.appendChild(logger);

    var appendLine = function(str) {
        logger.innerHTML += "<div>" + str + "</div>";
        logger.scrollTop = 999999999;

        if(logger.offsetHeight - 50 > window.innerHeight) {
            logger.removeChild(logger.childNodes[0]);
        }
    }

    var overrideConsole = function() {
        var original = window.console
        window.console = {
            log: function(){
                appendLine(arguments[0]);
                original.log.apply(original, arguments);
            }
            , warn: function(){
                appendLine(arguments[0]);
                original.warn.apply(original, arguments);
            }
            , error: function(){
                appendLine(arguments[0]);
                original.error.apply(original, arguments);
            }
            , debug: function() {
                appendLine(arguments[0]);
                original.debug.apply(original, arguments);
            }
        }
    }

    logger.id = "logger";
    logger.className = "logger";

    document.body.appendChild(loggerContainer);

    overrideConsole();
})();