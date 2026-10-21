import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Botao from '../../components/Botao';
import global from '../../styles/global';
import styles from './styles';

const canais = [
  { titulo: 'Nome', texto: 'MovieArcade' },
  { titulo: 'Telefone', texto: '11 2025-2026' },
  { titulo: 'E-mail', texto: 'moviearcade@filmes.com' },
  { titulo: 'Endereço', texto: '10969 Alta View Drive, Studio City, Los Angeles.' },
];

export default function Contato({ navigation }) {
  return (
    <SafeAreaView style={global.tela} edges={['bottom']}>
      <ScrollView contentContainerStyle={global.conteudo}>
        <Text style={global.titulo}>Contato</Text>
        <Text style={global.subtitulo}>
          Informações institucionais do MovieArcade.
        </Text>

        <Text style={global.secao}>Nossos canais</Text>
        {canais.map((canal) => (
          <View key={canal.titulo} style={global.bloco}>
            <Text style={global.rotulo}>{canal.titulo}</Text>
            <Text style={global.corpo} selectable>{canal.texto}</Text>
          </View>
        ))}

        <Text style={[global.corpo, styles.observacao]}>
          Dados fictícios utilizados apenas para demonstração nesta atividade.
        </Text>
        <View style={styles.navegacao}>
          <Botao titulo="Ir para Sobre" onPress={() => navigation.push('Sobre')} secundario />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
