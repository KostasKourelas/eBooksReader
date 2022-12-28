import React from 'react';
import { View, Image, SafeAreaView, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import colors from '../../assets/colors/colors';
import BooksData from '../../assets/data/BooksData';
import * as OpenAnything from 'react-native-openanything'


const DetailsScreen = ( { navigation } ) => {

    
    const item = navigation.getParam('item');
     
    return (
        <View style={styles.containerDetails}>
            <ScrollView style={styles.scrollView}>
                <ImageBackground style={styles.HeaderDetails} source={item.image} blurRadius={4} resizeMode='cover' imageStyle={{ borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,}}>
                    <Text style={styles.TitleBook}>{item.title}</Text>  
                    <Text style={styles.authorText}>{item.author}</Text>
                </ImageBackground>
                <Image source={item.image} style={styles.ImageBook}/>
                <View style={styles.DetailsSubContainer}>
                    <View style={styles.DetailsSubWrapper}>
                        <Text>{item.year}</Text>
                        <Text style={styles.DetailsText}>Year</Text>
                    </View>
                    <View style={styles.DetailsSubWrapper}>
                        <Text>{item.language}</Text>
                        <Text style={styles.DetailsText}>Language</Text>
                    </View>
                    <View style={styles.DetailsSubWrapper}>
                        <Text>{item.pages}</Text>
                        <Text style={styles.DetailsText}>Pages</Text>
                    </View>
                </View>
                <Text style={styles.Syno}>Synopsis</Text>
                <Text style={styles.synopsisText}>{item.synopsis}</Text>
                <TouchableOpacity style={styles.buttonBG} onPress={()=> OpenAnything.Pdf(item.pdf)}>
                    <View style={styles.buttonWrapper}>
                        <Image source={require('../../assets/icons/pdf-file.png')} style={styles.pdfIcon}/>
                        <Text style={styles.readText}>Read The Book</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    
    )
}

const styles = StyleSheet.create({
    TitleBook: {
        alignSelf:'center',
        marginTop: 20,
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.white,
    },
    authorText: {
        alignSelf:'center',
        marginBottom: 20,
        fontSize: 15,
        color: colors.white,
    },  
    ImageBook: {
        borderRadius: 13,
        alignSelf:'center',
        marginTop: -210,
        height: 250,
        width: 163,
        resizeMode: 'cover'
    },
    HeaderDetails: {
        paddingBottom: 260,
    },
    synopsisText: {
        color: colors.textLight,
        paddingLeft:20,
        paddingRight: 10,
        marginTop: 15,
        fontSize: 18,
    },
    Syno: {
        marginTop: 25,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.textDark,
    },
    scrollView: {
        backgroundColor: colors.white
    },
    pdfIcon: {
        height: 25,
        width: 25
    },
    buttonWrapper: {
        marginHorizontal:20,
        marginVertical: 17,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    buttonBG: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        marginVertical: 30,
        marginHorizontal: 60,
        borderRadius: 10,
        borderWidth: 1,
    },
    readText: {
        fontSize: 18,
        marginLeft: 7,
        fontWeight: 'bold'
    },
    DetailsSubContainer: {
        marginHorizontal: 20,
        marginTop: 20,
        padding: 20,
        borderRadius: 9,
        backgroundColor: colors.primary, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    DetailsSubWrapper: {
        margin: 10,
        borderWidth: 1,
        flex: 1,
        borderRadius: 9,
        alignItems: 'center',
        padding: 8,
        backgroundColor: colors.white,
    },
    DetailsText: {
        fontSize: 10,
        color: colors.textLight
    }
  });


export default DetailsScreen;