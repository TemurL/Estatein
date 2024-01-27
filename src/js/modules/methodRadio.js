export const methodRadio = () => {
    const labels = document.querySelectorAll('label[for="contact-form-1__method_number"], label[for="contact-form-1__method_email"]');

    if (!labels) return

    labels.forEach(label => {
        label.addEventListener('click', (e) => {
            const radio = e.target.children[0];
            let value = radio.classList.contains('select');
            if (!value) {
                label.parentElement.querySelector('span.select').classList.remove('select');
                radio.classList.add('select');
            }
        })
    })
}