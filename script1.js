const cartItems = {};
const cartTable = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

// Добавление товара в корзину
document.querySelectorAll('.add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);

    if (cartItems[name]) {
      cartItems[name].quantity += 1;
    } else {
      cartItems[name] = { price, quantity: 1 };
    }

    updateCart();
  });
});

// Обновление корзины
function updateCart() {
  cartTable.innerHTML = '';
  let total = 0;

  for (const [name, item] of Object.entries(cartItems)) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${name}</td>
      <td>${item.price} грн</td>
      <td>${item.quantity}</td>
      <td>${item.price * item.quantity} грн</td>
      <td><button class="remove-item" data-name="${name}">Видалити</button></td>
    `;
    cartTable.appendChild(row);

    total += item.price * item.quantity;
  }

  totalPriceElement.textContent = `Загальна сума: ${total} грн`;


  document.querySelectorAll('.remove-item').forEach((button) => {
    button.addEventListener('click', () => {
      const name = button.dataset.name;
      delete cartItems[name];
      updateCart();
    });
  });
}
