import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

export default StyleSheet.create({
  title: { color: colors.heading, fontSize: 25, fontWeight: '700', marginBottom: 14 },
  summary: { color: colors.body, fontSize: 15, lineHeight: 24 },
  sectionSpacing: { marginTop: 32 },
  principle: { marginBottom: 17 },
  principleName: { color: colors.heading, fontSize: 15, fontWeight: '600', marginBottom: 5 },
  information: { marginTop: 4 },
  nextPage: { marginTop: 18 },
});
