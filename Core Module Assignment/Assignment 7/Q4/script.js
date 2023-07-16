const apiUrl = 'https://fakestoreapi.com/products';
const productContainer = document.getElementById('product-container');

// Fetch product data from the API
fetch(apiUrl)
  .then(response => response.json())
  .then(products => {
    // Display products in the UI
    products.forEach(product => {
      const productCard = createProductCard(product);
      productContainer.appendChild(productCard);
    });
  })
  .catch(error => {
    console.error('Error:', error);
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Failed to fetch products. Please try again later.';
    productContainer.appendChild(errorMessage);
  });

// Create a product card element
function createProductCard(product) {
  const productCard = document.createElement('div');
  productCard.className = 'product-card';

  const image = document.createElement('img');
  image.src = product.image;
  image.alt = product.title;
  productCard.appendChild(image);

  const title = document.createElement('h3');
  title.textContent = product.title;
  title.style.fontSize = "18px";
  title.style.margin = "10px 0"
  title.style.height = "80px";
  
  productCard.appendChild(title);

  const price = document.createElement('p');
  price.textContent = `Price : $${product.price}`;
  price.style.margin = "20px 0";
  price.style.fontSize = "20px";
  productCard.appendChild(price);

//   const description = document.createElement('p');
//   description.textContent = product.description;
//   productCard.appendChild(description);


// Create a shopping cart object
const cart = [];

const addToCartButton = document.createElement('button');
addToCartButton.textContent = 'Add to Cart';

addToCartButton.addEventListener('click', () => {
    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      // Increment the quantity if the product is already in the cart
      existingProduct.quantity += 1;
    } else {
      // Add the product to the cart
      cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1
      });
    }

    // Display a success message
    console.log(`Product "${product.title}" added to cart.`);
    console.log('Cart:', cart);
  });
productCard.appendChild(addToCartButton);

  return productCard;
}
