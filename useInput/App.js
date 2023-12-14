import React, { useState } from 'react';
import { Fragment } from 'react';
import { useInput } from './useInput';

const App = () => {
  const [inputValue, handleChange] = useInput('송민혁');
  const [inputValue2, handleChange2] = useInput('짱');

  const handleSubmit = () => {
    alert(inputValue);
    // setInputValue('');
  };

  return (
    <>
      <input value={inputValue} onChange={handleChange} />
      <input value={inputValue2} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>
    </>
  );
};

export default App;
