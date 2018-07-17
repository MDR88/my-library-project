const $ = require("jquery");
const welcome = require("./welcome")
const AddBookForm = require("./addBookForm")
const clear = require("./clear")

const body = document.querySelector(".main-div-container");
body.addEventListener("click", () => {
    if (event.target.id === "form-btn") {
        clear()
        AddBookForm.addBookForm();
    } else if (event.target.id === "bookSubmit") {
        console.log("Clicked Book Submit")
       const bTitle = $("#book-title").val()
       const bSum = $("#book-Sum").val()
       const bPages = ($("#book-pages").val())


    }
})