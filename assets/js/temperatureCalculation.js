const temperatureCalculation = (current, target, currentValue) => {
    let calculationResult;
    const sameDefinedUnit = (current === 'kelvin' && target === 'kelvin') ||
                            (current === 'celcius' && target === 'celcius') ||
                            (current === 'fahrenheit' && target === 'fahrenheit');

    if (sameDefinedUnit) {
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

module.exports = temperatureCalculation;