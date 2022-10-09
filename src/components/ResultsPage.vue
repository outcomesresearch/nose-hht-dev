<template>
  <v-stepper-content step="2">
    <v-card class="past-scores">
      <v-container class="container-override">
        <v-card-title class="text-h5">
          {{ t(k.RESULTS_TITLE) }}{{ valid_email }}
        </v-card-title>
        <v-card-text style="padding: 0px;" v-if="internalData.length">
          <Chart :historicalData="internalData" />
        </v-card-text>
        <v-card-text v-else>
          <div>{{ t(k.NO_DATA_AVAILABLE) }}</div>
        </v-card-text>
        <v-card-actions class="show-on-desktop">
          <div class="button-container">
            <v-btn text @click="$emit('step-change', 1)">{{ t(k.BACK) }}</v-btn>
            <v-spacer></v-spacer>
            <v-btn text @click="addData" :disabled="!canAddNewScore">
              {{ t(k.ADD_DATA) }}
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn text @click="closeModalFromBus">{{ t(k.CLOSE) }}</v-btn>
          </div>
        </v-card-actions>
        <v-card-actions class="show-on-mobile">
          <div class="button-container">
            <v-btn text @click="addData" :disabled="!canAddNewScore">
              {{ t(k.ADD_DATA) }}
            </v-btn>
            <v-btn text @click="$emit('step-change', 1)">{{ t(k.BACK) }}</v-btn>
            <v-btn text @click="closeModalFromBus">{{ t(k.CLOSE) }}</v-btn>
          </div>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-stepper-content>
</template>

<script>
import Chart from './Chart.vue';
import { mapGetters } from 'vuex';
import { addUserData } from '../services/firebase';

export default {
  props: ['valid_email', 'past_entries'],
  components: { Chart },
  computed: {
    ...mapGetters(['getSum', 'getAverage', 'getQuestionnaireComplete']),
    canAddNewScore() {
      // Can add new score if form is complete and the last score was before today
      return this.getQuestionnaireComplete && this.lastScoreBeforeToday();
    },
  },
  methods: {
    lastScoreBeforeToday() {
      if (!this.internalData.length) return true; // if no past score, allow to create new one

      // if past score is earlier than midnight on current day, allow to create new one
      var d = new Date().setUTCHours(0, 0, 0, 0); // midnight on current day in UTC time
      return this.internalData[this.internalData.length - 1].date < d;
    },
    addData() {
      addUserData(this.valid_email, {
        date: Date.now(), // set score to current UTC timestamp
        sumScore: this.getSum || 0.0001, // if zero, set to small score
        averageScore: this.getAverage || 0.0001, // if zero, set to small score,
      });
    },
  },
  watch: {
    past_entries(e) {
      this.internalData = e
        ? Object.keys(e)
            .reduce((a, i) => [...a, e[i]], [])
            .sort((a, b) => a.date - b.date)
        : [];
    },
  },
  data() {
    return {
      internalData: [],
    };
  },
};
</script>

<style scoped lang="scss">
@import '../assets/scss/stepStyle.scss';
</style>
