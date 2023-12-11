export const setActiveNavLi = () => {
    let title = document.title;
    const navLiArr = document.querySelectorAll('.nav__li');

    navLiArr.forEach(li => {
        if (li.textContent === title) li.classList.add('nav__li_active');
    })
}