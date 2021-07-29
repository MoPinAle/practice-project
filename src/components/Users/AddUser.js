import React, { useState } from 'react';

import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    if (+enteredAge < 1) {
      return;
    }
    
    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div>
      <ErrorModal title='An error ocured!' message='Something went wrong!' />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label className={classes.label} htmlFor='username'>
            Username
          </label>
          <input
            className={classes.input}
            value={enteredUsername}
            id='username'
            type='text'
            onChange={usernameChangeHandler}
          />
          <label className={classes.label} htmlFor='age'>
            Age (Years)
          </label>
          <input
            className={classes.input}
            value={enteredAge}
            id='age'
            type='number'
            onChange={ageChangeHandler}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
    
  );
};

export default AddUser;
