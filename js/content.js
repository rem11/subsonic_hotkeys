function inject(_window, code) {
    var script = _window.document.createElement('script');
    script.textContent = code;
    (_window.document.head||_window.document.documentElement).appendChild(script);
    script.parentNode.removeChild(script);
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        var _window = window.playQueue;
        if (!_window) return;
        if (request.command == "play_pause") {
            inject(_window, "window.jwplayer().play()");
        } else if (request.command = "next_track") {
            inject(_window, "window.onNext()");
        } else if (request.command = "previous_track") {
            inject(_window, "window.onPrevious()");
        }
    }
);