import {useEffect, useState} from "react";

export function useValidation(value, validations) {
    const [isEmpty, setIsEmpty] = useState(true)
    const [isNotDigit, setIsNotDigit] = useState(false)
    const [minLengthError, setMingLengthError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [isNotEmail, setIsNotEmail] = useState(false)
    const [inputValid, setInputValid] = useState(false)
    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case "minLength":
                    if (value.length < validations[validation]) {
                        setMingLengthError(true)
                    } else {
                        setMingLengthError(false)
                        setErrorMessage(`Минимальная длина - ${validations[validation]} символов!`)
                    }
                    break;

                case "isEmpty":
                    if (value) {
                        setIsEmpty(false)
                    } else {
                        setIsEmpty(true)
                        setErrorMessage("Поле не должно быть пустым!")
                    }
                    break;
                case "isDigit":
                    if (/^\d+$/.test(value)) {
                        setIsNotDigit(true)
                    } else {
                        setIsNotDigit(false)
                        setErrorMessage("Поле содержит не только цифры!!")
                    }
                    break;
                case "isEmail":
                    if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
                        setIsNotEmail(true)
                    } else {
                        setIsNotEmail(false)
                        setErrorMessage("Введенный текст не является email")
                    }
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty || minLengthError || isNotDigit) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, minLengthError, isNotDigit, isNotEmail])

    return {
        isEmpty, minLengthError, isDigit: isNotDigit, inputValid, errorMessage
    }
}

export function useInput(initialValue, validations) {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)
    const onChange = (_event) => {
        // Проверка на то, является ли данное поле телефонным номером
        if (_event.target.attributes.class.value.includes("phoneNumber")) {
            setValue(getNumbersOfInput(_event.target.value.toString()))
            maskPhoneNumber(_event)
        } else {
            setValue(_event.target.value)
        }
    }
    const onBlur = (_event) => {
        setDirty(true)
    }

    return {
        value, onChange, onBlur, isDirty, ...valid
    }
}

function getNumbersOfInput(inputStr) {
    return inputStr.replace(/\D/g, '')
}

function maskPhoneNumber(event) {
    // В данной реализации есть баги с тем, что при удалении цифры из середины, можно писать любые символы
    let input = event.target
    let number = getNumbersOfInput(input.value.toString())
    let formattedResult = ""
    let selectionStart = input.selectionStart
    if (!number) {
        input.value = ""
        return;
    }

    if (input.value.length !== selectionStart) {
        if (event.data && /\D/g.test(event.data)) {
            input.value = formattedResult
        }
        return
    }
    if (['7', '8', '9'].includes(number[0])) {
        if (number[0] === "9") {
            number = "79"
        }
        let firstSymbol = (number[0] === "8" ? "8" : "+7")
        formattedResult = firstSymbol + " "
        if (number.length > 1) {
            formattedResult += "(" + number.substring(1, 4)
        }
        if (number.length > 4) {
            formattedResult += ") " + number.substring(4, 7)
        }
        if (number.length > 7) {
            formattedResult += "-" + number.substring(7, 9)
        }
        if (number.length > 9) {
            formattedResult += "-" + number.substring(9, 11)
        }
    } else {
        // Not russian number
        formattedResult = `+ ${number}`.substring(0, 16)
    }

    input.value = formattedResult
    return
}

// Копипаста с https://stackoverflow.com/questions/17415579/how-to-iso-8601-format-a-date-with-timezone-offset-in-javascript
export function toIsoString(date) {
    let tzo = -date.getTimezoneOffset(),
        dif = tzo >= 0 ? '+' : '-',
        pad = function(num) {
            return (num < 10 ? '0' : '') + num;
        };

    return date.getFullYear() +
        '-' + pad(date.getMonth() + 1) +
        '-' + pad(date.getDate()) +
        'T' + pad(date.getHours()) +
        ':' + pad(date.getMinutes())
}


