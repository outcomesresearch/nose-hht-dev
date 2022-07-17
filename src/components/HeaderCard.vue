<template>
  <v-card class="mb-12">
    <v-card-title>
      <div class="flow">
        <span class="flow-around ml-3 mb-3"><TranslationDropdown /></span
        >{{ t(k.HEADER_TITLE) }}
      </div>
    </v-card-title>
    <v-card-text>
      <p class="grey--text text--darken-3">
        {{ t(k.HEADER_BODY_1) }}
        <strong class="text-decoration-underline">
          {{ t(k.HEADER_BODY_2) }}</strong
        >{{ t(k.HEADER_BODY_3) }}
      </p>
      <p class="mb-0 grey--text text--darken-3">{{ t(k.HEADER_BODY_4) }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
import TranslationDropdown from './TranslationDropdown.vue';

export default {
  components: { TranslationDropdown },
};
</script>

<style scoped>
.flow-around {
  float: right;
  width: 82px;
}
</style>
