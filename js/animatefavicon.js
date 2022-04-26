const linkElement = document.querySelector('link[rel=icon]');

setInterval(function(){
  linkElement.href = '1';
}, 1000);
setInterval(function(){
  linkElement.href = '2';
}, 1000);