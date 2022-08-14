<template>
  <v-stepper v-model="currentStep" class="">
    <v-stepper-items>
      <SubmitEmail @close="handleClose" @step-change="handleStepChange" />
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import SubmitEmail from './SubmitEmail';

export default {
  components: { SubmitEmail },
  methods: {
    handleClose() {
      this.currentStep = 1;
      this.$emit('close');
    },
    handleStepChange(nextStep) {
      this.currentStep = nextStep;
    },
  },
  data() {
    return {
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
