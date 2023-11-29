const emailRegex = new RegExp(/\S+@\S+\.\S+/);

export const emailValidator = (value) =>
  emailRegex.test(value) ? "" : "Please enter a valid email.";