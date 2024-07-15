import React from "react";
import { Appearance, StyleSheet } from 'react-native';
import { Snackbar, PaperProvider } from 'react-native-paper';
import Navigation from './StackNavigator';
import * as Theme from './themes';

export default function App() {
  return (
    <>
      <PaperProvider theme={Appearance.getColorScheme() == 'light' ? Theme.lightTheme : Theme.darkTheme}>
        {/* <PaperProvider theme={Appearance.getColorScheme() == 'light' ? DefaultLight : DefaultDark}> */}
        <Navigation />
      </PaperProvider>
    </>
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
