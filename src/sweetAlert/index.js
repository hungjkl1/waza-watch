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
