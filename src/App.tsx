import React, {useState} from 'react';
import './App.css';
import Todolist, {TaskType} from "./Todolist";
import {v1} from "uuid";

export type filterValueTypes = 'All' | 'active' | 'completed';

function App() {
  const tasks = [
    {id: v1(), title: 'HTML', isDone: true},
    {id: v1(), title: 'CSS', isDone: false},
    {id: v1(), title: 'JavaScript', isDone: true},
    {id: v1(), title: 'React', isDone: false},
  ]

  const [tasksState, setTasksState] = useState<Array<TaskType>>(tasks)
  const [filter, setFilter] = useState<filterValueTypes>('All')

  const removeTask = (id: string) => {
    let filteredTasks = (tasksState.filter((t) => t.id !== id))
    setTasksState(filteredTasks)
  }

  const changeFilter = (value: filterValueTypes) => {
    setFilter(value)
  }

  let filterTodoTask = tasksState
  if (filter === 'completed') {
    filterTodoTask = (tasksState.filter(t => t.isDone))
  }
  if (filter === 'active') {
    filterTodoTask = (tasksState.filter(t => !t.isDone))
  }

  return (
    <div>
      <Todolist title={'What to learn'}
                tasks={filterTodoTask}
                removeTask={removeTask}
                changeFilter={changeFilter}/>
    </div>
  );
}

export default App