import { Text, View } from 'react-native';
import AppButton from '../../components/AppButton';
import InfoRow from '../../components/InfoRow';
import ScreenLayout from '../../components/ScreenLayout';
import layout from '../../theme/layout';
import styles from './aboutStyles';

const principles = [
  ['Missão', 'Criar maneiras divertidas de conhecer outros filmes.'],
  ['Visão', 'Aproximar cinema e tecnologia de um jeito simples.'],
  ['Valores', 'Criatividade, acessibilidade e vontade de aprender.'],
];

export default function AboutScreen({ navigation }) {
  return (
    <ScreenLayout>
      <Text style={styles.title}>Sobre</Text>
      <Text style={styles.summary}>
        O MovieArcade é um projeto pessoal de frontend feito com HTML, CSS e JavaScript.
        O site reúne um catálogo de filmes, listas e minijogos. Esta versão mobile
        apresenta a ideia do projeto e foi desenvolvida para a disciplina.
      </Text>

      <Text style={[layout.sectionTitle, styles.sectionSpacing]}>Nossa proposta</Text>
      {principles.map(([name, description]) => (
        <View key={name} style={styles.principle}>
          <Text style={styles.principleName}>{name}</Text>
          <Text style={layout.paragraph}>{description}</Text>
        </View>
      ))}

      <Text style={[layout.sectionTitle, styles.sectionSpacing]}>Informações</Text>
      <View style={styles.information}>
        <InfoRow label="Aplicativo" value="MovieArcade" />
        <InfoRow label="Versão" value="1.0.0" />
        <InfoRow label="Desenvolvido por" value="Kevin Silva Ramos" />
        <InfoRow label="Disciplina" value="Programação para Dispositivos Móveis I" />
      </View>
      <View style={styles.nextPage}>
        <AppButton title="Ir para Contato" variant="outline" onPress={() => navigation.navigate('Contato')} />
      </View>
    </ScreenLayout>
  );
}
