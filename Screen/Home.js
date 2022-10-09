import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import MoviesApi from "../Component/MoviesApi";
import Icon from "@expo/vector-icons/Ionicons";
import NewRelease from "../Component/NewreleaseData";

const { width, height } = Dimensions.get("window");


const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#16161d" }}>
      <StatusBar barStyle={"light-content"} backgroundColor={"black"} />
      <View style={Styles.trendingandicon}>
        <View>
          <Text style={Styles.trendingMovies}>Trending Movies</Text>
        </View>

        <View style={Styles.icon}>
          <Icon
            name="search-outline"
            size={25}
            color={"white"}
            style={Styles.search}
          />

          <Icon name="notifications-circle" size={25} color={"white"} />
        </View>
      </View>
      <View style={[Styles.Moviesview, Styles.elevation]}>
        <MoviesApi/>
      </View>
      <Text style={Styles.genre}>Genere</Text>

      <View>
        <ScrollView horizontal>
          <View style={Styles.genreName}>
            <View>
              <TouchableOpacity
                style={[Styles.genreNamestouch, Styles.elevation]}
              >
                <Text style={Styles.genreNames}>Action</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={Styles.genreNamestouch}>
              <Text style={Styles.genreNames}>Drama</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.genreNamestouch}>
              <Text style={Styles.genreNames}>Romance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.genreNamestouch}>
              <Text style={Styles.genreNames}>Adventure</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            
            
            style={Styles.genreNamestouch}>
              <Text style={Styles.genreNames}>Crime</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>


      <View style={Styles.newReleaseViewall}>
        <Text style={Styles.newRelease}>New Release</Text>
        <Text onPress={()=>navigation.navigate("DATA")} style={Styles.Viewall}>View all </Text>
      </View>


      <View style={{height:260,}}>
        <NewRelease/>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const Styles = StyleSheet.create({
  Moviesview: {
    height: 270,
    width: width * 0.98,
    alignSelf: "center",
    borderRadius: 20,
  },

  trendingandicon: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    padding: 6,
  },

  trendingMovies: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    left: 10,
  },

  icon: { flexDirection: "row", right: 6 },

  search: { right: 6 },

  genre: { color: "white", padding: 10, fontSize: 18, fontWeight: "bold" },

  genreName: { flexDirection: "row", justifyContent: "space-between" },
  genreNames: { color: "white", fontSize: 18, paddingHorizontal: 20 },

  genreNamestouch: {
    backgroundColor: "red",
    borderRadius: 50,
    marginHorizontal: 5,
  },
  elevation: {
    shadowColor: "#3b3c36",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.7,
    shadowRadius: 11.14,

    elevation: 17,
  },
  newReleaseViewall: { flexDirection: "row",justifyContent:"space-between",padding:15 },
  newRelease: { color: "white" },
  Viewall:{color:"red"}
});
