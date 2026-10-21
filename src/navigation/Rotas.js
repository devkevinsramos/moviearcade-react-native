import { useState } from 'react';
import { Pressable, StatusBar, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';
import cores from '../styles/cores';

const Stack = createNativeStackNavigator();

function AcaoToolbar({ texto, onPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={texto}
      hitSlop={10}
      onPress={onPress}
      style={styles.acao}
    >
      <Text style={styles.acaoTexto}>{texto}</Text>
    </Pressable>
  );
}

export default function Rotas() {
  const [autenticado, setAutenticado] = useState(false);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={cores.cabecalho} />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: cores.cabecalho },
          headerTintColor: cores.principal,
          headerTitleStyle: { color: cores.texto, fontSize: 18, fontWeight: '600' },
          headerShadowVisible: false,
          contentStyle: { backgroundColor: cores.fundo },
        }}
      >
        {!autenticado ? (
          <Stack.Screen name="Login" options={{ headerShown: false }}>
            {(props) => <Login {...props} onEntrar={() => setAutenticado(true)} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                title: 'Home',
                headerRight: () => (
                  <AcaoToolbar texto="Sair" onPress={() => setAutenticado(false)} />
                ),
              }}
            />
            <Stack.Screen name="Sobre" component={Sobre} options={{ title: 'Sobre' }} />
            <Stack.Screen name="Contato" component={Contato} options={{ title: 'Contato' }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  acao: {
    paddingHorizontal: 6,
    paddingVertical: 8,
  },
  acaoTexto: {
    color: cores.principal,
    fontSize: 15,
    fontWeight: '600',
  },
});
