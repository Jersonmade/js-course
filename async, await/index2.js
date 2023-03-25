// 1 zadanie
// const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'
// let isLoading = false
// const createNewPost = () => {
// 	isLoading = true
// 	fetch(POSTS_URL, {
// 		method: 'POST',
// 	})
// 		.then((response) => response.json())
// 		.then((result) => {
// 			console.log('result', result)
// 		})
// 		.catch((error) => {
// 			console.log('error', error)
// 		})
// 		.finally(() => {
// 			isLoading = false
// 		})
// }

// createNewPost()



// 2 zadanie
// const TODOS_URl = 'https://jsonplaceholder.typicode.com/todos'
// const getTodosByIds = (ids) => {
// 	const requests = ids.map((id) => fetch(`${TODOS_URl}/${id}`))
// 	Promise.all (requests)
// 		.then((response) => {
// 			const dataResults = response.map((data) => data.json())
// 			return Promise.all(dataResults)
// 		})
// 		.then((allTasks) => {
// 			console.log(allTasks)
// 		})
// 		.catch((error) => {
// 			console.log(error)
// 		})
// }

// getTodosByIds([43, 21, 55, 100, 10])



// 3 zadanie
