function saveas() {
	if (promptFilename = prompt("File name", "")) {
		var textBlob = new Blob([document.getElementById("nano").value], {type:'text/plain'});
		var downloadLink = document.createElement("a");
		downloadLink.download = promptFilename;
		downloadLink.innerHTML = "Download File";
		downloadLink.href = window.URL.createObjectURL(textBlob);
		downloadLink.click();
    delete downloadLink;
    delete textBlob;
	}
}

document.getElementById("save").onclick = saveas;