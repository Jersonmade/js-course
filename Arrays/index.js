// 1 zadanie
// const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артём', 'Глеб']

// const giveParcel = () => {
// 	let shifted = peopleWaiting.shift()
// 	alert(`${shifted} получил(а) посылку
// 	В очереди осталось ${peopleWaiting.length}`)
// }

// const leaveQueueWithoutParcel = () => {
// 	let shifted = peopleWaiting.pop()
// 	alert(`${shifted} не получил(а) посылку и ушёл(ла) из очереди`)
// }

// giveParcel()
// giveParcel()
// giveParcel()

// for(let i = peopleWaiting.length; i > 0; i--) {
// 	leaveQueueWithoutParcel()
// }



// 2 zadanie
// const getSumOfSequence = number => {
// 	let arr = []
// 	for (let i = 1; i <= number; i++) {
// 		arr.push(i)
// 	}

// 	console.log(arr)	

// 	return arr[0] + arr[arr.length - 1]
// }

// console.log(`Результат: ${getSumOfSequence(5)}`)



// 3 zadanie
// const coffees = ['Latte', 'Cappuccino', 'Americano']

// let favoriteCoffeeName = prompt('Поиск кофе по названию ')
// favoriteCoffeeName = favoriteCoffeeName.trim().toLocaleLowerCase()

// const favoriteCoffeeIndex = coffees.findIndex((coffee) => coffee.toLocaleLowerCase() === favoriteCoffeeName)
// const favoriteCoffee = coffees[favoriteCoffeeIndex]
// if(favoriteCoffee) {
// 	alert(`Держите ваш любимый кофе ${favoriteCoffee}. Он ${favoriteCoffeeIndex + 1}-й по популярности в нашей кофейне.`);
// } else {
//    alert('К сожалению, такого вида кофе нет в наличии');
// }




// 4 zadanie 
// const coffees = ['Latte', 'Cappuccino', 'Americano']
// const prices = [1.5, 1, 2]

// let updatedPrices = prices.map((num) => num + 0.5)

// coffees.forEach((coffeeName, index) => {
// 	alert(`Кофе ${coffeeName} сейчас стоит ${updatedPrices[index]} евро`)
// })



// 5 zadanie
let clientsEstimations = []

const askClientToGiveEstimation = () => {
	let otzyv = +prompt('Как вы оцениваете нашу кофейню от 1 до 10?')

	if (otzyv > 0 && otzyv < 11) {
		clientsEstimations.push(otzyv)
	}
}

for (let i = 0; i < 5; i++) {
	askClientToGiveEstimation()
}

console.log(clientsEstimations)

const goodEstimations = clientsEstimations.filter((estimation) => estimation > 5)
const notGoodEstimations = clientsEstimations.filter((estimation) => estimation <= 5)

alert(`Всего положительных оценок: ${goodEstimations.length};
Всего отрицательных оценок: ${notGoodEstimations.length}`)





// 6 zadanie
// const numbers = [10, 4, 100, -5, 54, 2]

// for
// let sum = 0
// for(let i = 0; i < numbers.length; i++) {
// 	sum += numbers[i] ** 3
// }

// console.log(sum)




// for..of
// let sum = 0
// for (const number of numbers) {
// 	sum += number ** 3
// }

// console.log(sum)



// foreach
// let sum = 0
// numbers.forEach(function(number) {
// 	sum += number ** 3
// })

// console.log(sum)



//reduce
// let sum = numbers.reduce((acc, cur) => acc + cur ** 3)

// console.log(sum)



// 7 zadanie
// const goals = [8, 1, 1, 3, 2, -1, 5]

// let maxNumberOfGoals = goals[0]
// let maxNumberOfGoalsIndex = 0
// let minNumberOfGoals = [0]

// goals.forEach((goalNumber, index) => {
// 	if (goalNumber > maxNumberOfGoals) {
// 		maxNumberOfGoals = goalNumber
// 		maxNumberOfGoalsIndex = index
// 	}

// 	if (goalNumber < minNumberOfGoals && goalNumber > 0) {
// 		minNumberOfGoals = goalNumber
// 	}
// })


// // 9 zadanie
// let matrix = []

// for (let i = 0; i < 3; i++) {
// 	const row = []
// 	for (let j = 0; j < 5; j++) {
// 		row.push(j + 1)
// 	}
// 	matrix.push(row)
// }

// console.log(matrix)