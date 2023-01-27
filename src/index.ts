import { v4 as uuidV4 } from 'uuid'

type Task = {
    id : string,
    title: string,
    completed: boolean,
    createdAt: Date
}


const list = document.querySelector<HTMLUListElement>("#list")
const taskForm = document.querySelector<HTMLFormElement>("#new-task-form")
const taskTitle = document.querySelector<HTMLInputElement>("#new-task-title")

const tasks: Task[] = loadTasks()
tasks.forEach(addListItem)

taskForm?.addEventListener("submit", e => {
    e.preventDefault()

    if(taskTitle?.value == "" || taskTitle == null)return

    const newTask: Task = {
        id: uuidV4(),
        title: taskTitle.value,
        completed: false,
        createdAt: new Date()

    }
    tasks.push(newTask)
    saveTasks()

    addListItem(newTask)
    taskTitle.value = ''
})

function addListItem(task : Task){
    const item = document.createElement('li')
    const label = document.createElement('label')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    checkbox.addEventListener('change', () => {
        task.completed = checkbox.checked
        saveTasks()
    })

    label.append(checkbox, task.title)
    item.append(label)
    list?.append(item)

}

function saveTasks() {
    localStorage.setItem('TASKS', JSON.stringify(tasks))
}

function loadTasks (): Task[]{
    const taskJSON = localStorage.getItem('TASKS')

    if (taskJSON == null) return []

    return JSON.parse(taskJSON)
}