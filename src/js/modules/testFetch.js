export const testFetch = () => {
    const button = document.getElementById('getGata');
    const parag = document.getElementById('respData');

    async function getData() {
        let url = 'https://jsonplaceholder.typicode.com/users';

        let getedData;

        await fetch(url).then(respone => respone.json()).then(json => getedData = json).catch(er => console.warn(er));
        console.log(getedData);

        parag.textContent = Object.keys(getedData).length ? 'success' : 'ERROR!';
    
    }

    button.addEventListener('click', getData);
}