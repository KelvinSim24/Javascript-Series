export const cart = [];


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
}