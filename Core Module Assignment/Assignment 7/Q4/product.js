const productDetailsContainer = document.getElementById('product-details');

// Retrieve the selected product ID from local storage
const selectedProductId = localStorage.getItem('selectedProductId');

// Fetch the specific product data from the API
fetch(`https://fakestoreapi.com/products/${selectedProductId}`)
  .then(response => response.json())
  .then(product => {
    // Display the product details
    const productDetails = createProductDetails(product);
    productDetailsContainer.appendChild(productDetails);
  })
  .catch(error => {
    console.error('Error:', error);
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Failed to fetch product details. Please try again later.';
    productDetailsContainer.appendChild(errorMessage);
  });

// Create the product details element
function createProductDetails(product) {
  const productDetails = document.createElement('div');

  const image = document.createElement('img');
  image.src = product.image;
  image.alt = product.title;
  productDetails.appendChild(image);

  const title = document.createElement('h3');
  title.textContent = product.title;
  productDetails.appendChild(title);

  const price = document.createElement('p');
  price.textContent = `Price: $${product.price}`;
  productDetails.appendChild(price);

  const category = document.createElement('p');
  category.textContent = `Category: ${product.category}`;
  productDetails.appendChild(category);

  const description = document.createElement('p');
  description.textContent = `Description: ${product.description}`;
  productDetails.appendChild(description);

  return productDetails;
}
