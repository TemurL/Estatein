export const propBtn = () => {
    const btnsArr = document.querySelectorAll('.properties__card-button');
    if (!btnsArr.length) return

    btnsArr.forEach(btn => {
        btn.addEventListener('click', e => {
            let slide = e.currentTarget.parentElement.parentElement;
            let title = slide.querySelector('.properties__card-title');
            let firstWord = title.textContent.split(' ').join('-').toLowerCase();
            location.assign(new URL(`/${firstWord}.html`, location.origin))
        })
    })
}