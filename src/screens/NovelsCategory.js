import React from 'react';
import { View, Image, SafeAreaView, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import colors from '../../assets/colors/colors';
import BooksData from '../../assets/data/BooksData';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import AllBooksData from '../../assets/data/AllBooksData';

const NovelsCategoryScreen = ( { navigation } ) => {

    
    const renderAllBookItem = ({item}) => {
        if (item.category === 'Novels'){
            return  (
                <View style={styles.BookWrapper}>
                    <TouchableOpacity onPress={() => navigation.navigate('Details', {item: item}) } >
                        <View>
                            <Image source={item.image} style={styles.AllBookImage}/>
                            <Text style={styles.BookTitle}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }
      }  


    return (
        <View style={styles.BgScreen}>
          <Text style={styles.headerTextCategory}>Novels</Text>
            <FlatGrid
              keyExtractor={AllBooksData.name}
              itemDimension={130}
              data={AllBooksData}
              style={styles.gridView}
              // staticDimension={300}
              // fixed
              // horizontal
              spacing={13}
              renderItem={renderAllBookItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    AllBookImage: {
        borderRadius: 7,
        height: 250,
        width: 170,
        resizeMode: 'cover'
      },
      gridView: {
        marginTop: 30,
        marginLeft: 5, 
      },
      headerTextCategory: {
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: 20,
        marginTop: 20,
      },
      BgScreen:{
        backgroundColor: 'white'
      }
  });


export default NovelsCategoryScreen;