import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

export default StyleSheet.create({
  intro: { marginBottom: 37 },
  welcome: { color: colors.heading, fontSize: 25, fontWeight: '700', lineHeight: 33 },
  highlight: { color: colors.accent },
  introText: { color: colors.body, fontSize: 15, lineHeight: 24, marginTop: 12 },
  projectBlock: { marginTop: 39 },
  projectTitle: { color: colors.heading, fontSize: 17, fontWeight: '600', marginBottom: 12 },
  projectAction: { marginTop: 19 },
});
