import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex:1 }}>
      <View style={{ flex:3, backgroundColor:"tomato"}}></View>
      <View style={{ flex:15, backgroundColor:"teal"}}></View>
      <View style={{ flex:2, backgroundColor:"orange"}}></View>
    </View>
  );
}
// StyleSheet.create 쓰면 자동완성
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color:"red",
  }
});
