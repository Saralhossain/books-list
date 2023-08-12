import React , {useState , useEffect} from "react";
import {FlatList, SafeAreaView, Text, TextInput, View , Image ,  } from 'react-native';
import { API_KEY } from "../../Components/Constants";
import { Rating, AirbnbRating } from 'react-native-ratings';
import "./styles";
import styles from "./styles";
import { AntDesign } from '@expo/vector-icons';
import RatingStar from "../../Components/Rating";


const Home = () =>{
    const [search , setSearch] = useState("");
    const [books , setBooks] = useState();

    useEffect(()=>{
        if(!books){
            _handleBooksRendering();
        }
    })

    const _handleBooksRendering = async() =>{
        try{
            const response = await fetch('https://books-list-api.vercel.app/books', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-api-key': API_KEY.api_key,
            },
          });
          const data = await response.json();
          console.log("data", data.data);
          setBooks(data.data);
        }
        catch(err){
            console.log("error : ", err);
        }
    }

    const _handleFlatList = (item) => {
        let book = item.item;
        return (
            <View style={{display:"flex" , flexDirection:"row"}}>
                <View style={styles.Container}>
                    <View>
                        <Image style={styles.imageStyle} source={{uri: book?.imageLink}} />
                        {/* <AntDesign name="hearto" size={24} color="black" /> */}
                        <View style={{ backgroundColor:"white", borderRadius:50, position: 'absolute', top: 10, left: 107 , padding:3 }} >
                            <AntDesign name={book?.is_liked ?"heart" : "hearto"} size={20} color="red" />
                        </View>
                    </View>
                    <View style={{ paddingVertical:5}}>
                        <Text style={{fontWeight:"bold"}}>{book?.title}</Text>
                        {/* <Text>Rating : 5 ({book?.reviews})</Text> */}
                        <View style={{display:"flex" , flexDirection:"row" , gap:8}}>
                            <RatingStar Rating ={book?.rating} />
                            <Text>({book?.reviews})</Text>
                        </View>
                        <Text>${book.price}</Text>
                    </View>
                </View>
            </View>
        )
    }



    return (
        <SafeAreaView>
            <TextInput
                style={{height: 45 , padding:10 , borderWidth:1, margin:20,
                     backgroundColor:"#EFEFEF" , borderRadius:30}}
                placeholder="Type here to translate!"
                onChangeText={text => setSearch(text)}
                defaultValue={search}
            />
            {/* <View>
                <_handleFlatList />
            </View> */}
            <View>
              {books &&  <FlatList 
                    data={books}
                    renderItem={_handleFlatList}
                    keyExtractor={item => item.index}
                    contentContainerStyle={{
                        paddingBottom:200 }}    
                    numRows={2}
                    initialNumToRender={1}
                    // numColumns={Math.ceil(books.length / 2)}     
                    // showsVerticalScrollIndicator={false}
                    // showsHorizontalScrollIndicator={false}
                    />
                }
            </View>
        </SafeAreaView>
    )
}

export default Home;