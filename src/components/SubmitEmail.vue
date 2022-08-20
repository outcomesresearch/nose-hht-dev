<template>
  <v-stepper-content step="1">
    <v-card class="past-scores">
      <v-form ref="form" v-model="valid" @submit.prevent="handleKeyup">
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
                  v-model="internal_email"
                  label="natasha@example.com"
                  :rules="rules"
                  required
                  @keyup.enter="handleKeyup"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <div class="button-container">
              <v-btn text @click="closeModalFromBus" class="show-on-desktop">{{
                t(k.CLOSE)
              }}</v-btn>
              <v-spacer></v-spacer>
              <v-btn
                text
                @click="signUp"
                :disabled="!valid || login_processing || signup_processing"
                :loading="signup_processing"
                >{{ t(k.SIGN_UP) }}</v-btn
              >
              <v-btn
                text
                @click="logIn"
                :disabled="!valid || login_processing || signup_processing"
                :loading="login_processing"
                color="primary"
                >{{ t(k.USE_EXISTING) }}</v-btn
              >
            </div>
          </v-card-actions>
          <v-card-actions class="show-on-mobile">
            <div class="button-container">
              <v-btn text @click="closeModalFromBus">{{ t(k.CLOSE) }}</v-btn>
            </div>
          </v-card-actions>
        </v-container>
      </v-form>
    </v-card>
  </v-stepper-content>
</template>

<script>
import { bus, MODAL_CLOSED } from '../services/bus';

export default {
  created() {
    bus.$on(MODAL_CLOSED, () => {
      this.internal_email = '';
      this.$refs.form.resetValidation();
    });
  },
  methods: {
    handleKeyup() {
      this.logIn();
    },
    logIn() {
      this.login_processing = true;
      setTimeout(() => {
        this.$emit('valid-email', this.internal_email);
        this.login_processing = false;
      }, 1000);
    },
    signUp() {
      this.signup_processing = true;
      setTimeout(() => {
        this.$emit('valid-email', this.internal_email);
        this.signup_processing = false;
      }, 500);
    },
  },
  data() {
    return {
      valid: false,
      login_processing: false,
      signup_processing: false,
      internal_email: '',
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
