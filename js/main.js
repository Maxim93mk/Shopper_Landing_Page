const mobile_menu = document.querySelector('.mobile-menu');


document.querySelector('.header-logo-form__menu_button')
    .addEventListener('click', (event) => {
        mobile_menu.classList.remove('hidden');
        mobile_menu.classList.add('visible');
    })


mobile_menu.querySelector('.mobile-menu__close')
    .addEventListener('click', (event) => {
        mobile_menu.classList.add('hidden');
        mobile_menu.classList.remove('visible');
    })