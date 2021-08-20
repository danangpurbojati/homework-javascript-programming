const temperatureCalculation = (current, target, currentValue) => {
    let calculationResult;

    if (current === target ) {
        calculationResult = currentValue;
    } else if (current === 'kelvin' && target === 'celcius') {
        calculationResult = currentValue - 273.15;
    } else if (current === 'kelvin' && target === 'fahrenheit') {
        calculationResult = ((currentValue - 273.15)*1.8) + 32;
    } else if (current === 'celcius' && target === 'kelvin') {
        calculationResult = currentValue + 273.15;
    } else if (current === 'celcius' && target === 'fahrenheit') {
        calculationResult = (currentValue*1.8) + 32;
    } else if (current === 'fahrenheit' && target === 'kelvin') {
        calculationResult =  ((currentValue - 32)/1.8) + 273.15;
    } else if (current === 'fahrenheit' && target === 'celcius'){
        calculationResult = (currentValue - 32)/1.8;
    } else {
        calculationResult = 'unknown unit'
    }

    return calculationResult;
}


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
       /*  const currentUnit = document.querySelectorAll('input[name="currentTemp"]');
        const targetUnit = document.querySelectorAll('input[name="targetTemp"]');
        const inputTemperature = parseInt(document.querySelector('.temp-input').value);
        let selectedCurrentUnit;
        let selectedTargetUnit;

        currentUnit.forEach(element => {
            if(element.checked){
                selectedCurrentUnit = element.value;
            }
        })

        targetUnit.forEach(element => {
            if(element.checked){
                selectedTargetUnit = element.value;
            }
        }) */
        const {currentTemp, targetTemp, inputValue} = Object.fromEntries(new FormData(e.target));
        // const resultCalc = (temperatureCalculation(selectedCurrentUnit, selectedTargetUnit, inputTemperature));
        const resultCalc = (temperatureCalculation(currentTemp, targetTemp, parseInt(inputValue)));

        /* tempInfo.innerHTML = inputTemperature;
        unitInfo.innerHTML = selectedCurrentUnit;
        targetInfo.innerHTML = selectedTargetUnit;
        resultInfo.innerHTML = Math.round(resultCalc * 100) / 100; */

        tempInfo.innerHTML = parseInt(inputValue);
        unitInfo.innerHTML = currentTemp;
        targetInfo.innerHTML = targetTemp;
        resultInfo.innerHTML = Math.round(resultCalc * 100) / 100;

        
        console.log(currentTemp);
        console.log(targetTemp);
        console.log(inputValue);
    })
});