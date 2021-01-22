export const NavActionType = {
    Navigate: 'navigate',
    Reset: 'reset'
};

export function navigate(index) {
    return {
        type: NavActionType.Navigate,
        index
    };
}

export function reset() {
    return {
        type: NavActionType.Reset
    };
}
