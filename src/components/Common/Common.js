// return the user data from the session storage
export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
}

// return the token from the session storage
export const getToken = () => {
    return sessionStorage.getItem('token') || null;
}

// remove the token and user from the session storage
export const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
}

// set the token and user from the session storage
export const setUserSession = (token, user) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
}

// return stored methods
export const getMethod = () => {
    const mStr = localStorage.getItem('method');
    if (mStr) return JSON.parse(mStr);
    else return null;
}

// return stored frequency
export const getFreq = () => {
    const fStr = localStorage.getItem('freq');
    if (fStr) return JSON.parse(fStr);
    else return null;
}
  