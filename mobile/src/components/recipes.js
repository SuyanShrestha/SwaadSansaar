import React, { useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MasonryList from "@react-native-seoul/masonry-list";
import { mealData } from "../constants";
import Animated, { FadeInDown } from "react-native-reanimated";
import Loading from "./loading";
import { useNavigation } from "@react-navigation/native";
// import CachedImage from "../helpers/image";

const Recipes = ({ meals, categories }) => {

  const navigation = useNavigation();

  return (
    <View className="mx-4 space-y-3">
      <Text
        style={{ fontSize: hp(3) }}
        className="font-semibold text-neutral-600"
      >
        Recipes
      </Text>

      {/* Masonry layout */}
      <View>
        {categories.length == 0 || meals.length==0 ? (
          <Loading size='large' className='mt-20' />
        ) : (
          <MasonryList
            data={meals}
            keyExtractor={(item) => item.idMeal}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, i }) => <RecipeCard item={item} index={i} navigation={navigation} />}
            onEndReachedThreshold={0.1}
          />
        )}
      </View>
    </View>
  );
};

// Component to render through renderItem in masonryList
const RecipeCard = ({ item, index, navigation }) => {
  // odd ra even items (side by side basya haru in masonry list) lai gap dina lai yo variable
  // to add paddingLeft for all right items, and paddingRight accordingly
  let isEven = index % 2 == 0;

  return (
    <Animated.View
      entering={FadeInDown.delay(index*100)
        .duration(600)
        .springify()
        .damping(12)}
    >
      <Pressable
        style={{
          width: "100%",
          paddingLeft: isEven ? 0 : 8,
          paddingRight: isEven ? 8 : 0,
        }}
        className="flex justify-center mb-4 space-y-1"
        onPress={() => navigation.navigate('RecipeDetail', {...item})}
      >
        <View>
          <Image
            source={{ uri: item.strMealThumb}}
            style={{
              width: "100%",
              height: index % 3 == 0 ? hp(25) : hp(35),
              borderRadius: 35,
            }}
            // sharedTransitionTag={item.strMeal}
            className="bg-black/5"
          />
        </View>

        {/* lets instead use asyncstorage wala cachedIMage instead of image */}
        {/* instead of source, lets use uri, since its the props we pass in cached image component */}
        {/* <CachedImage
          uri={item.strMealThumb}
          style={{
            width: "100%",
            height: index % 3 == 0 ? hp(25) : hp(35),
            borderRadius: 35,
          }}
          className="bg-black/5"
        /> */}

        <Text
          style={{ fontSize: hp(1.5) }}
          className="font-semibold ml-2 text-neutral-600"
        >
          {item.strMeal.length > 20 ? item.strMeal.slice(0, 20) + "..." : item.strMeal}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

export default Recipes;
