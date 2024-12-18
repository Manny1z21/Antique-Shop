// search.js

// Array of products in the catalog
const products = [
    { name: '1940 Volkswagen Beetle', id: '001', price: '$100,000,000' },
    { name: 'Grandfather clock', id: '002', price: '$60,000' },
    { name: 'Ronaldos boots', id: '004', price: '$100,000' },
    { name: 'Iphone 1', id: '005', price: '$90,000' },
    { name: 'Playstation', id: '006', price: '$10,000' },
    { name: 'Mona lisa', id: '007', price: '$300,000,000' },
    { name: 'Banana Taped To Wall', id: '008', price: '$7,500,000' },
    { name: 'Ethiopian Coins', id: '009', price: '$500' },
    { name: 'Antique Chair', id: '010', price: '$50,000' },
    { name: 'World War I Tank', id: '011', price: '$10,000,000' },
    { name: ' First Supercomputer', id: '012', price: '$150,000' },

];

function handleSearch() {
    const searchInput = document.querySelector('.search-bar input').value.toLowerCase();
    const resultContainer = document.querySelector('.container'); 
    resultContainer.innerHTML = ''; 

    const foundProducts = products.filter(product => product.name.toLowerCase().includes(searchInput));

    if (foundProducts.length > 0) {
        foundProducts.forEach(product => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';
            itemDiv.innerHTML = `
                <h2>${product.name}</h2>
                <p>${product.price}</p>
                <button class="button" onclick="addToCart('${product.name}', '${product.id}', '${product.price}')">Add to Cart</button>
            `;
            resultContainer.appendChild(itemDiv);
        });
    } else {
        resultContainer.innerHTML = '<p>The product you searched for is not available here</p>';
    }
}

// Attach the search function to the button
document.querySelector('.search-bar button').addEventListener('click', handleSearch);