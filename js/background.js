chrome.commands.onCommand.addListener(function(command) {
    var _command = command;
    chrome.tabs.query({}, function(tabs) {
        var message = {command: _command};
        for (var i=0; i<tabs.length; ++i) {
            chrome.tabs.sendMessage(tabs[i].id, message);
        }
    });  
});