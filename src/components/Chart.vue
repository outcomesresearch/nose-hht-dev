<template>
  <div id="chart"></div>
</template>

<script>
import c3 from 'c3';
import { mergeDeep } from '../services/merge';
import staticProps from '../assets/json/chartProps';

const averageTimeseriesTitle = 'Average';
const sumTimeseriesTitle = 'Sum';

const valueFormatters = {
  [averageTimeseriesTitle]: (value) => value.toFixed(2),
  [sumTimeseriesTitle]: parseInt,
};

export default {
  props: ['historicalData'],
  watch: {
    historicalData() {
      this.generatePlot();
    },
  },
  data() {
    return {
      chart: undefined,
    };
  },
  methods: {
    generatePlot() {
      if (this.chart) {
        this.chart.load({
          unload: [averageTimeseriesTitle, sumTimeseriesTitle],
        });
      }

      this.chart = c3.generate(
        mergeDeep(staticProps, {
          tooltip: {
            format: {
              name: (name, ratio, id) => {
                if (id === averageTimeseriesTitle) {
                  return this.t(this.k.AVERAGE);
                }
                if (id === sumTimeseriesTitle) {
                  return this.t(this.k.SUM);
                }
              },
              value: (value, ratio, id) => {
                return valueFormatters[id](value);
              },
            },
          },
          axis: {
            y: {
              label: this.t(this.k.AVERAGE),
            },
            y2: {
              label: this.t(this.k.SUM),
            },
          },
          data: {
            x: 'x',
            columns: [
              ['x', ...this.historicalData.map((d) => d.date)],
              [
                sumTimeseriesTitle,
                ...this.historicalData.map((d) => d.sumScore),
              ],
              [
                averageTimeseriesTitle,
                ...this.historicalData.map((d) => d.averageScore),
              ],
            ],
            axes: {
              [averageTimeseriesTitle]: 'y',
              [sumTimeseriesTitle]: 'y2',
            },
          },
        }),
      );
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.generatePlot);
    });
    this.generatePlot();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.generatePlot);
  },
};
</script>

<style scoped lang="scss"></style>
