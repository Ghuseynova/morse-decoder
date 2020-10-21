const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode(expr) {
	// write your solution here
	const arr1 = [];
	const newStr = [];

	for (let i = 0; i < expr.length; i += 10) {
		arr1.push(expr.slice(i, i + 10));
	}

	const changedArr = arr1.map((el) => {
		if (!el.includes('*')) {
			return el.replace(/10/gi, '.').replace(/11/gi, '-').replace(/0/gi, '');
		} else {
			return el.replace(/\*\*\*\*\*\*\*\*\*\*/gi, ' ');
		}
	});

	changedArr.forEach((arrEl) => {
		if (arrEl === ' ') {
			newStr.push(' ');
		} else {
			newStr.push(MORSE_TABLE[arrEl]);
		}
	});

	return newStr.join('');
}

module.exports = {
	decode,
};
