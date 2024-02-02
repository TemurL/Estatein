export const openMobMenu = () => {
    const btn = document.querySelector('.header__mob-menu-btn');
    const menu = document.querySelector('.header__mob-menu');
    const main = document.querySelector('main');

    const mainSecClickHandler = (e) => {
        btn.click();
    }


    const btnClickHandler = (e) => {
        menu.classList.toggle('open');
        document.body.classList.toggle('scroll-lock');
        if (menu.classList.contains('open')) {
            main.addEventListener('click', mainSecClickHandler);
        } else {
            main.removeEventListener('click', mainSecClickHandler);
        }
    }

    const checkWidth = (e) => {
       if (window.innerWidth >= 768 && menu.classList.contains('open')) {
            btn.click();
       }
    }

    window.onresize = checkWidth;

    btn.addEventListener('click', btnClickHandler);
}  