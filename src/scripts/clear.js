//Clears The DOM.

const clear = () => {
    const container = document.querySelector(".main-div-container");
    while (container.firstElementChild) {
        container.removeChild(container.firstElementChild);
    };
};

module.exports = clear;