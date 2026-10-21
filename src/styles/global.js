import { StyleSheet } from 'react-native';
import cores from './cores';

export default StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  conteudo: {
    width: '100%',
    maxWidth: 540,
    alignSelf: 'center',
    paddingHorizontal: 22,
    paddingTop: 24,
    paddingBottom: 32,
  },
  titulo: {
    fontSize: 25,
    fontWeight: '700',
    color: cores.texto,
    marginBottom: 9,
  },
  subtitulo: {
    color: cores.secundario,
    fontSize: 15,
    lineHeight: 23,
  },
  secao: {
    marginTop: 26,
    marginBottom: 12,
    fontSize: 17,
    fontWeight: '700',
    color: cores.texto,
  },
  bloco: {
    paddingVertical: 15,
    borderBottomColor: cores.borda,
    borderBottomWidth: 1,
  },
  rotulo: {
    color: cores.texto,
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 5,
  },
  corpo: {
    fontSize: 15,
    color: cores.secundario,
    lineHeight: 23,
  },
});
