import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Booking = ({route}) => {
const itemfromemovies=route.params
  return (
    <View style={{flex:1,backgroundColor:"black"}}>
      <ImageBackground
      source={{uri:itemfromemovies?.image}}
      resizeMode={"stretch"}
      style={{height:400,justifyContent:"flex-end"}}
      >

<Text style={{color:"white",alignSelf:"center"}}>{itemfromemovies.title}</Text>
      </ImageBackground>
    </View>
  )
}

export default Booking

const styles = StyleSheet.create({



})