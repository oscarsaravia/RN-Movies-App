import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { MoviePoster } from './MoviePoster'
import { Movie } from '../common/types'

interface Props {
    movies: Movie[];
    carouselHeight?: number;
    cardHeight?: number;
    cardWidth?: number;
    horizontalMargin?: number;
    carouselTitle: string;
}

export const MoviesCarousel = (
    { movies, carouselHeight=260, cardHeight=200, cardWidth=140, horizontalMargin=8, carouselTitle  }: Props
) => {
  return (
    <View style={{ height: carouselHeight }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold'}}>{ carouselTitle }</Text>
        <FlatList
          data={ movies }
          renderItem={ ({ item }: any) => (
            <MoviePoster movie={ item } cardHeight={ cardHeight } cardWidth={ cardWidth } horizontalMargin={ horizontalMargin }/>
          )}
          keyExtractor={ (item) => item.id.toString() }
          horizontal={ true }
          showsHorizontalScrollIndicator={ false }
        />
      </View>
  )
}
