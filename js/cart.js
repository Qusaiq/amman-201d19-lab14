/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();

  const itemCount = document.getElementById('itemCount');
  if (!cart.items.length - 1) {
    itemCount.textContent = ` (${cart.items.length})`;
  } else {
    itemCount.textContent = ``;
  }
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let table = document.getElementById('cart');
  let tableRows = table.getElementsByTagName('tr');
  let rowCount = tableRows.length;

  for (let i = rowCount - 1; i > 0; i--) {
    table.removeChild(tableRows[i]);
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  let table = document.getElementById('cart');

  // TODO: Iterate over the items in the cart
  for (let i = 0; i < cart.items.length; i++) {
    // TODO: Create a TR
    let tr = document.createElement('tr');

    // TODO: Create a TD for the delete link, quantity,  and the item
    let deletedTd = document.createElement('td');
    deletedTd.textContent = 'X';
    deletedTd.id = i;

    let quantityTd = document.createElement('td');
    quantityTd.textContent = cart.items[i].quantity;

    let addedTd = document.createElement('td');
    addedTd.textContent = cart.items[i].product;

    // TODO: Add the TR to the TBODY and each of the TD's to the TR

    table.appendChild(tr);
    tr.appendChild(deletedTd);
    tr.appendChild(quantityTd);
    tr.appendChild(addedTd);
  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  cart.removeItem(event.target.id);
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  renderCart();

}
// This will initialize the page and draw the cart on screen
renderCart();