import axios from "axios";
import {useEffect, useState} from "react";

export function isRegistered(){
    
}

export function register(item){
    console.log(item)
}

export function useValidation(value, validations) {
    const [isEmpty, setIsEmpty] = useState(true)
    const [isDigit, setIsDigit] = useState(true)
    const [minLengthError, setMingLengthError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [inputValid, setInputValid] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case "minLength":
                    value.length < validations[validation] ? setMingLengthError(true) : setMingLengthError(false)
                    break;

                case "isEmpty":
                    value ? setIsEmpty(false) : setIsEmpty(true)
                    break;
                case "isDigit":
                    /^\+\d+$/.test(value) ? setIsDigit(true) : setIsDigit(false)
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty || minLengthError || !isDigit) {
            setInputValid(false)
        }
        else {
            setInputValid(true)
        }
    }, [isEmpty, minLengthError, isDigit])

    return {
        isEmpty, minLengthError, isDigit, inputValid
    }
}
export function useInput(initialValue, validations){
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)
    const onChange = (_event) => {
        setValue(_event.target.value)
    }
    const onBlur = (_event) => {
        setDirty(true)
    }

    return {
        value, onChange, onBlur, isDirty, ...valid
    }
}
