// 화면의 너비와 높이를 받아오는 함수입니다. 

import { useEffect, useState } from 'react';

export const useResize = () => {
  const [windowSize, setWindowSize] = useState<SizeType>({
    width: undefined,
    height: undefined,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
