const data = [
  { img: "benjerry", price: 5.95, qtty: 0 },
  { img: "caffelatte", price: 1.27, qtty: 0 },
  { img: "calippo", price: 4.1, qtty: 0 },
  { img: "evax", price: 2.4, qtty: 0 },
  { img: "pizza", price: 4.95, qtty: 0 },
  { img: "scottex", price: 4.5, qtty: 0 },
  { img: "spaghetti", price: 1.25, qtty: 0 },
  { img: "triangulos", price: 2.35, qtty: 0 },
  { img: "xibeca", price: 3.75, qtty: 0 },
  { img: "chipsahoy", price: 2.2, qtty: 0 },
];

function addItem(item) {
  const product = data[item];
  product.qtty++;
  updateCart();
}

function removeItem(item) {
  const product = data[item];
  if (product.qtty > 0) {
    product.qtty--;
    updateCart();
  }
}

function updateCart() {
  const cartList = document.getElementById("cartList");
  const totalItems = document.getElementById("totalItems");
  const totalPrice = document.getElementById("totalPrice");
  // Limpia el carrito
  cartList.innerHTML = "";

  // Recorre la lista de productos para actualizar el carrito
  let total = 0;
  data.forEach((product, item) => {
    if (product.qtty > 0) {
      const cartItem = document.createElement("li");
      const quantityText= product.qtty === 1 ? ' u' : ' uds';
      cartItem.textContent = `${product.img} - ${product.qtty}${quantityText}`;
      cartList.appendChild(cartItem);
      total += product.qtty * product.price;
    }
    document.getElementById(
      `quantity_${item}`
    ).textContent = `Quantitat: ${product.qtty}`;
  });

  // Actualiza el número total de items y el precio total
  totalItems.textContent = data.reduce((acc, product) => acc + product.qtty, 0);
  totalPrice.textContent = total.toFixed(2);
}

function render_list_of_items() {
  const productsList = document.getElementById("productsList");
  data.forEach((product, item) => {
    const productCard = document.createElement("li");
    productCard.classList.add("product");
    productCard.innerHTML = `
        <img src="assets/img/${product.img}.jpg" alt="${product.img}">
        <h3>${product.img}</h3>
        <p>Preu: ${product.price}€</p>
        <button onclick="addItem(${item})">Afegir a la bossa</button>
        <button  onclick="removeItem(${item})">🗑️</button>
        <span id="quantity_${item}">Quantitat: ${product.qtty}</span>
      `;
    productsList.appendChild(productCard);
  });
}

render_list_of_items();
