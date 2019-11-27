const user = JSON.parse(localStorage.getItem('user'));
console.log('USER',user)

// If user exist or not in local storage
const initalState = user ? user : null;
const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('user', JSON.stringify(action.user));
            return action.user

        case 'LOG_OUT':
            localStorage.removeItem('user');
            return null

        default:
            return state
    };
};

export default userReducer;