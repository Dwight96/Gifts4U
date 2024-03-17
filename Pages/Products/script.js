// Products with linked images
const chocolatesAndSweets = [
    { name: "See's Famous Old Time Candies", price: '£10', image: '../../Images/candies.jpg' },
    { name: 'Ferrero Rocher', price: '£14', image: '../../Images/rochet.jpg' },
    { name: 'Strawberry Pencil Strings', price: '£8', image: '../../Images/strawberry_Pencils.webp' },
];

const posters = [
    { name: 'Plain White Christmas Poster', price: '£20', image: '../../Images/poster1.jpg' },
    { name: 'Stylistic Red Christmas Poster', price: '£25', image: '../../Images/red_Poster.jpg' },
    { name: 'Santa Clause Christmas Poster', price: '£30', image: '../../Images/santa_Clause.jpg' },
];

const crafts = [
    { name: 'Scandinavian Christmas Tree', price: '£14', image: '../../Images/christmas_Tree.webp' },
    { name: 'Wooden Christmas Cloche Decoration', price: '£34', image: '../../Images/christmas_Cloche.jpg' },
    { name: 'Wooden Snowflake Sign', price: '£12', image: '../../Images/Snowflake.jpg' },
];

// Function to create product elements
function createProductElement(product) {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.name;
    productDiv.appendChild(image);

    const name = document.createElement('h3');
    name.textContent = product.name;
    productDiv.appendChild(name);

    const price = document.createElement('p');
    price.textContent = product.price;
    productDiv.appendChild(price);

    return productDiv;
}

// Function to display products
function displayProducts(products, containerId) {
    const productContainer = document.getElementById(containerId);
    products.forEach(product => {
        const productElement = createProductElement(product);
        productContainer.appendChild(productElement);
    });
}

// Call the function to display products when the page loads
window.onload = function() {
    displayProducts(chocolatesAndSweets, 'featured-products');
    displayProducts(posters, 'posters');
    displayProducts(crafts, 'crafts');
};
// Add JavaScript functionalities for delivery request form
document.getElementById('delivery-request-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const contactNumber = document.getElementById('contact-number').value;
    const deliveryAddress = document.getElementById('delivery-address').value;
    const billingAddress = document.getElementById('billing-address').value;
    const itemsToDeliver = document.getElementById('items-to-deliver').value;
    const signature = document.getElementById('signature').value;
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Contact Number:', contactNumber);
    console.log('Delivery Address:', deliveryAddress);
    console.log('Billing Address:', billingAddress);
    console.log('Items to Deliver:', itemsToDeliver);
    console.log('Signature:', signature);
});
