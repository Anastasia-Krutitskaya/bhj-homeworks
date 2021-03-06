Array.from(document.querySelectorAll('.product__quantity-control')).forEach(item => {
    item.addEventListener('click', () => {
        let quantityNumber = +item.closest('.product__quantity-controls').querySelector('.product__quantity-value').innerHTML;
        if (item.classList.contains('product__quantity-control_dec')) {
            console.log('-')
            quantityNumber = quantityNumber - 1;
            item.closest('.product__quantity-controls').querySelector('.product__quantity-value').innerHTML = quantityNumber;
        } else if (item.classList.contains('product__quantity-control_inc')) {
            quantityNumber = quantityNumber + 1;
            item.closest('.product__quantity-controls').querySelector('.product__quantity-value').innerHTML = quantityNumber;
        }
        if (quantityNumber < 1 ) {
            item.closest('.product__quantity-controls').querySelector('.product__quantity-value').innerHTML = '1';
        }
    })
})

const cart = document.querySelector('.cart__products');
Array.from(document.querySelectorAll('.product__add')).forEach(item => {
    const product = item.closest('.product');
    item.addEventListener('click', () => {
        let found = Array.from(cart.querySelectorAll('.cart__product')).find(elem => 
            elem.dataset.id === product.dataset.id
        )
        
        if (found) {
            const add = +product.querySelector('.product__quantity-value').innerHTML;
            let cartQuantity = +found.querySelector('.cart__product-count').innerHTML;
            cartQuantity = cartQuantity + add;
            found.querySelector('.cart__product-count').innerHTML = cartQuantity;
        } else {
            cart.innerHTML += 
            `<div class="cart__product" data-id="${product.getAttribute('data-id')}">
                <img class="cart__product-image" src="${product.querySelector('.product__image').getAttribute('src')}">
                <div class="cart__product-count">${product.querySelector('.product__quantity-value').innerHTML}</div>
            </div>`
        }


    })
})