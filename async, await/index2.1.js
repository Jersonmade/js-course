// 1 zadanie
// const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'
// let isLoading = false

// const createNewPost = async() => {
// 	try {
// 		isLoading = true
// 		const response = await fetch(POSTS_URL, {
// 			method: 'POST',
// 		})
// 		if (!response.ok) {
// 			throw new Error('Ошибка в получении')
// 		}
// 		console.log('response', response)
// 		const result = await response.json()
// 		console.log('result', result)
// 	} catch (error) {
// 		console.log('error', error)
// 	} finally {
// 		isLoading = false
// 	}
// }

// createNewPost()



// 2 zadanie
// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'
// const getTodosByIds = async(ids) => {
// 	try {
// 		const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`))
// 		const responses = await Promise.all(requests)
// 		const allTasks = await Promise.all(responses.map((data) => data.json()))
// 		console.log('allTasks', allTasks)
// 	} catch (error) {
// 		console.error('error')
// 	} 
// }

// getTodosByIds([43, 21, 55, 100, 10])



// 3 zadanie
const ALBUM_URL = 'https://jsonplaceholder.typicode.com/albums'
const dataContainer = document.querySelector('.data-container')

const createAlbumItem = (text) => {
	const albumItem = document.createElement('li')
	albumItem.innerText = text
	return albumItem
}

const toggleLoader = () => {
	const loaderHTML = document.querySelector('#loader')
	const isHidden = loaderHTML.getAttribute('hidden') !== null
	if (!isHidden) {
		loaderHTML.removeAttribute('hidden')
	} else {
		loaderHTML.setAttribute('hidden', '')
	}
}

const renderAlbums = async() => {
	toggleLoader()
	try {
		const response = await fetch(ALBUM_URL)
		const albums = await response.json()
		albums.forEach((album) => {
			const albumHTML = createAlbumItem(album.title)
			dataContainer.append(albumHTML)
		})
	} catch {
		dataContainer.innerText = 'Произошла ошибка в получении данных об альбомах...'
	}
}

renderAlbums()