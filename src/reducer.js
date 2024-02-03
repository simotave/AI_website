import dati from './data';
export const initialState ={
    display: 'list',
    items: dati,
    filter: "",
    activeItem: null,
    startDate: null,
    endDate: null
};
export const SHOW_LIST = 'SHOW_LIST';
export const SHOW_MAP = 'SHOW_MAP';
export const SHOW_DETAILS = 'SHOW_DETAILS';
export const SET_FILTER = 'SET_FILTER';
export const SET_DATE_RANGE = 'SET_DATE_RANGE';

export const showList = () => ({type: SHOW_LIST});
export const showMap = () => ({type : SHOW_MAP});
export const showDetails = id => ({type: SHOW_DETAILS, id});
export const setFilter = filter => ({type: SET_FILTER, filter});
export const setDateRange= (startDate, endDate) => ({type: SET_DATE_RANGE,startDate, endDate});

export const reducer = (state, action) =>{
    switch (action.type) {
        case SHOW_LIST:
            return {...state, display: 'list', activeItem: null };
        case SHOW_MAP:
            return {...state, display: 'map', activeItem: null};
        case SHOW_DETAILS:
            let item = state.items.filter(item => item.id === action.id);
            return {...state, display: 'details', activeItem: (item.length===1)? item[0]: null};
        case SET_FILTER:
            return {...state, filter: action.filter};
        case SET_DATE_RANGE:
            return {...state, startDate: action.startDate, endDate: action.endDate};

        default: return initialState;
    }
};