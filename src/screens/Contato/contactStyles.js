import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

export default StyleSheet.create({
  title: { color: colors.heading, fontSize: 25, fontWeight: '700', marginBottom: 11 },
  description: { color: colors.body, fontSize: 15, lineHeight: 23 },
  details: { marginTop: 28 },
  note: { color: colors.muted, fontSize: 13, lineHeight: 21, marginTop: 8 },
  nextPage: { marginTop: 29 },
});
