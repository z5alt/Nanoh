var downarrow = jQuery.Event("keyup");
// e.which is used to set the keycode
e.which = 38; // it is up
e.which = 40; // it is down
var keyd = window.event.keyCode;
function perioddown() {
    if (keyd === 190)
setTimeout(function(){
$("nano").trigger(downarrow);
return false;
 }, 1);
}
else {
return true;
 }
}