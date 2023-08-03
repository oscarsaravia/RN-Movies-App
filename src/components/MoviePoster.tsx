import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../common/types';

interface Props {
    movie: Movie;
    cardHeight?: number;
    cardWidth?: number;
}

export const MoviePoster = ( { movie, cardHeight = 420, cardWidth = 300 }: Props) => {
    const { poster_path } = movie;
  return (
    <View style={{ width: cardWidth, height: cardHeight }}>
        <View style={ styles.imageContainer }>
            <Image
                source={ poster_path ? { uri: `https://image.tmdb.org/t/p/w500${ poster_path }` } : require('../assets/no-image.jpg')}
                style={ styles.image }
            />
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        borderRadius: 18,
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
    }
});

