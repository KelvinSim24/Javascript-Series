function Cart(localStorageKey) {
    const cart = {
        cartItems: undefined,

        loadFromStorage() {
            this.cartItems = JSON.parse(localStorage.getItem('localStorageKey'));

            if (!this.cartItems) {
                this.cartItems = [{
                    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                    quantity: 2,
                    deliveryOptionId: '1'
                }, {
                    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                    quantity: 1,
                    deliveryOptionId: '2'
                }];
            };
        },
        saveToStorage() {
            localStorage.setItem('localStorageKey', JSON.stringify(this.cartItems));
        },

        addToCart(productId) {
            let matchingItem;

            this.cartItems.forEach((cartItem) => {
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
                this.cartItems.push({
                    productId,
                    quantity: selectorNumber,
                    deliveryOptionId: '1'
                });
            }

            this.saveToStorage();
        },

        removeFromCart(productId) {
            const newCart = [];

            this.cartItems.forEach((cartItem) => {
                if (cartItem.productId !== productId) {
                    newCart.push(cartItem);
                }
            });

            this.cartItems = newCart;

            this.saveToStorage();
        },

        calculateCartQuantity() {
            let cartQuantity = 0;

            this.cartItems.forEach((cartItem) => {
                cartQuantity += cartItem.quantity;
            })

            return cartQuantity;
        },
        updateQuantity(productId, newQuantity) {

            let matchingItem;

            this.cartItems.forEach((cartItem) => {
                if (productId === cartItem.productId) {

                    matchingItem = cartItem;
                }
            });

            matchingItem.quantity = newQuantity;

            this.saveToStorage();
        },
        updateDeliveryOption(productId, deliveryOptionId) {
            let matchingItem;

            this.cartItems.forEach((cartItem) => {
                if (productId === cartItem.productId) {

                    matchingItem = cartItem;
                }
            });

            matchingItem.deliveryOptionId = deliveryOptionId;

            this.saveToStorage();
        }
    };

    return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business-oop');



cart.loadFromStorage();





businessCart.loadFromStorage();


console.log(cart);
console.log(businessCart);





