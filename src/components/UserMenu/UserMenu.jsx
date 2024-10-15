import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  return (
    <div>
      <p>{user.email}</p>
      <button onClick={() => dispatch(logoutUser())}>Logout</button>
    </div>
  );
};

export default UserMenu;
