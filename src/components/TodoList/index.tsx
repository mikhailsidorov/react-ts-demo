import React from 'react'

import { Todo } from '../../todo.model';
import './TodoList.css';

interface TodoListProps {
  items: Todo[],
  onDeleteTodo: (todoId: string) => void;
}

export const TodoList: React.FC<TodoListProps> = props => {
  return (<ul>{props.items.map(todo => {
    return (
      <li key={todo.id}>
        <span>{todo.text}</span>
        <button onClick={props.onDeleteTodo.bind(null, todo.id)}>delete</button>
      </li>
    )})}
  </ul>);
}
