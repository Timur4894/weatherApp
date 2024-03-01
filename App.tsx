import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import MainScreen from './screens/MainScreen';
import CityName from './components/mainComponents/CityName';
import LoginScreen from './screens/LoginScreen'; // Добавляем экран с авторизацией
import { CityProvider } from './context/local-store';
import SavedCities from './screens/SavedCities';
import { FavoriteCitiesProvider } from './context/FavoriteCitiesContext';


export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Ваш логин процесс здесь, например, проверка локального хранилища или запрос к серверу

    // Если авторизация успешна, устанавливаем isAuthenticated в true
    setIsAuthenticated(true);
  };

  return (
    <>
    <FavoriteCitiesProvider>
        <CityProvider>
          {isAuthenticated ? (
            <>
              <MainScreen /> 
              <SavedCities/>
              <StatusBar style="light" />
            </>
          ) : (
            // Если пользователь не аутентифицирован, показываем экран с авторизацией
            <LoginScreen onLogin={handleLogin} />
          )}
        </CityProvider>
      </FavoriteCitiesProvider>
    </>
  );
}
