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
    getColor(value, measure) {
      if (this.isMild({ [measure]: value })[measure]) return '#ffec19';
      if (this.isModerate({ [measure]: value })[measure]) return 'orange';
      if (this.isSevere({ [measure]: value })[measure]) return '#f6412d';
    },
    getTicksAtCurrentSize() {
      // Get appropriate number of ticks, up to 95 due to max modal width
      return Math.min(window.innerWidth / 20, 95);
    },
    isClinicallySignificant(value, seriesName, i, data) {
      if (data && data.length && i > 0) {
        const { sumScore: prevSum, averageScore: prevAvg } = data[i - 1];
        const { sumScore: thisSum, averageScore: thisAvg } = data[i];
        return (
          Math.abs(thisSum - prevSum) > 13 && Math.abs(thisAvg - prevAvg) > 0.46
        );
      }
    },
    generatePlot() {
      const sorted = this.historicalData
        .slice()
        .sort((a, b) => a.date - b.date);

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
        .sort((a, b) => a.sumScore - b.sumScore);

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
            labels: {
              // Value, series, index
              format: (v, s, i) => {
                return this.isClinicallySignificant(v, s, i, croppedDataset)
                  ? '•'
                  : '';
              },
            },
            color: (color, d) => {
              if (d.id && d.id === sumTimeseriesTitle) {
                return this.getColor(d.value, 'sum');
              }
              if (d.id && d.id === averageTimeseriesTitle) {
                return this.getColor(d.value, 'average');
              }
            },
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

<style lang="scss">
.c3-chart-bar.c3-target-Sum {
  display: none;
}
.c3-texts-Sum.c3-texts .c3-text {
  display: none;
}

.c3-texts-Average {
  color: white; // fallback for browsers that do not pull currentColor from fill color
}
.c3-texts-Average.c3-texts .c3-text {
  font-size: 40px;
  transform: translateY(8px);
  -webkit-box-shadow: 0px 0px 2px currentColor, inset 0px 0px 2px currentColor;
  box-shadow: 0px 0px 2px currentColor, inset 0px 0px 2px currentColor;
  text-shadow: 0px 0px 2px currentColor;
  z-index: 10;
}
</style>
