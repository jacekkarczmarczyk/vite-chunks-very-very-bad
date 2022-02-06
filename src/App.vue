<template>
  <div>
    Build time: {{ buildTime }}
    <router-view />
  </div>
</template>

<script lang="ts">
import { BUILD_TIME } from './env';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'App',
  setup () {
    return {
      buildTime: BUILD_TIME,
    };
  },
});
</script>
