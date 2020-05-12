import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Layout, Spinner, Card, Text } from '@ui-kitten/components';

const StarIcon = (props) => (
  <Icon {...props} name='star'/>
);

const LoadingIndicator = (props) => (
  <View style={[props.style, styles.indicator]}>
    <Spinner size='small' status='basic'/>
  </View>
);

const HeaderAppearence = () => <Text style={{ padding: 5}}> Appearence </Text>;
const HeaderStatus = () => <Text style={{ padding: 5}}> Status </Text>;
const HeaderDiversos = () => <Text style={{ padding: 5}}> Combinações e outros tipos </Text>;

export const DemoButtons = () => (
  <Layout style={styles.container}>

    <Text category='h2'>Botões</Text>
    <Button style={{ margin: 20 }}>
      BUTTON PADRÃO
    </Button>

    <Card header={HeaderAppearence}>
      <Button style={styles.button} appearance='filled'>
        FILLED
      </Button>
      <Button style={styles.button} appearance='ghost'>
        GHOST
      </Button>
      <Button style={styles.button} appearance='outline'>
        OUTLINE
      </Button>
    </Card>



    <Card header={HeaderStatus} style={{ marginVertical: 10 }}>
      <Button style={styles.button} status='basic' accessoryLeft={StarIcon}>
        BASIC
      </Button>
      <Button style={styles.button} status='primary' accessoryLeft={StarIcon}>
        PRIMARY
      </Button>
      <Button style={styles.button} status='success' accessoryRight={StarIcon}>
        SUCCESS
      </Button>
      <Button style={styles.button} status='danger' accessoryLeft={StarIcon}>
        Danger
      </Button>
    </Card>

    <Card header={HeaderDiversos}>
      <Button style={styles.button} accessoryLeft={LoadingIndicator}>
        LOADING
      </Button>  
      <Button style={styles.button} disabled accessoryLeft={StarIcon}>
        DISABLED
      </Button>
      <Button style={styles.button} appearance='outline' status='basic' accessoryLeft={StarIcon}>
        OUTLINE BASIC
      </Button> 
    </Card>
  
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    margin: 2,
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
