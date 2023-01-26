import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const name = useSelector((state) => {
    return state.user.userInfo.name;
  });

  return (
    <div className="navbar">
      <div className="title">Hi, {name}</div>

      <div className="menu">
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
