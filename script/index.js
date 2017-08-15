const container = document.querySelector('.sectionsContainer');


function addClass() {
    container.classList.toggle("visible-options");
    container.classList.toggle("visibility-none");
}

setTimeout(addClass, 20500);