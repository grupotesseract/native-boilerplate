import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { default as theme } from './theme';
import HomeScreen from './screens/Home';
import mapping from './mapping';
import { connect } from 'react-redux';
import { RootState } from './store';

const AppTheme = (props) => {

  let [fontsLoaded] = useFonts({
    'jaapokki': require('../assets/fonts/jaapokki-regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    let evaTheme = eva.light
    if (props.theme === 'dark') {
        evaTheme = eva.dark
    }
    return <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...evaTheme, ...theme }} customMapping={mapping}>
        <HomeScreen />
    </ApplicationProvider>
    </>
  }
};

function mapStateToProps(state: RootState) {
  const { system } = state
  return { theme: system.theme }
}

export default connect(mapStateToProps)(AppTheme)