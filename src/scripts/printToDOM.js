const AddBookForm = require("./addBookForm")
const clear = require("./clear")
const databaseMethods = require("./databaseMethods")
const $ = require("jquery")

const addBookToDOM = Object.create({}, {
    addBookToDom: {
        value: () => {

            databaseMethods.getAllBooks().then((books) => {
                books.forEach(book => { console.log(book)
                const $cardDiv = $("<div>").attr("class", "cardDiv")
                const $h1Title = $("<h1>").addClass("h1Title").text(`${book.bookTitle}`).appendTo($cardDiv)
                const $pElPages = $("<p>").addClass("pElPages").text(`${book.bookPages}`).appendTo($cardDiv)
                const $pElSum = $("<p>").addClass("pElSum").text(`${book.bookSum}`).appendTo($cardDiv)
                const $checkBox = $("<input />").attr("type", "checkbox").attr("id", "checkBox").appendTo($cardDiv)
                console.log("CHECK BOX ", $checkBox)
                $cardDiv.appendTo($(".main-div-container"))





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