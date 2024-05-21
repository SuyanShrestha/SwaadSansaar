<<<<<<< HEAD
import { View, Text, Image, ScrollView, TextInput } from "react-native";
=======
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
>>>>>>> 9847b1e (Added firebase authentication  basic functionality)
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../components/categories";
import axios from "axios";
import Recipes from "../components/recipes";
<<<<<<< HEAD

const HomeScreen = () => {

=======
import AccountInfoDialog from '../components/AccountInfoDialog';
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { style } from "twrnc";



const HomeScreen = () => {

  // account username ko lagi
  const fullName = FIREBASE_AUTH.currentUser?.displayName;
  const firstName = fullName?.split(' ')[0];


>>>>>>> 9847b1e (Added firebase authentication  basic functionality)

  // categories component ko lagi
  const [activeCategory, setActiveCategory] = useState("Beef");
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);

  // search bar ko lagi
  const [searchText, setSearchText] = useState("");

  // useEffect for calling API calls garni functions
  useEffect(() => {
    getCategories();
    getRecipes();
  }, []);

  // categories buttons thichda change garna lai
  const handleChangeCategory = (category) => {
    getRecipes(category);
    setActiveCategory(category);
    setMeals([]);
  };

  // API call for categories from themealdb.com
  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      // console.log('Got Categories: ', response.data);

      if (response && response.data) {
        setCategories(response.data.categories);
      }
    } catch (err) {
      console.log("Error: ", err.message);
    }
  };

  // to get recipes
  const getRecipes = async (category = "Beef") => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      // console.log('Got Recipes: ', response.data);

      if (response && response.data) {
        setMeals(response.data.meals);
      }
    } catch (err) {
      console.log("Error: ", err.message);
    }
  };

<<<<<<< HEAD
=======
  // account info dialog box dekhauni ki nai vanna lai
  const [showAccountInfo, setShowAccountInfo] = useState(false);

>>>>>>> 9847b1e (Added firebase authentication  basic functionality)
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-14"
      >
<<<<<<< HEAD
        {/* Avatar and bell icon ko lagi */}
        <View className="flex-row justify-between items-center mx-4 mb-2">
          <Image
            source={require("../../assets/images/avatar.png")}
            style={{ height: hp(5), width: hp(5.5) }}
          />
=======
          {/* Avatar and bell icon ko lagi */}
        <View className="flex-row justify-between items-center mx-4 mb-2">
          <TouchableOpacity onPress={() => setShowAccountInfo(true)}>
            <Image
              source={require("../../assets/images/avatar2.png")}
              style={[{ height: hp(5), width: hp(5.5) }, styles.avatar]}
            />
          </TouchableOpacity>
>>>>>>> 9847b1e (Added firebase authentication  basic functionality)
          <BellIcon size={hp(4)} color={"gray"} />
        </View>

        {/* Hi, Suyan wala part, and Subtitle */}
        <View className="mx-4 space-y-2 mb-2">
          <Text style={{ fontSize: hp(1.7) }} className="text-neutral-600">
            Hi, Suyan!
          </Text>
          <View>
            <Text
              style={{ fontSize: hp(3.8) }}
              className="font-semibold text-neutral-600"
            >
              चुलो जलाउ, भोजन बनाउ!
            </Text>
          </View>
          <Text
            style={{ fontSize: hp(3.8) }}
            className="font-semibold text-neutral-600"
          >
            Be your own <Text className="text-amber-400">chef.</Text>
          </Text>
        </View>

        {/* Search bar */}
        <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
          <TextInput
            placeholder="Search a recipe."
            placeholderTextColor={"gray"}
            style={{
              fontSize: hp(1.7),
              // borderBottomWidth: 1,
              // borderBottomColor: "gray",
              outline: "none",
            }}
            className="flex-1 text-base mb-1 pl-3 tracking-wider"
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
          />
          <TouchableOpacity onPress={() => setSearchText(searchText)}>
            <View className="bg-white rounded-full p-3">
              <MagnifyingGlassIcon
                size={hp(2.5)}
                strokeWidth={3}
                color="gray"
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View>
          {/* api fetch huni bela samma ta animation vaisakxa, so animation dekhinna vanerw api fetch vayexi matra animation garr vanna lai */}
          {categories.length > 0 && (
            <Categories
              categories={categories}
              activeCategory={activeCategory}
              handleChangeCategory={handleChangeCategory}
            />
          )}
        </View>

        {/* Recipes */}
        <View>
          <Recipes
            meals={meals}
            categories={categories}
            searchText={searchText}
          />
        </View>
      </ScrollView>
<<<<<<< HEAD
=======

      {showAccountInfo && <AccountInfoDialog setShowAccountInfo={setShowAccountInfo} />}
>>>>>>> 9847b1e (Added firebase authentication  basic functionality)
    </View>
  );
};

<<<<<<< HEAD
=======
const styles = StyleSheet.create({
  avatar: {
    mixBlendMode: "color-burn",
  }
});

>>>>>>> 9847b1e (Added firebase authentication  basic functionality)
export default HomeScreen;
