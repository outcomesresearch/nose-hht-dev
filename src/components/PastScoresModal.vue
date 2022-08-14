<template>
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
</template>

<script>
import SubmitEmail from './SubmitEmail';
import ResultsPage from './ResultsPage';

export default {
  components: { SubmitEmail, ResultsPage },
  methods: {
    handleClose() {
      this.currentStep = 1;
      this.$emit('close');
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
