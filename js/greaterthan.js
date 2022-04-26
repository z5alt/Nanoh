function onTestChange() {
    var key = window.event.keyCode;
    var archmode = true;

    // If the user has pressed enter
    if (key === 13) {
     if (archmode === true) {
     setTimeout(function(){
        document.getElementById("nano").value = document.getElementById("nano").value + "[user1@archlinux -]$  ";
        return false;
     }, 1);
   }
    }
    else {
        return true;
    }
}