const $ = require("jquery")

const bookEditForm = Object.create({}, {
    bookEditForm: {
        value: (cardDivId) => {

            console.log(cardDivId)
            const mainDiv = document.getElementById(cardDivId);
            const $editFormDiv = $("<div>").attr("id", "editForm--div")
            const $pEl = $("<p>").appendTo($editFormDiv);
            const $bookTitleEdit = $("<input>").attr("id", "book-title-edit").appendTo($editFormDiv)
            $bookTitleEdit.val("Book TITLE")
            const $bookSumEdit = $("<input>").attr("id", "book-sum-edit").appendTo($editFormDiv)
            const $bookPagesEdit = $("<input>").attr("id", "book-pages-edit").appendTo($editFormDiv)
            const $saveEditBtn = $("<button>").attr("id", "save-btn").text("Save Edits").appendTo($editFormDiv)
            $editFormDiv.appendTo(mainDiv)
            

        }

    }
    })

module.exports = bookEditForm;
