import cn from 'classnames';
import { FC } from 'react';
import { Todo } from '../types';
import { Link } from 'react-router-dom';

type Props = {
  todo: Todo;
  selectedTodoId: number;
};

export const TodoItem: FC<Props> = ({ todo, selectedTodoId }) => {
  const isSelected = (todo: Todo) => (todo.id === selectedTodoId);

  return (
    <tr
      key={todo.id}
      className={cn({
        'has-background-grey-light': isSelected(todo),
      })}
    >
      <td className="is-vcentered has-text-weight-bold">{todo.id}</td>
      <td className="is-vcentered">{todo.title}</td>

      <td className="is-vcentered">
        {todo.completed ? (
          <span className="icon has-text-success">
            <i className="fas fa-check" />
          </span>
        ) : (
          <span className="icon has-text-danger ">
            <i className="fas fa-xmark" />
          </span>
        )}
      </td>

      <td>
        <Link
          to={isSelected(todo) ? '../' : `/todos/${todo.id}`}
          className={cn('button', {
            'is-info': isSelected(todo),
          })}
        >
          <span className="icon">
            <i className={cn('fas', {
              'fa-eye': !isSelected(todo),
              'fa-eye-slash': isSelected(todo),
            })} />
          </span>
        </Link>
      </td>
    </tr>
  );
};