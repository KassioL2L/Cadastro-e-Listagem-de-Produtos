document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('productForm');
    const productList = document.getElementById('productList');
    const newProductButton = document.getElementById('newProductButton');
    const cadastroDiv = document.getElementById('cadastro');

    let products = [];

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const productName = document.getElementById('productName').value;
        const productDescription = document.getElementById('productDescription').value;
        const productPrice = parseFloat(document.getElementById('productPrice').value);
        const productAvailable = document.getElementById('productAvailable').value;

        const product = {
            name: productName,
            description: productDescription,
            price: productPrice,
            available: productAvailable
        };

        products.push(product);
        updateProductList();
        form.reset();
        toggleCadastro();
    });

    function updateProductList() {
        products.sort((a, b) => a.price - b.price);

        productList.innerHTML = '';

        products.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.price.toFixed(2)}</td>
            `;
            productList.appendChild(row);
        });
    }

    function toggleCadastro() {
        if (cadastroDiv.classList.contains('hidden')) {
            cadastroDiv.classList.remove('hidden');
        } else {
            cadastroDiv.classList.add('hidden');
        }
    }

    newProductButton.addEventListener('click', () => {
        toggleCadastro();
    });
});
