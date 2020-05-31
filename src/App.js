import React, { useState } from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기1',
      checked: true,
    },
    {
      id: 2,
      text: '리액트의 기초 알아보기2',
      checked: true,
    },
    {
      id: 3,
      text: '리액트의 기초 알아보기3',
      checked: false,
    },
  ]);

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
