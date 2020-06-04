<script lang="ts">
import Vue from 'vue';
import ChildOne from '@/components/child-one.vue';
import ChildTwo from '@/components/child-two.vue';

interface SampleData {
  label: string;
  color: string;
}

export default Vue.extend({
  name: 'SfcRollupVuetifySample', // vue component name
  components: {
    ChildOne,
    ChildTwo
  },
  props: {
    value: String,
    validation: Object
  },
  data(): SampleData {
    return {
      label: 'Sfc Rollup Vuetify Sample (Parent)',
      color: 'red'
    };
  }
});
</script>

<template>
  <v-row>
    <v-col cols="12">
      <div class="sfc-rollup-vuetify-sample">
        <ValidationProvider :rules="validation" v-slot="{ errors }">
          <v-textarea
            :value="value"
            :error-messages="errors[0]"
            :label="label"
            :color="color"
            @input="$emit('input', $event)"
          ></v-textarea>
        </ValidationProvider>
        <child-one v-model="label" :validation="{ customValidation: { errorMsg: '' } }"></child-one>
        <child-two v-model="color" :validation="{ customValidation: { errorMsg: '' } }"></child-two>
      </div>
    </v-col>
  </v-row>
</template>
<style scoped>
.sfc-rollup-vuetify-sample {
  max-width: 700px;
  margin: 0 auto;
}
</style>
