export const validateLogin = (values) => {
  const errors = {};

  if (!values.userName) {
    errors.userName = 'Hãy nhập tài khoản'
  } else if (values.userName.length > 15) {
    errors.userName = 'Tên tài khoản quá dài'
  }

  if (!values.password) {
    errors.password = 'Hãy nhập mật khẩu'
  } else if (values.password.length > 15) {
    errors.password = 'Mặt khẩu quá dài'
  }
  
  return errors;
};