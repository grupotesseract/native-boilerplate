import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Layout, Text, Card } from '@ui-kitten/components';

export const DemoText = () => (
         <Layout style={styles.container}>
           <Text style={styles.text} category="h2">
             Textos
           </Text>
           <Card>
             <View style={styles.row}>
               <Text> Texto padrão </Text>
             </View>
             <View style={styles.row}>
               <Text style={styles.text} category="h1">
                 H1
               </Text>
               <Text style={styles.text} category="h2">
                 H2
               </Text>
               <Text style={styles.text} category="h3">
                 H3
               </Text>
               <Text style={styles.text} category="h4">
                 H4
               </Text>
               <Text style={styles.text} category="h5">
                 H5
               </Text>
               <Text style={styles.text} category="h6">
                 H6
               </Text>
             </View>

             <View style={styles.row}>
               <Text style={styles.text} category="s1">
                 S1
               </Text>
               <Text style={styles.text} category="s2">
                 S2
               </Text>
             </View>

             <View style={styles.row}>
               <Text style={styles.text} category="p1">
                 P1
               </Text>
               <Text style={styles.text} category="p2">
                 P2
               </Text>
             </View>

             <View style={styles.row}>
               <Text style={styles.text} category="c1">
                 C1
               </Text>
               <Text style={styles.text} category="c2">
                 C2
               </Text>
               <Text style={styles.text} category="label">
                 LABEL
               </Text>
             </View>

             <View style={styles.row}>
               <Text>
                 Texto longo: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Quisque sapien lacus, euismod quis arcu et, sagittis suscipit
                 dolor. Etiam id ante aliquet orci rutrum sodales quis ut ipsum.
                 Nam iaculis nec justo quis mattis. Proin ut nulla maximus,
                 laoreet turpis ut, hendrerit libero. Suspendisse iaculis semper
                 convallis. Morbi molestie eleifend tortor, eget ultrices justo
                 ultricies eu. Maecenas tristique interdum tortor eu laoreet.
                 Integer metus ante, rhoncus sit amet arcu quis, luctus maximus
                 leo. Quisque quis velit volutpat diam dapibus elementum nec ut
                 tortor. Fusce eget arcu at dolor tristique fermentum. Maecenas
                 pretium consequat euismod. Nunc venenatis ullamcorper elit, ut
                 lacinia odio pulvinar eu. Maecenas tincidunt commodo urna in
                 facilisis. Nullam aliquam libero vel urna interdum, sit amet
                 venenatis urna vulputate. Sed condimentum leo et cursus
                 pharetra. Donec ut leo et purus sodales cursus. Vestibulum
                 dapibus, ligula quis molestie convallis, diam purus rhoncus
                 justo, id ultrices risus justo sit amet sem. In hac habitasse
                 platea dictumst. Donec convallis, leo id tristique sodales,
                 ligula justo dictum justo, egestas vehicula felis lectus eget
                 erat. Ut vel elementum lorem. Donec nec nisi vel sem porttitor
                 vehicula et eget nibh. Integer tincidunt sagittis urna. Ut eget
                 metus orci. Nullam congue, ligula at rhoncus tempor, magna
                 mauris dapibus nulla, a aliquet erat purus quis magna.
               </Text>
             </View>
           </Card>
         </Layout>
       );

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    margin: 2,
  },
});
