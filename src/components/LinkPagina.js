import { Pressable, Text, View, StyleSheet } from 'react-native';
import cores from '../styles/cores';

export default function LinkPagina({ titulo, descricao, onPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={titulo}
      onPress={onPress}
      style={({ pressed }) => [styles.link, pressed && styles.pressionado]}
    >
      <View style={styles.informacoes}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
      </View>
      <Text style={styles.seta} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
        {'›'}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  link: {
    backgroundColor: cores.cartao,
    borderColor: cores.borda,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 72,
  },
  informacoes: {
    flex: 1,
    paddingRight: 10,
  },
  titulo: {
    color: cores.texto,
    fontSize: 16,
    fontWeight: '600',
  },
  descricao: {
    fontSize: 13,
    color: cores.secundario,
    marginTop: 4,
  },
  seta: {
    fontSize: 27,
    color: cores.principal,
  },
  pressionado: {
    backgroundColor: cores.suave,
  },
});
