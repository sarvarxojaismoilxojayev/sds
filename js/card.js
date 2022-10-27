let cartWrapper = document.querySelector('.cart-wrapper');
let cartButton = document.querySelectorAll('[data-cart]');

cartButton.forEach(function(item) {
    item.addEventListener('click', function() {
        let card = this.closest('.card');
        let id = card.dataset.id
        let counterElement = card.querySelector(".items__current");
        let counter = card.querySelector(".items__current").innerHTML;
        let itemInCart = cartWrapper.querySelector(`[data-id="${id}"]`)

        if (itemInCart) {
            let counterElement = itemInCart.querySelector(".items__current")
            counterElement.innerHTML = parseInt(counterElement.innerHTML) + parseInt(counter)
        } else {
            let imgSrc = card.querySelector('.product-img').getAttribute('src')
            let title = card.querySelector('.item-title').innerHTML
            let itemsinBox = card.querySelector('[data-items-in-box]').innerHTML
            let weight = card.querySelector('.price-weight').innerHTML
            let price = card.querySelector('.price-current').innerHTML

            let cartItemHTML = `
            <div class="cart-item" data-id="${id}">
            <div class="cart-item__top">
                <div class="cart-item__img">
                    <img src="${imgSrc}" alt="">
                </div>
                <div class="cart-item__desc">
                    <div class="cart-item__title">${title}</div>
                    <div class="cart-item__title">${itemsinBox} / ${weight}.</div>
                    <div class="cart-item__details">
                        <div class="items items--small counter-wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <div class="items__current">${counter}</div>
                            <div class="items__control" data-action="plus">+</div>
                        </div>
                        <div class="price">
                            <div class="price-current">${price}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `
            cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML)


        }
        toggleCartStatu();
        counterElement.innerHTML = 1;
    })
})

function toggleCartStatu() {
    if (cartWrapper.querySelectorAll(".cart-item").length > 0) {
        document.querySelector('[data-cart-empty]').classList.add('none')
        document.querySelector('.cart-total').classList.remove('none')
        document.querySelector('#order-form').classList.remove('none')
    } else {
        document.querySelector('[data-cart-empty]').classList.remove('none')
        document.querySelector('.cart-total').classList.add('none')
        document.querySelector('#order-form').classList.add('none')
    }

    let totalPrice = 0
    cartWrapper.querySelectorAll('.cart-item').forEach(function(item) {
        let counter = item.querySelector('.items__current').innerHTML;
        let priceOneitem = item.querySelector('.price-current').innerHTML
            // console.log(counter);
            // console.log(priceOneitem);
        let price = parseInt(counter) * parseInt(priceOneitem)
        console.log(price);
        totalPrice = totalPrice + price
    })

    // console.log(totalPrice);
    document.querySelector('.total-price').innerHTML = totalPrice

}