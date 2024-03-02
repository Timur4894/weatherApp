import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import MainScreen from './screens/MainScreen';
import CityName from './components/mainComponents/CityName';
import LoginScreen from './screens/LoginScreen'; // Добавляем экран с авторизацией
import SavedCities from './screens/SavedCities';
import { CityProvider } from './context/local-store';
import { FavoriteCitiesProvider } from './context/FavoriteCitiesContext';

const Stack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Ваш логин процесс здесь, например, проверка локального хранилища или запрос к серверу

    // Если авторизация успешна, устанавливаем isAuthenticated в true
    setIsAuthenticated(true);
  };

  return (
    <NavigationContainer>
      <FavoriteCitiesProvider>
        <CityProvider>
          <Stack.Navigator>
            {isAuthenticated ? (
              <>
                <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false}} />
                <Stack.Screen name="SavedCities" component={SavedCities} options={{ headerShown: false}}/>
              </>
            ) : (
              // Если пользxxxователь не аутентифицирован, показываем экран с авторизацией
              <Stack.Screen name="LoginScreen" options={{ headerShown: false}}>
                {props => <LoginScreen {...props} onLogin={handleLogin}/>}
              </Stack.Screen>
            )}
          </Stack.Navigator>
        </CityProvider>
      </FavoriteCitiesProvider>
    </NavigationContainer>
  );
}
