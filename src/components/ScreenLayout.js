import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import layout from '../theme/layout';

export default function ScreenLayout({ children }) {
  return (
    <SafeAreaView style={layout.background} edges={['bottom']}>
      <ScrollView contentContainerStyle={layout.scrollContent}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
