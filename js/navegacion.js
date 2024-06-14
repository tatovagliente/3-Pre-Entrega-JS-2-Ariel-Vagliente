// Crear el contenedor de la barra de navegación
const navBar = document.createElement("nav");
navBar.classList.add("navbar");

// Crear el contenedor para los enlaces
const navContainer = document.createElement("div");
navContainer.classList.add("navbar-container");

// Crear los enlaces
const links = [
    { text: "INICIO", href: "#" },
    { text: "NOSOTROS", href: "#" },
    { text: "CONTACTO", href: "#" }
];

links.forEach(linkInfo => {
    const link = document.createElement("a");
    link.textContent = linkInfo.text;
    link.href = linkInfo.href;
    link.classList.add("navbar-link");
    navContainer.appendChild(link);
});

// Añadir el contenedor de los enlaces a la barra de navegación
navBar.appendChild(navContainer);

// Añadir la barra de navegación al cuerpo del documento
document.body.insertBefore(navBar, document.body.firstChild);

// CSS básico para la barra de navegación
const style = document.createElement('style');
style.innerHTML = `
    .navbar {
        width: 100%;
        background-color: #7c0303;
        overflow: hidden;
    }
    .navbar-container {
        display: flex;
        justify-content: space-around;
        padding: 14px 0;
    }
    .navbar-link {
        font-family: 'Assistant';
        color: #f8f4f4f1;
        text-decoration: none;
        padding: 14px 20px;
        text-align: center;
    }
    .navbar-link:hover {
        background-color: #ddd;
        color: black;
        border-radius: 2rem;
    }
`;
document.head.appendChild(style);
