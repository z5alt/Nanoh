function checkForBackquote() {
    var key = window.event.keyCode;
    // If the user has pressed backquote (' ` ')
    if (key === 192) {
openCommandLine()
        return false;
    }
    else {
        return true;
    }
}