
//import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native'; //only access to Text library from 'react-native'
import Header from './src/components/header'; //import header, ./:현재 경로, 경로 지정해줘야함
import AlbumList from './src/components/AlbumList'; //.js붙일 필요 없음

//create a component
//flex: 1 - please expand this component to fill all content - so it does not bounce back 
const App = () => (
    <View style={{ flex: 1 }}> 
        <Header headerText={'Album'} />
        <AlbumList /> 
    </View>
);  //component nesting : component만들어서 쓰기
//위에 AppRegistry에 View import 추가

//render it to the device
AppRegistry.registerComponent('albums', () => App);
//it will automatically return App
//we must regist at least 1 component

