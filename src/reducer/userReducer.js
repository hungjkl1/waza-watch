const json = localStorage.getItem('user');
const user = JSON.parse(json);

// If user exist or not in local storage
const userDefault = user ? user : { username: '' };

const userReducer = (state = userDefault, action) => {
    switch (action.type) {
        case 'LOGIN':
            const { username } = action.user;

            const json = JSON.stringify(action.user);
            localStorage.setItem('user', json);

            const user = { ...state, username }
            return user

        case 'LOG_OUT':
            localStorage.removeItem('user');

            const curentUser = { ...state, username: '' }
            return curentUser

        default:
            return state
    };
};

export default userReducer;