import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    Container: {
      display:"flex",
      flexDirection:"column",
      alignContent:"center", 
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"white",
      marginTop:20,
      padding:30,
      width:"80%",
      borderRadius:20,
  },
  borderShadow:{
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 7,
    paddingTop: 20,
    paddingBottom:10,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  imageStyle:{
    height:300, 
    width:200, 
    borderRadius:10
  },
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight:"bold",
  },
  infoStyle:{
    display:"flex" , 
    flexDirection:"row",
  },
  infoContainer:{
    display:"flex",
    flexDirection:"column",
    gap:5,
    marginTop:20,
  },
  buttonStyle:{
    display:"flex",
    height:45,
    width:300,
    flexDirection:"row",
    backgroundColor:"#004D6D",
    borderRadius:30,
    alignContent:"center",
    alignItems:"center",
    justifyContent:"center",
    color:"white",
    gap:10,
  }
});
