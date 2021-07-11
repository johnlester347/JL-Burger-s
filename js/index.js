

document.querySelector('.js--nav-icon').addEventListener('click', function () {


    const icon = document.querySelector('ion-icon');
    const sidebar = document.querySelector('.sidebar');

    if (icon.classList.contains('menu__icon')) {
        icon.name = 'close';
        icon.classList.add('close__icon');
        icon.classList.remove('menu__icon');
        sidebar.style.display = 'block';
        sidebar.style.right = '0rem';
    } else if (icon.classList.contains('close__icon')) {
        icon.name = 'menu';
        icon.classList.add('menu__icon');
        icon.classList.remove('close__icon');
        sidebar.style.display = 'none';
    }

});