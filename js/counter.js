const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('.items__current');

window.addEventListener("click", function(event) {
    let counter;
    if (event.target.dataset.action === "plus" || event.target.dataset.action === "minus") {
        const counterWrapper = event.target.closest(".counter-wrapper")
        counter = counterWrapper.querySelector(".items__current")
    }

    if (event.target.dataset.action === "plus") {
        counter.innerHTML = ++counter.innerHTML
    }
    if (event.target.dataset.action === "minus") {
        if (counter.innerHTML > 1) {
            counter.innerHTML = --counter.innerHTML
        }
    }
})