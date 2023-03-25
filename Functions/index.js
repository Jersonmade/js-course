// 1 zadanie
// function getName1(name) {
// 	return `Имя равно ${name}`
// }

// const getName2 = function(name) {
// 	return `Имя равно ${name}`
// }

// const getName3 = name => `Имя равно ${name}`

// console.log('getName1', getName1('Dima'))
// console.log('getName2', getName1('Misha'))
// console.log('getName1', getName1('Maks'))



// 2 zadanie
// const getSumOfNumbers = (number, type = 'odd') => {
// 	let sum = 0
// 	for (let i = 0; i <= number; i++) {
// 	const isEven = i % 2 == 0 
// 	const isOdd = !isEven
// 		if (!type) {
// 			sum += i 
// 		} else if (isEven && type === 'even') {
// 			sum += i
// 		} else if (isOdd && type === 'odd') {
// 			sum += i
// 		}
// 	}

// 	return sum
// }

// console.log(getSumOfNumbers(10, ''))



// 3 zadanie
// const getDivisorsCount = (number = 1) => {
// 	if (number < 0 || !Number.isInteger(number)) {
// 		alert('number должен быть целым числом и больше нуля!')
// 	} else {
// 		let counter = 0
// 		for (let i = number; i > 0; i--) {
// 			if (number % i === 0) {
// 				counter++
// 			}
// 		}
// 		return counter
// 	}
// }

// console.log(getDivisorsCount(12))



// 4 zadanie
// const checkQuestionAnswer = (question, correctAnswer) => {
// 	let userQuestion = prompt(question)
// 	userQuestion = userQuestion.trim().toLowerCase()
// 	// correctAnswer = correctAnswer.toLowerCase()

// 	if (correctAnswer.toLowerCase() === userQuestion) {
// 		alert('Ответ верный')
// 	} else {
// 		alert('Ответ неверный')
// 	}
// }

// checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');



// 5 zadanie
const showSuccessMessage = (message) => {
	console.log(message)
}

const showErrorMessage = (message) => {
	console.error(message)
}

const checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {
	let countErrors = 0
	for (let i = 0; i < text.Length; i++) {
		const currentSymbol = text[i]
		if (errorCallback && currentSymbol === errorSymbol) {
			errorCallback(`Найден запрещённый символ "${errorSymbol}" под индексом ${i}.`)
			countErrors++
		}
	}

	if (successCallback && countErrors === 0) {
		successCallback('В данном тексте нет запрещенных символов');
	}
}

const text = 'Привет! Как дела! Давно мы с тобой не виделись.';
checkTextOnErrorSymbol(text, 'в', showSuccessMessage, showErrorMessage);





// const showSuccessMessage = (message) => {
// 	console.log(message);
// }

// const showErrorMessage = (message) => {
// 	console.error(message);
// }

// const checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {
// 	let countErrors = 0;
// 	for (let i = 0; i < text.length; i += 1) {
// 		 const currentSymbol = text[i];
// 		 if (currentSymbol === errorSymbol && errorCallback) {
// 			  errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`);
// 			  countErrors += 1;
// 		 }
// 	}

// 	if (successCallback && countErrors === 0) {
// 		 successCallback('В данном тексте нет запрещенных символов');
// 	}
// }

// const text = 'Привет! Как дела! Давно мы с тобой не виделись.'
// checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);