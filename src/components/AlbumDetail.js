import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    //things i will use from album. (props) to ({album})
    const { title, artist, thumbnail_image, image, url } = album;
    //refactor styles cuz i use them twice -optional
    const { 
        thumbnailStyle, 
        headerContentStyle, 
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle 
    } = styles;

    return (
        //to use card style <Card>
        //vertical oriented text        
        //destructured from props.album.artist -> artust by using const
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle} //for image size
                        source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text> 
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image 
                    style={imageStyle} //another cardsection to add image
                    source={{ uri: image }} 
                /> 
            </CardSection>
            
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy now
                </Button>                 
            </CardSection>
        </Card>
    );
};

const styles = {
     //equal spce above, between etc 
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'       
    },
    headerTextStyle: {
        fontSize: 18
    },
    //need to specify image size, unless image won't show
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    //check if there's typo - cuz that's why it didn't work
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 330,
        flex: 1,
        width: null //so that album artwork's width = device width
    }
};

export default AlbumDetail;
