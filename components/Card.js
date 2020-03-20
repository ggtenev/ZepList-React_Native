import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {useDispatch} from 'react-redux'
import * as actions from '../store/actions'

export default function Card({ title, place, navigation, id }) {
  const dispatch = useDispatch()
  console.log(id)
  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text>{place}</Text>
      </View>
      <View style={styles.buttons}>
        <Button title='delete' color='red' onPress={() => dispatch(actions.deleteList(id)) }/>
        <Button title='details' color='green' onPress={() => navigation.navigate('List',{
          title,
          id,
          place
        })}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginHorizontal: 35,
    marginVertical:10,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    shadowRadius: 5,
    backgroundColor:'white',
    opacity:0.8
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  info:{
    alignItems:'center'
  },
  title:{
    fontWeight:'bold',
    fontSize:20
  }
})
