// 1 zadanie
// function getDateFormat (date, separator = '.') {
// 	let day = (date.getDate() < 10) ? `0${date.getDate()}` : date.getDate()
// 	let month = ((date.getMonth() + 1) < 10) ? `0${date.getMonth() + 1}` : date.getMonth() + 1
// 	let year = date.getFullYear()
// 	return `${day}${separator}${month}${separator}${year}`
// }

// let date = new Date()
// let dateFormat = getDateFormat(date)
// console.log(dateFormat)



// 2 zadanie
// function daysUntilBirthday (birthday) {
// 	const today = new Date()
// 	const bDay = new Date(birthday)

// 	const oneDay = 24 * 60 * 60 * 1000
// 	const days = Math.round(Math.abs((today - bDay) / oneDay))

// 	return days
// }

// console.log(daysUntilBirthday(new Date(2023, 03, 26)))



// 3 zadanie
// function addDays(date, days) {
// 	if (!days) {
// 		days = 1
// 	}
// 	date.setDate(date.getDate() + days)
// 	return date
// }

// let today = new Date()
// let tomorrow = addDays(today, 45)
// console.log(tomorrow)