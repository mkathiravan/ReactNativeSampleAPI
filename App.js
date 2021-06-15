import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      dataSource: null
    }
  }

  componentDidMount () {
    this.apiCall();
  }

  async apiCall()
  {
    let resp = await fetch('https://facebook.github.io/react-native/movies.json')
    let respJson = await resp.json()
    console.log(respJson)
    this.setState({
      data: respJson.movies
    })
  }

  render(){

    return (
      <View>
        <Text style = {{fontSize : 40, marginTop: 30}}>API call Demo</Text>
        <FlatList
        data = {this.state.data}
        renderItem={({item})=>
         <Text style = {{fontSize: 40, backgroundColor:'skyblue',margin: 15}}>{item.title},{item.releaseYear}</Text>}
        />
      </View>
    );

  }

}

export default App;
