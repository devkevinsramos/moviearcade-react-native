import { Alert, Linking, Text, View } from 'react-native';
import AppButton from '../../components/AppButton';
import MenuEntry from '../../components/MenuEntry';
import ScreenLayout from '../../components/ScreenLayout';
import layout from '../../theme/layout';
import styles from './homeStyles';

const WEBSITE_REPOSITORY = 'https://github.com/devkevinsramos/moviearcade';

export default function HomeScreen({ navigation }) {
  function openGitHub() {
    Linking.openURL(WEBSITE_REPOSITORY).catch(() => {
      Alert.alert('Não foi possível abrir o GitHub.');
    });
  }

  return (
    <ScreenLayout>
      <View style={styles.intro}>
        <Text style={styles.welcome}>
          Bem-vindo ao <Text style={styles.highlight}>MovieArcade!</Text>
        </Text>
        <Text style={styles.introText}>
          Um projeto sobre cinema que reúne filmes e pequenas experiências interativas.
        </Text>
      </View>

      <Text style={layout.sectionTitle}>Páginas</Text>
      <MenuEntry
        title="Sobre"
        subtitle="Como surgiu o MovieArcade"
        onPress={() => navigation.navigate('Sobre')}
      />
      <MenuEntry
        title="Contato"
        subtitle="Informações do projeto"
        onPress={() => navigation.navigate('Contato')}
      />

      <View style={styles.projectBlock}>
        <Text style={styles.projectTitle}>Projeto original</Text>
        <Text style={layout.paragraph}>
          A versão para web foi feita com HTML, CSS e JavaScript. Você pode ver o código no GitHub.
        </Text>
        <View style={styles.projectAction}>
          <AppButton title="Abrir repositório no GitHub" variant="outline" onPress={openGitHub} />
        </View>
      </View>
    </ScreenLayout>
  );
}
