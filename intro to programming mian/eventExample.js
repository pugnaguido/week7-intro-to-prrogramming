/*function assButton() {
    var inputElement = document.createElement("input");
    inputElement.setAttribute("type", "button");
    inputElement.setAttribute("value", "New Button");

    var parent = document.getElementById("memeParagrapgh");
    parent.appendChild(inputElement);

    var newParagraph  = document.createElement("p");

    var paragraphText = document.createTextNode("New Paragraph");

    newParagraph.appendChild(paragraphText);
    parent.appendChild(newParagraph);
}*/
function addButtons() {
    console.log("Adding Buttons!");

    let inputElementStart = document.createElement("input");
    inputElementStart.setAttribute("type", "button");
    inputElementStart.setAttribute("value", "start");
    inputElementStart.setAttribute("id", "startButton");
    inputElementStart.setAttribute("onclick", "startButton()");


    let inputElementStop = document.createElement("input");
    inputElementStop.setAttribute("type", "button");
    inputElementStop.setAttribute("value", "stop");
    inputElementStop.setAttribute("id", "stopButton");
    inputElementStop.setAttribute("onclick", "stopButton()");
    inputElementStop.setAttribute("disabled", "true");

    let parent = document.getElementById("memeParagraph");
    parent.appendChild(inputElementStart);
    parent.appendChild(inputElementStop);
}

function startButton() {
    console.log("pressed Sart!");
    let inputElementStart = document.getElementById("startButton");
    inputElementStart.setAttribute("disabled", "true");

    let inputElementStop = document.getElementById("stopButton");
    inputElementStop.removeAttribute("disabled");

    let memeImage = document.getElementById("memeImage")
    memeImage.style.animationDuration = "3s";

}

function stopButton() {
    console.log("pressed stop");
    let inputElementStart = document.getElementById("startButton");
    inputElementStart.removeAttribute("disabled");

    let inputElementStop = document.getElementById("stopButton");
    inputElementStop.setAttribute("disabled", "true");
    
    let memeImage = document.getElementById("memeImage")
    memeImage.style.animationDuration = "0s";

}