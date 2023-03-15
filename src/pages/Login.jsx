import LoginForm from '../components/LoginForm/LoginForm'

import classes from './Login.module.css';

const Login = () => {
    return (
        <div className={classes.loginScreen}>
            <LoginForm/>
        </div>
    )
}

export default Login;