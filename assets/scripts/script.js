var modalBtn = document.querySelector(".modal-close");
var modalActive = document.querySelector(".modal");
var apiUrl = 'https://cataas.com/cat'
var keyWord = document.getElementById("text-input");
var submitBtn = document.getElementById("submit-btn");

function setText() {
    if (localStorage.length != 0) {
    }
}

function saveKeyWord() {
    if (keyWord.value != "") {
        localStorage.setItem("term", keyWord.value);
        setText();
    }
}

modalBtn.addEventListener("click", function () {
    modalActive.classList.remove("is-active");
});

// function getapi(apiUrl)
//     responce = fetch(apiUrl)
//     var data = responce.json();
//     console.log(data);


//     getapi(apiUrl);

// fetch('https://cataas.com/cat', {
// })
// .then(function (responce) {
// return responce.json();
// })
// .then(function (data) {
// console.log(data);
// })

submitBtn.addEventListener("click", saveKeyWord);

// fetch ("")
