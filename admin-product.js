document.addEventListener("DOMContentLoaded", () => {
    const productForm = document.getElementById("productForm");
    const productTableBody = document.getElementById("productTableBody");
    
    // Fetch and display products
    function fetchProducts() {
        fetch("/api/products")
            .then(response => response.json())
            .then(products => {
                productTableBody.innerHTML = "";
                products.forEach(product => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${product.name}</td>
                        <td>${product.description}</td>
                        <td>$${product.price}</td>
                        <td><img src="${product.image_url}" alt="Product Image"></td>
                        <td>
                            <button onclick="editProduct(${product.id}, '${product.name}', '${product.description}', ${product.price}, '${product.image_url}')">Edit</button>
                            <button onclick="deleteProduct(${product.id})">Delete</button>
                        </td>
                    `;
                    productTableBody.appendChild(row);
                });
            });
    }

    // Handle form submission
    productForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const productId = document.getElementById("productId").value;
        const productData = {
            name: document.getElementById("productName").value,
            description: document.getElementById("productDescription").value,
            price: document.getElementById("productPrice").value,
            image_url: document.getElementById("productImage").value,
        };

        const method = productId ? "PUT" : "POST";
        const endpoint = productId ? `/api/products/${productId}` : "/api/products";
        
        fetch(endpoint, {
            method: method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(productData),
        }).then(() => {
            productForm.reset();
            document.getElementById("productId").value = "";
            fetchProducts();
        });
    });

    // Edit product
    window.editProduct = (id, name, description, price, image_url) => {
        document.getElementById("productId").value = id;
        document.getElementById("productName").value = name;
        document.getElementById("productDescription").value = description;
        document.getElementById("productPrice").value = price;
        document.getElementById("productImage").value = image_url;
    };

    // Delete product
    window.deleteProduct = (id) => {
        if (confirm("Are you sure you want to delete this product?")) {
            fetch(`/api/products/${id}`, { method: "DELETE" })
                .then(() => fetchProducts());
        }
    };

    // Load products on page load
    fetchProducts();
});
