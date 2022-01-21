function validate(text) {
  const capital = /[A-Z]/.test(text)
  const numbers = /[0-9]/.test(text)
  const noSpaces = /^\S*$/.test(text)
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
