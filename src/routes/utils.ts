export function isLogin() {

  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email');

  if (token && email) {
    return true;
  }

  return false;
}