import { StatusBar } from 'expo-status-bar';
import MainScreen from './screens/MainScreen';
import CityName from './components/CityName';
import { CityProvider } from './context/local-store';
export default function App() {
  return (
    <CityProvider>
      <MainScreen/>
      <StatusBar style="light" />
    </CityProvider>
  );
}

