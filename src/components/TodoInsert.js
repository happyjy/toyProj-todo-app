import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      //submit event는 브라우저에서 새로고침을 발생
      //이를 방지하기 위해서 이함수를 호출
      e.preventDefault();
    },
    [onInsert, value],
  );
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      ></input>
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
