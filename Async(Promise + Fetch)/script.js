const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
const usersIds = [5, 6, 2, 1]
const userContainer = document.querySelector('data-container')

const toggleLoader = () => {
	const loaderHTML = document.querySelector('#loader')
	const isHidden = loaderHTML.getAttribute('hidden') !== null
	if (isHidden) {
		loaderHTML.removeAttribute('hidden')
	} else {
		loaderHTML.setAttribute('hidden', '')
	}
}

const createUserElement = (text) => {
	const userElement = createElement('li')
	const userElementArchor = createElement('a')
	userElementArchor.href = '#'
	userElementArchor.innerText = text
	userElement.append(userElementArchor)

	return userElement
}

const getUserByIds = (ids) => {
	toggleLoader()
	const requests = ids.map((id) => fetch(`${USERS_URL}/${id}`))
	Promise.all(requests)
		.then((responses) => {
			const dataResults = responses
										.filter((response) => response.ok)
										.map((response) => response.json())
			return Promise.all(dataResults)
		})
		.then((users) => {
			console.log('users', users)
			(users || []).forEach((user) => {
				const todoHTML = createUserElement(user.name)
				userContainer.append(todoHTML)
			})
		})
		.catch((error) => {
			console.error('error', error)
		})
		.finally(() => {
			toggleLoader()
		})
}

getUserByIds(usersIds)