import {filterValueTypes} from "./App";

export type TaskType = {
  id: string
  title: string
  isDone: boolean
}

export type PropsType = {
  title: string
  tasks: Array<TaskType>
  removeTask: (id: string) => void
  changeFilter: (value: filterValueTypes) => void
}

const Todolist = (props: PropsType) => {

  const handleCheckboxChange = (id: string) => {
    console.log(`Checkbox ID ${id}.`);
    // Добавьте здесь логику для обновления состояния задачи
  };

  return (
    <div>
      <h3>{props.title}</h3>
      <div><input/>
        <button>+</button>
      </div>
      <ul>
        {
          props.tasks.map((t) => {
            return (
              <li key={t.id}>
                <input type={'checkbox'}
                       checked={t.isDone}
                       onChange={() => handleCheckboxChange(t.id)}/>
                <span>{t.title}</span>
                <button onClick={() => props.removeTask(t.id)}>X</button>
              </li>
            );
          })
        }
      </ul>
      <div>
        <button onClick={() => {
          props.changeFilter('All')
        }}>All
        </button>
        <button onClick={() => {
          props.changeFilter('active')
        }}>Active
        </button>
        <button onClick={() => {
          props.changeFilter('completed')
        }}>Completed
        </button>
      </div>
    </div>
  );
};

export default Todolist;