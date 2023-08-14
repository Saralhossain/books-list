import React from "react";
import { 
    View , 
    Text , 
    SafeAreaView , 
    Image , 
    ScrollView , 
    TouchableOpacity , 
    Linking } from "react-native";
import styles from "./styles";
import Rating from "../../Components/Rating";
import { Feather } from '@expo/vector-icons';

const Book = ({route}) =>{
    console.log("Books route:",route);
    let details = route.params.item.item;
    console.log(details);

    const _handleExtenalLink = (link) => {
        Linking.canOpenURL(link).then(() => {
            Linking.openURL(link);
        });
    }


    return (
        <ScrollView>
            <SafeAreaView style={{ backgroundColor:"white"}}>
                    <View style={[{display:"flex"  , justifyContent:"center" , alignItems:"center" }]}>
                        <View style={[styles.Container , styles.borderShadow]}>
                            <View>
                                <Image style={styles.imageStyle} source={{uri: details?.imageLink}} />
                            </View>
                            <View style={{display:"flex" , flexDirection:"row" , gap:18 , paddingVertical:10, paddingHorizontal:5}}>
                                <View style={{display:"flex" , alignItems:"center" , flexDirection:"column" , gap:6}}>
                                    <Text style={styles.text}>Rating</Text>
                                    <Rating rating={details.rating} size={14} />
                                </View>
                                <View style={{display:"flex" , alignItems:"center"}}>
                                    <Text style={styles.text}>Reviews</Text>
                                    <Text>({details.reviews})</Text>
                                </View>
                                <View style={{display:"flex" , alignItems:"center"}}>
                                    <Text style={styles.text}>Price</Text>
                                    <Text>${details.price}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{display:"flex" , paddingHorizontal:40 , paddingVertical:10}}>
                        <Text style={{fontSize:24 ,fontWeight:"bold",}}>{details.title}</Text>  
                        <View style={styles.infoContainer}>
                            <View style={styles.infoStyle}>
                                <Text style={{fontWeight:"bold"}}>Author: </Text>
                                <Text>{details?.author}</Text>
                            </View>
                            <View style={styles.infoStyle}>
                                <Text style={{fontWeight:"bold"}}>Country: </Text>
                                <Text>{details?.country}</Text>
                            </View>
                            <View style={styles.infoStyle}>
                                <Text style={{fontWeight:"bold"}}>Language: </Text>
                                <Text>{details?.language}</Text>
                            </View>
                            <View style={styles.infoStyle}>
                                <Text style={{fontWeight:"bold"}}>Year: </Text>
                                <Text>{details?.year}</Text>
                            </View>
                            <View style={styles.infoStyle}>
                                <Text style={{fontWeight:"bold"}}>Pages: </Text>
                                <Text>{details?.pages}</Text>
                            </View>
                        </View>      
                    </View>
                    <View style={{display:"flex" , alignContent:"center" , alignItems:"center" , paddingVertical:20}}>
                        <TouchableOpacity
                            style={styles.buttonStyle}
                            onPress={()=>{
                                _handleExtenalLink(details?.link)
                            }}
                        >
                            <Text style={{color:"white", fontSize:16,}}>View Details</Text>
                            <Feather name="external-link" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Book;
