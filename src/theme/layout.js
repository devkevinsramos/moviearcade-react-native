import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  background: { flex: 1, backgroundColor: colors.background },
  scrollContent: {
    width: '100%',
    maxWidth: 540,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 40,
  },
  sectionTitle: {
    color: colors.heading,
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 12,
  },
  paragraph: { color: colors.body, fontSize: 15, lineHeight: 24 },
});
