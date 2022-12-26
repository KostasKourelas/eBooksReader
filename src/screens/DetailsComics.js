import React from 'react';
import { View, Image, SafeAreaView, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import colors from '../../assets/colors/colors';
import ComicsData from '../../assets/data/ComicsData';


const DetailsComicScreen = ( { navigation } ) => {

    
    const item = navigation.getParam('item');
    
    return (
        <View style={styles.containerDetails}>
            <ScrollView style={styles.scrollView}>
                <ImageBackground style={styles.HeaderDetails} source={item.image} blurRadius={1} resizeMode='cover' imageStyle={{ borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,}}>
                    <Text style={styles.TitleBook}>{item.title}</Text>  
                    <Text style={styles.authorText}>{item.author}</Text>
                </ImageBackground>
                <Image source={item.image} style={styles.ImageBook}/>
                <Text style={styles.Syno}>Synopsis</Text>
                <Text style={styles.synopsisText}>{item.synopsis}</Text>
                <Text style={styles.Syno}>Cover Artist: {item.coverArtist}</Text>
                {/* <TouchableOpacity style={styles.buttonBG} onPress={()=> OpenAnything.Pdf(item.pdf)}>
                    <View style={styles.buttonWrapper}>
                        <Image source={require('../../assets/icons/pdf-file.png')} style={styles.pdfIcon}/>
                        <Text style={styles.readText}>Read The Book</Text>
                    </View>
                </TouchableOpacity> */}
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
        marginTop: -230,
    },
    HeaderDetails: {
        paddingBottom: 260,
    },
    synopsisText: {
        color: colors.textLight,
        paddingLeft:20,
        paddingRight: 10,
        marginTop: 15,
        fontSize: 18
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
        borderRadius: 10
    },
    readText: {
        fontSize: 18,
        marginLeft: 7,
        fontWeight: 'bold'
    }
  });


export default DetailsComicScreen;