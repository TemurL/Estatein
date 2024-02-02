export const uniSlider = (n) => {
    const slider = document.getElementsByClassName('slider');
    if (slider.length == 0) return
    const increaseNumber = (e) => {
        let pageNumber = e.target.parentElement.parentElement.querySelector('.slider__current-page-number');
        let digit = pageNumber.textContent;
        digit++;
        pageNumber.textContent = digit;
    }
    const decreaseNumber = (e) => {
        let pageNumber = e.target.parentElement.parentElement.querySelector('.slider__current-page-number');
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
            if (Array.from(activeCards).indexOf(activeCard) == activeCards.length - 1) {
                allCards[index].classList.remove('show');
                allCards[index].setAttribute('position', 'after');
            }
            allCards[index - 1].classList.add(showClass);
        })
        if (allCards[0] == sliderCards.querySelector('.show_1')) {
            e.target.setAttribute('disabled', 'disabled');
        }
        decreaseNumber(e);

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
            if (Array.from(activeCards).indexOf(activeCard) == activeCards.length - 1) {
                allCards[index + 1].classList.add('show');
            }
            if (Array.from(activeCards).indexOf(activeCard) == 0) {
                allCards[index].classList.remove('show');
                allCards[index].setAttribute('position', 'before');
            }
            allCards[index + 1].classList.add(showClass);
        })
        if (allCards.at(-1) == sliderCards.querySelectorAll('.show')[activeCards.length - 1]) {
            e.target.setAttribute('disabled', 'disabled');
        }
        increaseNumber(e);
    }
    const resizeObserverForSliders = new ResizeObserver((entries, observer) => {
        entries.forEach(entry => {
            let slide = entry.target;
            let slider = slide.parentElement;
            let maxHeight = 0
            Array.from(slider.children).forEach(slide => {
                if (slide.clientHeight > maxHeight) {
                    maxHeight = slide.clientHeight;
                };
            });
            if (window.outerWidth <= 768) {
                if (slide.classList.contains('show_2')) {
                    slide.classList.remove('show_2')
                    slide.classList.remove('show');
                    slide.setAttribute('removedclass', 'show_2');
                }
                if (slide.classList.contains('show_3')) {
                    slide.classList.remove('show_3')
                    slide.classList.remove('show')
                    slide.setAttribute('removedclass', 'show_3');
                }
            } else {
                if (slide.getAttribute('removedclass')) {
                    slide.classList.add('show');
                    slide.classList.add(`${slide.getAttribute('removedclass')}`);
                }
            }
            slider.style.height = `calc(${maxHeight}px + 2.5rem)`;
            let totalPages = slider.parentElement.querySelector('.slider__total-pages-number');        
            totalPages.textContent = `${
                slider.children.length - slider.querySelectorAll('.show').length + 1
            }`;
        })
    })
    for (let i = 0; i < slider.length; i++) {
        let totalPages = slider[i].querySelector('.slider__total-pages-number');        
        totalPages.textContent = `${
            slider[i].children[0].children.length - slider[i].querySelectorAll('.show').length + 1
        }`;

        Array.from(slider[i].children[0].children).forEach(slide => resizeObserverForSliders.observe(slide))

        slider[i].querySelector('.slider__prev-btn').addEventListener('click', prevBtnAct);
        slider[i].querySelector('.slider__next-btn').addEventListener('click', nextBtnAct);
    
        slider[i].children[0].addEventListener('touchstart', handleTouchStart, false);
        slider[i].children[0].addEventListener('touchmove', handleTouchMove, false);
        let xDown = null;
        let yDown = null;
            
        function getTouches(evt) {
            return evt.touches
        }
        
        function handleTouchStart(evt) {
            const firstTouch = getTouches(evt)[0];
            xDown = firstTouch.clientX;
            yDown = firstTouch.clientY;
        };
            
        function handleTouchMove(evt) {
            if ( ! xDown || ! yDown ) return
                
            let xUp = evt.touches[0].clientX;
            let yUp = evt.touches[0].clientY;
                
            let xDiff = xDown - xUp;
            let yDiff = yDown - yUp;
                
            if ( Math.abs(xDiff) > Math.abs(yDiff) ) {/* отлавливаем разницу в движении */
                if ( xDiff > 0 ) {
                    slider[i].querySelector('.slider__next-btn').click();
                } else {
                    slider[i].querySelector('.slider__prev-btn').click();
                }
            } else {
                if ( yDiff > 0 ) {
                /* swipe вверх */
                } else {
                /* swipe вниз */
                }
            }
            /* свайп был, обнуляем координаты */
            xDown = null;
            yDown = null;
        };
    }
}