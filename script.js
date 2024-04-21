// Sample data for products
const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 }
];

// Function to display products
function displayProducts() {
    const productsSection = document.getElementById('products');
    productsSection.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('col-md-4', 'mb-4');
        productDiv.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Price: $${product.price}</p>
                    <button onclick="addToCart(${product.id})" class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        `;
        productsSection.appendChild(productDiv);
    });
}

// Function to add a product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const cartItems = document.getElementById('cart-items');
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = `${product.name} - $${product.price}`;
        cartItems.appendChild(li);
    }
}

// Function to handle checkout
function checkout() {
    // Request permission for push notifications
    if ('Notification' in window) {
        Notification.requestPermission().then(function(permission) {
            if (permission === 'granted') {
                // If permission is granted, show a notification
                showNotification('Thank you for purchasing in the app');
            }
        });
    } else {
        alert('This browser does not support desktop notifications');
    }
}

// Function to show a notification
function showNotification(message) {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(function(registration) {
            registration.showNotification('Checkout Notification', {
                body: message,
                icon: 'logo.png'
            });
        });
    }
}

// Initialize
displayProducts();
document.getElementById('checkout-btn').addEventListener('click', checkout);
