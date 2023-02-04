import { Todo } from '../types';
import { TodoItem } from './TodoItem';

type Props = {
  todos: Todo[];
  selectedTodoId?: number;
};

export const TodoTable: React.FC<Props> = ({ todos, selectedTodoId = 0 }) => {
  return (
    <table className="table is-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Done</th>
          <th />
        </tr>
      </thead>

      <tbody>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            selectedTodoId={selectedTodoId}
          />
        ))}
      </tbody>
    </table>
  );
};
