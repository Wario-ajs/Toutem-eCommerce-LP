const botaoMenu = document.querySelector('.header__menu');
const menu = document.querySelector('.menu-hamburguer')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-hamburguer--ativo')
})