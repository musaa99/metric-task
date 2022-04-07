import { combineReducers } from 'redux';

import getDataReducer from './loadData/reducers';

const rootReducer = combineReducers({
    data: getDataReducer
});

export default rootReducer;
