import { Pressable, StyleSheet, Text } from 'react-native';
import colors from '../theme/colors';

export default function AppButton({ title, onPress, variant = 'accent' }) {
  const secondary = variant === 'outline';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={title}
      onPress={onPress}
      style={[styles.button, secondary ? styles.secondary : styles.primary]}
    >
      <Text style={[styles.text, secondary ? styles.secondaryText : styles.primaryText]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: { backgroundColor: colors.accent },
  secondary: { borderWidth: 1, borderColor: colors.border },
  text: { fontSize: 15, fontWeight: '600', textAlign: 'center' },
  primaryText: { color: colors.onAccent },
  secondaryText: { color: colors.heading },
});
