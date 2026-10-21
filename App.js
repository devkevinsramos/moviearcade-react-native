import { SafeAreaProvider } from 'react-native-safe-area-context';
import Rotas from './src/navigation/Rotas';

export default function App() {
  return (
    <SafeAreaProvider>
      <Rotas />
    </SafeAreaProvider>
  );
}
