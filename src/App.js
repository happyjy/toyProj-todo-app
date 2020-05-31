import React, { useState, useRef, useCallback, useReducer } from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const arr = [];
  for (let i = 1; i <= 2500; i++) {
    arr.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return arr;
}

// function todoReducer(todos, action) {
//   switch (action.type) {
//     case 'INSERT': //새로추가
//       return todos.concat(action.todo);
//     case 'REMOVE': //제거
//       return todos.filter((todo) => todo.id !== action.id);
//     case 'TOGGLE': //토글
//       return todos.map((todo) =>
//         todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
//       );
//     default:
//       return todos;
//   }
// }

function App() {
  // 두번째 파라미터에 초기 상태를 넣어주어야함
  // 지금 처럼 두번째 파라미터에 undefined, 세번째 파라미터에 createBulkTodos 넣어주면 컴포넌트가 맨 처음 렌더링될 때만 creatBulkTodos 함수가 호출
  // const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const [todos, setTodos] = useState(createBulkTodos);

  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: '리액트의 기초 알아보기1',
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: '리액트의 기초 알아보기2',
  //     checked: true,
  //   },
  //   {
  //     id: 3,
  //     text: '리액트의 기초 알아보기3',
  //     checked: false,
  //   },
  // ]);

  const nextId = useRef(2501);

  // //useReducer 사용시
  // const onInsert = useCallback(
  //   (text) => {
  //     const todo = {
  //       id: nextId.current,
  //       text,
  //       checked: false,
  //     };
  //     dispatch({ type: 'INSERT', todo });
  //     nextId.current += 1;
  //   },
  //   [todos],
  // );

  // const onRemove = useCallback(
  //   (id) => {
  //     dispatch({ type: 'REMOVE', id });
  //   },
  //   [todos],
  // );

  // const onToggle = useCallback(
  //   (id) => {
  //     debugger;
  //     dispatch({ type: 'TOGGLE', id });
  //   },
  //   [todos],
  // );

  // useState사용시
  const onInsert = useCallback(
    (text) => {
      debugger;
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      debugger;
      setTodos((todos) =>
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
