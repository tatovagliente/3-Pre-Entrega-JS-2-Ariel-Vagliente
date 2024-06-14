const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `<h1 class="modal-header-title">Carrito</h1>`;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "X";
    modalButton.className = "modal-header-button";
    modalButton.addEventListener("click", () => modalContainer.style.display = "none");
    modalHeader.append(modalButton);

    carrito.forEach(producto => {
        const carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
            <img src="${producto.imagen}">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <p>Cantidad: ${producto.cantidad}</p>
            <p>SubTotal: ${producto.precio * producto.cantidad}</p>
            <span class="delete-product">❌</span>
        `;
        modalContainer.append(carritoContent);

        const eliminarButton = carritoContent.querySelector(".delete-product");
        eliminarButton.addEventListener("click", () => eliminarProducto(producto.id));
    });

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    const compraTotal = document.createElement("div");
    compraTotal.className = "total-content";
    compraTotal.innerHTML = `Total a pagar: $${total}`;
    modalContainer.append(compraTotal);
};

const eliminarProducto = (id) => {
    carrito = carrito.filter(producto => producto.id !== id);
    carritoCounter();
    saveLocal();
    pintarCarrito();
};

const carritoCounter = () => {
    cantidadCarrito.style.display = carrito.length ? "block" : "none";
    cantidadCarrito.innerText = carrito.length;
    localStorage.setItem("carritoSacar", JSON.stringify(carrito.length));
};

verCarrito.addEventListener("click", pintarCarrito);
