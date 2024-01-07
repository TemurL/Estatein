export const uniSlider = (qtt) => {
    const sliders = document.getElementsByClassName('slider');
    if (!sliders) return
    let cards = sliders[0].querySelector('.slider__cards');
    let nextBtn = sliders[0].querySelector('.slider__next-btn');
    let prevBtn = sliders[0].querySelector('.slider__prev-btn');


    const nextBtnAct = () => {
        let translate = getComputedStyle(cards).translate.match(/-?\d+/)
        let value;
        if (!translate) {
            value = 0;
        } else {
            value = Number(getComputedStyle(cards).translate.match(/-?\d+/)[0]);
        }
        value -= 35;
        console.log(value);
        cards.style.translate = `calc(${value}% + 10px)`;
    }

    const prevBtnAct = () => {
        let value = Number(getComputedStyle(cards).translate.match(/-?\d+/img)[0]);
        console.log(value);
        value += 35;
        cards.style.translate = `calc(${value}% + 10px)`;
    }


    const changeNumber = () => {
        //
    }



    nextBtn.addEventListener('click', nextBtnAct);
    prevBtn.addEventListener('click', prevBtnAct);


}
