import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DetailsScreen from "./src/screens/Details";
import HomeScreen from "./src/screens/Home";
import DetailsComicScreen from "./src/screens/DetailsComics";
import NovelsCategoryScreen  from "./src/screens/NovelsCategory";
import SearchBooksScreen from "./src/screens/SearchBook";


const navigator = createStackNavigator (
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    ComicDetails: DetailsComicScreen,
    NovelsCategory: NovelsCategoryScreen,
    SearchBooks: SearchBooksScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "eBook-Reader App",
      // headerRight
    },
  }
);

export default createAppContainer(navigator);
