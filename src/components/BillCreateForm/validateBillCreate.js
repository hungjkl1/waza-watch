export const validateBillCreate = (values) => {
  const errors = {};
  const reg = /^[a-zA-Z0-9)(]{2,20}$/;
  const email = /^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(.[a-z0-9]{2,4}){1,2}$/;

  if (!values.name) {
    errors.name = 'Hãy nhập họ tên của bạn';
  } else if (values.name.length < 6) {
    errors.name = 'Tên ít nhất 6 ký tự';
  } else if (values.name.length > 30) {
    errors.name = 'Tên quá dài';
  };

  if (!values.address) {
    errors.address = 'Hãy nhập địa chỉ giao hàng'
  } else if (values.address.length > 50) {
    errors.address = 'Địa chỉ quá dài'
  };

  if (!values.phone) {
    errors.phone = 'Hãy nhập số điện thoại'
  } else if (values.phone.length < 9) {
    errors.phone = 'Sô điện thoại không hợp lệ'
  } else if (values.phone.length > 11) {
    errors.phone = 'Sô điện thoại không hợp lệ'
  };

  if (!values.email) {
    errors.email = 'Hãy nhập email của bạn';
  } else if (!email.test(values.email)) {
    errors.email = 'Email không họp lệ'
  };

  return errors;
};