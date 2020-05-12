import React from 'react';
import { Layout, TopNavigation, Divider } from '@ui-kitten/components';
import { DemoButtons } from '../components/DemoButtons';
import { DemoText } from '../components/DemoText';
import { ScrollView } from 'react-native';

const HomeScreen = () => (
  <Layout style={{ paddingTop: 20, paddingBottom: 50 }}>
    <TopNavigation title='Demonstração de componentes' alignment='center'/>
    <Divider />
    <ScrollView contentContainerStyle={{alignItems: 'center'}}>
      <DemoButtons />
      <DemoText />
    </ScrollView>
  </Layout>
);

export default HomeScreen;