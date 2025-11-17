import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Screen2() {

  const navigation = useNavigation();


  return (
    <View style={styles.container}>
        <Text>Pantalla 2</Text>
        <Button
         title='Volver a Pantalla 1'
         onPress={()=> navigation.navigate('Screen1')}
       />
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