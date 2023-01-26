import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
  const user = useSelector((state) => {
    return state.user.userInfo;
  });

  return (
    <div className="footer">
      <h3>
        Hi, {user.name} / {user.email}{' '}
      </h3>
    </div>
  );
};

export default Footer;
