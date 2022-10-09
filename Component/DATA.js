
import { Button, FlatList, StyleSheet, Text, View, Image,ActivityIndicator,Dimensions, TouchableOpacity, } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
const{width,height}=Dimensions.get("window")


const MyMovies=({item})=>{

return(
    <View style={[Styles.Moviesview, Styles.elevation]}>

<Image 
resizeMode={"stretch"} 
style={Styles.image3} source={{ uri: item?.image }} />
<Text style={{color:"white",alignSelf:"center"}}>{item.title}</Text>
<Text style={{color:"white",alignSelf:"center"}}>{item.year}</Text>
<Text style={{color:"white",alignSelf:"center"}}>{item.rating}</Text>

    </View>
)

}


const DATA = ({navigation}) => {
  const [allMoviesFetched, setAllMoviesFetched] = useState([]);
  const [loading, setloading]=useState(false)

  useEffect(()=>{
    FetchMovies()
  },[])

  const FetchMovies = async () => {

// get data from rapid api
// create a function that get data from the back end 
// 

    setloading(true)
    const options = {
      method: "GET",
      url: "https://movies-app1.p.rapidapi.com/api/years",
      params: { limit: "20" },
      headers: {
        "X-RapidAPI-Key": "a337f14104mshd12d7cc8d6440bbp18727fjsn3588b01a22a1",
        "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
      },
    };

    try {
      const res = await axios(
        "https:///movies-app1.p.rapidapi.com/api/movies",
        options
      );
     

      setAllMoviesFetched(res.data.results);

      console.log(JSON.stringify(res.data.results), "huyguuhhu");
    } catch (error) {
      console.log(error);
    }finally{
        setloading(false)
    }
  };

  if(loading){
    return(
        <View style={{ flex:1,alignItems:"center", justifyContent:"center"}}>

        <ActivityIndicator size={"large"} color={"blue"}/>
        </View>

    )
  }

  return (
    <View style={{ flex: 1, backgroundColor:"black"}}>
      <FlatList
      
        data={allMoviesFetched}
        renderItem={MyMovies}
      />

    </View>
  );
};

export default DATA;

const Styles = StyleSheet.create({
image3:{height:300,
        width:width*0.8, 
       marginLeft:2,
       marginRight:2,
        borderRadius:20,
       
        alignSelf:"center"


},

Moviesview:{
marginTop:20,
    marginBottom:20,
},

elevation:{

    shadowColor: "#000",
shadowOffset: {
width: 0,
height: 8,
},
shadowOpacity: 0.46,
shadowRadius: 11.14,

elevation: 17,
}



});

