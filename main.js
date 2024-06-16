document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("add-product-form");
    const productsContainer = document.getElementById("products-container");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = form.name.value;
        const price = form.price.value;
        const image = form.image.value;

        addProduct(name, price, image);
        form.reset();
    });

    function addProduct(name, price, image) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
            <p>$${price}</p>
            <button onclick="removeProduct(this)">Eliminar</button>
        `;

        productsContainer.appendChild(productCard);
    }

    window.removeProduct = function(button) {
        const productCard = button.parentElement;
        productsContainer.removeChild(productCard);
    };
});
