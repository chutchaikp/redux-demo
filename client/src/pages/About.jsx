import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../redux/apiCall';
import { updateUser2 } from '../redux/userSlice';
// import { udpate } from '../redux/userSlice';

import './about.scss';

const About = () => {
  const { userInfo, pending, error } = useSelector((state) => state.user);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  return (
    <div className="about">
      <h1>About</h1>

      <form>
        <input
          type="text"
          placeholder={userInfo.name}
          onChange={(e) => {
            e.preventDefault();
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder={userInfo.email}
          onChange={(e) => {
            e.preventDefault();
            setEmail(e.target.value);
          }}
        />

        <button
          disabled={pending}
          onClick={(e) => {
            e.preventDefault();
            // dispatch(udpate({ name, email }));
            // updateUser({ name, email }, dispatch);
            dispatch(updateUser2({ name, email }));
          }}
        >
          UPDATE
        </button>
      </form>
    </div>
  );
};

export default About;
