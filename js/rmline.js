document.onkeyup=function(e){
		var e = e || window.event; // for IE to cover IEs window object
    if(e.altKey && e.which == 88) {
         alert('Keyboard shortcut working!');
         return false;
    }
}