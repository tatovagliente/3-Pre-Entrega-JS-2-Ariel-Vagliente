const containerProductos = document.getElementById("containerProductos");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carritoLocal")) || [];

const renderProductos = () => {
    productos.forEach(producto => {
        const content = document.createElement("div");
        content.className = "card";
        content.innerHTML = `
            <img src="${producto.imagen}">
            <h3>${producto.nombre}</h3>
            <p class="price">$${producto.precio}</p>
            <button class="comprar">Comprar</button>
        `;
        containerProductos.append(content);

        const comprarButton = content.querySelector(".comprar");
        comprarButton.addEventListener("click", () => agregarAlCarrito(producto));
    });
};

const agregarAlCarrito = (producto) => {
    const item = carrito.find(item => item.id === producto.id);
    if (item) {
        item.cantidad++;
    } else {
        carrito.push({ ...producto });
    }
    carritoCounter();
    saveLocal();
};

const saveLocal = () => {
    localStorage.setItem("carritoLocal", JSON.stringify(carrito));
};

renderProductos();
carritoCounter();
