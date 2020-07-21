export const composeValidators = (...validators) => value =>
validators.reduce((error, validator) => error || validator(value), undefined)

export const required = value => value ? undefined : 'Это поле обязательно для заполнения'

export const minLength = min => value => value && value.length < min ? `Минимальная длина: ${min} символов` : undefined

export const onlyNumbers = value => isNaN(value) ? 'Разрешены только цифры' : undefined