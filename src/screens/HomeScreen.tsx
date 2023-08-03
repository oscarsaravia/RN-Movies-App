import { StackScreenProps } from '@react-navigation/stack';
import { View, ActivityIndicator, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width: windowWidth } = Dimensions.get('window');
interface Props extends StackScreenProps<any, any>{};

export const HomeScreen = ( { navigation }: Props) => {

  const { movies, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if ( isLoading ) {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}
      >
        <ActivityIndicator color="red" size={100} />
      </View>
    )
  }

  return (
    <View style={{ marginTop: top + 20}}>
      {/* Hero Carousel */}
      <Carousel
        data= { movies }
        renderItem={ ({ item }: any) => <MoviePoster movie={ item }/>}
        sliderWidth={ windowWidth }
        itemWidth={ 300 } 
      />
    </View>
  )
}
