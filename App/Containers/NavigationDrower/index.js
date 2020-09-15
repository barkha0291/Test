import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { NavigationActions} from "react-navigation";
import { connect } from "react-redux";

class SideMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            screenWidth: Dimensions.get('window').width,
            production: false,
            logoutModel:false
        }
    }

    navigate = (screenName, buttonText, nextPage) => {
        this.setState({production: false})
        const navigateToScreen = NavigationActions.navigate({
            routeName: screenName,
            params: {
                pageTitle: buttonText,
                nextPage
            },

        });
        this.props.navigation.dispatch(navigateToScreen);
    };

    render() {
        return (
            <View style={{flex:1}}>
            </View>
            
        );
       
    }

}

const mapStateToProps = state => ({
    homeData:state.apiReducer.homeData
});
export default connect(mapStateToProps)(SideMenu);