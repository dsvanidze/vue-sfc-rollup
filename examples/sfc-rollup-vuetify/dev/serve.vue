<script lang="ts">
import Vue from 'vue';
import { SfcRollupVuetifySample } from '@/entry';

interface SampleData {
  text: String;
}

export default Vue.extend({
  name: 'ServeDev',
  components: {
    SfcRollupVuetifySample
  },
  data(): SampleData {
    return {
      text: 'Some Text'
    };
  }
});
</script>

<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container fluid>
          <sfc-rollup-vuetify-sample v-model="text" :validation="{ customValidation: { errorMsg: '' } }" />
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
