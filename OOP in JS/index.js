// 1 zadanie
// class Student {
// 	constructor(name, age) {
// 		this.name = name
// 		this.age = age
// 		this.technologies = []
// 		this.status = 'Junior'
// 	}

// 	setTechnologies(technologies) {
// 		this.technologies = [
// 			...this.technologies,
// 			...technologies
// 		]
// 	}

// 	setNewStatus(newStatus) {
// 		this.status = newStatus
// 	}
// }

// const student = new Student ('Maxim', 20)
// student.setTechnologies(['HTML', 'CSS', 'JavaScript'])
// student.setNewStatus('Middle')
// console.log(student)



// 2 zadanie
// class Person {
// 	constructor(name, age) {
// 		this.name = name
// 		this.age = age
// 	}

// 	compareAge(person) {
// 		if (this.age >= person.age) {
// 			console.log(`${this.name} старше, чем ${person.name}`)
// 		} else {
// 			console.log(`${this.name} младше, чем ${person.name}`)
// 		}
// 	}
// }

// const person1 = new Person('Максим', 24)
// const person2 = new Person('Светлана', 36)
// const person3 = new Person('Ирина', 23)

// person1.compareAge(person2)
// person2.compareAge(person3)
// person3.compareAge(person1)



// 3, 4 zadanie
// class Dictionary {
// 	#name
// 	#words

// 	constructor(name) {
// 		this.#name = name
// 		this.#words = {}
// 	}

// 	get mainName() {
// 		return this.name
// 	}

// 	set setMainName(newName) {
// 		this.#name = newName
// 	}

// 	get allWords() {
// 		return this.#words
// 	}

// 	addNewWord(wordKey, wordObj) {
// 		this.#words[wordKey] = wordObj
// 	}

// 	add(word, description) {
// 		if(!this.words[word]) {
// 			const newWord = { word, description }
// 			this.addNewWord(word, newWord)
// 		}
// 	}

// 	remove(word) {
// 		delete this.#words[word]
// 	}

// 	get(word) {
// 		return this.#words[word]
// 	}

// 	showAllWords() {
// 		for (const key in this.words) {
// 			if (this.words.hasOwnProperty(key)) {
// 				const element = this.words[key]
// 				console.log(`${element.word} - ${element.description}`)
// 			}
// 		}
// 	}
// }


// class HardWordsDictionary extends Dictionary {
// 	constructor(name) {
// 		super(name)
// 	}

// 	add(word, description) {
// 		if(!this.allWords[word]) {
// 			this.addNewWord[word] = {
// 				word,
// 				description,
// 				isDifficult: true
// 			}
// 		}
// 	}
// }

// const dictionary = new Dictionary('Толковый словарь')
// dictionary.add('JavaScript', 'популярный язык программирования')
// dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие')
// dictionary.remove('JavaScript')
// dictionary.showAllWords()

// const hardWordsDictionary = new HardWordsDictionary('Сложные слова')
// hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.')
// hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.')
// hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.')
// hardWordsDictionary.remove('неологизм')
// hardWordsDictionary.showAllWords()

// console.log(hardWordsDictionary.mainName)
// hardWordsDictionary.setMainName = 'Новый Словарь'
// console.log(hardWordsDictionary.mainName)
// console.log(hardWordsDictionary.allWords)



// 5 zadanie
// class Developer {
// 	constructor(fullName, age, position) {
// 		this.fullName = fullName
// 		this.age = age
// 		this.position = position
// 		this.technologies = []
// 	}

// 	code() { }

// 	learnNewTechnology(technology) {
// 		this.technologies.push(technology)
// 	}
// }


// class JuniorDeveloper extends Developer {
// 	constructor(fullName, age) {
// 		super(fullName, age, 'Junior')
// 		this.technologies = ['HTML', 'CSS', 'JavaScript']
// 	}

// 	code() {
// 		console.log('Junior разработчик пишет код...')
// 	}
// }


// class MiddleDeveloper extends Developer {
// 	constructor(fullName, age) {
// 		super(fullName, age, 'Middle')
// 		this.technologies = ['HTML', 'CSS', 'JavaScript', 'React']
// 	}

// 	code() {
// 		console.log('Middle разработчик пишет код...')
// 	}
// }


// class SeniorDeveloper extends Developer {
// 	constructor(fullName, age) {
// 		super(fullName, age, 'Senior')
// 		this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']
// 	}

// 	code() {
// 		console.log('Senior разработчик пишет код...')
// 	}
// }

// const juniorDeveloper = new JuniorDeveloper('Анастасия', 20)
// const middleDeveloper = new MiddleDeveloper('Игорь', 25)
// const seniorDeveloper = new SeniorDeveloper('Максим', 30)

// juniorDeveloper.code()
// middleDeveloper.code()
// seniorDeveloper.code()

// console.log(juniorDeveloper.fullName, juniorDeveloper.age, juniorDeveloper.position)
// console.log(middleDeveloper.fullName, middleDeveloper.age, middleDeveloper.position)
// console.log(seniorDeveloper.fullName, seniorDeveloper.age, seniorDeveloper.position)



// 7 zadanie
class CarService {
	constructor(name, workingHours) {
		this.name = name
		this.workingHours = workingHours
	}
}