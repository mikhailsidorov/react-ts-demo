import React, { useRef } from 'react';

import './NewTodo.css';

interface NewTodoProps {
  onAddTodo: (text: string) => void;
}

export const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
      const enteredText = textInputRef.current!.value;
      props.onAddTodo(enteredText);
  };

  return <form onSubmit={formSubmitHandler}>
    <div className="form-control">
      <label htmlFor="todo-text">Todo text</label>
      <input type="text" id="todo-text" ref={textInputRef} />
    </div>
    <button type="submit">ADD TODO</button>
  </form>;
};
