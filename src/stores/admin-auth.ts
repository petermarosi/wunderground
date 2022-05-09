import { defineStore } from 'pinia';
import axios from 'axios';

export const adminAuthStore = defineStore('admin-auth', {
  state: () => {
    return {
      accessToken: '',
      loggedIn: false
    }
  },

  getters: {
    authenticated: (state) => state.loggedIn,
  },

  actions: {
    async login (userName: string, passCode: string) {
      const URL = 'https://okoshaccp-integ-2jdqz.ondigitalocean.app/app/auth/login';
      axios.post(URL, {
        username: userName,
        passcode: passCode
      }).then( res => {
        this.$patch({
          accessToken: res.data.accessToken,
          loggedIn: true
        })
      }).catch( err => {
        console.log(err);
      });
    },
    logout () {
      this.$patch({
        accessToken: '',
        loggedIn: false
      })
    }
  }
});
