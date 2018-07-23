const $ = require("jquery");
const welcome = require("./welcome")
const AddBookForm = require("./addBookForm")
const clear = require("./clear")
const databaseMethods = require("./databaseMethods")
const printToDOM = require("./printToDOM")

//Selects the class of the main div.
const body = document.querySelector(".main-div-container");
//If the button with the ID "form-btn" is clicked then it will clear and add the AddBookForm.addBook form object on the AddBookForm module.
body.addEventListener("click", () => {
  
    if (event.target.id === "form-btn") {
        clear.clearAll()
        AddBookForm.addBookForm();

//If the button with the ID 'bookSubmit' is clicked it will capture the values of the three input fields.
    } else if (event.target.id === "bookSubmit") {
        console.log("Clicked Book Submit!!!")
        //    const bTitle = $("#book-title").val()
        //    const bSum = $("#book-Sum").val()
        //    const bPages = ($("#book-pages").val())
        const $bookNameValue = document.getElementById("book-title").value;
        const $bookSumValue = document.getElementById("book-Sum").value;
        const $bookPagesValue = document.getElementById("book-pages").value
        //After the input fields are captured it puts the values that are stored in a varible "$bookNameValue, BookSum Valule and Book Pages in an object called BOOK".
        //Next the book
        const book = {
            bookTitle: $bookNameValue,
            bookSum: $bookSumValue,
            bookPages: $bookPagesValue

        }
        
        databaseMethods.addBook(book).then((response) => {
            clear.clearBookShelf()
            printToDOM.addBookToDom()
            // welcome.buildHome()

        }) 
        
    }
})
    const bookShelf = document.querySelector("#bookShelfDiv");
bookShelf.addEventListener("click", () => {

    if (event.target.className === "checkBox") {
        console.log("checkBox")
     databaseMethods.bookComplete(event.target.parentNode.id).then(()=> {
        clear.clearBookShelf()
        printToDOM.addBookToDom()
     })   
    } else if (event.target.className === "h1Title") {
        console.log("clicked Title", event.target.parentNode.id)

        databaseMethods.getBook(event.target.parentNode.id)
        .then ( (book) => {
        console.log("books!", book)
        })
        
        

    }
})



