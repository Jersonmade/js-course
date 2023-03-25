const TODOS_URL = 'https://jsonplaceholder.typicode.com/users'

const createTodoElement = (text) => {
	const todoElement = document.createElement('li')
	const todoElementArchor = document.createElement('a')
	todoElementArchor.href = '#'
	todoElementArchor.innerText = text
	todoElement.append(todoElementArchor)

	return todoElement
}

const toggleLoader = () => {
	const loaderHTML = document.querySelector('#loader')
	const isHidden = loaderHTML.hasAttribute('hidden')
	if (isHidden) {
		loaderHTML.removeAttribute('hidden')
	} else {
		loaderHTML.setAttribute('hidden', '')
	}
}

const dataContainer = document.querySelector('#data-container')

const getAllTodos = () => {
	toggleLoader()
	const result = fetch(TODOS_URL, {
		method: 'GET',
	})
	console.log(result)

	result
		.then((response) => {
			console.log('response', response)
			if (!response.ok) {
				throw new Error('Ошибка запроса')
			}
			return response.json()
		})
		.then((todos) => {
			console.log(todos)
			todos.forEach((todo) => {
				const todoHTML = createTodoElement(todo.name)
				dataContainer.append(todoHTML)
			})
		})
		.catch((error) => {
			console.log('error', error)
		})
		.finally(() => {
			toggleLoader()
		})
}

getAllTodos()