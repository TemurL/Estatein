export const budgetRange = () => {
    const budgetBlock = document.getElementsByClassName('contact-form-1__budget-block')[0];

    if (!budgetBlock) return

    const budget = budgetBlock.querySelector('.contact-form-1__budget');

    budgetBlock.addEventListener('click', (e) => {
        budget.classList.toggle('show');
    })
    budgetBlock.addEventListener('mouseleave', (e) => {
        budget.classList.remove('show');
        budgetBlock.querySelector('p').textContent = `
            Range: ${budget.querySelector('#contact-form-1__budget_from').value} - ${budget.querySelector('#contact-form-1__budget_to').value}
        `;
    })
};