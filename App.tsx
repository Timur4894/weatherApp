import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useContext } from 'react';
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen'; 
import SavedCities from './screens/SavedCities';
import { CityProvider } from './context/local-store';
import { FavoriteCitiesProvider } from './context/FavoriteCitiesContext';
import AuthContextProvider, { AuthContext } from './context/auth-context';

const Stack = createStackNavigator();


export default function App() {
  
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const handleLogin = () => {

      setIsAuthenticated(true);
    };
  
    return (
      <AuthContextProvider>
        <NavigationContainer>
          <FavoriteCitiesProvider>
            <CityProvider>
              <Stack.Navigator>
                {isAuthenticated ? (
                  <>
                    <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false}} />
                    <Stack.Screen
                      name="SavedCities"
                      component={SavedCities}
                      options={{
                        title: 'Back',
                        headerStyle: { backgroundColor: 'black' }, 
                        headerTintColor: 'white', 
                      }}
                    />
    
                  </>
                ) : (
                  <Stack.Screen name="LoginScreen" options={{ headerShown: false}}>
                    {props => <LoginScreen {...props} onLogin={handleLogin}/>}
                  </Stack.Screen>
                )}
              </Stack.Navigator>
            </CityProvider>
          </FavoriteCitiesProvider>
        </NavigationContainer>
      </AuthContextProvider>
    );
  }
  