// import temperatureCalculation from '../temperatureCalculation.js';
// const temperatureCalculation = require('../temperatureCalculation.js');


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


test('Should be return same value input if using same temperature unit', () => {
    expect(temperatureCalculation('kelvin', 'kelvin', 10)).toBe(10);
    expect(temperatureCalculation('celcius', 'celcius', 10)).toBe(10);
    expect(temperatureCalculation('fahrenheit', 'fahrenheit', 10)).toBe(10);
});

test('Should be return 212 if converting 100 celcius to fahrenheit', () => {
    expect(temperatureCalculation('celcius', 'fahrenheit', 100)).toBe(212);
});

test('Should be return 373.15 if converting 100 celcius to kelvin', () => {
    expect(temperatureCalculation('celcius', 'kelvin', 100)).toBe(373.15);
});

test('Should be return 100 if converting 373.15 kelvin to celcius', () => {
    expect(temperatureCalculation('kelvin', 'celcius', 373.15)).toBe(100);
});

test('Should be return 212 if converting 373.15 kelvin to fahrenheit', () => {
    expect(temperatureCalculation('kelvin', 'fahrenheit', 373.15)).toBe(212);
});

test('Should be return 100 if converting 212 fahrenheit to celcius', () => {
    expect(temperatureCalculation('fahrenheit', 'celcius', 212)).toBe(100);
});

test('Should be return 373.15 if converting 212 fahrenheit to kelvin', () => {
    expect(temperatureCalculation('fahrenheit', 'kelvin', 212)).toBe(373.15);
});

test('Should be return unknown unit if using unknown unit', () => {
    expect(temperatureCalculation('joni', 'ahmad', 40)).toBe('unknown unit');
})

test('Should be return unknown unit if using same unknown unit', () => {
    expect(temperatureCalculation('joni', 'joni', 40)).toBe('unknown unit');
})