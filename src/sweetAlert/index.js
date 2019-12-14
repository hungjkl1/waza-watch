import Swal from 'sweetalert2';

// Thêm thành công
export const addItemSuccess = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 1500,
  type: 'success',
  title: 'Đã thêm vào giỏ hàng'
})

// Thêm thất bại
export const addItemFail = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 1500,
  type: 'error',
  title: 'Số lượng sản phẩm đã quá 99'
})
