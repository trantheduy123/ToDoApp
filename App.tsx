import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [count,setCount] = useState<number>(0)
  return (
    <View style={styles.container}>
      <Text style ={{fontSize:30, fontWeight:"600"}}>
        
          count = {count}
        </Text>
        <View>
          <Button
          color={"red"}
          title='increase' onPress={() => setCount(count + 1)} />
        
         
        </View>
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
