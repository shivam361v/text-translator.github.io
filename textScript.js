//Defining buttons html elements in javascript

var inputxt = document.querySelector("#input-box");
var outputxt = document.querySelector("#output-box");
var btn = document.querySelector("#translate-btn");

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

// //Creating URL for the server
// function getTranslatorURL(input)
// {
//     return serverURl + "?" + "text=" + input;
// }

// //Handling invalid response from server
// function errorHandler(error)
// {
//     console.log("Server error", error);
//     alert("Something went wrong");
// }

// function clickHandler()
// {
// //  Input  Text
//     var inputText = inputxt.value;

// //Fetch request to API and get response
//     fetch(getTranslatorURL(inputText))
//     .then(response => response.json())
//     .then(json => 
//         {
//             var translatedText = json.contents.translated
// // output
//             outputxt.innerText = translatedText; 
//         })
//     .catch(errorHandler)
// };
// //  Calling to the server
// btn.addEventListener("click", clickHandler)


//var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function clickHandler() {
    var inputText = inputxt.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => 
            {
                var translatedText = json.contents.translated;
                outputxt.innerText = translatedText; 
    // output
            })
        .catch(errorHandler)
};

btn.addEventListener("click", clickHandler)