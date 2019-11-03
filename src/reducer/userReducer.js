const json = localStorage.getItem('user');
const user = JSON.parse(json);

// If user exist or not in local storage
const userDefault = user ? user : { userName: '' };

const userReducer = (state = userDefault, action) => {
    switch (action.type) {
        case 'LOGIN':
            const { userName } = action.user;
            localStorage.setItem('user', JSON.stringify(action.user));
            return { ...state, userName }

        case 'LOG_OUT':
            localStorage.removeItem('user');
            return { ...state, userName: '' }

        default:
            return state
    };
};

export default userReducer;