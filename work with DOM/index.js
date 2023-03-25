const tasks = [
	{
		id: '1138465078061',
		completed: false,
		text: 'Посмотреть новый урок по JavaScript'
	},
	{
		id: '1138465078062',
		completed: false,
		text: 'Выполнить тест после урока'
	},
	{
		id: '1138465078063',
		completed: false,
		text: 'Выполнить ДЗ после урока'
	}
]

const createTaskItem = (taskId, taskText) => {
	const taskItem = document.createElement('div')
	taskItem.className = 'task-item'
	taskItem.dataset.taskId = taskId

	const taskItemMainContainer = document.createElement('div')
	taskItemMainContainer.className = 'task-item__main-container'

	const taskItemMainContent = document.createElement('div')
	taskItemMainContent.className = 'task-item__main-content'

	taskItem.append(taskItemMainContainer)
	taskItemMainContainer.append(taskItemMainContent)

	const checkboxForm = document.createElement('form')
	checkboxForm.className = 'checkbox-form'

	const inputCheckbox = document.createElement('input')
	inputCheckbox.className = 'checkbox-form__checkbox'
	inputCheckbox.type = 'checkbox'
	inputCheckbox.id = `task-${taskId}`

	const labelCheckbox = document.createElement('label')
	labelCheckbox.htmlFor = `task-${taskId}`

	const taskItemText = document.createElement('span')
	taskItemText.className = 'task-item__text'
	taskItemText.innerText = taskText

	const buttonTask = document.createElement('button')
	buttonTask.className = 'task-item__delete-button default-button delete-button'
	buttonTask.innerText = 'Удалить'

	taskItemMainContent.append(checkboxForm, taskItemText)
	checkboxForm.append(inputCheckbox, labelCheckbox)
	taskItemMainContainer.append(buttonTask)

	return taskItem
}

const createErrorBlock = (errorMessage) => {
	const errorBlock = document.createElement('span')
	errorBlock.innerText = errorMessage
	errorBlock.className = 'error-message-block'

	return errorBlock
}

const createTaskForm = document.querySelector('.create-task-block')
createTaskForm.addEventListener('submit', event => {
   event.preventDefault()
  
   const newTaskText = (event.target.taskName.value || '').trim()
	const isTaskExist = tasks.some((task) => task.text === newTaskText)
	const errorMessageBlockFromDOM = createTaskForm.querySelector('.error-message-block')

	if (!newTaskText) {
		const errorBlock = createErrorBlock('Название задачи не должно быть пустым')
		createTaskForm.append(errorBlock)
	} else if (isTaskExist) {
		const errorBlock = createErrorBlock('Задача с таким названием уже существует.')
		createTaskForm.append(errorBlock)
	} else if (newTaskText && !isTaskExist) {
   	const newTask = {
        id: Date.now().toString(),
        text: newTaskText,
      }
      tasks.push(newTask)
      const taskItem = createTaskItem(newTask.id, newTask.text)
      tasksListContainer.append(taskItem)
   }
	if (errorMessageBlockFromDOM) {
		errorMessageBlockFromDOM.remove()
	}
})

const tasksListContainer = document.querySelector('.tasks-list')
tasks.forEach((task) => {
	const taskItem = createTaskItem(task.id, task.text)
	tasksListContainer.append(taskItem)
})

const createModal = (text) => {
	const modalWindow = document.createElement('div')
	modalWindow.className = 'modal-overlay modal overlay_hidden'
	
	const deleteModal = document.createElement('div')
	deleteModal.className = 'delete-modal'
	
	modalWindow.append(deleteModal)
	
	const deleteModalQestion = document.createElement('h3')
	deleteModalQestion.className = 'delete-modal__question'
	deleteModalQestion.innerText = text
	
	const deleteModalButtons = document.createElement('div')
	deleteModalButtons.className = 'delete-modal__buttons'
	
	const cancelButton = document.createElement('button')
	cancelButton.className = 'delete-modal__button delete-modal__cancel-button'
	cancelButton.innerText = 'Отмена'
	
	const deleteButton = document.createElement('button')
	deleteButton.className = 'delete-modal__button delete-modal__confirm-button'
	deleteButton.innerText = 'Удалить'

	deleteModal.append(deleteModalQestion, deleteModalButtons)
	deleteModalButtons.append(cancelButton, deleteButton)

	return {
		deleteModal,
		cancelButton,
		deleteButton,
		modalWindow
	} 
}

let targetTaskIdToDelete = null
const {
	deleteModal, cancelButton, deleteButton, modalWindow
} = createModal('Вы действительно хотите удалить эту задачу?')
document.body.prepend(modalWindow)
cancelButton.addEventListener('click', () => {
	modalWindow.classList.add('modal-overlay_hidden')
})
deleteButton.addEventListener('click', () => {
	const deleteIndex = tasks.findIndex((task) => {task.id === targetTaskIdToDelete})
	if(deleteIndex >= 0) {
		tasks.splice(deleteIndex, 1)
		const taskItemHtml = document.querySelector(`[data-task-id="${targetTaskIdToDelete}"]`)
		taskItemHtml.remove()
		modalWindow.classList.add('modal-overlay_hidden')
	}
})

const tasksList = document.querySelector('.tasks-list')
tasksList.addEventListener('click', (event) => {
	const { target } = event
	const closestTarget = target.closest('.task-item__delete-button')
	if(closestTarget) {
		const closestTask = closestTarget.closest('.taskItem')
		if(closestTask) {
			const taskId = closestTask.dataset.taskId
			targetTaskIdToDelete = taskId
			modalWindow.classList.remove('modal-overlay_hidden')
		}
	}
})

let isDark = true

const changeTheme = ( {
	bodyBackground,
	taskItemTextColor,
	buttonBorder,
}) => {
	document.body.style.background = bodyBackground
	document.querySelectorAll('.task-item').forEach((taskItem) => {
		taskItem.style.color = taskItemTextColor
	})
	document.querySelectorAll('button').forEach((button) => {
		button.style.border = buttonBorder
	})
}

window.addEventListener('keydown', (event) => {
	const { code } = event
	if (code === 'Tab') {
		event.preventDefault()
		isDark = !isDark
		if (isDark) {
			changeTheme({
				bodyBackground: '#24292E',
				taskItemTextColor: '#ffffff',
				buttonBorder: '1px solid #ffffff'
			}) 
		} else {
			changeTheme({
				bodyBackground: 'initial',
				taskItemTextColor: 'initial',
				buttonBorder: 'none'
			}) 
		}
	}
})