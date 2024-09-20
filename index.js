// Product data
const products = [
    { name: 'Toyota Corolla', category: 'Cars', price: 27000},
    { name: 'BMW 3 Series', category: 'Cars', price: 60000 },
    { name: 'Ford Mustang', category: 'Cars', price: 55000 },
    { name: 'Kia Seltos', category: 'Cars', price: 30000 },
    { name: 'Apple iPad Pro', category: 'Electronics', price: 1500 },
    { name: 'Sony PlayStation 5', category: 'Electronics', price: 600 },
    { name: 'Samsung Galaxy S23', category: 'Electronics', price: 1200 },
    { name: 'Wilson Evolution Basketball', category: 'Sports equipment', price: 80 },
    { name: 'Adidas Predator Soccer Ball', category: 'Sports equipment', price: 50 },
    { name: 'Under Armour Football Gloves', category: 'Sports equipment', price: 70 },
    { name: 'HEAD Graphene 360+ Tennis Racket', category: 'Sports equipment', price: 250 },
    { name: 'Rogue Fitness Barbell', category: 'Sports equipment', price: 400 },
];

// Function to display products
const displayProducts = (filteredProducts) => {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear previous products

    filteredProducts.forEach(product => {
        // Create a product card
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        // Create product details
        productItem.innerHTML = `
            <div class="product-name">${product.name}</div>
            <div class="product-category">${product.category}</div>
            <div class="product-price">$${product.price}</div>
        `;

        // Append product to the list
        productList.appendChild(productItem);
    });
};

// Filter function
const filterProducts = (category) => {
    if (category === 'All') {
        displayProducts(products); // Display all products
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts); // Display filtered products
    }
};

// Event listener for filter buttons
const filterButtons = document.querySelectorAll('#filter-section button');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        filterProducts(category);
    });
});

// Initial product display (show all products on page load)
window.onload = () => displayProducts(products);
