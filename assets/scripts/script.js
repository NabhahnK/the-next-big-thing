var modalBtn = document.querySelector(".modal-close");
var modalActive = document.querySelector(".modal");
var apiUrl = 'https://cataas.com/cat'
var keyWord = document.getElementById("text-input");
var submitBtn = document.getElementById("submit-btn");

function saveKeyWord() {
    localStorage.setItem("term", keyWord.value);
}

modalBtn.addEventListener("click", function() {
    modalActive.classList.remove("is-active");
});

function getapi(apiUrl)
    responce = fetch(apiUrl)
    var data = responce.json();
    console.log(data);


    getapi(apiUrl);

// fetch('https://cataas.com/cat', {
// })
    // .then(function (responce) {
        // return responce.json();
    // })
    // .then(function (data) {
        // console.log(data);
    // })

submitBtn.addEventListener("click", saveKeyWord);

fetch ("")
