import {
    GET_HOME_DETAIL_FINISH,
    GET_HOME_DETAIL_CARD_FINISH,
    API_START,
    API_FINISH,
} from "../../../Config/ActionTypes";

const initialState = { video: [], loading: false };

const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HOME_DETAIL_FINISH:
            return {
                ...state,
                homeData: action.payload
            }

        case GET_HOME_DETAIL_CARD_FINISH:
            return {
                ...state,
                homeDataCard: action.payload
            }

        case API_START:
            return { ...state, loading: true };
            
        case API_FINISH:
            return { ...state, loading: false };

        default:
            return state;
    }
};

export default apiReducer;
