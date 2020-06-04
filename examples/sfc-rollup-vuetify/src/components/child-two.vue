<template>
  <v-row>
    <v-col>
      <ValidationProvider :rules="validation" v-slot="{ errors }">
        <v-text-field
          label="Child Two (changes parent's color)"
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
  name: 'ChildTwo',
  props: {
    value: String,
    validation: Object
  }
});
</script>

<style scoped></style>
