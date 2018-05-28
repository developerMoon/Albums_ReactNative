import React, { Component } from 'react'; //둘 다 import
import { ScrollView } from 'react-native';
import axios from 'axios'; //다운로드한것 import
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
    //1. setup default state
    state = { albums: [] };

    //2. this.setState
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data })); //받은 결과를 console애 뿌린다
    }
    //order of operations problem : shows data before fetched data is ready

    renderAlbums() {
        return this.state.albums.map(album =>
             <AlbumDetail key={album.title} album={album} /> //doesn't have to be name album
             //data={data} is also possible
        );
    }
    //should make this scrollable
    //must add style of flex - in index.js
    render() {
        console.log(this.state);
        return (
                <ScrollView>
                    {this.renderAlbums()}
                </ScrollView>
        );
    }
}

export default AlbumList;


