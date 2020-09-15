import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import Header from './Header'

export default NavigatorOpt = (navigation, option = {}) => {
    if (!!option['isPageNoFoundClear']) {
        return {
            headerTitle: <Header title={option.headerTitle ? option.headerTitle : ''} />,
            headerStyle: option.isBackButton ? styles.headerStyleBack : styles.headerStyle,
            headerTintColor: '#fff',
            headerTitleStyle: styles.headerTitleStyle,
        }
    } else {
        return {
            headerTitle: <Header title={option.headerTitle ? option.headerTitle : ''} />,
            headerLeft:
                option.isBackButton ? undefined : navigation.state.params !== undefined && navigation.state.params.back !== undefined && navigation.state.params.back ?
                    <TouchableOpacity onPress={() => {
                        navigation.openDrawer();
                    }}>
                        <Image style={{ height: 25, width: 25, marginLeft: 5 }}
                            source={require('../../Resources/Images/bullpen.png')} />
                    </TouchableOpacity>:null,
            headerStyle: option.isBackButton ? styles.headerStyleBack : styles.headerStyle,
            headerTintColor: '#fff',
            headerTitleStyle: styles.headerTitleStyle,
        }
    }

};

const styles = StyleSheet.create({
    arrowLayout: {
        color: '#fff',
        height: 40,
        width: 40,
        paddingTop: 10,
        paddingRight: 2,
        marginLeft: 10,
        fontSize: 20,
        alignSelf: 'flex-end'
    },
    headerStyle: {
        backgroundColor: '#0071e9',
        shadowColor: '#000',
        elevation: 0,
        borderBottomWidth: 0,
    },
    headerStyleBack: {
        backgroundColor: '#0071e9',
        borderBottomWidth: 0,
    },
    headerTitleStyle: {
        fontWeight: 'normal',
        width: 200,
    },
})