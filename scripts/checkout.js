import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/cart-class.js'
// import '../data/backend-practice.js'
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";


async function loadPage() {

  await loadProductsFetch();

  const value = await new Promise((resolve) => {
        loadCart(() => {
          resolve('value3');
        });
      })

  renderPaymentSummary();
  renderOrderSummary();

}
loadPage();


// Promise.all([
//   loadProductsFetch(),
//   new Promise((resolve) => {
//     loadCart(() => {
//       resolve();
//     });
//   })

// ]).then((values) => {
//   console.log(values);
//   renderPaymentSummary();
//   renderOrderSummary();
// });

// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve();
//   });
// }).then(() => {
//   renderPaymentSummary();
//   renderOrderSummary();
// })

// loadProducts(() => {
//   loadCart(() => {
//     renderPaymentSummary();
//     renderOrderSummary();
//   })
// })