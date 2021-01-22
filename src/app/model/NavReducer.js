import { NavActionType } from './NavActions';

export const initialState = {
    routes: [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Explore',
            path: '/explore'
        },
        {
            name: 'Preview',
            path: '/preview'
        }
    ],
    selectedIndex: 0
};

export default function reducer(state, action) {
    switch (action.type) {
        case NavActionType.Navigate:
            return {
                ...state,
                selectedIndex: action.index
            };
        case NavActionType.Reset:
        default:
            return initialState;
    }
}
