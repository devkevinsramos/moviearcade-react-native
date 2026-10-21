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
import AppButton from '../../components/AppButton';
import { verifyAccess } from '../../config/access';
import colors from '../../theme/colors';
import styles from './loginStyles';

export default function LoginScreen({ onSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [feedback, setFeedback] = useState('');

  function submit() {
    const message = verifyAccess(username, password);
    setFeedback(message);
    if (!message) onSuccess();
  }

  function clearForm() {
    setUsername('');
    setPassword('');
    setPasswordVisible(false);
    setFeedback('');
  }

  return (
    <SafeAreaView style={styles.screen} edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.scroll}>
          <View style={styles.wrapper}>
            <View style={styles.brandRow}>
              <Image
                source={require('../../../assets/logo.png')}
                style={styles.logo}
                resizeMode="contain"
                accessibilityLabel="Logotipo do MovieArcade"
              />
              <View style={styles.brandText}>
                <Text style={styles.brandName}>MovieArcade</Text>
                <Text style={styles.brandDetail}>Cinema, listas e jogos na web</Text>
              </View>
            </View>

            <Text style={styles.heading}>Entrar</Text>
            <Text style={styles.description}>Entre para conhecer o projeto.</Text>

            <Text style={styles.label}>Usuário</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu usuário"
              placeholderTextColor={colors.muted}
              value={username}
              onChangeText={(value) => { setUsername(value); setFeedback(''); }}
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="off"
              returnKeyType="next"
              accessibilityLabel="Usuário"
            />

            <Text style={styles.label}>Senha</Text>
            <View style={styles.passwordBox}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Digite sua senha"
                placeholderTextColor={colors.muted}
                value={password}
                onChangeText={(value) => { setPassword(value); setFeedback(''); }}
                secureTextEntry={!passwordVisible}
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="off"
                returnKeyType="done"
                onSubmitEditing={submit}
                accessibilityLabel="Senha"
              />
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={passwordVisible ? 'Ocultar senha' : 'Mostrar senha'}
                onPress={() => setPasswordVisible(!passwordVisible)}
                style={styles.passwordToggle}
              >
                <Text style={styles.toggleText}>{passwordVisible ? 'Ocultar' : 'Mostrar'}</Text>
              </Pressable>
            </View>

            {feedback ? <Text style={styles.feedback} accessibilityRole="alert">{feedback}</Text> : null}

            <View style={styles.actions}>
              <AppButton title="Entrar" onPress={submit} />
              <AppButton title="Limpar campos" variant="outline" onPress={clearForm} />
            </View>
            <Text style={styles.note}>Acesso de demonstração, sem cadastro.</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
