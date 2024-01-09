export const openPropCardParag = () => {
    let parags = document.querySelectorAll('.properties__card-parag');
    if (parags.length == 0) return
    parags.forEach(parag => {
        parag.addEventListener('click', (e) => {
            e.target.classList.toggle('properties__card-parag_open');
        })
    })
}