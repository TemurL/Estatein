export const topMessage = () => {
    const block = document.getElementsByClassName('test-container')[0];
    const close = document.getElementsByClassName('test-close')[0];
    if (!block) return
    close.addEventListener('click', () => JSON.parse(block.getAttribute('open')) ? block.setAttribute('open', 'false') : block.setAttribute('open', 'true'));


    // document.getElementsByClassName('test_2')[0].addEventListener('click', () => block.setAttribute('open', 'true'));
}