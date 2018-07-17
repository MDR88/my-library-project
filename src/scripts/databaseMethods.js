const $ = require("jquery");

const databaseMethods = Object.create( {}, {
    addBooks: {
        value: (articles) => {
            return $.ajax({
                url: "http://localhost:3000/books",
                method: "POST",
                data: books
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
            return $.ajax(`http://localhost:3000/books/${id}`)
        }
    },

    deleteBooks: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/books/${id}`,
                method: "DELETE"
            })
        },

        putBook: {
            value: (id) => {
                $.ajax({
                    url: `http://localhost:3000/books/${id}`,
                    method: "PUT"
                })
            }
    },













}


)