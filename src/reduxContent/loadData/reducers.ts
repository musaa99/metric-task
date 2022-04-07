import { GET_DATA } from './types';

const initState = {
    data: {}
};

const getDataReducer = (state = initState, action:any) => {
    switch (action.type) {
    case GET_DATA:
        return {
            ...state,
            data: action.payload
        };
    default:
        return state;
    }
};

export default getDataReducer;
