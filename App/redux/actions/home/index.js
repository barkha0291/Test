import {
    GET_HOME_DETAIL,
    GET_HOME_DETAIL_FINISH,
    API_START,
    API_FINISH,
} from "../../../Config/ActionTypes";
import { 
    urlPersarApi,
} from '../../apis';

import { put, takeLatest } from 'redux-saga/effects';

function* getHomelist(action){
    console.log("here is action",action)
    try {
        yield put({type:API_START});
        const list = yield urlPersarApi(action.url);
        yield put({
            type:GET_HOME_DETAIL_FINISH,
            payload: list.data
           })
        yield put({type:API_FINISH});
        
    } catch (error) {
        console.warn(error);
        yield put({type:API_FINISH});
    }
}

function* homeWatcher(){
    yield takeLatest(GET_HOME_DETAIL,getHomelist)
}

export default homeWatcher;