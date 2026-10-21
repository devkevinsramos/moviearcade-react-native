import { Pressable, Text, StyleSheet } from 'react-native';
import cores from '../styles/cores';

export default function Botao({ titulo, onPress, secundario = false }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={titulo}
      onPress={onPress}
      style={({ pressed }) => [
        styles.botao,
        secundario ? styles.secundario : styles.principal,
        pressed && styles.pressionado,
      ]}
    >
      <Text style={[styles.texto, secundario ? styles.textoSecundario : styles.textoPrincipal]}>
        {titulo}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    borderWidth: 1,
    paddingHorizontal: 14,
    marginTop: 12,
  },
  principal: {
    backgroundColor: cores.principal,
    borderColor: cores.principal,
  },
  secundario: {
    backgroundColor: cores.cartao,
    borderColor: cores.borda,
  },
  texto: {
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  textoPrincipal: {
    color: cores.textoBotao,
  },
  textoSecundario: {
    color: cores.texto,
  },
  pressionado: {
    opacity: 0.78,
  },
});
