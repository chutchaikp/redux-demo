import React from 'react';
import { useSelector } from 'react-redux';

const Child = () => {
  const name = useSelector((state) => state.user.userInfo.name);
  return <div>Child {name}</div>;
};

export default Child;
