import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.header}>  duy </Text>
        <Text style={styles.parent}>  hoc react native <Text style={styles.child}> bla bla </Text> </Text>
      </View>
      <Text style={styles.hello1} >Hellu Duy learn react native</Text>
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
  hello1:{
    color: 'violet', 
    fontSize:40, 
    borderWidth: 1 , 
    borderColor: 'green',
    padding:10},
  header: {
    fontSize:30,
    fontWeight: '600'
  },
  parent: {
    fontSize:30,
   color: 'green'
  },
  child: {
    fontSize:15,
   color: 'red'
  }

});
