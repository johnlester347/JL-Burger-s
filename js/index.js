document.querySelector('.js--nav-icon').addEventListener('click', function () {


    const icon = document.querySelector('ion-icon');
    const sidebar = document.querySelector('.sidebar');

    if (icon.classList.contains('menu__icon')) {
        icon.name = 'close';
        icon.classList.add('close__icon');
        icon.classList.remove('menu__icon');
        sidebar.style.transform = 'translateX(5%)';
        sidebar.style.boxShadow = '0 0 55px 10px rgba(255, 81, 0, 0.65)';
    } else if (icon.classList.contains('close__icon')) {
        icon.name = 'menu';
        icon.classList.add('menu__icon');
        icon.classList.remove('close__icon');
        sidebar.style.transform = 'translateX(100%)';
        sidebar.style.boxShadow = 'none';
    }

});