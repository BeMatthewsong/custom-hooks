import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import { useFetch } from './useFetch';

const baseUrl = 'https://jsonplaceholder.typicode.com';

const App = () => {
  const { data: userData } = useFetch(baseUrl, 'users');
  const { data: postData } = useFetch(baseUrl, 'posts');

  return (
    <>
      {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>} // 유저
      {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>} // 포스트
    </>
  );
};

export default App;
