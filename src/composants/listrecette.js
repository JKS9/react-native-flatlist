// In App.js in a new project

import React, {useEffect, useState} from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
  FlatList
} from 'react-native'
import axios from 'axios';

const data = [
  {
     "id":716426,
     "image":"https://spoonacular.com/recipeImages/716426-312x231.jpg",
     "imageType":"jpg",
     "title":"Cauliflower, Brown Rice, and Vegetable Fried Rice"
  },
  {
     "id":715594,
     "image":"https://spoonacular.com/recipeImages/715594-312x231.jpg",
     "imageType":"jpg",
     "title":"Homemade Garlic and Basil French Fries"
  },
  {
     "id":715497,
     "image":"https://spoonacular.com/recipeImages/715497-312x231.jpg",
     "imageType":"jpg",
     "title":"Berry Banana Breakfast Smoothie"
  },
  {
     "id":644387,
     "image":"https://spoonacular.com/recipeImages/644387-312x231.jpg",
     "imageType":"jpg",
     "title":"Garlicky Kale"
  },
  {
     "id":715392,
     "image":"https://spoonacular.com/recipeImages/715392-312x231.jpg",
     "imageType":"jpg",
     "title":"Chicken Tortilla Soup (Slow Cooker)"
  },
  {
     "id":716268,
     "image":"https://spoonacular.com/recipeImages/716268-312x231.jpg",
     "imageType":"jpg",
     "title":"African Chicken Peanut Stew"
  },
  {
     "id":716381,
     "image":"https://spoonacular.com/recipeImages/716381-312x231.jpg",
     "imageType":"jpg",
     "title":"Nigerian Snail Stew"
  },
  {
     "id":782601,
     "image":"https://spoonacular.com/recipeImages/782601-312x231.jpg",
     "imageType":"jpg",
     "title":"Red Kidney Bean Jambalaya"
  },
  {
     "id":794349,
     "image":"https://spoonacular.com/recipeImages/794349-312x231.jpg",
     "imageType":"jpg",
     "title":"Broccoli and Chickpea Rice Salad"
  },
  {
     "id":715446,
     "image":"https://spoonacular.com/recipeImages/715446-312x231.jpg",
     "imageType":"jpg",
     "title":"Slow Cooker Beef Stew"
  },
  {
     "id":715415,
     "image":"https://spoonacular.com/recipeImages/715415-312x231.jpg",
     "imageType":"jpg",
     "title":"Red Lentil Soup with Chicken and Turnips"
  },
  {
     "id":766453,
     "image":"https://spoonacular.com/recipeImages/766453-312x231.jpg",
     "imageType":"jpg",
     "title":"Hummus and Za'atar"
  },
  {
     "id":716627,
     "image":"https://spoonacular.com/recipeImages/716627-312x231.jpg",
     "imageType":"jpg",
     "title":"Easy Homemade Rice and Beans"
  },
  {
     "id":716408,
     "image":"https://spoonacular.com/recipeImages/716408-312x231.jpg",
     "imageType":"jpg",
     "title":"Greek-Style Baked Fish: Fresh, Simple, and Delicious"
  },
  {
     "id":795751,
     "image":"https://spoonacular.com/recipeImages/795751-312x231.jpg",
     "imageType":"jpg",
     "title":"Chicken Fajita Stuffed Bell Pepper"
  },
  {
     "id":640941,
     "image":"https://spoonacular.com/recipeImages/640941-312x231.jpg",
     "imageType":"jpg",
     "title":"Crunchy Brussels Sprouts Side Dish"
  },
  {
     "id":798400,
     "image":"https://spoonacular.com/recipeImages/798400-312x231.jpg",
     "imageType":"jpg",
     "title":"Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant"
  },
  {
     "id":756814,
     "image":"https://spoonacular.com/recipeImages/756814-312x231.jpg",
     "imageType":"jpg",
     "title":"Powerhouse Almond Matcha Superfood Smoothie"
  },
  {
     "id":729366,
     "image":"https://spoonacular.com/recipeImages/729366-312x231.jpg",
     "imageType":"jpg",
     "title":"Plantain Salad"
  },
  {
     "id":715769,
     "image":"https://spoonacular.com/recipeImages/715769-312x231.jpg",
     "imageType":"jpg",
     "title":"Broccolini Quinoa Pilaf"
  },
  {
     "id":782600,
     "image":"https://spoonacular.com/recipeImages/782600-312x231.jpg",
     "imageType":"jpg",
     "title":"Quinoa Salad with Vegetables and Cashews"
  },
  {
     "id":642605,
     "image":"https://spoonacular.com/recipeImages/642605-312x231.jpg",
     "imageType":"jpg",
     "title":"Farro With Mushrooms and Asparagus"
  },
  {
     "id":715540,
     "image":"https://spoonacular.com/recipeImages/715540-312x231.jpg",
     "imageType":"jpg",
     "title":"Summer Berry Salad"
  },
  {
     "id":636589,
     "image":"https://spoonacular.com/recipeImages/636589-312x231.jpg",
     "imageType":"jpg",
     "title":"Butternut Squash Frittata"
  },
  {
     "id":640062,
     "image":"https://spoonacular.com/recipeImages/640062-312x231.jpg",
     "imageType":"jpg",
     "title":"Corn Avocado Salsa"
  }
]

function listRecettes({navigation}) {

  const [loading, setLoading] = useState(false);
  const [Data, setData] = useState(true);

  useEffect(() => {
    setLoading(true)

    axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=657d2ff35aad49c496016160133b2115&number=25')
    .then(function (response) {
      setData(response.data.results)
      setLoading(false)

    }).catch(function (error) {
      setData(data)
      setTimeout(() => {
        setLoading(false)
      }, 1000);

    })

    
   
  }, []);

  const getOneRecettes = (item) => {
    console.log(item)
    navigation.push('OneRecettes', {item})
  }

  const renderItem = ({ item }) => (
    <View>
      <TouchableOpacity
        onPress={() => {
          //console.log(item.id)
          getOneRecettes(item)
        }}
      >
        <View style={{flexDirection: "row", padding:8}}>
          <View style={{width: "30%",alignItems: 'center', justifyContent: 'center'}}>
            <Image
              style={{width:"100%", height:100,borderRadius: 10, resizeMode: 'stretch'}}
              source={{
                uri: item.image,
              }}
            />
          </View>
          <View style={{width: "70%",justifyContent: 'center', marginRight: 5}}>
            <Text style={{left: 5, fontWeight: "bold"}}>{item.title}</Text>
          </View>
        </View>
        <View style={{width: "100%", height:1, backgroundColor: "#000"}}></View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{flex:1,alignItems: 'center', justifyContent: 'center' }}>
      {loading ? 
        <ActivityIndicator size="large" color="#0000ff" />
      :
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      }
    </View>
  );
}

export default listRecettes;