<template>
  <v-snackbar :value="thereIsError">
    An error occurred: {{ userFacingError() }}
  </v-snackbar>
</template>

<script>
import { mapGetters } from 'vuex';

const errorMap = {
  'auth/email-already-in-use': 'Email is already in use',
  permission_denied:
    "Application doesn't have permissions to read or write to the database",
};

export default {
  computed: {
    ...mapGetters(['getError', 'thereIsError']),
  },
  methods: {
    userFacingError() {
      // Try to find a relevant enetry in the errorMap
      const relevantEntry = Object.entries(errorMap).find(([key]) =>
        String(this.getError).includes(key),
      );

      // User facing error is the value associated w that key, else just the error itself
      return (relevantEntry && relevantEntry[1]) || this.getError;
    },
  },
};
</script>

<style scoped lang="scss"></style>
