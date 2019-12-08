export const validateSignUp = (values) => {
  const errors = {};
  const reg = /^[a-zA-Z0-9)(]{2,20}$/;
  const email = /^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(.[a-z0-9]{2,4}){1,2}$/;

  if (!values.userName) {
    errors.userName = 'Hãy nhập tài khoản'
  } else if (!reg.test(values.userName)) {
    errors.userName = 'Tên tài khoản không hợp lệ'
  } else if (values.userName.length < 6) {
    errors.userName = 'Tên tài khoản phải ít nhất 6 ký tự'
  } else if (values.userName.length > 15) {
    errors.userName = 'Tên tài khoản quá dài'
  };

  if (!values.password) {
    errors.password = 'Hãy nhập mật khẩu'
  } else if (!reg.test(values.password)) {
    errors.password = 'Tên tài khoản không hợp lệ'
  } else if (values.password.length < 6) {
    errors.password = 'Tên tài khoản phải ít nhất 6 ký tự'
  } else if (values.password.length > 15) {
    errors.password = 'Mặt khẩu quá dài'
  };

  if (!values.email) {
    errors.email = 'Hãy nhập email của bạn';
  } else if (!email.test(values.email)) {
    errors.email = 'Email không họp lệ'
  };

  if (!values.phone) {
    errors.phone = 'Hãy nhập số điện thoại'
  } else if (values.phone.length < 9) {
    errors.phone = 'Sô điện thoại không hợp lệ'
  } else if (values.phone.length > 11) {
    errors.phone = 'Sô điện thoại không hợp lệ'
  };

  return errors;
};