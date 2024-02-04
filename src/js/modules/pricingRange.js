export const pricingRange = () => {
    const selectElement = document.getElementById('range');
    if (!selectElement) return;

    const rangeBlock = document.getElementsByClassName('search-form__range-block')[0];
    const rangeBlockClickHandler = (e) => {
        e.stopImmediatePropagation();
    }

    const formatOpts = {
        style: 'currency',
        currency: 'USD',
    }

    const selectElementMouseOutHandler = (e) => {
        rangeBlock.classList.remove('show');
        selectElement.children[0].textContent = `
            Up To: ${Intl.NumberFormat('ru', formatOpts).format(rangeBlock.children[2].value)}
        `
        rangeBlock.removeEventListener('click', rangeBlockClickHandler);
        e.currentTarget.removeEventListener('mouseleave', selectElementMouseOutHandler);
    }

    selectElement.addEventListener('click', (e) => {
        rangeBlock.classList.toggle('show');
        rangeBlock.addEventListener('click', rangeBlockClickHandler);
        e.currentTarget.addEventListener('mouseleave', selectElementMouseOutHandler);
    })

    const rengeInput = document.getElementById('pricing');

    const showValueToUser = (e) => {
        let parag = e.currentTarget.parentElement.children[1];
        parag.textContent = `Selected: ${Intl.NumberFormat('ru', formatOpts).format(e.currentTarget.value)}`;
    }

    rengeInput.addEventListener('change', showValueToUser);
}