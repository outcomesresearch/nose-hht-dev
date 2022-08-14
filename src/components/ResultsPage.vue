<template>
  <v-stepper-content step="2">
    <v-card class="past-scores">
      <v-container class="container-override">
        <v-card-title class="text-h5">
          {{ t(k.RESULTS_TITLE) }}{{ valid_email }}
        </v-card-title>
        <v-card-text style="padding: 0px" v-if="historicalData">
          <Chart :historicalData="historicalData" />
        </v-card-text>
        <v-card-text v-else>
          <div>{{ t(k.NO_DATA_AVAILABLE) }}</div>
        </v-card-text>
        <v-card-actions class="show-on-desktop">
          <div class="button-container">
            <v-btn text @click="$emit('step-change', 1)">{{ t(k.BACK) }}</v-btn>
            <v-spacer></v-spacer>
            <v-btn text @click="handleClose">{{ t(k.CLOSE) }}</v-btn>
          </div>
        </v-card-actions>
        <v-card-actions class="show-on-mobile">
          <div class="button-container">
            <v-btn text @click="$emit('step-change', 1)">{{ t(k.BACK) }}</v-btn>
            <v-btn text @click="handleClose">{{ t(k.CLOSE) }}</v-btn>
          </div>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-stepper-content>
</template>

<script>
import * as database from '../assets/json/emails.mock.json';
import Chart from './Chart.vue';

export default {
  props: ['valid_email'],
  components: { Chart },
  watch: {
    valid_email(e) {
      this.historicalData = database[e];
    },
  },
  methods: {
    handleClose() {
      this.$emit('close');
    },
  },
  data() {
    return {
      historicalData: [],
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
