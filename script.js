// script.js
function switchImage(imageSrc) {
    const mainImage = document.getElementById("mainProductImage");
    mainImage.style.opacity = "0"; // Start fading out

    setTimeout(() => {
        mainImage.src = imageSrc;
        mainImage.style.opacity = "1"; // Fade in with new image
    }, 300);

    // Update active thumbnail
    document.querySelectorAll(".thumbnails img").forEach(thumbnail => {
        thumbnail.classList.remove("active");
    });
    event.target.classList.add("active");
}




let cart1 = [];
        let totalPrice1 = 0;
        let img = document.querySelector(".img");

        function addToCart(price) {
            cart1.push(price);
            updateTotalPrice();
        }

        function phones(phone){
            img.src = phone ;;
        }
        let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsList = document.getElementById("cart-items");
    const totalPriceDisplay = document.getElementById("total-price");

    cartItemsList.innerHTML = "";
    totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
        totalPrice += item.price;
    });

    totalPriceDisplay.textContent = totalPrice.toFixed(2);
}

function toggleCartModal() {
    const modal = document.getElementById("cart-modal");
    modal.style.display = (modal.style.display === "block") ? "none" : "block";
}

function checkout() {
    if(cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert(`Total price is $${totalPrice.toFixed(2)}. Thank you for your purchase!`);
    cart = [];
    updateCartDisplay();
    toggleCartModal();
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("cart-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

    function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Generate a summary message of the cart
    let message = "Order Summary:\n";
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - $${item.price.toFixed(2)}\n`;
    });
    message += `Total: $${totalPrice.toFixed(2)}\nThank you for your purchase!`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "YOUR_PHONE_NUMBER"; // Replace with your WhatsApp number (e.g., "1234567890")
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappURL, "_blank");

    // Clear the cart after sending the message
    cart = [];
    updateCartDisplay();
    closeCart();
}



