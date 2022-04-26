function nanosave() {
    var name = document.getElementById('nano');
    var nano = document.getElementById('nano');
    var data = nano.value;
    nano.value = nano.value.replaceAll(nano.value, "test");
    var name = document.getElementById('nano');
    var textarea = document.getElementById('nano');
    var data = nano.value;
//    nano.value = nano.value.replaceAll(nano.value, "Success!");
//    nano.value = nano.value.replaceAll(nano.value, "success..");
    var val = $.trim($("nano").val());
    if (val != "") {
        alert("Oops! This text has nothing available. Please input some text!");
    }
} 