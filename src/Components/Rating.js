import React from "react";
import { Text , View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
{/* <FontAwesome name="star" size={24} color="black" /> */}
import { Entypo } from '@expo/vector-icons';

const Rating = (rating) => {
    console.log(rating.Rating);

    return (
        <View style={{display:"flex" , flexDirection:"row"} }>
            {Array(rating.Rating)
                .fill(true)
                .map((item, index) => (
                    <Entypo name="star" size={18} color="#DF9401" />
                ))}
            {Array(5- rating.Rating)
                .fill(true)
                .map((item, index) => (
                        <Entypo name="star-outlined" size={18} color="black" />
                ))}
        </View>
    )
}

export default Rating;