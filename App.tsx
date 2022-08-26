import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';

export default function App() {

  let [fontsloaded] = useFonts ({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold
  });

  if(!fontsloaded)
  {
    return<AppLoading/>
  }
  
  return (
    <View style={styles.container}>
      <Routes />
      <StatusBar style="auto" />
    </View>
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
