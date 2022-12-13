var btnTranslate = document.querySelector("#btn-Translate")
var txtinput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output");

function clickHandler(){
 outputDiv.innerText = "ahhhdhdhdhd  "  + txtinput.value;
}
btnTranslate.addEventListener("click",clickHandler)