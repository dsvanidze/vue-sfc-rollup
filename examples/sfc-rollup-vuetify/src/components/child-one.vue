<template>
  <v-row>
    <v-col>
      <ValidationProvider :rules="validation" v-slot="{ errors }">
        <v-text-field
          label="Child One (changes parent's label)"
          :value="value"
          :error-messages="errors[0]"
          @input="$emit('input', $event)"
        ></v-text-field>
      </ValidationProvider>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ChildOne',
  props: {
    value: String,
    validation: Object
  }
});
</script>

<style scoped></style>
