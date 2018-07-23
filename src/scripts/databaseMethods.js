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
        value: (Id) => {
        return $.ajax((`http://localhost:3000/books/${Id}`))

        }
    },

    bookComplete: {
        value: (Id) => {
            return $.ajax({
                url: `http://localhost:3000/books/${Id}`,
                type: "PATCH",
                data: {
                    read: true
                }
            })
        }
    },

    // deleteBooks: {
    //     value: (id) => {
    //         return $.ajax({
    //             url: `http://localhost:3000/books/${id}`,
    //             method: "DELETE"
    //         })
    //     },

    //     putBook: {
    //         value: (id) => {
    //             $.ajax({
    //                 url: `http://localhost:3000/books/${id}`,
    //                 method: "PUT"})
}
)
module.exports = databaseMethods;