let price = 0;

function couponCheck() {
  const coupon = document.getElementById("coupon");
  const discount = document.getElementById("discount");
  const totalPrice = document.getElementById("total-price").innerText;
  const applyBtn = document.getElementById("btn-apply");
  if (totalPrice >= 200) {
    applyBtn.removeAttribute("disabled");
  } else {
    applyBtn.setAttribute("disabled", true);
  }
  applyBtn.addEventListener("click", function () {
    if (coupon.value === "SELL20") {
      discount.innerText = (totalPrice * 0.2).toFixed(2);
      total.innerText = (totalPrice - discount.innerText).toFixed(2);
    }
  });
}

function kitchenware(event) {
  const itemName = event.childNodes[3].childNodes[5].innerText;
  const selectedItems = document.getElementById("selected-items");
  const p = document.createElement("p");
  const count = selectedItems.childElementCount;
  p.innerHTML = `
  ${count + 1}. ${itemName}
  `;
  selectedItems.appendChild(p);

  const itemPrice = parseFloat(event.childNodes[3].childNodes[7].innerText);
  const totalPrice = document.getElementById("total-price");
  price += itemPrice;
  if (price > 0) {
    document.getElementById("btn-purchase").removeAttribute("disabled");
    totalPrice.innerText = price.toFixed(2);
  } else {
    document.getElementById("btn-purchase").setAttribute("enabled");
  }
  couponCheck();
  const total = document.getElementById("total");
  total.innerText = totalPrice.innerText;
}

function goHome() {
  window.location.href = "./index.html";
}
