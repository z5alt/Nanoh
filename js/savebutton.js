$('#mybutton').click(function(){
     var data = $('#nano').val();
     this.href = "data:text/plain;charset=UTF-8,"  + encodeURIComponent(data);
});