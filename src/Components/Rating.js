import React from "react";
import { Text , View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const Rating = ({rating , size}) => {
    return (
        <View
        style={{display:"flex" , flexDirection:"row"}}>
            {Array(rating)
                .fill(true)
                .map((item , index) => (
                    <Entypo name="star" size={size} color="#DF9401" />
                ))}
            {Array(5-rating)
                .fill(true)
                .map((item , index) => (
                        <Entypo name="star-outlined" size={size} color="black" />
                ))}
        </View>
    )
}

export default Rating;