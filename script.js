// ==========================================
// VÉLORA PRODUCTS
// ==========================================

const products = [

    {
        id: 1,
        name: "Classic Oversized Shirt",
        category: "Women",
        price: 1299,
        oldPrice: 1899,
        rating: 4.8,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 2,
        name: "Relaxed Linen Shirt",
        category: "Men",
        price: 1499,
        oldPrice: 2199,
        rating: 4.7,
        badge: "SALE",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 3,
        name: "Minimal Summer Dress",
        category: "Women",
        price: 1799,
        oldPrice: 2499,
        rating: 4.9,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 4,
        name: "Premium Denim Jacket",
        category: "Denim",
        price: 2199,
        oldPrice: 2999,
        rating: 4.6,
        badge: "BESTSELLER",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 5,
        name: "Everyday Cargo Pants",
        category: "Men",
        price: 1599,
        oldPrice: 2299,
        rating: 4.7,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 6,
        name: "Soft Knit Cardigan",
        category: "Women",
        price: 1899,
        oldPrice: 2699,
        rating: 4.8,
        badge: "SALE",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 7,
        name: "Urban Hoodie",
        category: "Men",
        price: 1399,
        oldPrice: 1999,
        rating: 4.5,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 8,
        name: "Active Performance Set",
        category: "Activewear",
        price: 1999,
        oldPrice: 2799,
        rating: 4.9,
        badge: "TRENDING",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 9,
        name: "Essential Cotton Tee",
        category: "Men",
        price: 699,
        oldPrice: 999,
        rating: 4.6,
        badge: "SALE",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 10,
        name: "Pleated Midi Skirt",
        category: "Women",
        price: 1599,
        oldPrice: 2199,
        rating: 4.8,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d27?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 11,
        name: "Kids Casual Outfit",
        category: "Kids",
        price: 899,
        oldPrice: 1299,
        rating: 4.7,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 12,
        name: "Leather Crossbody Bag",
        category: "Accessories",
        price: 1299,
        oldPrice: 1899,
        rating: 4.9,
        badge: "BESTSELLER",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=85"
    }

];


// ==========================================
// CART
// ==========================================

let cart = [];


// ==========================================
// DISPLAY PRODUCTS
// ==========================================

function displayProducts(list = products) {

    const grid = document.getElementById("productGrid");

    grid.innerHTML = "";

    if (list.length === 0) {

        grid.innerHTML = `
            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:80px;
                color:#777;
            ">
                <h2>No products found</h2>
                <p>Try another search or category.</p>
            </div>
        `;

        return;
    }

    list.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <span class="
                    badge
                    ${product.badge === "SALE" ? "sale" : ""}
                ">
                    ${product.badge}
                </span>

                <button
                    class="wishlist"
                    onclick="addWishlist(event, ${product.id})"
                >
                    ♡
                </button>

            </div>


            <div class="product-info">

                <div class="product-category">
                    ${product.category}
                </div>

                <div class="product-name">
                    ${product.name}
                </div>

                <div class="rating">
                    ⭐ ${product.rating}
                </div>

                <div class="price">

                    <span class="current-price">
                        ₹${product.price.toLocaleString("en-IN")}
                    </span>

                    <span class="old-price">
                        ₹${product.oldPrice.toLocaleString("en-IN")}
                    </span>

                </div>

                <button
                    class="add-cart"
                    onclick="addToCart(${product.id})"
                >
                    Add to Cart
                </button>

            </div>
        `;

        grid.appendChild(card);

    });

}


// ==========================================
// ADD TO CART
// ==========================================

function addToCart(id) {

    const product = products.find(item => item.id === id);

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    updateCart();

    showToast(`${product.name} added to cart`);
}


// ==========================================
// UPDATE CART
// ==========================================

function updateCart() {

    const count = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    document.getElementById("cartCount").textContent = count;


    const cartItems = document.getElementById("cartItems");

    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div style="
                text-align:center;
                padding:60px 10px;
                color:#777;
            ">
                Your cart is empty.
            </div>
        `;

    }


    cart.forEach(item => {

        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";

        cartItem.innerHTML = `

            <img src="${item.image}" alt="${item.name}">

            <div>

                <h4>${item.name}</h4>

                <p>
                    ₹${item.price.toLocaleString("en-IN")}
                    × ${item.quantity}
                </p>

                <div style="margin-top:8px">

                    <button
                        onclick="changeQuantity(${item.id}, -1)"
                        style="
                            border:1px solid #ddd;
                            background:white;
                            width:25px;
                            height:25px;
                        "
                    >−</button>

                    <span style="padding:0 8px">
                        ${item.quantity}
                    </span>

                    <button
                        onclick="changeQuantity(${item.id}, 1)"
                        style="
                            border:1px solid #ddd;
                            background:white;
                            width:25px;
                            height:25px;
                        "
                    >+</button>

                </div>

            </div>

            <button
                class="remove-cart"
                onclick="removeFromCart(${item.id})"
            >
                ×
            </button>
        `;

        cartItems.appendChild(cartItem);

    });


    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    document.getElementById("cartTotal").textContent =
        total.toLocaleString("en-IN");

}


// ==========================================
// CHANGE QUANTITY
// ==========================================

function changeQuantity(id, amount) {

    const item = cart.find(product => product.id === id);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {

        cart = cart.filter(
            product => product.id !== id
        );

    }

    updateCart();
}


// ==========================================
// REMOVE CART ITEM
// ==========================================

function removeFromCart(id) {

    cart = cart.filter(
        product => product.id !== id
    );

    updateCart();
}


// ==========================================
// OPEN CART
// ==========================================

function openCart() {

    document
        .getElementById("cartSidebar")
        .classList.add("active");

    document
        .getElementById("cartOverlay")
        .classList.add("active");

}


// ==========================================
// CLOSE CART
// ==========================================

function closeCart() {

    document
        .getElementById("cartSidebar")
        .classList.remove("active");

    document
        .getElementById("cartOverlay")
        .classList.remove("active");

}


// ==========================================
// FILTER PRODUCTS
// ==========================================

function filterProducts(category) {

    document.querySelectorAll(".category")
        .forEach(item => item.classList.remove("active"));


    event.currentTarget.classList.add("active");


    let filtered;

    if (category === "All") {

        filtered = products;

    } else if (category === "Sale") {

        filtered = products.filter(
            product => product.badge === "SALE"
        );

    } else {

        filtered = products.filter(
            product => product.category === category
        );

    }

    displayProducts(filtered);
}


// ==========================================
// SEARCH
// ==========================================

document
    .getElementById("searchInput")
    .addEventListener("input", function () {

        const value = this.value.toLowerCase();

        const filtered = products.filter(product =>

            product.name.toLowerCase().includes(value) ||

            product.category.toLowerCase().includes(value)

        );

        displayProducts(filtered);

    });


// ==========================================
// SORT
// ==========================================

document
    .getElementById("sortProducts")
    .addEventListener("change", function () {

        let sorted = [...products];

        if (this.value === "low") {

            sorted.sort(
                (a, b) => a.price - b.price
            );

        }

        if (this.value === "high") {

            sorted.sort(
                (a, b) => b.price - a.price
            );

        }

        if (this.value === "rating") {

            sorted.sort(
                (a, b) => b.rating - a.rating
            );

        }

        displayProducts(sorted);

    });


// ==========================================
// WISHLIST
// ==========================================

function addWishlist(event, id) {

    event.stopPropagation();

    const button = event.currentTarget;

    if (button.textContent.trim() === "♡") {

        button.textContent = "♥";
        button.style.color = "#b52a25";

        showToast("Added to wishlist");

    } else {

        button.textContent = "♡";
        button.style.color = "#111";

        showToast("Removed from wishlist");

    }

}


// ==========================================
// TOAST
// ==========================================

function showToast(message) {

    const toast = document.createElement("div");

    toast.textContent = message;

    toast.style.cssText = `
        position:fixed;
        bottom:25px;
        left:50%;
        transform:translateX(-50%);
        background:#111;
        color:white;
        padding:12px 20px;
        font-size:11px;
        z-index:9999;
        letter-spacing:.5px;
    `;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.remove();

    }, 1800);

}


// ==========================================
// HERO BUTTON
// ==========================================

function scrollProducts() {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ==========================================
// SEARCH ICON
// ==========================================

document
    .getElementById("searchBtn")
    .addEventListener("click", () => {

        document
            .getElementById("searchInput")
            .focus();

        document
            .getElementById("products")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


// ==========================================
// INITIAL LOAD
// ==========================================

displayProducts();

updateCart();
// ==========================================
// CHECKOUT
// ==========================================

function openCheckout() {

    if (cart.length === 0) {

        showToast("Your cart is empty");

        return;
    }


    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );


    const totalPrice = cart.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );


    document.getElementById("checkoutItems").textContent =
        totalItems;


    document.getElementById("checkoutTotal").textContent =
        totalPrice.toLocaleString("en-IN");


    document
        .getElementById("checkoutOverlay")
        .classList.add("active");

}


// ==========================================
// CLOSE CHECKOUT
// ==========================================

function closeCheckout() {

    document
        .getElementById("checkoutOverlay")
        .classList.remove("active");

}


// ==========================================
// CHECKOUT BUTTON
// ==========================================

// IMPORTANT:
// Existing checkout button ko select karke
// uske click ko checkout se connect kar rahe hain.

document
    .querySelector(".checkout-btn")
    .addEventListener("click", function () {

        openCheckout();

    });


// ==========================================
// PLACE ORDER
// ==========================================

document
    .getElementById("checkoutForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("customerName").value;

        const phone =
            document.getElementById("customerPhone").value;

        const email =
            document.getElementById("customerEmail").value;

        const house =
            document.getElementById("customerHouse").value;

        const area =
            document.getElementById("customerArea").value;

        const city =
            document.getElementById("customerCity").value;

        const state =
            document.getElementById("customerState").value;

        const pincode =
            document.getElementById("customerPincode").value;


        const payment =
            document.querySelector(
                'input[name="payment"]:checked'
            ).value;


        // Basic validation

        if (phone.length !== 10) {

            showToast("Enter a valid 10 digit mobile number");

            return;

        }


        if (pincode.length !== 6) {

            showToast("Enter a valid 6 digit pincode");

            return;

        }


        // Generate Order ID

        const orderId =
            "VEL" +
            Date.now()
                .toString()
                .slice(-8);


        // Order data

        const orderData = {

            orderId: orderId,

            customer: {

                name: name,
                phone: phone,
                email: email

            },

            address: {

                house: house,
                area: area,
                city: city,
                state: state,
                pincode: pincode

            },

            payment: payment,

            items: cart,

            total: cart.reduce(
                (sum, item) =>
                    sum + item.price * item.quantity,
                0
            ),

            date: new Date().toLocaleString()

        };


        // Browser storage mein order save

        localStorage.setItem(
            "veloraLastOrder",
            JSON.stringify(orderData)
        );


        console.log("ORDER DETAILS:", orderData);


        // Close checkout

        closeCheckout();


        // Order ID show

        document.getElementById(
            "orderNumber"
        ).textContent = orderId;


        // Success popup

        document
            .getElementById("successOverlay")
            .classList.add("active");


        // Empty cart

        cart = [];

        updateCart();

    });


// ==========================================
// CLOSE SUCCESS
// ==========================================

function closeSuccess() {

    document
        .getElementById("successOverlay")
        .classList.remove("active");

}