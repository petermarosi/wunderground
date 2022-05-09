<template>
  <q-page class="row items-center justify-evenly">        
    <div class="row">
      <q-btn class="ma-2" color="primary" elevation="0" dark @click="count++">
        <span> Count: {{ count }} </span>
      </q-btn>      
      <q-btn class="ma-2" color="primary" elevation="0" dark @click="store.increment">
        <span> Count: {{ store.counter }} </span>
      </q-btn>      
    </div>    
  </q-page>
</template>

<script setup lang="ts">
  import { computed, ref } from '@vue/runtime-core'
  import { useCounterStore } from 'stores/counter';

  const store = useCounterStore();
  const count = ref(0)
</script>
