// 여러 번의 버튼이나 입력와 같은 상호작용을 
// 마지막 상호작용의 api 호출만 반영할 수 있게 
// debounce 처리를 사용할 수 있는 훅입니다. 

import { useRef, useState } from 'react';

const useDebounce = (callback: () => void, term: number) => {
  const timer = useRef<ReturnType<typeof setTimeout>>(); 

  const dispatchDebounce = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    const newTimer = setTimeout(() => {
      callback();
    }, term);
    timer.current = newTimer;
  };
  return dispatchDebounce;
};
export default useDebounce;
