// get the JSON data from http://localhost:5500/watches.json
const response = await fetch("../products.json");
// parse out the json into a variable - "watches"
const products = await response.json();

// print to console
console.log(products);

const grid = document.querySelector('.grid-container');

for (let watch of watches) {
    grid.innerHTML += `
        <div class="product-card">
            <img
            src="${watch.image}"
            alt="A ${watch.brand} ${watch.model} watch"
            />
            <div class="product-info">
            <div>
                <h2>${watch.brand}</h2>
                <p>${watch.model}</p>
            </div>
            <div>
                <a href="/product.html" class="bold">View</a>
                <i class="fa-solid fa-angle-right"></i>
            </div>
            </div>
        </div>
    `
}