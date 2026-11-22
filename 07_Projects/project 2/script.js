const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;

    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    if(height === '' || height <=0 || isNaN(height)){
        results.innerHTML = 'Please provide a valid height';
    }
    if(weight === '' || weight <=0 || isNaN(weight)){
        results.innerHTML = 'Please provide a valid weight';
    }

    const result = document.querySelector('#results');
    result.textContent = `Your BMI is ${bmi}`;
    if (bmi < 18.6) {
    results.textContent += ' (Underweight)';
    } else if (bmi <= 24.9) {
    results.textContent += ' (Normal weight)';
    } else {
    results.textContent += ' (Overweight)';
    }
});