import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    headerStyle:{
    display:"flex" , 
    flexDirection:"row" , 
    justifyContent:"space-between" , 
    paddingHorizontal:20,
    alignItems:"center",
    padding:10,
    marginBottom:5,
  },
    Container: {
      display:"flex",
      flexDirection:"column" , 
      padding:15,
      width: "100%" , 
      alignContent:"center", 
      alignItems:"center",
  },
  searchIcon:{
    display:"flex" , 
    flexDirection:"row", 
    alignItems:"center",
    marginHorizontal:20,
    borderRadius:30,
    gap:10,
    backgroundColor:"#EFEFEF",
    paddingLeft:10,
    marginBottom:20,
    height:40
  }
  ,
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
