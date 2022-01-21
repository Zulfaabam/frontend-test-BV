function validate(text) {
  const capital = /[A-Z]/.test(text) //validate for capital letters
  const numbers = /[0-9]/.test(text) //validate for numbers
  const noSpaces = /^\S*$/.test(text) //validate for no spaces
  if (capital && numbers && noSpaces) {
    return {
      validateStatus: 'success',
      errorMsg: null,
    }
  }
  return {
    validateStatus: 'error',
    errorMsg:
      'Must be capital, no spaces and a combination of numbers and alphabets',
  }
}

export default validate
