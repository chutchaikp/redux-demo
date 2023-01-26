import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Parent from '../components/Parent';
import { updateUser } from '../redux/apiCall';
import { udpate } from '../redux/userSlice';

import './home.scss';

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  return (
    <div className="home">
      Home
      <form>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            updateUser({ name, email }, dispatch);
            // dispatch(udpate({ name, email }));
          }}
        >
          UPDATE
        </button>
      </form>
      <Parent />
    </div>
  );
};

export default Home;
