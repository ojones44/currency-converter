// Module Imports
import setTime from './modules/setTime';

// On page load functions

setTime();
setInterval(setTime, 1000);
const errorSound = new Audio('./sounds/error.mp3');

// API calls

const getConversionRate = async (from, to) => {
	const url = `https://api.exchangerate.host/convert?from=${from}&to=${to}`;
	const res = await fetch(url);
	const json = await res.json();

	return json['info']['rate'];
};

const getSymbols = async () => {
	const url = 'https://api.exchangerate.host/symbols';
	const res = await fetch(url);
	const json = await res.json();

	return json.symbols;
};

const createOptionElement = (element, currency) => {
	const optionElement = document.createElement('option');

	optionElement.value = currency.code;
	optionElement.textContent = currency.description;

	element.appendChild(optionElement);
};

const setOptionElements = async (element) => {
	const symbols = await getSymbols();
	Object.keys(symbols).forEach((currency) =>
		createOptionElement(element, symbols[currency])
	);
};

const setupCurrencies = () => {
	const fromCurrency = document.getElementById('from-currency');
	const toCurrency = document.getElementById('to-currency');

	setOptionElements(fromCurrency);
	setOptionElements(toCurrency);
};

const setupConvertListener = () => {
	const convertButton = document.getElementById('convert');

	convertButton.addEventListener('click', handleConvert);
};

const handleConvert = async () => {
	const from = document.getElementById('from-currency');
	const to = document.getElementById('to-currency');
	const amount = document.getElementById('amount').value;
	const result = document.getElementById('result');

	const rate = await getConversionRate(from.value, to.value);

	const conversion = Number(amount) * rate;

	result.innerHTML = `${amount} ${from.value} = ${conversion.toFixed(3)} ${
		to.value
	}`;
};

setupCurrencies();
setupConvertListener();

const error = document.getElementById('reset');

error.addEventListener('click', () => {
	errorSound.play();
});
