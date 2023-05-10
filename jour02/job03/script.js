function addone() {
    let count = 0;
    let btn = document.querySelector('#button');
    let divSection = document.getElementById('compteur');
    btn.addEventListener('click', (e) => {
        count++;
        divSection.innerHTML = `Number of Clicks are: ${count}`;
    });
}
addone()