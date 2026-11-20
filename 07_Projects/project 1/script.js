
console.log("hitesh");

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    console.log(button);

    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);

        if (button.id === 'gray') {
            body.style.backgroundColor = 'gray';
        }

        if (button.id === 'white') {
            body.style.backgroundColor = 'white';
        }

        if (button.id === 'blue') {
            body.style.backgroundColor = 'blue';
        }

        if (button.id === 'yellow') {
            body.style.backgroundColor = 'yellow';
        }

        if (button.id === 'purple') {
            body.style.backgroundColor = 'purple';
        }
    });
});
