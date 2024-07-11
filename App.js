import { StyleSheet } from 'react-native';
import Navigation from './StackNavigator';
import { Text } from 'react-native-paper';

export default function App() {
  return (
    <Navigation />
    // <Text>hi</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
