import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../FirebaseConfig";

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <InsideStack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <InsideStack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
    </InsideStack.Navigator>
  );
}

// const AppNavigation = () => {
//     return(
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
//                 <Stack.Screen name="Home" component={HomeScreen} />
//                 <Stack.Screen name="Welcome" component={WelcomeScreen} />
//                 <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />

//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

const AppNavigation = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log(user);
      setUser(user);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={user ? "Inside" : "Login"}
        screenOptions={{ headerShown: false }}
      >
        {user ? (
          <Stack.Screen name="Inside" component={InsideLayout} />
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
