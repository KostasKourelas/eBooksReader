import React from 'react';
import { View, Text, StyleSheet , Image, TextInput} from 'react-native';
import colors from '../../../assets/colors/colors';

const SearchBar = () => {
    return (
        <View style={styles.searchWrapper}>
            <Image source={require('/Users/User/eBooksReader/assets/icons/search.png')} style={styles.headerIcon}/>
            <TextInput 
                autoCapitalize='none'
                autoCorrect= {false}
                placeholder="Search"
                style={styles.searchInput}
            />
        </View>
    )
}

const styles = StyleSheet.create ({
    searchWrapper: {
        marginTop: 15,
        marginHorizontal: 20,
        backgroundColor: '#F8F8F8',
        paddingVertical: 15,
        borderRadius: 20,
        flexDirection: 'row',
        alignContent: 'center',
      },
      headerIcon: {
        height:25,
        width:25,
        marginLeft: 20
      },
      searchInput: {
        marginLeft: 15,
        color: colors.textLight,
        fontSize: 19,
        flex: 1,
      }
})

export default SearchBar;