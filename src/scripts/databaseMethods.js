const $ = require("jquery");

const databaseMethods = Object.create({}, {
    addBook: {
        value: (book) => {
            return $.ajax({
                url: "http://localhost:3000/books",
                method: "POST",
                data: book
            })
        }
    },

    getAllBooks: {
        value: () => {
            return $.ajax("http://localhost:3000/books")
        }
    },
    getBook: {
        value: (id) => {
            return $.ajax((`http://localhost:3000/books/${id}`))

        }
    },
    putBook: {
        value: (book, id) => {
            return $.ajax({
                url: `http://localhost:3000/books/${id}`,
                method: "PUT",
                data: {
                    bookTitle: book.bookTitle,
                    bookSum: book.bookSum,
                    bookPages: book.bookPages
                }
            })
        }
    },
    bookComplete: {
        value: (Id) => {
            return $.ajax({
                url: `http://localhost:3000/books/${Id}`,
                method: "PATCH",
                data: {
                    read: true
                }
                })
     } }
    // deleteBooks: {
    //     value: (id) => {
    //         return $.ajax({
    //             url: `http://localhost:3000/books/${id}`,
    //             method: "DELETE"
    //         })
    })
module.exports = databaseMethods;