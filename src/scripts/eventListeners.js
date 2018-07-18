const $ = require("jquery");
const welcome = require("./welcome")
const AddBookForm = require("./addBookForm")
const clear = require("./clear")
const databaseMethods = require("./databaseMethods")
const printToDOM = require("./printToDOM")

const body = document.querySelector(".main-div-container");
body.addEventListener("click", () => {
    if (event.target.id === "form-btn") {
        clear()
        AddBookForm.addBookForm();
    } else if (event.target.id === "bookSubmit") {
        console.log("Clicked Book Submit")
        //    const bTitle = $("#book-title").val()
        //    const bSum = $("#book-Sum").val()
        //    const bPages = ($("#book-pages").val())
        const $bookNameValue = document.getElementById("book-title").value;
        const $bookSumValue = document.getElementById("book-Sum").value;
        const $bookPagesValue = document.getElementById("book-pages").value

        const book = {
            bookTitle: $bookNameValue,
            bookSum: $bookSumValue,
            bookPages: $bookPagesValue

        }
        databaseMethods.addBook(book)
        printToDOM.addBookToDom()
    }
})