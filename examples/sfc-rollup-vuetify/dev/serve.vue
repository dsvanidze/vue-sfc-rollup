<script lang="ts">
import Vue from 'vue';
import { SfcRollupVuetifySample } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    SfcRollupVuetifySample,
  }
});
</script>

<template>
  <div id="app">
    <sfc-rollup-vuetify-sample />
  </div>
</template>
