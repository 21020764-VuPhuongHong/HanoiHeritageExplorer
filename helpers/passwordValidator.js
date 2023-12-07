export function passwordValidator(password) {
  if (!password) return "Mật khẩu không thể bỏ trống."
  if (password.length < 6) return 'Mật khẩu không thể bỏ trống.'
  // if (!password.match(/[a-z]/) || !password.match(/[A-Z]/) || !password.match(/[0-9]/)) {
  //   return 'Password must contain uppercase letters, lowercase letters and numbers';
  // }
  return ''
}
