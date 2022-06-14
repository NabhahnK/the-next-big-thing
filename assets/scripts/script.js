var modalBtn = document.querySelector(".modal-close");
var modalActive = document.querySelector(".modal");
var apiUrl = 'https://cataas.com/cat';
var apiTwoUrl = "http://openlibrary.org/search.json?q=cat+fox";
var apiCall = "";
var book = "";
var keyWord = document.getElementById("text-input");
var submitBtn = document.getElementById("submit-btn");
var bookLink = document.getElementById("book-link");

function setText() {
    if (localStorage.length != 0) {
        apiCall = apiTwoUrl + "+" + localStorage.getItem("term");
        console.log(apiCall);
        bookLink.textContent = "cat, fox and " + localStorage.getItem("term") + " book.";
        randBook()
        document.getElementById("book-link").href = localStorage.getItem("book");;
    } else {
        bookLink.textContent = "cat and fox book."
    }
}

function randBook() {
    fetch(apiCall)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log('Open libray Search: Raw data \n----------');
        console.log(data);
        var i = Math.floor(Math.random() * (data.docs.length + 1))
        var work= data.docs[i].key;
        book = "http://openlibrary.org" + work;
        localStorage.setItem("book", book);
    });
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

function randomImg() {
 fetch (apiUrl) 
 .then(function(response) {
        return response.json();
     })
    .then(function (data) {
        console.log(data);
        var i
    })};


submitBtn.addEventListener("click", saveKeyWord);

