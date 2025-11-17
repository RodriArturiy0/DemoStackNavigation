import { StyleSheet, Text, View } from 'react-native';

export default function Screen1() {
  return (
    <View style={styles.container}>
        <Text>Pantalla 1</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },
  Text: {
    fontSize: 18,
  },
});