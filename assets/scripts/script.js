var modalBtn = document.querySelector(".modal-close");
var modalActive = document.querySelector(".modal");
var keyWord = document.getElementById("text-input");
var submitBtn = document.getElementById("submit-btn");

function saveKeyWord() {
    localStorage.setItem("term", keyWord.value);
}

modalBtn.addEventListener("click", function() {
    modalActive.classList.remove("is-active");
});

submitBtn.addEventListener("click", saveKeyWord);

fetch ("")
