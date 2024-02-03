export const pricingRange = () => {
    const selectElement = document.getElementById('range');
    if (!selectElement) return;

    const rangeBlock = document.getElementsByClassName('search-form__range-block')[0];

    selectElement.addEventListener('click', (e) => {
        rangeBlock.classList.toggle('show');
    })
    selectElement.addEventListener('mouseleave', (e) => {
        rangeBlock.classList.remove('show');
        selectElement.children[0].textContent = `
            Up To: $${rangeBlock.children[2].value}
        `
    })

    const rengeInput = document.getElementById('pricing');

    const showValueToUser = (e) => {
        let parag = e.target.parentElement.children[1];
        parag.textContent = `Selected: $${e.target.value}`;
        console.log('done');
    }

    rengeInput.addEventListener('change', showValueToUser);
}