import React from 'react';
import {
    View,
    Dimensions,
    Image,
    StyleSheet,
    Text
} from 'react-native';
import Utills from '../../Utills/Utills';
let screenWidth = Dimensions.get('window').width
function ImageSlider(props) {
    const { data, index } = props;
    return (
        <View
            key={`DetailsView${data}`}
            style={[
                styles.recipeDetailsView,
                {
                    marginTop: 0,

                }]}
        >
            <Image
                key={`Image${index}`}
                style={[styles.image]}
                source={Utills.getImageSource(data.image)}
            ></Image>
            <View style={styles.authorStyle}>
            <Text style={styles.userStyle}>{data.name}</Text>
            </View>
        </View>
    )
}

export default ImageSlider;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4f4f9',
        width: screenWidth,
        marginTop: 10,
    },
    image: {
        width: screenWidth - 50,
        height: screenWidth/ 1.45,
        paddingTop: 5,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowOffset: { height: 5, width: 5 },
    },
    recipeDetailsView: {
        flex: 1,
        flexDirection: 'column',
        height: 300,
        elevation: 30,
        backgroundColor: '#f4f4f9',
        shadowColor: '#bbbbbb',
        shadowRadius: 5,
        borderRadius: 5,
        borderColor: '#ddd',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.8,
        padding: 5,
        justifyContent: 'center',
        margin: 20,
    },
    userStyle: {
        color:"white",
        fontSize:20,
        fontWeight:'bold',
        color:'#000000'
    },
    authorStyle:{
        position:"absolute",
        height:50,
        left:5,
        width:screenWidth - 50,
        backgroundColor:"#FFFFFF50",
        alignItems: 'center',
        top: screenWidth/1.55,  
    }
});