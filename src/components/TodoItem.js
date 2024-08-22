import React from 'react';

function TodoItem({ todo, toggleComplete, removeTodo }) {
  return (
    <div className="todo-item">
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.text}
      </span>
      <button onClick={() => toggleComplete(todo.id)}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
