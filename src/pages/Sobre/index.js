import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Botao from '../../components/Botao';
import global from '../../styles/global';
import styles from './styles';

const informacoes = [
  {
    titulo: 'Missão',
    texto: 'Criar formas diferentes de descobrir e explorar filmes.',
  },
  {
    titulo: 'Visão',
    texto: 'Unir cinema e desenvolvimento web em uma experiência acessível.',
  },
  {
    titulo: 'Valores',
    texto: 'Criatividade, simplicidade e aprendizado.',
  },
];

export default function Sobre({ navigation }) {
  return (
    <SafeAreaView style={global.tela} edges={['bottom']}>
      <ScrollView contentContainerStyle={global.conteudo}>
        <Text style={global.titulo}>Sobre</Text>
        <Text style={styles.nome}>MovieArcade</Text>
        <Text style={global.subtitulo}>
          MovieArcade é um projeto web de cinema desenvolvido com HTML, CSS e JavaScript.
          O site reúne filmes, listas e experiências interativas, como roleta, duelos e quizzes.
          Este aplicativo apresenta a proposta original em uma versão institucional para mobile.
        </Text>

        <Text style={global.secao}>Nossa proposta</Text>
        {informacoes.map((item) => (
          <View key={item.titulo} style={global.bloco}>
            <Text style={global.rotulo}>{item.titulo}</Text>
            <Text style={global.corpo}>{item.texto}</Text>
          </View>
        ))}

        <Text style={global.secao}>Informações</Text>
        <Text style={global.corpo}>Aplicação: MovieArcade</Text>
        <Text style={global.corpo}>Versão: 1.0.0</Text>
        <Text style={global.corpo}>Desenvolvido por: Kevin Silva Ramos</Text>
        <Text style={global.corpo}>Disciplina: Programação para Dispositivos Móveis I</Text>

        <View style={styles.navegacao}>
          <Botao titulo="Ir para Contato" onPress={() => navigation.push('Contato')} secundario />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
