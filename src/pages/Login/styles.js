import { StyleSheet } from 'react-native';
import cores from '../../styles/cores';

export default StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  teclado: {
    flex: 1,
  },
  conteudo: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 26,
    paddingHorizontal: 24,
  },
  formulario: {
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
  },
  logo: {
    width: 94,
    height: 94,
    marginBottom: 14,
  },
  marca: {
    color: cores.principal,
    fontSize: 25,
    fontWeight: '700',
  },
  apresentacao: {
    fontSize: 15,
    color: cores.secundario,
    lineHeight: 23,
    marginTop: 7,
    marginBottom: 34,
  },
  titulo: {
    color: cores.texto,
    fontSize: 21,
    fontWeight: '700',
    marginBottom: 18,
  },
  rotulo: {
    color: cores.texto,
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 7,
  },
  campo: {
    minHeight: 48,
    borderWidth: 1,
    borderColor: cores.borda,
    backgroundColor: cores.cartao,
    color: cores.texto,
    borderRadius: 6,
    paddingHorizontal: 14,
    fontSize: 16,
    marginBottom: 17,
  },
  linhaSenha: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: cores.borda,
    backgroundColor: cores.cartao,
    borderRadius: 6,
    marginBottom: 7,
    alignItems: 'center',
  },
  campoSenha: {
    flex: 1,
    minWidth: 0,
    height: 48,
    color: cores.texto,
    paddingHorizontal: 14,
    fontSize: 16,
  },
  mostrarSenha: {
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  mostrarSenhaTexto: {
    color: cores.principal,
    fontSize: 13,
    fontWeight: '600',
  },
  erro: {
    fontSize: 14,
    color: cores.erro,
    marginTop: 10,
    marginBottom: 2,
  },
  aviso: {
    color: cores.secundario,
    fontSize: 13,
    lineHeight: 20,
    marginTop: 23,
  },
});
