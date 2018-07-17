const $ = require("jQuery")


//I am creating an object "homePageObject" that will load when landing on the page.
const homePageObject = Object.create({}, {
    buildHome: {
    value:() => {
        //This selects the main div on the index.html
        const mainDiv = document.querySelector(".main--container");
        //Creating a main div under
        const $divMainPage = $("<div>").addClass("div-main");
        const $paraRef = $("<p>");

        const $h1WelcomeMain = $("<h1>").text("Welcome!");
        $h1WelcomeMain.attr("id", "h1WelcomeMain");
        
        //appends to DOM
        $divMainPage.appendTo(mainDiv);
    }
    }
    })

    //exports buildWelcome module
module.exports = homePageObject