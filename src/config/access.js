export const demoAccount = {
  username: 'martymauser',
  password: 'tenisdemesa',
};

export function verifyAccess(username, password) {
  if (!username.trim()) return 'Informe o usuário.';
  if (!password.trim()) return 'Informe a senha.';

  const matchesUsername = username.trim().toLowerCase() === demoAccount.username;
  const matchesPassword = password === demoAccount.password;

  return matchesUsername && matchesPassword ? '' : 'Usuário ou senha inválidos.';
}
