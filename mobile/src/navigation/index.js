<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React from "react";
>>>>>>> fff7fbc (Add files via upload)
=======
import React from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> 9847b1e (Added firebase authentication  basic functionality)
>>>>>>> 3603275 (Added firebase authentication  basic functionality)
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 3603275 (Added firebase authentication  basic functionality)
import RecipeDetailScreen from "../screens/RecipeDetailScreen"

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
<<<<<<< HEAD
>>>>>>> fff7fbc (Add files via upload)
=======
=======
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
>>>>>>> 9847b1e (Added firebase authentication  basic functionality)
>>>>>>> 3603275 (Added firebase authentication  basic functionality)
