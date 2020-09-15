import React from 'react';
import {
    Dimensions,
    FlatList,
    View,
    StyleSheet,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import navigationOpt from "../../Config/NavigatorOption";
import { connect } from "react-redux";
import { GET_HOME_DETAIL } from "../../Config/ActionTypes";
import { HOME_URL } from '../../Config/Constants';
import store from '../../redux/store';
import _ from 'underscore'
import ImageSlider from '../../Components/ImageSlider';
import Utills from '../../Utills/Utills';

class HomeScreenView extends React.Component {

    static navigationOptions = ({ navigation }) => {
        let option = {
            headerTitle: "",
        }
        return navigationOpt(navigation, option)
    }


    constructor(props) {
        super(props)
        this.state = {
            screenWidth: Dimensions.get('window').width,
            data: []
        }

    }

    componentDidMount() {
        this.loadData()
    }

    loadData() {
        store.dispatch({ type: GET_HOME_DETAIL, url: HOME_URL })
    }

    static getDerivedStateFromProps(props, state) {
        if (state.data !== props.homeData && props.homeData !== undefined) {
            return {
                data: props.homeData,
            }
        }
        return null
    }

    render() {

        const { homeData, loading } = this.props;
        let data = homeData || [];
        let imageList = _.shuffle(Utills.filterImageList(data))
        
        return (
            <View style={styles.container}>
                <Spinner
                    visible={loading}
                    textContent={'Loading...'}
                    textStyle={styles.spinnerTextStyle}
                />

              <FlatList
                    style={{ backgroundColor: '#f4f4f9'}}
                    data={imageList}
                    refreshing={false}
                    horizontal
                    onRefresh={() => store.dispatch({ type: GET_HOME_DETAIL, url: HOME_URL })}
                    renderItem={({ item, index }) => {
                        return (
                            <ImageSlider
                                data={item}
                                key={index}
                                keyIndex={index}
                            />
                        )
                    }}
                />
            </View>);
    }
}

const mapStateToProps = state => ({
    homeData: state.apiReducer.homeData,
    loading: state.apiReducer.loading
});

const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenView);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#f4f4f9'

    },
    spinnerTextStyle: {
        color: '#fff',
        fontSize: 12
    },
    image:{
        height: 250, 
        paddingTop: 5,
        paddingBottom: 10,
        paddingLeft:10,
        paddingRight:10,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'red',
        shadowOffset: { height: 5, width: 5 },
    }
});