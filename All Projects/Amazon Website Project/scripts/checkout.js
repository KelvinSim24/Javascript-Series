import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';
// import '../data/cart-class.js';
// import '../data/car.js';
// import '../data/backend-practice.js';

async function loadPage() {
    try {
        // throw 'error1';

        await loadProductsFetch();

        const value = await new Promise((resolve, reject) => {
            // throw 'error2'
            loadCart(() => {
                // reject('error3');
                resolve('value2');
            });
        });

    } catch (error) {
        console.log('Unexpected Error !!! Please try again later.')
    }
    renderCheckoutHeader();

    renderOrderSummary();

    renderPaymentSummary();
}
loadPage();


/* Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve('value2');
        });
    })

]).then((value) => {
    console.log(value);
    renderCheckoutHeader();

    renderOrderSummary();

    renderPaymentSummary();
});
 */

/* new Promise((resolve) => {
    loadProducts(() => {

        resolve('value1');
    });


}).then((value) => {

    console.log(value);
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });


}).then((value) => {

    renderCheckoutHeader();

    renderOrderSummary();

    renderPaymentSummary();
}); */


/* loadProducts(() => {
    loadCart(() => {
        renderCheckoutHeader();

        renderOrderSummary();

        renderPaymentSummary();
    });
})
 */




