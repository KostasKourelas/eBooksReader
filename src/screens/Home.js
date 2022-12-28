import React from 'react';
import { View, Image, SafeAreaView, Text, StyleSheet, ImageBackground } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import colors from '../../assets/colors/colors';
import BooksData from '../../assets/data/BooksData';
import ComicsData from '../../assets/data/ComicsData';
import AllBooksData from '../../assets/data/AllBooksData';
import SearchBooksScreen from './SearchBook';

const HomeScreen = ({ navigation }) => {
  
    {/* All Books Render */}
    const renderAllBookItem = ({item}) => {
      return (
          <View style={styles.BookWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate('Details', {item: item}) } >
                  <View>
                      <Image source={item.image} style={styles.AllBookImage}/>
                      <Text style={styles.BookTitle}>{item.title}</Text>
                      <Text style={styles.BookAuthor}>{item.author}</Text>
                  </View>
              </TouchableOpacity>
          </View>
      )
    }  
  
    {/* Favourite Books Render */}
    const renderBookItem = ({item}) => {
        return (
            <View style={styles.BookWrapper}>
                <TouchableOpacity onPress={() => navigation.navigate('Details', {item: item}) } >
                    <View>
                        <Image source={item.image} style={styles.BookImage}/>
                        <Text style={styles.BookTitle}>{item.title}</Text>
                        <Text style={styles.BookAuthor}>{item.author}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    {/* Comic Render */}
    const renderComicItem = ({item}) => {
      return (
          <View style={styles.BookWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate('Details', {item: item}) } >
                  <View>
                      <Image source={item.image} style={styles.BookImage}/>
                      <Text style={styles.BookTitle}>{item.title}</Text>
                      <Text style={styles.BookAuthor}>{item.author}</Text>
                  </View>
              </TouchableOpacity>
          </View>
      )
  }

  return (
    <View>
      <ScrollView style={styles.scrollHome}>
        {/* Header */}
        <SafeAreaView >
          <TouchableOpacity onPress={() => navigation.navigate('SearchBooks') }>
            <View style={styles.searchWrapper}>
              <Image source={require('/Users/User/eBooksReader/assets/icons/search.png')} style={styles.headerIcon}/>
              <Text style={styles.textInputStyle}>Search</Text>
            </View>
          </TouchableOpacity>
          {/* Categories */}
        <Text style={styles.CategoryTitle}>Categories</Text>
        <View style={styles.CategoryContainer}>
          <View style={styles.CategoryWrapper}>
            <View style={styles.CategoryTextWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate('NovelsCategory')}>
                <Text style={styles.CategoryText}>Novels</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.CategoryTextWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate('HistoryCategory')}>
                <Text style={styles.CategoryText}>Science</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.CategoryTextWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate('HistoryCategory')}>
                <Text style={styles.CategoryText}>Romance</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.CategoryContainer}>
          <View style={styles.CategoryWrapper}>
            <View style={styles.CategoryTextWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate('HistoryCategory')}>
                <Text style={styles.CategoryText}>Fantasy</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.CategoryTextWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate('HistoryCategory')}>
                <Text style={styles.CategoryText}>Comics</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.CategoryTextWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate('HistoryCategory')}>
                <Text style={styles.CategoryText}>Biographies</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
          <View style={styles.headerWrapper}>
            <Text style={styles.headerText}>Favourite Books Library</Text>
          </View>
        </SafeAreaView>
        {/* FlatList */}
        <View style={styles.FlatlistWrapper}>
            <FlatList 
                data={BooksData}
                renderItem={renderBookItem}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
        {/* ComicBooks */}
        <Text style={styles.headerTextComic}>Comics Library</Text>
        <View style={styles.FlatlistWrapper}>
            <FlatList 
                data={ComicsData}
                renderItem={renderComicItem}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
        {/* AllBooks */}
        <View>
          <Text style={styles.headerTextFavourite}>All Books</Text>
          <FlatGrid
            keyExtractor={AllBooksData.name}
            itemDimension={130}
            data={AllBooksData}
            style={styles.gridView}
            // staticDimension={300}
            // fixed
            // horizontal
            spacing={14}
            renderItem={renderAllBookItem }
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    marginHorizontal:20,
    marginTop: 20,
    flexDirection: 'row',
  },
  CategoryTitle: {
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 5,
    fontSize: 30,
    fontWeight: "bold",
    color: colors.textDark
  },
  CategoryContainer: {
    marginHorizontal: 10,
  },
  CategoryWrapper: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
  },
  CategoryTextWrapper: {
    backgroundColor: colors.white,
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 9,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    elevation: 6,
  },
  CategoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textDark
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  FlatlistWrapper: {
    marginVertical: 20,
    marginLeft: 20
  },
  BookWrapper: {
    marginHorizontal: 6,
  },
  BookImage: {
    borderRadius: 7
  },
  BookTitle: {
    // alignSelf: 'center',
    marginTop: 5,
    color: colors.textDark,
    fontSize: 13,
    fontWeight: 'bold'
  },
  BookAuthor: {
    // alignSelf: 'center',
    color: colors.textLight,
    fontSize: 10,
  },
  scrollHome: {
    backgroundColor: colors.white,
  },
  headerTextComic: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 20
  },
  headerTextFavourite: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 30
  },
  AllBookImage: {
    borderRadius: 7,
    height: 250,
    width: 163,
    resizeMode: 'cover'
  },
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  searchWrapper: {
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: '#F8F8F8',
    paddingVertical: 15,
    borderRadius: 20,
    flexDirection: 'row',
    alignContent: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    elevation: 6,
  },
  headerIcon: {
    height:25,
    width:25,
    marginLeft: 20
  },
  textInputStyle: {
    marginLeft: 15,
    color: colors.textLight,
    fontSize: 19,
    flex: 1,
  },
});

export default HomeScreen;
