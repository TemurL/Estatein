export const pushMessage = () => {
    const pushElem = document.getElementsByClassName('push-message')[0];
    if (!pushElem) return
    const closeBtn = document.getElementsByClassName('push-message__closeBtn')[0];

    closeBtn.addEventListener('click', () => !JSON.parse(pushElem.getAttribute('open')) ? pushElem.setAttribute('open', 'true') : pushElem.setAttribute('open', 'false'));
}