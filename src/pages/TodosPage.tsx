import { todos } from "../data/todos";
import { TodoTable } from "../components/TodoTable";
import { Link, useParams } from 'react-router-dom';

export const TodosPage: React.FC = () => {
  const { todoId = 0 } = useParams();

  return (
    <>
      <Link
        to={`../1`}
      >
        Hey
      </Link>

      <h1 className="title">Todos Page</h1>

      <TodoTable
        todos={todos}
        selectedTodoId={+todoId}
      />
    </>
  );
};
