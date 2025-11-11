document.addEventListener('DOMContentLoaded', function() {
    
    // Funcionalidad del Menú Hamburguesa para Móviles
    const hamburger = document.querySelector('.hamburger');
    const navMenuWrapper = document.querySelector('.nav-menu-wrapper');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenuWrapper.classList.toggle('active');
    });

    // Cierra el menú al hacer clic en un enlace
    navLinks.forEach(link => link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenuWrapper.classList.remove('active');
    }));

    // Cambiar estilo del header al hacer scroll
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

});