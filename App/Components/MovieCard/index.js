import React from 'react';
import {Text, View, Image} from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles';
import {FavButton} from '../FavButton';
import {ShareButton} from '../ShareButton';
import {Images} from '../../Resources';
import {shareImage, FavMovies} from '../../Helpers';
import {URLs} from '../../Constants';

export function MovieCard({movie, isActive}) {
    return (
        <View style={[Styles.container]}>
            <Image
                source={
                    movie.poster_path
                        ? {
                              uri: URLs.ImgURL + movie.poster_path,
                          }
                        : Images.noPhoto
                }
                style={Styles.posterImage}
            />
            <View style={Styles.ratingContainer}>
                <Text style={Styles.ratingText}>{movie.vote_average}</Text>
            </View>
            <View style={Styles.sideContainer}>
                <View style={Styles.movieContainer}>
                    <Text style={Styles.movieTitle}>
                        {movie.original_title +
                            (movie.release_date &&
                                ' (' + movie.release_date.split('-')[0] + ')')}
                    </Text>
                    {movie.release_date ? (
                        <Text style={Styles.movieYear}>
                            {'Released date: ' + movie.release_date}
                        </Text>
                    ) : null}
                    <Text style={Styles.movieDetail} numberOfLines={10}>
                        {movie.overview}
                    </Text>
                </View>
                <View style={Styles.bottomView}>
                    <ShareButton
                        onShare={() =>
                            shareImage(
                                URLs.ImgURL + movie.poster_path,
                                movie.original_title,
                            )
                        }
                    />
                    <FavButton
                        isActive={isActive}
                        onToggle={async (v) =>
                            await FavMovies(
                                v ? 'add' : 'remove',
                                movie.id,
                                movie,
                            )
                        }
                    />
                </View>
            </View>
        </View>
    );
}

MovieCard.propTypes = {
    movie: PropTypes.object,
};
