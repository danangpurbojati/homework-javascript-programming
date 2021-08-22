window.addEventListener('DOMContentLoaded', () => {
    const colorForm = document.getElementById('color-form');
    const hiddenButton = document.querySelector('.hidden-btn');
    const temperatureWrapper = document.querySelector('.temperature-form-wrapper');
    const temperatureForm = document.getElementById('temperature-form');


    colorForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const colorInput = document.getElementById('color-input');
        const backgroundChange = document.querySelectorAll('.background-change');

        backgroundChange.forEach(element => {
            element.style.backgroundColor = colorInput.value;
        });

        colorInput.value = "";
    });


    hiddenButton.addEventListener('click', () => {
        temperatureWrapper.style.height =  (temperatureWrapper.style.height === 'auto' | temperatureWrapper.style.height === '') ? '0' : 'auto';
    });

    temperatureForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const tempInfo = document.getElementById('temp-info');
        const unitInfo = document.getElementById('unit-info');
        const targetInfo = document.getElementById('target-info');
        const resultInfo = document.getElementById('result-info');

        const {currentTemp, targetTemp, inputValue} = Object.fromEntries(new FormData(e.target));
        const resultCalc = (temperatureCalculation(currentTemp, targetTemp, parseInt(inputValue)));

        tempInfo.innerHTML = parseInt(inputValue);
        unitInfo.innerHTML = currentTemp;
        targetInfo.innerHTML = targetTemp;
        resultInfo.innerHTML = Math.round(resultCalc * 100) / 100;
    })
});