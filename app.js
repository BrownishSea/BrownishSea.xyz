const hamMenu = document.querySelector('.hamburger-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const acordiones = document.querySelectorAll('.acordion')
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});
acordiones.forEach(acordion => {
    acordion.addEventListener('click', e => {
        let botonAcordion = acordion.querySelector('button');
        acordion.classList.toggle('active');
        if (botonAcordion.textContent === '+') {
            botonAcordion.textContent = '-';
        } else {
            botonAcordion.textContent = '+';
        }
    })
})