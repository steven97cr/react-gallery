import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store';
import FormInput from './FormInput';
import DivisionLine from '../UI/DivisionLine';
import {login} from '../../features/auth/authSlice'

import classes from './LoginForm.module.css';

const LoginForm = ()=>{

    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);

    const navigate = useNavigate();

    
    useEffect(()=>{
      if(user){
        navigate('/');
      }
    })


    const [isRegister, setIsRegister] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const handleCreateAccount = (e) => {
        e.preventDefault();
        setIsRegister(!isRegister)
    }

    const formSubmitHandler = (e)=>{
        e.preventDefault()

        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        dispatch(login({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
        }))
      
    }

    return(
        <div className={classes.loginFormWrapper}>
            <h2>{isRegister? 'Create Account' : 'Login'}</h2>
            <DivisionLine />
            <form onSubmit={formSubmitHandler}>
                <FormInput id="emailInput" ref={emailRef} title='Email' placeholder='Email Address' type='email'/>
                <FormInput id="passInput" ref={passwordRef} title='Password' placeholder='Password' type='password'/>
                {isRegister && <FormInput id="confirmInput" ref={confirmPasswordRef} title='Confirm Password' placeholder='Confirm Password' type='password'/>}
                <DivisionLine/>
                <button className={classes.loginBtn}>{isRegister ? 'Register' : 'Login'}</button>
            </form>
            <span className={classes.loginFormRegisterLink}>{isRegister ? 'Have an account?' : 'Not a member?'} </span>
            <a onClick={handleCreateAccount} className={classes.loginFormRegisterLink} href='/'>{isRegister ? 'Login' : 'Register'}</a>
        </div>
    )
}

export default LoginForm;