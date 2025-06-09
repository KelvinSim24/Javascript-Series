export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart) {
    cart = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2
    }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1
    }
    ];
}

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {

            matchingItem = cartItem;
        }
    });

    /* This is to make sure the dropbox of PRODUCT selected number works FINE */
    const selectorNumber = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
    console.log(selectorNumber);
    console.log(typeof selectorNumber);

    if (matchingItem) {
        matchingItem.quantity += selectorNumber;
    } else {
        cart.push({
            productId,
            quantity: selectorNumber
        });
    }

    saveToStorage();
}

export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStorage();
}