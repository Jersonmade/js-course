// 1,2 zadanie
// const myName = 'Дмитрий'
// const programmingLanguage = 'JavaScript'
// const courseCreatorName = 'Vladilen Minin'
// const reasonText = 'это очень интересная профессия'
// const numberOfMonth = '2'

// console.log(`Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования
// ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.
// Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а)
// ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен(а), что пройду данный курс до
// конца`)

// let myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования
// ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.
// Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а)
// ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен(а), что пройду данный курс до
// конца`

// myInfoText = myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase())

// console.log(myInfoText)

// console.log(`Длина строки: ${myInfoText.length}`)

// console.log(`Первый символ строки: ${myInfoText[0]}
// Последний символ строки: ${myInfoText[myInfoText.length - 1]}`)




// 3,4 zadanie
// let userName = prompt('Как вас зовут? ')
// userName = userName.toLowerCase().trim()

// let userAge = prompt('Сколько вам лет? ')
// userAge = Number(userAge.trim())

// alert(`Вас зовут: ${userName}
// и вам ${userAge} лет`)

// 5 zadanie
// let userString = prompt('Введите текст для обрезки')
// userString = userString.trim()
// let startSliceIndex = +prompt('Введите индекс, с которого нужно начать обрезку строки')
// let endSliceIndex = +prompt('Введите индекс, которым нужно закончить обрезку строки')
// const resultString = userString.slice(startSliceIndex, endSliceIndex)

// alert(`Результат: ${resultString}`)



// 6 zadanie
// let userText = prompt('Введите текст: ')
// userText = userText.trim()
// let wordFromText = prompt('Введите слово из текста: ')
// wordFromText = wordFromText.trim()

// let indexOfWord = userText.indexOf(wordFromText)
// let resultString = userText.slice(0, indexOfWord)

// alert(`Резульат: ${resultString}`)



// 7 zadanie
// let javascriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'

// const middleIndex = Math.floor(javascriptDescription.length / 2)
// javascriptDescription = javascriptDescription
// 	.slice(0, middleIndex)
// 	.replaceAll('а', 'А')
// 	.replaceAll(' ', '')
// 	.repeat(3)
// const updatedMiddleIndex = Math.floor(javascriptDescription.length / 2)
// console.log(javascriptDescription[updatedMiddleIndex])
// console.log(javascriptDescription)