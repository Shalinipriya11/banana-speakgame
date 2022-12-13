var btnTranslate = document.querySelector("#btn-Translate")
var txtinput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverUrl + "?" + "text=" + text
}
function errorHandler(error) {
    console.log("error occured",error)
    alert("please try after a while")
}
function clickHandler(){

var inputText = txtinput.value 
fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
}
btnTranslate.addEventListener("click",clickHandler)