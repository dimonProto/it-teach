export const required = (value) =>{
    if(value) return undefined
    return 'field required'
}

export  const maxLengthCreator = (maxLength) =>  (value) =>{
    if(value && value.length > maxLength  ) return `max Length is ${maxLength} symbols`
    return undefined

}

export const composeValidators = (...validators) => (value) =>{
    return  validators.reduce((error, validator) => error || validator(value), undefined);
}