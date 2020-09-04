import img from './img.jpeg';

const initialState = {
    searchText: '',
    componentsData: [
        {
            id: 1,
            name: 'Button',
            description: 'The button.',
            code: '',
            img: img
        },
        {
            id: 2,
            name: 'NavBar',
            description: 'The navbar.',
            code: '',
            img: img
        },
        {
            id: 3,
            name: 'Button 3',
            description: 'The button.',
            code: '',
            img: img
        },
        {
            id: 4,
            name: 'Button 4',
            description: 'The button.',
            code: '',
            img: img
        }
    ],
};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case 'ADD_COMPONENT_TO_LIST':
            return state;
        case 'EDIT_COMPONENT_IN_LIST':
            return state;
        case 'CHANGE_SEARCH_TEXT':
            return {...state, searchText: action.value};
        default:
            return state;
    }
}