import React from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';
import Card from '../components/Card'
import { useSelector } from 'react-redux'

export default function Home({ navigation }) {
  const lists = useSelector(state => state.lists.lists)
  if (!lists.length) {
    return (
      <ImageBackground source={require('../assets/photo.jpg')} style={{ width: '100%', height: '100%' }}>
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontWeight:'bold',fontSize:25}}>Nothing yet</Text>
        </View>
      </ImageBackground >
    )
  }

  return (
    <ImageBackground source={require('../assets/photo.jpg')} style={{ width: '100%', height: '100%' }}>
      <FlatList
        data={lists}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          return <Card
            title={item.title} place={item.place} navigation={navigation} id={item.id} />
        }}
      />
    </ImageBackground>
  );
}

Home.navigationOptions = ({ navigation }) => {
  return {
    title: 'Your Shopping Lists',
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})