import { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login/LoginScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import AboutScreen from '../screens/Sobre/AboutScreen';
import ContactScreen from '../screens/Contato/ContactScreen';
import colors from '../theme/colors';

const Stack = createNativeStackNavigator();

function HeaderButton({ title, onPress }) {
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={title} onPress={onPress} hitSlop={10} style={styles.headerButton}>
      <Text style={styles.headerButtonText}>{title}</Text>
    </Pressable>
  );
}

export default function AppNavigator() {
  // O login fica somente em memória. Ao sair ou reiniciar, volta à tela Login.
  const [signedIn, setSignedIn] = useState(false);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.header,
        headerTintColor: colors.heading,
        headerTitleStyle: styles.headerTitle,
        headerShadowVisible: false,
        contentStyle: styles.content,
      }}
    >
      {!signedIn ? (
        <Stack.Screen name="Login" options={{ headerShown: false }}>
          {() => <LoginScreen onSuccess={() => setSignedIn(true)} />}
        </Stack.Screen>
      ) : (
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Home',
              headerRight: () => (
                <HeaderButton title="Sair" onPress={() => setSignedIn(false)} />
              ),
            }}
          />
          <Stack.Screen
            name="Sobre"
            component={AboutScreen}
            options={({ navigation }) => ({
              title: 'Sobre',
              headerRight: () => (
                <HeaderButton title="Início" onPress={() => navigation.popToTop()} />
              ),
            })}
          />
          <Stack.Screen
            name="Contato"
            component={ContactScreen}
            options={({ navigation }) => ({
              title: 'Contato',
              headerRight: () => (
                <HeaderButton title="Início" onPress={() => navigation.popToTop()} />
              ),
            })}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  header: { backgroundColor: colors.header },
  headerTitle: { color: colors.heading, fontSize: 18, fontWeight: '600' },
  content: { backgroundColor: colors.background },
  headerButton: { paddingHorizontal: 6, paddingVertical: 9 },
  headerButtonText: { color: colors.accent, fontSize: 15 },
});
