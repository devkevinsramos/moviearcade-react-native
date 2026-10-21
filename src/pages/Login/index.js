import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Botao from '../../components/Botao';
import { validarLogin } from '../../data/credenciais';
import cores from '../../styles/cores';
import styles from './styles';

export default function Login({ onEntrar }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erro, setErro] = useState('');

  function entrar() {
    const mensagem = validarLogin(usuario, senha);
    setErro(mensagem);

    if (!mensagem) {
      onEntrar();
    }
  }

  function limpar() {
    setUsuario('');
    setSenha('');
    setErro('');
    setMostrarSenha(false);
  }

  return (
    <SafeAreaView style={styles.tela} edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        style={styles.teclado}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.conteudo}
        >
          <View style={styles.formulario}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo} />
            <Text style={styles.marca}>MovieArcade</Text>
            <Text style={styles.apresentacao}>
              Cinema, listas e experiências interativas no projeto web original.
            </Text>

            <Text style={styles.titulo}>Entrar</Text>

            <Text style={styles.rotulo}>Usuário</Text>
            <TextInput
              style={styles.campo}
              placeholder="Digite seu usuário"
              placeholderTextColor={cores.secundario}
              value={usuario}
              onChangeText={(texto) => {
                setUsuario(texto);
                setErro('');
              }}
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="off"
              returnKeyType="next"
              accessibilityLabel="Usuário"
            />

            <Text style={styles.rotulo}>Senha</Text>
            <View style={styles.linhaSenha}>
              <TextInput
                style={styles.campoSenha}
                placeholder="Digite sua senha"
                placeholderTextColor={cores.secundario}
                value={senha}
                onChangeText={(texto) => {
                  setSenha(texto);
                  setErro('');
                }}
                secureTextEntry={!mostrarSenha}
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="off"
                onSubmitEditing={entrar}
                returnKeyType="done"
                accessibilityLabel="Senha"
              />
              <Pressable
                style={styles.mostrarSenha}
                accessibilityRole="button"
                accessibilityLabel={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
                onPress={() => setMostrarSenha(!mostrarSenha)}
              >
                <Text style={styles.mostrarSenhaTexto}>
                  {mostrarSenha ? 'Ocultar' : 'Mostrar'}
                </Text>
              </Pressable>
            </View>

            {erro ? <Text style={styles.erro} accessibilityRole="alert">{erro}</Text> : null}

            <Botao titulo="Entrar" onPress={entrar} />
            <Botao titulo="Limpar campos" onPress={limpar} secundario />

            <Text style={styles.aviso}>
              Acesso de demonstração: martymauser / tenisdemesa
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
