import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import HomeScreen from './screens/Home';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { default as theme } from './theme';
import mapping from './mapping';

export default () => {

  let [fontsLoaded] = useFonts({
    'jaapokki': require('../assets/fonts/jaapokki-regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }} customMapping={mapping}>
        <HomeScreen />
      </ApplicationProvider>
    </>
  }
};
