import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

const store = createStore({
    state:{
        user:null,
        saltKey: "1A29312kmasjs821?21b",
    },
    mutations:{
        userPush(state, user){
            state.user = user
        }
    },
    getters:{
        _isAuthenticated: state => state.user !== null,
        _saltKey: state => state.saltKey

    },
    plugins: [
        createPersistedState({
          storage: {
            getItem: (key) => ls.get(key),
            setItem: (key, value) => ls.set(key, value),
            removeItem: (key) => ls.remove(key),
          },
        }),
      ],
})

export default store;