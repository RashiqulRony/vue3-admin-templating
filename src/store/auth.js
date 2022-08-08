const authInfo = localStorage.getItem("authInfo");

const auth = {
    state: {
        authInfo: authInfo ? JSON.parse(authInfo) : null,
        accessToken: '',
        isLoggedIn: authInfo !== null,
    },
    getters: {
        isLoggedIn: (state) => {
            return state.isLoggedIn;
        },
        authUser: (state) => {
            return state.authInfo;
        },
        accessToken: (state) => {
            return state.accessToken;
        },
    },
    mutations: {
        LOGIN_SUCCESS: (state, rqsData) => {
            localStorage.setItem("authInfo", JSON.stringify(rqsData));
            localStorage.setItem("accessToken", rqsData.access_token);
            state.isLoggedIn = true;
            state.authInfo = rqsData;
            state.accessToken = rqsData.access_token;
        },
        LOGOUT: (state) => {
            localStorage.removeItem("authInfo");
            localStorage.removeItem("accessToken");
            state.isLoggedIn = false;
            state.authInfo = null;
            state.accessToken = "";
        },
    },
    actions: {
        login(context, rqsData) {
            context.commit("LOGIN_SUCCESS", rqsData);
            return Promise.resolve(rqsData);
        },

        logout(context) {
            return context.commit("LOGOUT");
        },
    },
};

export default auth;
