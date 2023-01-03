/* eslint-disable default-case */
import { Button, Paper, TextField } from '@mui/material';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import React, { useState } from 'react';

import useUser from '../hooks/useUser';

function UserForm() {
    const { id } = useParams();
    const { user, changeUser, saveUser } = useUser(id);

    const [nameDirty, setNameDirty] = useState(false);
    const [surnameDirty, setSurnameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);

    const [nameError, setNameError] = useState('Enter your name');
    const [surnameError, setSurnameError] = useState('Enter your surname');
    const [emailError, setEmailError] = useState('Enter your email');

    const blurHandler = (e) => {
            switch (e.target.name) {
                case 'name': 
                    setNameDirty(true);
                    break
                case 'surname': 
                    setSurnameDirty(true);
                    break
                case 'email': 
                    setEmailDirty(true);
                    break
            }
    }
    
    const navigate = useNavigate();

    function onInputChange(e) {
        if(e.target.value !== ''){
            switch (e.target.name) {
                case 'name': 
                setNameError('')
                break
            case 'surname': 
                setSurnameError('')
                break
            case 'email': 
                setEmailError('')
                break
            }
        }
        changeUser({ [e.target.name]: e.target.value });
    }

    function onFormSubmit(e) {
        e.preventDefault();

        saveUser(user).then(() => {
            navigate('..');
        });
    }

    return (
        <Paper>
            <form onSubmit={onFormSubmit}>
                {(nameDirty && nameError) && <div style={{color: 'red'}}>{nameError}</div>}
                <TextField
                    name="name"
                    label="Name"
                    value={user.name}
                    onChange={onInputChange}
                    onBlur={e => blurHandler(e)}
                    fullWidth
                />
                 {(surnameDirty && surnameError) && <div style={{color: 'red'}}>{surnameError}</div>}
                <TextField
                    name="surname"
                    label="Surname"
                    value={user.surname}
                    onChange={onInputChange}
                    onBlur={e => blurHandler(e)}
                    fullWidth
                />
                  {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                <TextField
                    name="email"
                    label="Email"
                    value={user.email}
                    onChange={onInputChange}
                    onBlur={e => blurHandler(e)}
                    fullWidth
                />
                <Button disabled={user.name === '' || user.surname === '' || user.email === '' ? true : false } variant="contained" type="submit" color="primary">
                    Save
                </Button>
                <Button
                    variant="text"
                    color="error"
                    to=".."
                    component={NavLink}
                >
                    Cancel
                </Button>
            </form>
        </Paper>
    );
}

export default UserForm;
