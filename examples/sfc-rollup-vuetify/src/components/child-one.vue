<template>
  <v-row>
    <v-col>
      <v-text-field label="Child One (changes parent's label)" :value="value" @input="$emit('input', $event)"></v-text-field>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ChildOne',
  props: {
    value: String
  }
});
</script>

<style scoped></style>
