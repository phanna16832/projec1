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
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
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
        li.textContent = `${product.name} - $${product.price}`;
        cartItems.appendChild(li);
    }
}

// Function to handle checkout
function checkout() {
    alert('Checkout functionality will be implemented in the future.');
}

// Initialize
displayProducts();
document.getElementById('checkout-btn').addEventListener('click', checkout);
