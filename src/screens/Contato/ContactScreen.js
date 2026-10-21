import { Text, View, Linking } from 'react-native';
import AppButton from '../../components/AppButton';
import InfoRow from '../../components/InfoRow';
import ScreenLayout from '../../components/ScreenLayout';
import styles from './contactStyles';

export default function ContactScreen({ navigation }) {
  return (
    <ScreenLayout>
      <Text style={styles.title}>Contato</Text>
      <Text style={styles.description}>Informações de contato do MovieArcade.</Text>
      <View style={styles.details}>
        <InfoRow label="Nome" value="MovieArcade" />
        <InfoRow label="Telefone" value="(11) 4000-2026" selectable />
        <InfoRow label="E-mail" value="contato@moviearcade.example" selectable />
        <InfoRow label="Endereço" value="10969 Alta View Drive, Studio City, Los Angeles" selectable />
        <View style={styles.socialButton}>
          <AppButton title="Acessar rede social" onPress={() => Linking.openURL('https://devkevinsramos.github.io/moviearcade/index.html')} />
        </View>
      </View>
      <Text style={styles.note}>Telefone, e-mail e endereço fictícios, usados nesta atividade.</Text>
      <View style={styles.nextPage}>
        <AppButton title="Ir para Sobre" variant="outline" onPress={() => navigation.navigate('Sobre')} />
      </View>
    </ScreenLayout>
  );
}
