import React from 'react';
import { useSelector } from 'react-redux';
import Child from './Child';

const Parent = () => {
  const name = useSelector((state) => state.user.userInfo.name);
  return (
    <div>
      Parent {name}
      <Child />
      <Child />
      <Child />
      <Child />
      <Child />
    </div>
  );
};

export default Parent;
