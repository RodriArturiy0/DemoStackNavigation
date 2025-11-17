import { StyleSheet, View, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

   
export default function Main() {

  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Button
        title='pantalla 1'
        onPress={()=> navigation.navigate('Screen1')}
      />
      <Button
        title='pantalla 2'
        onPress={()=> navigation.navigate('Screen2')}
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
});