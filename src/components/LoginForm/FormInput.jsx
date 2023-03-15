import { forwardRef } from 'react';
import classes from './FormInput.module.css';

const FormInput = forwardRef((props, ref) => {

    return(
        <div className={classes.formInputWrapper}>
            <label className={classes.formInputLabel} htmlFor={props.id}>{props.title}</label>
            <br/>
            <input id={props.id} ref={ref} placeholder={props.placeholder} type={props.type} />      
        </div>
    )
})

export default FormInput;
