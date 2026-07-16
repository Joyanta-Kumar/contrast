const app = document.getElementById('app');
const btn = document.createElement('button');

btn.textContent = 'Contrast';
btn.className = 'btn';

let current_bg = 'white';

btn.addEventListener('mousedown', () => {
    if (current_bg == 'black') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        current_bg = 'white';
    }
    else {
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
        current_bg = 'black';
    }

});

app.append(btn)