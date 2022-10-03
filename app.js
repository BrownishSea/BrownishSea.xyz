const hamMenu = document.querySelector('.hamburger-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const acordiones = document.querySelectorAll('.acordion');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

/*Este codigo hace que cada acordion se toglee para 
mostrar el body cuando el header es clickeado esto se hace mayormente con 
css esto es nomas para que funcione bien*/
acordiones.forEach(acordion => {
    acordion.addEventListener('click', e => {
        acordion.classList.toggle('active');
        //Esta parte es solo para cambiar el mas por un menos
        let botonAcordion = acordion.querySelector('button');
        if (botonAcordion.textContent === '+') {
            botonAcordion.textContent = '-';
        } else {
            botonAcordion.textContent = '+';
        }
    });
})