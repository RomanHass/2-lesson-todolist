import { useState } from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type TaskType = {
	id: number
	title: string
	isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
	const [tasks, setTasks] = useState<Array<TaskType>>([
		{ id: 1, title: 'HTML&CSS', isDone: true },
		{ id: 2, title: 'JS', isDone: true },
		{ id: 3, title: 'ReactJS', isDone: false },
		{ id: 4, title: 'Redux', isDone: false },
		{ id: 5, title: 'Typescript', isDone: false },
		{ id: 6, title: 'RTK query', isDone: false },
	])

	const removeTask = (taskId: number) => {
		const filteredTasks = tasks.filter(task => task.id !== taskId);
		setTasks(filteredTasks)
	}

	const changeFilter = (filterValue: FilterValuesType) => {
		setFilter(filterValue)
	}

	const [filter, setFilter] = useState<FilterValuesType>('all');

	let tasksForTodolist = tasks;

	if (filter === 'completed') {
		tasksForTodolist = tasks.filter(task => task.isDone)
	}

	if (filter === 'active') {
		tasksForTodolist = tasks.filter(task => !task.isDone)
	}

	
	return (
		<div className="App">
			<Todolist title="What to learn" 
								tasks={tasksForTodolist}
								removeTask={removeTask}
								changeFilter={changeFilter} />
		</div>
	);
}

export default App;
