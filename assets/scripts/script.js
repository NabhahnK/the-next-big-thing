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
        modalActive.classList.remove("is-active");
    }
}

modalBtn.addEventListener("click", function () {
    modalActive.classList.remove("is-active");
});

 fetch('https://cataas.com/cat')
    .then(res => console.log(res))

submitBtn.addEventListener("click", saveKeyWord);

