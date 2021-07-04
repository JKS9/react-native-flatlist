// In App.js in a new project

import React, { useState, useEffect } from 'react'
import {
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'
import axios from 'axios';


function OneRecettes({route, navigation}){

  const [loading, setLoading] = useState(false);
  const [Data, setData] = useState(true);
  // https://api.spoonacular.com/recipes/{id}/information?apiKey=657d2ff35aad49c496016160133b2115

  useEffect(() => {
    setLoading(true)

    const item = route.params.item
    const url = "https://api.spoonacular.com/recipes/"+item.id+"/information?apiKey=657d2ff35aad49c496016160133b2115"
    
    axios.get(url)
    .then(function (response) {

      console.log(response)
      setData(response.data.results)
      setLoading(false)

    })/*.catch(function (error) {

      setData(item)
      setTimeout(() => {
        setLoading(false)
      }, 1000);

    })*/
  }, []);


  return (
    <ScrollView>
      <View>
      <TouchableOpacity
        style={{padding: 10}}
        onPress={() => {
          navigation.goBack()
        }}
      >
        <Image
          style={{width:20, height: 20}}
          source={require("../assets/images/left-arrow.png")}
        />
      </TouchableOpacity>
      </View>
      <View>
        <Image
          style={{width:"100%", height:300, resizeMode: 'cover'}}
          source={{
            uri: Data.image,
          }}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Text>{Data.title}</Text>
      </View>
      
    </ScrollView>
  );
}

export default OneRecettes;