import { Pressable, StyleSheet, Text, View } from 'react-native';
import colors from '../theme/colors';

export default function MenuEntry({ title, subtitle, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={title}
      style={styles.row}
    >
      <View style={styles.textArea}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Text style={styles.arrow} accessible={false}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    minHeight: 75,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  textArea: { flex: 1, paddingRight: 10 },
  title: { color: colors.heading, fontSize: 16, fontWeight: '600' },
  subtitle: { color: colors.muted, fontSize: 13, lineHeight: 19, marginTop: 4 },
  arrow: { color: colors.accent, fontSize: 24 },
});
