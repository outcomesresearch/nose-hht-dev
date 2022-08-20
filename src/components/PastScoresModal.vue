<template>
  <v-dialog
    v-model="dialog"
    :fullscreen="smallSize"
    max-width="900px"
    transition="dialog-bottom-transition"
    @click:outside="handleClose"
  >
    <template v-slot:activator="{ on, attrs }">
      <div class="grid past-score-container my-5">
        <v-btn color="primary" v-bind="attrs" v-on="on">{{
          t(k.LOAD_PAST_SCORES)
        }}</v-btn>
      </div>
    </template>
    <v-stepper v-model="currentStep" class="">
      <v-stepper-items>
        <SubmitEmail @close="handleClose" @valid-email="receivedValidEmail" />
        <ResultsPage
          @close="handleClose"
          :valid_email="email"
          @step-change="handleStepChange"
        />
      </v-stepper-items>
    </v-stepper>
  </v-dialog>
</template>

<script>
import SubmitEmail from './SubmitEmail';
import ResultsPage from './ResultsPage';

export default {
  props: ['smallSize'],
  components: { SubmitEmail, ResultsPage },
  methods: {
    handleClose() {
      this.currentStep = 1;
      this.email = '';
      this.dialog = false;
    },
    handleStepChange(nextStep) {
      this.currentStep = nextStep;
    },
    receivedValidEmail(e) {
      console.log(e);
      this.email = e;
      this.currentStep = 2;
    },
  },
  data() {
    return {
      dialog: false,
      email: undefined,
      currentStep: 1,
    };
  },
};
</script>

<style scoped lang="scss">
@import '../assets/scss/breakpoints.scss';

.v-stepper__content {
  padding: 0px;
}

.v-stepper {
  box-shadow: none !important;
}
</style>
