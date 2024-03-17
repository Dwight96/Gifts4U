// Products with linked images
const products = [
    { name: 'Festive treats', image: 'Images/keto.webp' },
    { name: 'Gingerbread cookies', image: 'Images/ginger.jpg' },
    { name: 'Chocolate coated cookies ', image: 'Images/chocolates.jpeg' },
    { name: 'Shortbread, chocolate and sugar cookies', image: 'Images/cookies.jpg' },
];

// Function to create product elements
function createProductElement(product) {
    // Create a div element for the product
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    // Create an image element for the product
    const image = document.createElement('img');
    // Set the image source and alt text
    image.src = product.image;
    image.alt = product.name;
    // Set maximum width and height for the image
    image.style.maxWidth = '100';
    image.style.maxHeight = '100%';
    // Append the image to the product div
    productDiv.appendChild(image);

    // Create a heading element for the product name
    const name = document.createElement('h3');
    // Set the text content of the heading
    name.textContent = product.name;
    // Append the heading to the product div
    productDiv.appendChild(name);

    // Return the product div
    return productDiv;
}

// Function to display products
function displayProducts() {
    // Find the container for displaying products
    const productContainer = document.querySelector('.product-container');
    // Iterate through each product in the products array
    products.forEach(product => {
        // Create a product element using the createProductElement function
        const productElement = createProductElement(product);
        // Append the product element to the product container
        productContainer.appendChild(productElement);
    });
}

// Call the function to display products when the page loads
window.onload = displayProducts;


