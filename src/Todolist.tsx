import { FilterValuesType, TaskType } from "./App";
import { Button } from "./Button";

type PropsType = {
  title: string
  tasks: TaskType[]
	removeTask: (taskId: number) => void
	changeFilter: (filter: FilterValuesType) => void
};

export const Todolist = ({ title, tasks, removeTask, changeFilter }: PropsType) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <Button title={"+"} />
      </div>
      {tasks.length === 0 ? (
        <p>Тасок нет</p>
      ) : (
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>
								<Button title="x" onClickHandler={() => removeTask(task.id)} />
              </li>
            );
          })}
        </ul>
      )}
      <div>
        <Button title={"All"} onClickHandler={() => changeFilter('all')} />
        <Button title={"Active"} onClickHandler={() => changeFilter('active')} />
        <Button title={"Completed"} onClickHandler={() => changeFilter('completed')} />
      </div>
    </div>
  );
};
