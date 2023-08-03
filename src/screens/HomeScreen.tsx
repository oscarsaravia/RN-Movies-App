import { StackScreenProps } from '@react-navigation/stack';
import { View, ActivityIndicator, Dimensions, FlatList, Text, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviesCarousel } from '../components/MoviesCarousel';

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
    <ScrollView>
      <View style={{ marginTop: top + 20}}>
        <View style={{ height: 440 }}>
          {/* Hero Carousel */}
          <Carousel
            data= { movies }
            renderItem={ ({ item }: any) => <MoviePoster movie={ item }/>}
            sliderWidth={ windowWidth }
            itemWidth={ 300 } 
          />
        </View>
        {/* Popular movies carousel */}
        <MoviesCarousel movies={ movies } carouselTitle='Popular Movies'/>
      </View>
    </ScrollView>
  )
}
