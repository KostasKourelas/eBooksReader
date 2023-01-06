import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DetailsScreen from "./src/screens/Details";
import HomeScreen from "./src/screens/Home";
import DetailsComicScreen from "./src/screens/DetailsComics";
import NovelsCategoryScreen  from "./src/screens/NovelsCategory";
import SearchBooksScreen from "./src/screens/SearchBook";


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}



// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
// import DetailsScreen from "./src/screens/Details";
// import HomeScreen from "./src/screens/Home";
// import DetailsComicScreen from "./src/screens/DetailsComics";
// import NovelsCategoryScreen  from "./src/screens/NovelsCategory";
// import SearchBooksScreen from "./src/screens/SearchBook";


// const navigator = createStackNavigator (
//   {
//     Home: HomeScreen,
//     Details: DetailsScreen,
//     ComicDetails: DetailsComicScreen,
//     NovelsCategory: NovelsCategoryScreen,
//     SearchBooks: SearchBooksScreen
//   },
//   {
//     initialRouteName: "Home",
//     defaultNavigationOptions: {
//       title: "eBook-Reader App",
//       // headerRight
//     },
//   }
// );

// export default createAppContainer(navigator)
