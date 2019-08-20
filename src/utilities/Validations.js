export const textValidation = (input) => {
  return (/^[A-Za-z]+$/.test(input));
}

export const numberValidation = (input) => {
  return (/[0-9]{10}/.test(input));
}

export const emailValidation = (input) => {
  return (/\S+@\S+\.\S+/.test(input));
}