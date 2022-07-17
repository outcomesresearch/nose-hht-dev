<template>
  <v-card-text class="pa-6">
    <div>
      <div class="disclaimer pb-2" v-if="$vuetify.lang.current != 'en_us'">
        {{ t(k.SCORE_ONLY_IN_ENGLISH) }}<v-divider></v-divider>
      </div>
      <h4 v-if="!allFieldsHaveValues" class="font-italic mb-4">
        Result will display here when form is complete.
      </h4>
    </div>
    <div v-if="allFieldsHaveValues" class="results mb-4">
      <h3 class="black--text mb-2">Result:</h3>
      <pre>Sum: {{ sum }}</pre>
      <pre>Average: {{ average.toFixed(3) }}</pre>
    </div>

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left score-interp-title">
              NOSE-HHT Score Interpretation
            </th>
            <th class="text-center">Based on Sum</th>
            <th class="text-center">Based on Average</th>
          </tr>
        </thead>
        <tbody
          class="text-center"
          :class="allFieldsHaveValues ? `showOutlines` : ''"
        >
          <tr class="mild">
            <td class="text-left">Mild</td>
            <td>
              <div :class="sum <= 27 && `outline`">&le; 27</div>
            </td>
            <td>
              <div :class="average <= 1 && `outline`">&le; 1</div>
            </td>
          </tr>
          <tr class="moderate">
            <td class="text-left">Moderate</td>
            <td>
              <div :class="sum >= 28 && sum <= 54 && `outline`">28 to 54</div>
            </td>
            <td>
              <div :class="average > 1.01 && average <= 2 && `outline`">
                1.01 to 2
              </div>
            </td>
          </tr>
          <tr class="severe">
            <td class="text-left">Severe</td>
            <td>
              <div :class="sum > 54 && `outline`">&gt; 54</div>
            </td>
            <td><div :class="average > 2 && `outline`">&gt; 2</div></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card-text>
</template>

<script>
const fetchAllValues = (sections) => {
  return sections
    .map(({ values }) => Object.entries(values).map(([, value]) => value))
    .flat();
};

export default {
  props: ['allSections'],
  computed: {
    allFieldsHaveValues() {
      return fetchAllValues(this.allSections).every((e) => e !== null);
    },
  },
  methods: {
    calculateSum() {
      // for each section, add its values
      return fetchAllValues(this.allSections).reduce((a, i) => a + i, 0);
    },
    calculateAverage() {
      // Get sum, then divide it out by number of questions
      let { length } = fetchAllValues(this.allSections);
      return this.sum / length;
    },
  },
  watch: {
    allSections: {
      handler() {
        // If all fields have values, calculate results
        if (this.allFieldsHaveValues) {
          this.sum = this.calculateSum();
          this.average = this.calculateAverage();
        }
      },
      deep: true,
    },
  },
  data() {
    return {
      sum: undefined,
      average: undefined,
    };
  },
};
</script>

<style scoped lang="scss">
@import '../assets/scss/breakpoints.scss';

/* Table styles  */
.showOutlines .outline {
  border-radius: 10px;
  border-width: 3px !important;
  border-style: solid;
  margin: 2px;
  padding: 4px;
}

.mild .outline {
  border-color: #ffec19 !important;
  -webkit-box-shadow: 0px 0px 2px #ffec19, inset 0px 0px 2px #ffec19;
  box-shadow: 0px 0px 2px #ffec19, inset 0px 0px 2px #ffec19;
}

.moderate .outline {
  border-color: orange !important;
  -webkit-box-shadow: 0px 0px 2px orange, inset 0px 0px 2px orange;
  box-shadow: 0px 0px 2px orange, inset 0px 0px 2px orange;
}

.severe .outline {
  border-color: #f6412d !important;
  -webkit-box-shadow: 0px 0px 2px #f6412d, inset 0px 0px 2px #f6412d;
  box-shadow: 0px 0px 2px #f6412d, inset 0px 0px 2px #f6412d;
}

@media only screen and (max-width: $SMALL) {
  .score-interp-title {
    width: 100px;
  }
}
</style>
