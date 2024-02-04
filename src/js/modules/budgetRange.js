export const budgetRange = () => {
    const budgetBlock = document.querySelector('.contact-form-1__budget-block');

    if (!budgetBlock) return

    const budget = budgetBlock.querySelector('.contact-form-1__budget');

    const budgetClickHandler = (e) => {
        e.stopImmediatePropagation()
    }

    const budgetBlockClickHandler = (e) => {
        e.stopPropagation()
        if (budget.classList.contains('show')) {
            budget.classList.remove('show');
            budget.removeEventListener('click', budgetClickHandler);
            e.currentTarget.querySelector('p.label').textContent = `
                ${Intl.NumberFormat('ru', {
                    style: 'currency',
                    currency: 'USD',
                }).format(budget.querySelector('#contact-form-1__budget_from').value)}
                  -  
                ${Intl.NumberFormat('ru', {
                    style: 'currency',
                    currency: 'USD',
                }).format(budget.querySelector('#contact-form-1__budget_to').value)}
            `;
        } else {
            budget.classList.add('show');
            budget.addEventListener('click', budgetClickHandler);
        }
    }

    budgetBlock.addEventListener('click', budgetBlockClickHandler);

};