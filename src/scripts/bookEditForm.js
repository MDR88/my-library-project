const $ = require("jquery")

const bookEditForm = Object.create({}, {
    bookEditForm: {
        value: (bookId) => {

            console.log(bookId)
            const mainDiv = document.getElementById(`Book--${bookId.id}`);
            const $editFormDiv = $("<div>").attr("id", "editForm--div")
            const $pEl = $("<p>").appendTo($editFormDiv);
            const $bookTitleEdit = $("<input>").attr("id", "book-title-edit").appendTo($editFormDiv)
            $bookTitleEdit.val(bookId.bookTitle)
            const $bookSumEdit = $("<input>").attr("id", "book-sum-edit").appendTo($editFormDiv)
            $bookSumEdit.val("Edit Book Summary")
            const $bookPagesEdit = $("<input>").attr("id", "book-pages-edit").appendTo($editFormDiv)
            $bookPagesEdit.val("Edit Book Pages")
            const $saveEditBtn = $("<button>").addClass("save-btn").text("Save Edits").appendTo($editFormDiv)
            $editFormDiv.appendTo(mainDiv)
            

        }

    }
    })

module.exports = bookEditForm;
