import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback,Alert, KeyboardAvoidingView, Keyboard, ImageBackground, TextInput, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux'
import * as actions from '../store/actions'

export default function NewList({ navigation }) {
  const [title, setTitle] = useState('')
  const [shop, setShop] = useState('')
  const [item1, setItem1] = useState('')
  const [item2, setItem2] = useState('')
  const [item3, setItem3] = useState('')
  const [item4, setItem4] = useState('')
  const [item5, setItem5] = useState('')
  const [item6, setItem6] = useState('')

  const dispatch = useDispatch()

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground resizeMode='cover' source={require('../assets/photo.jpg')} style={{ width: '100%', height: '100%' }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>
            <Text style={styles.header}> New List</Text>
            <View style={styles.form}>
              <View style={styles.title}>
                <TextInput placeholder='Title' value={title} onChangeText={t => setTitle(t)} />
              </View>
              <View style={styles.title}>
                <TextInput placeholder='Shop' value={shop} onChangeText={t => setShop(t)} />
              </View>
              <View style={styles.item}>
                <TextInput placeholder='Item' value={item1} onChangeText={t => setItem1(t)} />
              </View>
              <View style={styles.item}>
                <TextInput placeholder='Item' value={item2} onChangeText={t => setItem2(t)} />
              </View>
              <View style={styles.item}>
                <TextInput placeholder='Item' value={item3} onChangeText={t => setItem3(t)} />
              </View>
              <View style={styles.item}>
                <TextInput placeholder='Item' value={item4} onChangeText={t => setItem4(t)} />
              </View>
              <View style={styles.item}>
                <TextInput placeholder='Item' value={item5} onChangeText={t => setItem5(t)} />
              </View>
              <View style={styles.item}>
                <TextInput placeholder='Item' value={item6} onChangeText={t => setItem6(t)} />
              </View>
            </View>
            <View style={{ width: '100%' }}>
              <Button title='ADD' color='#2cbf13'
                onPress={() => {
                  if(title.length < 1 || shop.length < 1){
                    Alert.alert('Invalid Input','You must add a title and shop',['OK'])
                    return
                  }
                  dispatch(actions.addList({ title, shop, products: [item1, item2, item3, item4, item5, item6] }))
                  setTitle('')
                  setShop('')
                  setItem1('')
                  setItem2('')
                  setItem3('')
                  setItem4('')
                  setItem5('')
                  setItem6('')
                  navigation.navigate('Home')
                }
                } />
            </View>
          </View>
          </TouchableWithoutFeedback>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

NewList.navigationOptions = ({ navigation }) => {
  return {
    title: 'Add New List'
  }
}

const styles = StyleSheet.create({
  container: {

    marginTop: 40,
    marginHorizontal: 15,
    backgroundColor: 'white',
    opacity: 0.88,
    // height: '90%',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 9
  },
  form: {
    width: '100%'
  },
  title: {
    backgroundColor: 'white',
    padding: 5,
    marginHorizontal: 30,
    marginVertical: 10,
    // borderBottomColor: 'grey',
    // borderBottomWidth: 0.7,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
    shadowRadius: 5,
  },
  item: {
    backgroundColor: 'white',
    padding: 5,
    marginHorizontal: 10,
    marginVertical: 3,
    // borderBottomColor: 'grey',
    // borderBottomWidth: 0.6,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
    shadowRadius: 5,
  }
})
