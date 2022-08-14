<template>
  <v-stepper-content step="1">
    <v-card class="past-scores">
      <v-form ref="form" v-model="valid">
        <v-container class="container-override">
          <v-card-title class="text-h5">{{
            t(k.AUTHENTICATE_YOURSELF)
          }}</v-card-title>
          <v-card-text>
            <p>{{ t(k.EMAIL_DISCLAIMER_1) }}</p>
            <p>{{ t(k.EMAIL_DISCLAIMER_2) }}</p>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="email"
                  label="natasha@example.com"
                  :rules="rules"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <div class="button-container">
              <v-btn text @click="handleClose" class="show-on-desktop">{{
                t(k.CLOSE)
              }}</v-btn>
              <v-spacer></v-spacer>
              <v-btn text @click="handleClose" :disabled="!valid">{{
                t(k.SIGN_UP)
              }}</v-btn>
              <v-btn
                text
                @click="handleClose"
                :disabled="!valid"
                color="primary"
                >{{ t(k.USE_EXISTING) }}</v-btn
              >
            </div>
          </v-card-actions>
          <v-btn text @click="handleClose" class="show-on-mobile">{{
            t(k.CLOSE)
          }}</v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-stepper-content>
</template>

<script>
export default {
  methods: {
    handleClose() {
      this.email = '';
      this.$refs.form.resetValidation();
      this.$emit('close');
    },
  },
  data() {
    return {
      valid: false,
      email: '',
      rules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import '../assets/scss/breakpoints.scss';
@import '../assets/scss/stepStyle.scss';

.container-override {
  display: flex;
  flex-direction: column;
  height: min-content;
}

@media only screen and (max-width: $SMALL) {
  .container-override {
    height: 100vh;
  }
}
</style>
