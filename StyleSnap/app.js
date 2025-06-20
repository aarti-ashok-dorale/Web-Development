let cart = [];
let products = [
    {id: 1, name: "Summer Special scarfs", price: 100, image: "scarf.png"},
    {id: 2, name: "Floral Cotton", price: 299, image: "cotton.png"}, 
    {id: 3, name: "girls frock", price: 399, image: "kidss.jpeg"},  
    {id: 4, name: "Heels", price: 250, image: "heels.png"},
    {id: 5, name: "Pearl Earrings", price: 170, image: "pearl.png"},
    {id: 6, name: "Silk Scarf", price: 95, image: "silk.png"},
    {id: 7, name: "Designer Handbag", price: 500, image: "handbag.png"},
    {id: 8, name: "Combo Kurti", price: 350, image: "combo.png"},
    {id: 9, name: "Saree", price: 450, image: "saree.png"},
    {id: 10, name: "Wedding Saree", price: 4220, image: "saree2.png"},
    {id: 11, name: "DailyWear Sarees", price: 200, image: "saree3.png"},
    {id: 12, name: "T-Shirts", price: 250, image: "T.png"},
    {id: 13, name: "Oversized  ", price: 225, image: "o.png"},
    {id: 14, name: "T-Shirts", price: 150, image: "T1.png"},
    {id: 15, name: "Shirts", price: 500, image: "s.png"},
    {id: 16, name: "Pant", price: 700, image: "pant.png"},
    {id: 17, name: "Plazo pants", price: 450, image: "plazo.png"},
    {id: 18, name: "Jeans", price: 550, image: "jeans.png"},
    {id: 19, name: "Earrings", price: 180, image: "e.png"},
    {id: 20, name: "Wedding Lehenga", price: 5000, image: "lehenga.png"},
    {id: 21, name: " Diamond Jewellery", price: 1000, image: "j.png"},
    {id: 22, name: "Makeup Kit", price: 999, image: "makeup.png"},
    {id: 23, name: "Kurti combo", price: 399, image: "kurtis.png"},
    {id: 24, name: "traditional for kids", price: 500, image: "traditional kids.jpeg"},
    {id: 25, name: "kids", price: 200, image: "kids.png"}, 
    {id: 26, name: "Watch", price: 499, image: "watch.png"}, 
];

function showSection(sectionId) {
    document.querySelectorAll('main section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
    if(sectionId === 'cart') updateCartDisplay();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    updateCartDisplay();
}

function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.length;
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    
    cartItems.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div>
                <h3>${item.name}</h3>
                <p>₹${item.price.toFixed(2)}</p>
            </div>
            <button class="add-to-cart" onclick="removeFromCart(${index})">Remove</button>
        </div>
    `).join('');

    document.getElementById('cartTotal').textContent = `₹${total.toFixed(2)}`;
}

function placeOrder(event) {
    event.preventDefault();
    if(cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const formData = new FormData(event.target);
    const orderDetails = {
        name: formData.get('name'),
        email: formData.get('email'),
        address: formData.get('address'),
        total: cart.reduce((sum, item) => sum + item.price, 0),
        items: cart.map(item => item.name)
    };

    setTimeout(() => {
        cart = [];
        updateCartCount();
        showSection('orderConfirmation');
        document.getElementById('orderDetails').innerHTML = `
            Order Total: ₹${orderDetails.total.toFixed(2)}<br>
            Order Number: #${Math.floor(100000 + Math.random() * 900000)}
        `;
    }, 1000);
}

function searchProducts(query) {
    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
    );
    renderProducts(filtered);
}

function renderProducts(productsArray) {
    const container = document.getElementById('productsContainer');
    container.innerHTML = productsArray.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price.toFixed(2)}</p>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Buy Now</button>
        </div>
    `).join('');
}

function submitContactForm(event) {
    event.preventDefault();
    alert('Thank you for your message! We will respond within 24 hours.');
    event.target.reset();
    showSection('home');
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartCount();
    showSection('home');
});