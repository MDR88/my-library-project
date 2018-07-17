const $ = require("jquery")


//I am creating an object "homePageObject" that will load when landing on the page.
const homePageObject = Object.create({}, {
    buildHome: {
    value:() => {
        //This selects the main div on the index.html
        const mainDiv = document.querySelector(".main-div-container");
        console.log("main div", mainDiv)
        //Creating a main div under mainDiv
        const $divMainPage = $("<div>").addClass("div-main");
        const $paraEl = $("<p>");

        const $formBtn = $("<button>").attr("id", "form-btn").text("Click To Add Your Book Title");
        // //H2 Text Title saying welcome please add your book title on the main page.
        // const $mainPageTitle = $("<h2>").text("Welcome! Please add The Title Of Your");
        // $mainPageTitle.attr("id", "mainPageTitle");


        //appends to DOM
        $divMainPage.appendTo(mainDiv);
        $paraEl.appendTo($divMainPage);
        $formBtn.appendTo($paraEl);
    }
    }
    })

    //exports buildWelcome module
module.exports = homePageObject