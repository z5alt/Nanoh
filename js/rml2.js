// define a handler
function doc_keyUp(e) {

    // this would test for whichever key is 40 (down arrow) and the ctrl key at the same time
    if (e.ctrlKey && e.key === 'k') {
        // call your function to do the thing
        removeLine();
    }
}
// register the handler 
document.addEventListener('keyup', doc_keyUp, false);