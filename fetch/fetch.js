const url = 'http://localhost:3000/api/products';

fetch(url)
    .then(response => {
        if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(products => {
            const tableBody = document.querySelector("#productsTable tbody");
            products.forEach(product => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${product._id}</td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error("No data:", error);
        });
