export const validateEmail = (value: string) => {
  const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailReg.test(String(value).toLowerCase())) {
    return "Введите корректный email";
  }
  return " ";
};

export const validatePassword = (pass: string) => {
  if (pass.length < 6) {
    return "Пароль должен быть длиннее 6 символов";
  }
  return " ";
};

export const validateConfirm = (pass: string, conf: string) => {
  if (pass !== conf) {
    return "Пароли должны совпадать";
  }
  return " ";
};
