import React , {useState , useEffect} from "react";
import {FlatList, SafeAreaView, Text, TextInput, View , Image , ActivityIndicator, } from 'react-native';
import { API_KEY } from "../../Components/Constants";
import { Rating, AirbnbRating } from 'react-native-ratings';
import "./styles";
import styles from "./styles";
import { AntDesign } from '@expo/vector-icons';
import RatingStar from "../../Components/Rating";
import { TouchableOpacity } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { useDispatch , useSelector } from "react-redux";
import { fetchBookList } from "../../Store/bookSlice";
import { setBookLists } from "../../Store/index";

const Home = ({navigation}) =>{
    const [search , setSearch] = useState("");
    // const [books , setBooks] = useState();
    const [isloading , setIsLoading] = useState(false);
    const [filterArray , setFilterArray] = useState(null);
    const books = useSelector((state)=> state.books);

    const dispatch = useDispatch();

    useEffect(()=>{
        if(books){
            dispatch(fetchBookList()).then(()=>{
            setIsLoading(true);
            });
        }
        if(search)
        {
            _filterOnSearch();
        }
    }, [search]);

    // useEffect(()=>{
        
    // }, [search])


    //OnFilterSearchedValues
    const _filterOnSearch = () => {
        if(search.length !== 0 ){
            let newArr = books?.books.filter((item )=> {
                return item.title.includes(search);
            })
            setFilterArray(newArr);
        }else{
            setFilterArray(null);
        }
    }



    const _handleBooksRendering = async() =>{
        try{
            setIsLoading(false);
            const response = await fetch('https://books-list-api.vercel.app/books', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-api-key': API_KEY.api_key,
            },
          });
          const data = await response.json();
        //   console.log("data", data.data);
          setBooks(data.data);
          setIsLoading(true);
        }
        catch(err){
            console.log("error : ", err);
        }
    }

    const _handleFlatList = (item) => {
        let book = item.item;
        return (
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate("Book" , {
                       item: item,
                    })
                }}
            >
                    <View style={styles.Container}>
                        <View>
                            <Image style={styles.imageStyle} source={{uri: book?.imageLink}} />
                            {/* <AntDesign name="hearto" size={24} color="black" /> */}
                            <View style={{ backgroundColor:"white", borderRadius:50, position: 'absolute', top: 10, left: 107 , padding:3 }} >
                                <AntDesign name={book?.is_liked ?"heart" : "hearto"} size={20} color="red" />
                            </View>
                        </View>
                        <View style={{ paddingVertical:5 , width:120}}>
                            <Text style={{fontWeight:"bold"}} numberOfLines={2}>{book?.title}</Text>
                            <View style={{display:"flex" , flexDirection:"row" , gap:8}}>
                                <RatingStar rating={book?.rating} size={14} />
                                <Text>({book?.reviews})</Text>
                            </View>
                            <Text>${book.price}</Text>
                        </View>
                    </View>
            </TouchableOpacity>
        )
    }



    return (
        <SafeAreaView style={{backgroundColor:"white"}}>
            <View style={styles.headerStyle}>
                <View style={{display:"flex" , alignItems:"center"}}>
                    <Text>Hi Nick</Text>
                </View>
                <View >
                    <Image
                    style={{height:40 , width:40}}
                    source={require("../../../assets/images/Ellipse1.png")}
                    resizeMode='contain'
                    />
                </View>
            </View>
            <View style={styles.searchIcon}>
                <EvilIcons name="search" size={30} color="black" />
                <TextInput
                    style={{
                        height: 45,
                        backgroundColor:"transparent",
                        color:"black"
                        }}
                    placeholder="Search..."
                    onChangeText={text => setSearch(text)}
                    defaultValue={search}
                />
            </View>
           {isloading?  
           <View style={{display:"flex" , paddingLeft:20 , justifyContent:"space-around"}}>
              {books?.books && 
              <FlatList 
                    data={!filterArray ? books?.books : filterArray}
                    renderItem={_handleFlatList}
                    keyExtractor={(item , index)=> index.toString()}
                    contentContainerStyle={{
                        paddingBottom:200,
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                     }}    
                    numRows={2}
                    initialNumToRender={20}
                    onEndReachedThreshold={0.4} 
                    // numColumns={Math.ceil(books.length / 2)}     
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    ListFooterComponent={!isloading && <ActivityIndicator />}
                    />
                }
            </View>
            :
            <View style={{display:"flex" , flex:1 , justifyContent:"center" , alignItems:"center"}}>
                 <ActivityIndicator size="small" color="#004D6D" />
            </View>    
        }
        </SafeAreaView>
    )
}

export default Home;