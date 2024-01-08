export const uniSlider = () => {
    const slider = document.getElementsByClassName('slider');
    if (slider.length == 0) return


    const increaseNumber = () => {
        let pageNumber = document.querySelector('.slider__current-page-number');
        let digit = pageNumber.textContent;
        digit++;
        pageNumber.textContent = digit;
    }
    const decreaseNumber = () => {
        let pageNumber = document.querySelector('.slider__current-page-number');
        let digit = pageNumber.textContent;
        digit--;
        pageNumber.textContent = digit;
    }

    const prevBtnAct = (e) => {
        let nextBtn = e.target.parentElement.children[1];
        nextBtn.removeAttribute('disabled');
        let sliderCards = e.target.parentElement.parentElement.parentElement.children[0];
        let allCards = Array.from(sliderCards.children);
        let activeCards = sliderCards.querySelectorAll('.show');
        activeCards.forEach(activeCard => {
            let index = Array.from(allCards).indexOf(activeCard);
            let showClass = activeCard.classList[3];
            activeCard.classList.remove(showClass);
            if (Array.from(activeCards).indexOf(activeCard) == 0) {
                allCards[index - 1].classList.add('show');
            }
            if (Array.from(activeCards).indexOf(activeCard) == 2) {
                allCards[index].classList.remove('show');
                allCards[index].setAttribute('position', 'after');
            }
            allCards[index - 1].classList.add(showClass);
        })
        if (allCards[0] == sliderCards.querySelector('.show_1')) {
            e.target.setAttribute('disabled', 'disabled');
        }
        decreaseNumber();

    }
    const nextBtnAct = (e) => {
        let prevBtn = e.target.parentElement.children[0];
        prevBtn.removeAttribute('disabled');
        let sliderCards = e.target.parentElement.parentElement.parentElement.children[0];
        let allCards = Array.from(sliderCards.children);
        let activeCards = sliderCards.querySelectorAll('.show');
        activeCards.forEach(activeCard => {
            let index = Array.from(allCards).indexOf(activeCard);
            let showClass = activeCard.classList[3];
            activeCard.classList.remove(showClass);
            if (Array.from(activeCards).indexOf(activeCard) == 2) {
                allCards[index + 1].classList.add('show');
            }
            if (Array.from(activeCards).indexOf(activeCard) == 0) {
                allCards[index].classList.remove('show');
                allCards[index].setAttribute('position', 'before');
            }
            allCards[index + 1].classList.add(showClass);
        })
        if (allCards.at(-1) == sliderCards.querySelector('.show_3')) {
            e.target.setAttribute('disabled', 'disabled');
        }
        increaseNumber();
    }



    for (let i = 0; i < slider.length; i++) {
        let totalPages = slider[i].querySelector('.slider__total-pages-number');

        totalPages.textContent = `${
            slider[i].children[0].children.length - slider[i].querySelectorAll('.show').length + 1
        }`
        slider[i].querySelector('.slider__prev-btn').addEventListener('click', prevBtnAct);
        slider[i].querySelector('.slider__next-btn').addEventListener('click', nextBtnAct);
    }
}
