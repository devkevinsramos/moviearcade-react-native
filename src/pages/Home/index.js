import { Alert, Linking, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Botao from '../../components/Botao';
import LinkPagina from '../../components/LinkPagina';
import global from '../../styles/global';
import styles from './styles';

const repositorio = 'https://github.com/devkevinsramos/moviearcade';

export default function Home({ navigation }) {
  function abrirRepositorio() {
    Linking.openURL(repositorio).catch(() => {
      Alert.alert('Não foi possível abrir o GitHub', 'Verifique se há um navegador disponível.');
    });
  }

  return (
    <SafeAreaView style={global.tela} edges={['bottom']}>
      <ScrollView contentContainerStyle={global.conteudo}>
        <Text style={global.titulo}>Bem-vindo ao MovieArcade!</Text>
        <Text style={global.subtitulo}>
          Conheça a proposta do projeto e suas informações institucionais.
        </Text>

        <Text style={global.secao}>Navegar</Text>
        <LinkPagina
          titulo="Sobre"
          descricao="Conheça a origem e a proposta do MovieArcade"
          onPress={() => navigation.navigate('Sobre')}
        />
        <LinkPagina
          titulo="Contato"
          descricao="Informações de contato do projeto"
          onPress={() => navigation.navigate('Contato')}
        />

        <Text style={global.secao}>Conheça o projeto original</Text>
        <View style={styles.projeto}>
          <Text style={global.corpo}>
            O MovieArcade começou como um site desenvolvido com HTML, CSS e JavaScript,
            reunindo filmes, listas e minigames.
          </Text>
          <Botao titulo="Ver MovieArcade no GitHub" onPress={abrirRepositorio} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
