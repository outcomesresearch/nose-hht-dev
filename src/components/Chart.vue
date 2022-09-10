<template>
  <div id="chart"></div>
</template>

<script>
import c3 from 'c3';
import * as d3 from 'd3';
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
    getTicksAtCurrentSize() {
      // Get appropriate number of ticks, up to 95 due to max modal width
      return Math.min(window.innerWidth / 20, 95);
    },
    generatePlot() {
      const sorted = this.historicalData
        .slice()
        .sort((a, b) => a.date > b.date);

      // If dataset contains more points than we can show at this size,
      let maxAtThisSize = this.getTicksAtCurrentSize();
      let croppedDataset =
        sorted.length > maxAtThisSize
          ? sorted.slice(-1 * maxAtThisSize)
          : sorted;

      if (this.chart) {
        this.chart.load({
          unload: [averageTimeseriesTitle, sumTimeseriesTitle],
        });
      }

      const sortedBySum = croppedDataset
        .slice()
        .sort((a, b) => b.sumScore < a.sumScore);

      this.chart = c3.generate(
        mergeDeep(staticProps, {
          tooltip: {
            format: {
              title: (_, index) => {
                return d3.timeFormat('%x')(croppedDataset[index].date);
              },
            },
          },
          axis: {
            y: {
              label: this.t(this.k.AVERAGE),
            },
            y2: {
              min: 0,
              max: sortedBySum[sortedBySum.length - 1].sumScore,
              label: this.t(this.k.SUM),
            },
          },
          data: {
            x: 'x',
            hide: [sumTimeseriesTitle],
            columns: [
              [
                'x',
                ...croppedDataset.map((d) =>
                  new Date(d.date).toLocaleDateString(),
                ),
              ],
              [sumTimeseriesTitle, ...croppedDataset.map((a) => a.sumScore)],
              [
                averageTimeseriesTitle,
                ...croppedDataset.map((a) => a.averageScore),
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
