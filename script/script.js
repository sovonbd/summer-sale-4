// function to call the input ID
function getInput(elementID) {
  return document.getElementById(elementID);
}

// function to check coupon requirements
function couponCheck() {
  const coupon = getInput("coupon");
  const discount = getInput("discount");
  const totalPrice = getInput("total-price").innerText;
  const applyBtn = getInput("btn-apply");
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


let price = 0;
function kitchenware(event) {
  const itemName = event.childNodes[3].childNodes[5].innerText;
  const selectedItems = getInput("selected-items");
  const p = document.createElement("p");
  const count = selectedItems.childElementCount;
  p.innerHTML = `
  ${count + 1}. ${itemName}
  `;
  selectedItems.appendChild(p);

  const itemPrice = parseFloat(event.childNodes[3].childNodes[7].innerText);
  const totalPrice = getInput("total-price");
  price += itemPrice;
  if (price > 0) {
    getInput("btn-purchase").removeAttribute("disabled");
    totalPrice.innerText = price.toFixed(2);
  } else {
    getInput("btn-purchase").setAttribute("enabled");
  }
  couponCheck();
  const total = getInput("total");
  total.innerText = totalPrice.innerText;
}

function goHome() {
  window.location.href = "./index.html";
}
