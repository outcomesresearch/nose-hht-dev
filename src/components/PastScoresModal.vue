<template>
  <v-dialog
    v-model="dialog"
    :fullscreen="smallSize"
    max-width="900px"
    transition="dialog-bottom-transition"
    @click:outside="closeModalFromBus"
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
        <SubmitEmail
          :actionOnSuccess="receivedEntries"
          @valid-email="(emailFromChild) => (email = emailFromChild)"
          @step-change="handleStepChange"
        />
        <ResultsPage
          :valid_email="email"
          :past_entries="relevantEntries"
          :actionOnSuccess="receivedEntries"
          @step-change="handleStepChange"
        />
      </v-stepper-items>
    </v-stepper>
  </v-dialog>
</template>

<script>
import SubmitEmail from './SubmitEmail';
import ResultsPage from './ResultsPage';
import { bus, MODAL_CLOSED } from '../services/bus';

export default {
  props: ['smallSize'],
  components: { SubmitEmail, ResultsPage },
  created() {
    bus.$on(MODAL_CLOSED, () => {
      this.currentStep = 1;
      this.email = '';
      this.dialog = false;
    });
  },
  methods: {
    handleStepChange(nextStep) {
      this.currentStep = nextStep;
    },
    receivedEntries(pastEntries) {
      this.relevantEntries = pastEntries;
    },
  },
  data() {
    return {
      dialog: false,
      email: '',
      relevantEntries: [],
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
