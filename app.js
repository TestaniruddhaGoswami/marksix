var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output")

var serverURL = "https://api.funtranslations.com/translate/minion.json";
function getTranslationURL(text){
    return serverURL + "?" + "text=" + text; 
}

function errorHandling(error){
    
  document.querySelector("#txt-message").textContent = "Uh oh,Go back to where it all began,Try again later";
}

function translateEvent() {

    

    var Inputtext = txtInput.value
    
    fetch(getTranslationURL(Inputtext))
        .then(response => response.json())
        .then(json =>{
            var translatedText = json.contents.translated;
            txtOutput.innerHTML = translatedText;
        })
        .catch(errorHandling)


}

btnTranslate.addEventListener("click", translateEvent)