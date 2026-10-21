const credenciais = {
  usuario: 'martymauser',
  senha: 'tenisdemesa',
};

export function validarLogin(usuario, senha) {
  if (!usuario.trim()) {
    return 'Informe o usuário.';
  }

  if (!senha.trim()) {
    return 'Informe a senha.';
  }

  const usuarioInformado = usuario.trim().toLowerCase();

  if (usuarioInformado !== credenciais.usuario || senha !== credenciais.senha) {
    return 'Usuário ou senha inválidos.';
  }

  return '';
}
