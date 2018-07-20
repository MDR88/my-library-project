//Clears The DOM.

const clearBookShelf = () => {
    const container = document.querySelector("#bookShelfDiv");
    while (container.firstElementChild) {
        container.removeChild(container.firstElementChild);
    };
};

const clearAll = () => {
    const container = document.querySelector(".main-div-container");
    while (container.firstElementChild) {
        container.removeChild(container.firstElementChild);
    };
};

module.exports = {clearBookShelf, clearAll}