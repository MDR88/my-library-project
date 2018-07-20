const AddBookForm = require("./addBookForm")
const clear = require("./clear")
const databaseMethods = require("./databaseMethods")
const $ = require("jquery")

//Created an object that accessess the databaseMethods then get's all books, then a for each loop to go through and will write each value to the dom.
const addBookToDOM = Object.create({}, {
    addBookToDom: {
        value: () => {

            const bookSHelfDiv = document.querySelector("#bookShelfDiv")
            databaseMethods.getAllBooks().then((books) => 
        
            
            {
               
                books.forEach(book => {
                    if (!book.read) {
                    const $cardDiv = $("<div>").addClass("cardDiv").attr("Id",`${book.id}` )
                    const $h1Title = $("<h1>").addClass("h1Title").text(`${book.bookTitle}`).appendTo($cardDiv)
                    const $pElPages = $("<p>").addClass("pElPages").text(`${book.bookPages}`).appendTo($cardDiv)
                    const $pElSum = $("<p>").addClass("pElSum").text(`${book.bookSum}`).appendTo($cardDiv)
                    const $checkBoxLabel = $("<label>").text("Click When Read").appendTo($cardDiv)
                    const $checkBox = $("<input />").attr("type", "checkbox").addClass("checkBox").appendTo($cardDiv)
                    $cardDiv.appendTo(bookSHelfDiv)
                    }
                    //     const bTitle = $("#book-title").val()
                    //     const bSum = $("#book-Sum").val()
                    //     const bPages = ($("#book-pages").val())
                    //     console.log(getAllBooks)
                })
            }
            )
        }
    }
})
module.exports = addBookToDOM;