import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    Container: {
      display:"flex",
      flexDirection:"column" , 
      padding:5,
      width: "50%" , 
      alignContent:"center", 
      alignItems:"center"
  },
  imageStyle:{
    height:200, 
    width:140, 
    borderRadius:10
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
