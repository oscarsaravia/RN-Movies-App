import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';
import { useMovies } from '../hooks/useMovies';

interface Props extends StackScreenProps<any, any>{};

export const HomeScreen = ( { navigation }: Props) => {

  const { movies, isLoading } = useMovies();
  console.log(`Movies: ${movies[4]?.title}`);
  
  

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Ir a detalle"
        onPress={() => navigation.navigate('Detail')}
      />
      {
        isLoading ? <Text>Loading...</Text> : <Text>Loading finished</Text>
      }
    </View>
  )
}
