import React, { useState, useEffect } from 'react';
import { View, Image, SafeAreaView, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import colors from '../../assets/colors/colors';


const SearchBooksScreen = ( { navigation } ) => {
 
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/KostasKourelas/BooksData/main/db.json')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

 

  const ItemView = ({item}) => {
        return  (
            <View style={styles.BookWrapper}>
                <TouchableOpacity onPress={() => navigation.navigate('Details', {item: item}) } >
                    <View style={styles.ItemWrapper}>
                        <Image source={{uri:item.imageLink}} style={styles.AllBookImage}/>
                        <Text style={styles.BookTitle}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            )
        }  

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.searchWrapper}>
          <Image source={require('/Users/User/eBooksReader/assets/icons/search.png')} style={styles.headerIcon}/>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
          />
        </View>
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    marginLeft: 15,
    color: colors.textLight,
    fontSize: 19,
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
  AllBookImage: {
    borderRadius: 7,
    height: 90,
    width: 70,
    resizeMode: 'cover',
    marginBottom: 10
  },
  headerTextCategory: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20,
  },
  BgScreen:{
    backgroundColor: 'white'
  },
  ItemWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 30,
    marginHorizontal: 20,
  },
  BookTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: colors.textDark
  },
});
  

export default SearchBooksScreen;
















// const styles = StyleSheet.create({
//   AllBookImage: {
//       borderRadius: 7,
//       height: 90,
//       width: 70,
//       resizeMode: 'cover',
//       marginBottom: 10
//     },
//     headerTextCategory: {
//       fontSize: 30,
//       fontWeight: "bold",
//       marginLeft: 20,
//       marginTop: 20,
//     },
//     BgScreen:{
//       backgroundColor: 'white'
//     },
//     ItemWrapper: {
//       justifyContent: 'space-between',
//       flexDirection: 'row',
//       marginTop: 30,
//       marginHorizontal: 20,
//       borderBottomColor: '#707070',
//       borderBottomWidth: 1
//     },
//     BookTitle: {
//       fontSize: 17,
//       fontWeight: "bold",
//       color: colors.textDark
//     },
    
