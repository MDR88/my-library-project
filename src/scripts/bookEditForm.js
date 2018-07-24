//Author Michael Roberts
//Purpose: This s a function inside of an object 

const $ = require("jquery")

const bookEditForm = Object.create({}, {
    bookEditForm: {
        value: (bookId) => {

            console.log(bookId)

            // captures the ID of the book using string interpolation to add the text BOOK in front of the ID.
            const mainDiv = document.getElementById(`Book--${bookId.id}`);

            //created a div that will hold the form fields. This appends to the maindiv or bookID.
            const $editFormDiv = $("<div>").attr("id", "editForm--div")
            const $pEl = $("<p>").appendTo($editFormDiv);

            //Creates the input field and gives it an ID.
            const $bookTitleEdit = $("<input>").attr("id", "book-title-edit").appendTo($editFormDiv)

            //The value of the book Title Input field being displayed through the input field with the ID of bookSum.
            $bookTitleEdit.val(bookId.bookTitle)

            // Creates the book summary input field. This appends to the edit form div. 
            const $bookSumEdit = $("<input>").attr("id", "book-sum-edit").appendTo($editFormDiv)
            //The value of the Book Summary 
            $bookSumEdit.val(bookId.bookSum)
            const $bookPagesEdit = $("<input>").attr("id", "book-pages-edit").appendTo($editFormDiv)
            $bookPagesEdit.val(bookId.bookPages)
            const $saveEditBtn = $("<button>").addClass("save-btn").text("Save Edits").appendTo($editFormDiv)
            $editFormDiv.appendTo(mainDiv)
            

        }

    }
    })

module.exports = bookEditForm;
