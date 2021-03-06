// Set our variables - which includes HTML elements and API links & empty strings
var modalBtn = document.querySelector(".modal-close");
var modalActive = document.querySelector(".modal");
var apiUrl = 'https://randomfox.ca/floof/';
var apiTwoUrl = "https://openlibrary.org/search.json?q=cat+fox";
var apiCall = "";
var book = "";
var keyWord = document.getElementById("text-input");
var submitBtn = document.getElementById("submit-btn");
var bookLink = document.getElementById("book-link");

// Changes link text to include the users inputted term
function setText() {
    if (localStorage.length != 0) {
        apiCall = apiTwoUrl + "+" + localStorage.getItem("term");
        bookLink.textContent = "cat, fox and " + localStorage.getItem("term") + " book.";
        randBook()
        document.getElementById("book-link").href = localStorage.getItem("book");;
    } else {
        bookLink.textContent = "cat and fox book."
    }
}

// Fetching a book about cats, foxes & the users inputted term and returning a link to book
function randBook() {
    fetch(apiCall)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var i = Math.floor(Math.random() * (data.docs.length + 1))
            var work = data.docs[i].key;
            book = "https://openlibrary.org" + work;
            localStorage.setItem("book", book);
        });
}

// Fetching data from the fox API and using GetElelmentById to select the HTMl element and display the data on the webpage 
function randomImg() {
    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById("fox-img").src = data.image;
        })

}

// Gets the users term and saves to the local storage
function saveKeyWord() {
    if (keyWord.value !== "") {
        localStorage.setItem("term", keyWord.value);
        setText();
        modalActive.classList.remove("is-active");
    }
}

// Turns off the modal
modalBtn.addEventListener("click", function () {
    modalActive.classList.remove("is-active");
});

// Calling randomImg function; when user clicks "submit", run saveKeyWord function
randomImg()
submitBtn.addEventListener("click", saveKeyWord);

