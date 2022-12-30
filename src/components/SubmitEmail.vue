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
                  :rules="[emailExists(), emailValid()]"
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
                @click="signIn"
                :disabled="!valid || signin_processing"
                :loading="signin_processing"
                >{{ t(k.CONTINUE) }}</v-btn
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
import { logIn } from '../services/firebase';

export default {
  props: ['actionOnSuccess'],
  created() {
    bus.$on(MODAL_CLOSED, () => {
      this.internal_email = '';
      this.$refs.form.resetValidation();
    });
  },
  methods: {
    handleKeyup() {
      this.signIn();
    },
    async signIn() {
      this.signin_processing = true;
      try {
        await logIn(this.internal_email, this.actionOnSuccess);
        this.$emit('valid-email', this.internal_email);
        this.$emit('step-change', 2);
      } finally {
        this.signin_processing = false;
      }
    },
    emailExists() {
      return (v) => !!v || this.t(this.k.EMAIL_REQUIRED);
    },
    emailValid() {
      return (v) => /.+@.+\..+/.test(v) || this.t(this.k.IMPROPER_EMAIL);
    },
  },
  data() {
    return {
      valid: false,
      signin_processing: false,
      internal_email: '',
    };
  },
};
</script>

<style scoped lang="scss">
@import '../assets/scss/stepStyle.scss';
</style>
