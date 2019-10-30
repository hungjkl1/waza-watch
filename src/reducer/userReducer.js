const json = localStorage.getItem('user');
const user = JSON.parse(json);

// If user exist or not in local storage
const userDefault = user ? user : { username: '' };

const userReducer = (state = userDefault, action) => {
    switch (action.type) {
        case 'LOGIN':
            const user = { ...state, username: action.username }
            return user
        default:
            return state
    };
};

export default userReducer;