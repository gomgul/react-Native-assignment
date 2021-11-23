import AppLoading from 'expo-app-loading';
import React from 'react';
import * as Font from 'expo-font';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAssets } from 'expo-asset';

export default function App() {
  const [assets] = useAssets([require("./assets/crypto.png")]);
  const [fonts] = Font.useFonts(Ionicons.font);
  if (!assets || !fonts) {
    return (
      <AppLoading />
    );
  }
  return <Text>We are done loading!</Text>;
}