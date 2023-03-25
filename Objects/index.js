// 1 zadanie
// const users = [
// 	{
// 		username: 'David',
// 		status: 'online',
// 		lastActivity: 10
// 	},
// 	{
// 		username: 'Lucy',
// 		status: 'offline',
// 		lastActivity: 22
// 	},
// 	{
// 		username: 'Bob',
// 		status: 'online',
// 		lastActivity: 104
// 	}
// ]

// const onlineUsers = users.filter((element) => element.status === 'online')
// const usersOnlineNames = onlineUsers.map((element) => element.username).join(', ')
// alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`)



// 2 zadanie
// const ordersArr = [4, 2, 1, 3]
// const people = [
// 	{id: 1, name: 'Максим' },
// 	{id: 2, name: 'Николай' },
// 	{id: 3, name: 'Ангелина' },
// 	{id: 4, name: 'Виталий'},
// ]
// const giveTalonsInOrder = (patients, orders) => {
// 	let sortedPatients = []
// 	orders.forEach(order => {
// 		patients.forEach(patient => {
// 			if (patient.id === order) {
// 				sortedPatients.push(patient)
// 			}
// 		})
// 	});

// 	return sortedPatients
// }

// const result = giveTalonsInOrder(people, ordersArr)
// console.log(`result`, result)



// 3 zadanie
// const student = {
// 	name: 'Maxim',
// 	programmingLanguage: 'JavaScript'
// }

// const handleObject = (obj, key, action) => {
// 	if (action === 'get') {
// 		return obj[key]
// 	}

// 	if (action === 'add') {
// 		obj[key] = ''
// 		return obj
// 	}

// 	if (action === 'delete') {
// 		delete obj[key]
// 		return obj
// 	}
// }

// const result = handleObject(student, 'language', 'add')
// console.log('result', result)



// 4 zadanie
// const student = {
// 	fullName: 'Максим',
// 	experienceInMonth: 12,
// 	stack: ['HTML', 'CSS', 'JavaScript', 'React'],
// }

// const giveJobToStudent = (student, jobName) => {
// 	alert(`Поздравляем! У студента ${student.fullName} появилась новая работа!
// 	Теперь он ${jobName}`)
// 	return {
// 		...student,
// 		job: jobName,
// 	}
// }

// const updateStudent = giveJobToStudent(student, 'веб-разработчик')
// console.log('updatedStudent', updateStudent);



// 5 zadanie
// const groceries = {
// 	'Orange juice': {
// 		price: 1.5,
// 		discount: 10,
// 	},
// 	'Chocolate': {
// 		price: 2,
// 		discount: 0,
// 	},
// }

// const getTotalPriceOfShoppingBag = (shoppingBag) => {
// 	let totalPrice = 0
// 	shoppingBag.forEach(item => {
// 		let itemPrice = item.quantity * item.product.price * (1 - item.product.discount)
// 		totalPrice += itemPrice
// 	})

// 	return Math.round(totalPrice * 100) / 100
// }

// const shoppingBag = [
// 	{product: 'Chocolate', quantity: 3},
// 	{product: 'Orange juice', quantity: 23},
// ]
// const totalPrice = getTotalPriceOfShoppingBag(shoppingBag)
// console.log('totalPrice', totalPrice)



// 7 zadanie
// const getKiller = (suspectInfo, deadPeople) => {
// 	let suspects = Object.keys(suspectInfo)
// 	for (let suspect of suspects) {
// 		let seen = suspectInfo[suspect]
// 		if (deadPeople.every(person => seen.includes(person))) {
// 			return suspect
// 		}
// 	}
// }

// console.log(getKiller (
// 	{
// 		'James': ['Jacob', 'Bill', 'Lucas'],
// 		'Johnny': ['David', 'Kyle', 'Lucas'],
// 		'Peter': ['Lucy', 'Kyle'],
// 	},
// 	['Lucas', 'Bill']
// )) 