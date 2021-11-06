import React, { useReducer, useEffect } from 'react';
import "../../styles/components/UI/Input.css"
import { validate } from '../../util'


const inputReducer = (state, action) => {
    const { type, value, validators } = action
    switch(type) {
        case "CHANGE":
            return {
                ...state,
                value: value,
                isValid: validate(validate, validators)
            }
        case "TOUCH":
            return {
                ...state,
                isTouched: true
            }
        default:
            return state
    }
}

const Input = (props) => {

    const [inputState, dispatch] = useReducer(inputReducer, {value: '', isValid: false, isTouched: false})
    const {id, onInput} = props
    const { value, isValid } = inputState
    useEffect(() => {
        onInput(id, value, onInput)
    }, [id, value, isValid, onInput])

    const changeHandler = e => {
        dispatch({type: 'CHANGE', isValid: e.target.value, validators: props.validators})
    }

    const touchHandler = () => {
        dispatch({
            type: 'TOUCH'
        })
    }

    const element = props.element === 'input' ? (
        <input id={props.id} type={props.type} placeholder={props.placeholder} onChange={changeHandler} onBlur={touchHandler} value={inputState.value}/>
    ) : (
        <textarea id={props.id} rows={props.rows || 3} onChange={changeHandler} onBlur={touchHandler} value={inputState.value}/>
    )

    return (
        <div className={`form-control ${!inputState.isValid && inputState.isTouched &&'form-control--invalid'}`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
        </div>
    );
};

export default Input;