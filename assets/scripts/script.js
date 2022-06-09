var modalBtn = document.querySelector(".modal-close");
var modalActive = document.querySelector(".modal");
var keyWord = document.getElementById("text-input");
var submitBtn = document.getElementById("submit-btn");

modalBtn.addEventListener("click", function() {
    modalActive.classList.remove("is-active");
});

fetch ("")
