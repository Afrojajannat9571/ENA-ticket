//  Booking Seat
let allSeats = [];
let seatAreas = document.getElementsByClassName("bus-Seats ");
for (let seatArea of seatAreas) {
  let seatBtn = seatArea.childNodes[1];
  seatArea.addEventListener("click", function (e) {
    let currentBtn = e.target;

    //  Seat List
    let addedSeat = elementGetByIdAndInnerTextReturnToNumber("addedSeat");

    if (addedSeat == 4) {
      return alert("Sorry You Cannot Added More Seat");
    } else if (allSeats.includes(e.target.innerText)) {
      return alert("Already Selected");
    }
    // Push an Array
    allSeats.push(e.target.innerText);
    elementGetByIdAndSetValue("addedSeat", addedSeat + 1);

    //  Available Total Seat
    let availableSeat = elementGetById("availableSeat");
    let availableSeatCount = availableSeat.innerText;
    let total = availableSeatCount.split(" ")[0];
    let totalSeat = parseInt(total);
    elementGetByIdAndSetValue("availableSeat", totalSeat - 1);

    // Style Selected Seat
    currentBtn.style.backgroundColor = "#1DD100";
    currentBtn.style.color = "#fff";

    //  Create Seat List
    let seatListContainer = elementGetById("seat-list-container");
    let li = document.createElement("li");
    seatListContainer.appendChild(li);
    let p1 = document.createElement("p");
    p1.innerText = e.target.innerText;
    li.appendChild(p1);
    let p2 = document.createElement("p");
    p2.innerText = "Economy";
    li.appendChild(p2);
    let p3 = document.createElement("p");
    p3.innerText = 550;
    li.appendChild(p3);

    //  Set Total Price
    let price = elementGetByIdAndInnerTextReturnToNumber("total-price");
    elementGetByIdAndSetValue("total-price", price + 550);
    // Set Grand Total
    let grandTotal = elementGetByIdAndInnerTextReturnToNumber("total-grand");
    elementGetByIdAndSetValue("total-grand", grandTotal + 550);

    // Validate Coupon Filed
    let totalSeats = elementGetByIdAndInnerTextReturnToNumber("addedSeat");
    let cpnFiled = document.getElementById("couponFiled");
    console.log(totalSeats);
    if (totalSeats == 4) {
      let couponBtn = elementGetById("couponBtn");
      couponBtn.removeAttribute("disabled");
      couponBtn.classList.remove("bg-[#1cd10056]");
      couponBtn.style.backgroundColor = "#1DD100";
      cpnFiled.removeAttribute("disabled");
    }
  });
}

//  Discount
let couponBtn = elementGetById("couponBtn");
couponBtn.addEventListener("click", function () {
  //  Get Coupon Value
  let cpnFiled = document.getElementById("couponFiled");
  let couponFiled = cpnFiled.value;

  //    Check Coupon
  if (couponFiled == "Couple 20") {
    // Calculate Discount
    let totalGrand = elementGetByIdAndInnerTextReturnToNumber("total-grand");
    let discount = (totalGrand * 20) / 100;
    let discountTotal = totalGrand - discount;
    //  Show Discount Price
    let discountContainer = elementGetById("discountContainer");
    let h2 = document.createElement("h2");
    h2.innerText = "Discount Price";
    discountContainer.appendChild(h2);
    let h3 = document.createElement("h2");
    h3.innerText = discount + " " + "BDT";
    discountContainer.appendChild(h3);
    elementGetByIdAndSetValue("total-grand", discountTotal);

    // Disabled Apply Button
    let couponBtn = elementGetById("couponBtn");
    couponBtn.classList.add("hidden");
    // Disabled Input Coupon Filed
    cpnFiled.classList.add("hidden");
  } else if (couponFiled == "NEW15") {
    // Calculate Discount
    let totalGrand = elementGetByIdAndInnerTextReturnToNumber("total-grand");
    let discount = (totalGrand * 15) / 100;
    let discountTotal = totalGrand - discount;
    //  Show Discount Price
    let discountContainer = elementGetById("discountContainer");
    let h2 = document.createElement("h2");
    h2.innerText = "Discount Price";
    discountContainer.appendChild(h2);
    let h3 = document.createElement("h2");
    h3.innerText = discount + " " + "BDT";
    discountContainer.appendChild(h3);
    elementGetByIdAndSetValue("total-grand", discountTotal);
    // Disabled Apply Button
    let couponBtn = elementGetById("couponBtn");
    couponBtn.classList.add("hidden");
    // Disabled Input Coupon Filed
    cpnFiled.classList.add("hidden");
  } else {
    return alert("Invalid Coupon");
  }
});

//  Click the buy Ticket button and go to the ticket buy section
let ticketBuy = elementGetById("ticketBuy");
ticketBuy.addEventListener("click", function () {
  ticketBuy.setAttribute("href", "#ph-poribahan");
});

//  User info Filed Validate
document.getElementById("user-number").addEventListener("input", function (e) {
  let nextBtn = elementGetById("nextBtn");
  let totalBookingSeat = elementGetByIdAndInnerTextReturnToNumber("addedSeat");
  let number = e.target.value;
  if (number.length > 4 && totalBookingSeat > 0) {
    nextBtn.classList.remove("bg-[#1cd10056]");
    nextBtn.classList.add("bg-[#1DD100]");
    nextBtn.removeAttribute("disabled");
  } else {
    nextBtn.classList.remove("bg-[#1DD100]");
    nextBtn.classList.add("bg-[#1cd10056]");
  }
});

//  Next Step

document.getElementById("nextBtn").addEventListener("click", function (e) {
  e.preventDefault();
  my_modal_2.showModal();
});

// Reload Page
document.getElementById("modalContinue").addEventListener("click", function () {
  window.location.reload();
});
