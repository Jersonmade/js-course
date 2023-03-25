// 1 zadanie
// let existedUserLogin = 'the_best_user'
// let existedUserPassword = '12345678'
// let userLogin = prompt('Введите логин: ')
// userLogin = userLogin.trim()

// let userPassword = prompt('Введите пароль: ')
// userPassword = userPassword.trim()

// if (userLogin === existedUserLogin && userPassword === existedUserPassword) {
// 	alert(`Добро пожаловать, ${existedUserLogin}`)
// } else {
// 	alert(`Логин и (или) пароль введены неверно`)
// }



// 2 zadanie
// let quetsion1 = +prompt('Сколько будет 2 + 2? ')
// let answer1 = 4
// if (quetsion1 === answer1) {
// 	alert('Ответ верный')
// } else {
// 	alert('Ответ неверный')
// }

// let quetsion2 = +prompt('Сколько будет 2 * 2? ')
// let answer2 = 4
// if (quetsion2 === answer2) {
// 	alert('Ответ верный')
// } else {
// 	alert('Ответ неверный')
// }

// let quetsion3 = +prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось? ')
// let answer3 = 1
// if (quetsion3 === answer3) {
// 	alert('Ответ верный')
// } else {
// 	alert('Ответ неверный')
// }

// let quetsion4 = +prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши? ')
// let answer4 = 2
// if (quetsion4 === answer4) {
// 	alert('Ответ верный')
// } else {
// 	alert('Ответ неверный')
// }

// let quetsion5 = +prompt('Сколько будет 2 + 2 * 2? ')
// let answer5 = 6
// if (quetsion5 === answer5) {
// 	alert('Ответ верный')
// } else {
// 	alert('Ответ неверный')
// }



// 2 zadanie ispravlennoe
// const quetsion1 = 'Сколько будет 2 + 2? '
// const quetsion2 = 'Сколько будет 2 * 2? '
// const quetsion3 = 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?  '
// const quetsion4 = 'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши? '
// const quetsion5 = 'Сколько будет 2 + 2 * 2? '

// const answer1 = 4
// const answer2 = 4
// const answer3 = 1
// const answer4 = 2
// const answer5 = 6

// let correctAnswer = 0
// let incorrectAnswers = 0

// const userAnswer1 = +prompt(quetsion1)
// if (answer1 === userAnswer1) {
// 	alert('Ответ верный')
// 	correctAnswer += 1
// } else {
// 	alert('Ответ неверный')
// 	incorrectAnswers += 1
// }

// const userAnswer2 = +prompt(quetsion2)
// if (answer2 === userAnswer2) {
// 	alert('Ответ верный')
// 	correctAnswer += 1
// } else {
// 	alert('Ответ неверный')
// 	incorrectAnswers += 1
// }

// const userAnswer3 = +prompt(quetsion3)
// if (answer3 === userAnswer3) {
// 	alert('Ответ верный')
// 	correctAnswer += 1
// } else {
// 	alert('Ответ неверный')
// 	incorrectAnswers += 1
// }

// const userAnswer4 = +prompt(quetsion4)
// if (answer4 === userAnswer4) {
// 	alert('Ответ верный')
// 	correctAnswer += 1
// } else {
// 	alert('Ответ неверный')
// 	incorrectAnswers += 1
// }

// const userAnswer5 = +prompt(quetsion5)
// if (answer5 === userAnswer5) {
// 	alert('Ответ верный')
// 	correctAnswer += 1
// } else {
// 	alert('Ответ неверный')
// 	incorrectAnswers += 1
// }

// alert(`Конец теста! Правильные ответы - ${correctAnswer}
// Неправильные ответы - ${incorrectAnswers}`)



// 3 zadanie
// if(confirm('JavaScript появился в 1995 году?') == true) {
// 	alert('Верно')
// } else {
// 	alert('Неверно! JavaScript появился в 1995 году')
// }

// if(confirm('Спецификация JavaScript называется ECMAScript?') == true) {
// 	alert('Верно')
// } else {
// 	alert('Неверно! Спецификация JavaScript называется ECMAScript')
// }

// if(confirm('JavaScript был создан за 1 месяц?') == true) {
// 	alert('Верно')
// } else {
// 	alert('Неверно! JavaScript был создан за 1 месяц')
// }



// 4 zadanie
// for (let i = 0; i < 3; i++) {
// 	let newStudent = prompt('Введите имя нового студента!')
// 	newStudent = newStudent.trim()
// 	if (newStudent) {
// 		alert(`Добро пожаловать, ${newStudent}!`)
// 	}
// }

// let i = 0
// while (i < 3) {
// 	let newStudent = prompt('Введите имя нового студента!')
// 	newStudent = newStudent.trim()
// 	if (newStudent) {
// 		alert(`Добро пожаловать, ${newStudent}!`)
// 	}
// 	i += 1
// }

// let i = 0
// do {
// 	let newStudent = prompt('Введите имя нового студента!')
// 	newStudent = newStudent.trim()
// 	if (newStudent) {
// 		alert(`Добро пожаловать, ${newStudent}!`)
// 	}
// 	i += 1
// } while (i < 3)




// 5 zadanie
// let sum = 0
// for (let i = 0; i <= 100; i++) {
// 	sum += i
// }

// alert(`Сумма от 0 до 100: ${sum}`)




// 6, 7 zadanie (dopolnitelno)
// let clientName = prompt('Введите имя клиента ')
// let clientSpentForAllTime = +prompt('Сколько клиент потратил за всё время? ')
// let clientSpentToday = +prompt('Сколько клиент потратил сегодня? ')
// let discount

// if (!clientSpentToday || !clientSpentForAllTime){
// 	alert(`Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом!`)
// } else {
// 	if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
// 		discount = 10
// 		clientSpentToday = clientSpentToday - (clientSpentToday / 100 * discount)
// 		alert(`Вам предоставляется скидка в ${discount} %!`)
// 	} else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
// 		discount = 20
// 		clientSpentToday = clientSpentToday - (clientSpentToday / 100 * discount)
// 		alert(`Вам предоставляется скидка в ${discount} %!`)
// 	} else if (clientSpentForAllTime >= 500) {
// 		discount = 30
// 		clientSpentToday = clientSpentToday - (clientSpentToday / 100 * discount)
// 		alert(`Вам предоставляется скидка в ${discount} %!`)
// 	}
// }

// clientSpentForAllTime = clientSpentForAllTime + clientSpentToday
// alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$
// За всё время в нашем ресторане вы потратили ${clientSpentForAllTime}$`)



// 8 zadanie
// const userPassword = prompt(`Введите пароль: `)
// const successMessage = 'Пароль валидный. Добро пожаловать в аккаунт!'
// const errorMessage = 'Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.'

// if (userPassword.length < 3 || userPassword > 20) {
// 	alert(errorMessage)
// } else {
// 	let hasBigSymbol = false
// 	let hasNumbers = false
// 	for (let i = 0; i < userPassword.length; i++) {
// 		const symbol = userPassword[i];
// 		const isNumberSymbol = !isNaN(parseInt(symbol));
// 		if (symbol === symbol.toUpperCase() && !isNumberSymbol) {
// 			hasBigSymbol = true
// 		}
// 		if (isNumberSymbol) {
// 			hasNumbers = true
// 		}
// 	}

// 	if (!hasBigSymbol || !hasNumbers) {
// 		alert(errorMessage)
// 	} else {
// 		alert(successMessage)
// 	}
// }

const password = prompt('Введите пароль');
const errorMessage = 'Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.';
const successMessage = 'Пароль валидный. Добро пожаловать в аккаунт!';

if (password.length < 3 || password.length > 30) {
  alert(errorMessage);
} else {
  let hasBigSymbol = false;
  let hasNumbers = false;
  for (let i = 0; i < password.length; i += 1) {
    const symbol = password[i];
    const isNumberSymbol = !isNaN(parseInt(symbol));
    if (symbol === symbol.toUpperCase() && !isNumberSymbol) {
      hasBigSymbol = true;
    }
    if (isNumberSymbol) {
      hasNumbers = true;
    }
  }

  if (!hasBigSymbol || !hasNumbers) {
    alert(errorMessage);
  } else {
    alert(successMessage);
  }
}