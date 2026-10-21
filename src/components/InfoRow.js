import { StyleSheet, Text, View } from 'react-native';
import colors from '../theme/colors';

export default function InfoRow({ label, value, selectable = false }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value} selectable={selectable}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { marginBottom: 17 },
  label: { color: colors.muted, fontSize: 13, marginBottom: 5 },
  value: { color: colors.heading, fontSize: 15, lineHeight: 23 },
});
