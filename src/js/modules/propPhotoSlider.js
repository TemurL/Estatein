export const propPhotoSlider = () => {
    const slider = document.querySelector('.prop-photos__slider');
    if (!slider) return
    const miniPhotosDiv = slider.querySelector('.prop-photos__slider-mini-photos');
    const allMinis = Array.from(miniPhotosDiv.children);
    const activePhotosDiv = slider.querySelector('.prop-photos__slider-active');
    const prevBtn = slider.querySelector('.prev-btn');
    const nextBtn = slider.querySelector('.next-btn');

    const setActivePhotos = (type) => {
        const activeMinis = miniPhotosDiv.querySelectorAll('.selected');
        const paths = [];
        activeMinis.forEach((photo, i) => {
            paths.push(getComputedStyle(photo).backgroundImage);
        })
        // activePhotosDiv.innerHTML = '';
        activePhotosDiv.querySelectorAll('.prop-photos__slider-active-photo').forEach((photo, i) => {
            photo.classList.add('small');
            setTimeout(() => {
                try {
                    activePhotosDiv.removeChild(photo)
                } catch {}
            }, 650);
        })
        paths.forEach((path, i) => {
            const pathToBig = path.replace('Imageprop', 'big/Imageprop');
            const img = document.createElement('div');
            img.classList.add('prop-photos__slider-active-photo');
            if (type === 'next-btn') {
                img.id = 'next';
            } else {
                img.id = 'prev';
            }
            img.style.backgroundImage = pathToBig;
            activePhotosDiv.appendChild(img);
            setTimeout(() => img.id = `show_${i}`, 50);
        })

        if (allMinis[0].classList.contains('selected')) {
            prevBtn.setAttribute('disabled', 'disabled');
        } else {
            prevBtn.removeAttribute('disabled');
        }
        if (allMinis.at(-1).classList.contains('selected')) {
            nextBtn.setAttribute('disabled', 'disabled');
        } else {
            nextBtn.removeAttribute('disabled');
        }
    }

    const btnClickHandker = (e) => {
        const activeMinis = miniPhotosDiv.querySelectorAll('.selected');
        const map = {};
        allMinis.forEach((el, i) => {
            if (el.classList.contains('selected')) {
                map[el.id] = i;
            }
        })
        activeMinis.forEach(el => el.classList.remove('selected'));
        Object.values(map).forEach(index => {
            if (e.currentTarget.classList.contains('next-btn')) {
                allMinis[index + 1].classList.add('selected')
                prevBtn.removeAttribute('disabled');
            } else {
                allMinis[index - 1].classList.add('selected')
                nextBtn.removeAttribute('disabled');
            }
        })
        setActivePhotos(e.currentTarget.classList[1]);
    }

    setActivePhotos();
    nextBtn.addEventListener('click', btnClickHandker);
    prevBtn.addEventListener('click', btnClickHandker);
    Array.from(miniPhotosDiv.children).forEach((el ,i) => {
        el.addEventListener('click', (e) => {
            if (e.currentTarget.classList.contains('selected')) return
            const activeMinis = miniPhotosDiv.querySelectorAll('.selected');
            activeMinis.forEach(el => el.classList.remove('selected'));
            allMinis[i].classList.add('selected');
            try {
                allMinis[i + 1].classList.add('selected');
            } catch {
                allMinis[i - 1].classList.add('selected');
            }
            setActivePhotos();
        })
    })
}