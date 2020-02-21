const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
const messageThree = document.querySelector('#message-3');

// messageOne.textContent = 'From JS';

weatherForm.addEventListener('submit', e => {
    e.preventDefault();

    const location = search.value;

    messageOne.textContent = 'Loading data...';
    messageTwo.textContent = '';
    messageThree.textContent = '';

    if (location === 'hello') {
        messageThree.textContent = 'Nek u suk hehehe';
    }

    fetch('/weather?address=' + location).then(response => {
        response.json().then(data => {
            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecastData;
            }
        });
    });
});