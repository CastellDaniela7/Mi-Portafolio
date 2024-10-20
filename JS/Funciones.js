// Función para cambiar la clase active según la sección visible
window.addEventListener('scroll', function() {
    // Obtener las secciones y los enlaces de navegación
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-item');
    
    let currentSection = '';

    // Iterar por cada sección para encontrar la actual
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Si el scroll actual está dentro de los límites de la sección
        if (window.pageYOffset >= sectionTop - 50 && window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    // Eliminar clase active de todos los enlaces
    navLinks.forEach(link => {
        link.classList.remove('active');
        // Agregar clase active al enlace correspondiente
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

function mostrarMas(button) {
    const contenidoExtra = button.nextElementSibling;
    if (contenidoExtra.style.display === "none") {
        contenidoExtra.style.display = "block";
        button.textContent = "Leer menos";
    } else {
        contenidoExtra.style.display = "none";
        button.textContent = "Leer más";
    }
}
