window.addEventListener("DOMContentLoaded", function () {
  const quantityInput = document.getElementById("quantity");
  quantityInput.addEventListener("input", updateOrderSummary);

  updateOrderSummary(); // initial load
});

function calculateDiscount(totalPrice) {
  return totalPrice >= 100000 ? Math.floor(totalPrice * 0.1) : 0;
}

function updateOrderSummary() {
  const orderData = JSON.parse(localStorage.getItem("orderData"));
  const quantity = parseInt(document.getElementById("quantity").value) || 1;

  if (orderData) {
    const totalRawPrice = orderData.price * quantity;
    const discount = calculateDiscount(totalRawPrice);
    const finalPrice = totalRawPrice - discount;

    document.getElementById("order-title").textContent = `${orderData.title} × ${quantity}`;
    document.getElementById("order-price").textContent = `Rp ${totalRawPrice.toLocaleString()}`;
    document.getElementById("discount-price").textContent = `Rp ${discount.toLocaleString()}`;
    document.getElementById("total-price").textContent = `Rp ${finalPrice.toLocaleString()}`;
  }
}

document.getElementById("checkout-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const gameID = document.getElementById("gameID").value;
  const email = document.getElementById("email").value;
  const payment = document.getElementById("payment").value;
  const quantity = parseInt(document.getElementById("quantity").value);
  const orderData = JSON.parse(localStorage.getItem("orderData"));

  if (!orderData) {
    alert("Data order tidak ditemukan.");
    return;
  }

  const totalRawPrice = orderData.price * quantity;
  const discount = calculateDiscount(totalRawPrice);
  const finalPrice = totalRawPrice - discount;

  window.location.href = 'thankyou.html';
});
