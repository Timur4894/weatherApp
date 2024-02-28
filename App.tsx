import { StatusBar } from 'expo-status-bar';
import MainScreen from './screens/MainScreen';
import CityName from './components/CityName';
export default function App() {
  return (
    <>
      <MainScreen/>
      <StatusBar style="light" />
    </>
  );
}

