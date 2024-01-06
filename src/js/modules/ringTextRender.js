export const ringTextRender = () => {
    let srOnly = document.getElementsByClassName('ring-text__sr-only')[0];
    if (!srOnly) return
    let textSrc = srOnly.textContent;
    const textNeeds = document.getElementsByClassName('ring-text__text-needs')[0];
    for (let i in textSrc) {
        let span = document.createElement('span');
        span.classList.add('char');
        span.classList.add('ring-text__char');
        span.setAttribute('style', `--index: ${i}`);
        span.textContent = `${textSrc[i]}`
        textNeeds.appendChild(span);
    }

    const ringText = document.getElementsByClassName('ring-text')[0];
    ringText.setAttribute('style', `--char-count: ${textSrc.length}`);
}