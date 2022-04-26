function catchtextvariable() {
var input = document.getElementById("nano").value;
var result = input.substring(5);
var split = result.split("\n");
var textcaught = split[0];
if (textcaught === void 0) {
  console.log(`textcaught is undefined`)
} else {
  console.log(`textcaught is defined`)
  nanosave()
}
}