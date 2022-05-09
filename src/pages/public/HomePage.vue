<template>
    <div class="container">
        <h1>Üdv az WunderGround-on!</h1>
        <q-row>
          <div class="state-container">
            {{ adminAuth ? 'Logged in' : 'Logged out' }}

            <q-form>
              <label>Username</label>
              <input :value="userName" @input="event => userName = event.target.value">
              <label>Passcode</label>
              <input :value="passCode" @input="event => passCode = event.target.value">
            </q-form>
            <q-btn
              elevation="0"
              small
              class="ma-2"
              text
              color="red lighten-2"
              @click="doLogin"
            >
              Login
              <q-icon name="thumb_down" />
            </q-btn>
          </div>
          <q-btn
            class="ma-2"
            color="primary"
            elevation="0"
            @click="$router.push('/admin')"
          >
            Admin
          </q-btn>
        </q-row>
    </div>
</template>
<script setup lang="ts">
import { computed } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import { adminAuthStore } from 'stores/admin-auth';

const router = useRouter();
const store = adminAuthStore();

let userName = '';
let passCode = '';

const adminAuth = computed(() => {
    return store.authenticated;
  })

  async function doLogin() {
    store.login().then( () => {
      router.push('/admin');
    });
  }

</script>
<style scoped lang="scss">
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 60px;
    text-align: center;
  }
</style>
