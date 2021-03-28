const items = document.getElementById('items');
let xhr = new XMLHttpRequest;
xhr.open('GET', ' https://netology-slow-rest.herokuapp.com');
xhr.responseType = 'json';
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 ) {
        document.getElementById('loader').classList.remove('loader_active');
        const data = xhr.response;
        const valutes = data.response.Valute;
        for (let prop in valutes) {
            items.insertAdjacentHTML('beforeend', `
            <div class="item">
                <div class="item__code">
                    ${valutes[prop].CharCode}
                </div>
                <div class="item__value">
                    ${valutes[prop].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>
            `);
        }
    }
}
