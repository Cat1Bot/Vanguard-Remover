(function() {
    Toast.error('Vanguard errors are disabled');
})();

(function() {
    const originalXHROpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
        if (url.includes("/lol-vanguard") || url.includes("/player-kicked-vanguard")) {
            return;
        }
        return originalXHROpen.apply(this, arguments);
    };
})();

let _xhrOriginalOpen = XMLHttpRequest.prototype.open;

XMLHttpRequest.prototype.open = function(_, url) {
    if (url === "/lol-service-status/v1/ticker-messages") {
        let originalSend = this.send;

        this.send = function(body) {
            let originalOnReadyStateChanged = this.onreadystatechange;

            this.onreadystatechange = function(ev) {
                if (this.readyState === 4) {
                    let originalContent = JSON.parse(this.responseText);

                    const customMessage = {
                        createdAt: "",
                        heading: "Vanguard Errors Disabled",
                        message: "You will not see VAN error popups. Do NOT try to play without vanguard - it could lead to permanent ban or kick from match.",
                        severity: "error",
                        updatedAt: ""
                    };

                    originalContent.push(customMessage);

                    const updatedContent = JSON.stringify(originalContent);

                    Object.defineProperty(this, 'responseText', {
                        writable: true,
                        value: updatedContent
                    });

                    return originalOnReadyStateChanged.apply(this, [ev]);
                }

                return originalOnReadyStateChanged.apply(this, arguments);
            };

            originalSend.apply(this, [body]);
        };
    }

    _xhrOriginalOpen.apply(this, arguments);
};
