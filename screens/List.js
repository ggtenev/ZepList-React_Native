import React from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, ScrollView } from 'react-native';
import { useSelector } from 'react-redux'

export default function List({ navigation }) {
  const id = navigation.getParam('id')
  const list = useSelector(state => state.lists.lists.find(list => list.id === id))

  return (
    <ImageBackground source={require('../assets/photo.jpg')} style={{ width: '100%', height: '100%' }}>
      <View style={styles.container}>
        <Text style={styles.title}>{list.title}</Text>
        <Text style={styles.place}>Shop: {list.place}</Text>
        <ScrollView style={styles.list}>
          {list.products.map(p => <Text key={Math.random()} style={styles.item}>{p}</Text>)}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

List.navigationOptions = ({ navigation }) => {
  const title = navigation.getParam('title')
  return {
    title: title
  }
}

const styles = StyleSheet.create({
  container:{
    margin:40,
    backgroundColor:'white',
    opacity:0.7,
    height:'80%',
    alignItems:'center'
  },
  title:{
    fontSize:22,
    fontWeight:'bold'
  },
  place:{
    fontSize:18,
    color:'green',
    fontWeight:'bold'
  },
  item:{
    fontSize:18,
    marginVertical:3
  },
  list:{
    width:'100%',
    marginLeft:40
  }
})