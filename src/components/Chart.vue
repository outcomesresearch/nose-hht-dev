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
      if (this.isMild({ [measure]: value })[measure]) return '#0c0';
      if (this.isModerate({ [measure]: value })[measure]) return '#ffa500';
      if (this.isSevere({ [measure]: value })[measure]) return '#ff0033';
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
    averageScore() {
      return (
        this.historicalData.reduce((a, i) => a + i.averageScore, 0) /
        this.historicalData.length
      );
    },
    generatePlot() {
      const sorted = this.historicalData.slice();

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
            // format: {
            contents: (d) => {
              const index = d[0].x;
              // Pass this entry in croppedDataset through date formatter
              const date = d3.timeFormat('%x')(croppedDataset[index].date);
              // Pass this croppedDataset index's sum value thru formatter
              const sum = valueFormatters[sumTimeseriesTitle](
                croppedDataset[index].sumScore,
              );
              // Pass this croppedDataset index's avg value thru formatter
              const avg = valueFormatters[averageTimeseriesTitle](
                croppedDataset[index].averageScore,
              );

              // Construct table that forms tooltip
              let str = `<table class="c3-tooltip"><tbody>`;
              str += `<tr><th colspan="2">${date}</th></tr>`;
              str += `<tr class="c3-tooltip-name">
              <td class="name">${this.t(this.k.SUM)}</td>
              <td class="value">${sum}</td>
              </tr>`;
              str += `<tr class="c3-tooltip-name">
              <td class="name">${this.t(this.k.AVERAGE)}</td>
              <td class="value">${avg}</td>
              </tr>`;
              return str + '</tbody></table>';
            },
          },
          grid: {
            y: {
              lines: [
                {
                  value: this.averageScore(),
                  text: this.t(this.k.AVERAGE_SCORE_LABEL),
                },
              ],
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
              ['x', ...croppedDataset.map((d) => d3.timeFormat('%x')(d.date))],
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

.c3-grid .c3-ygrid-line > line {
  stroke: black;
}
.c3-grid .c3-ygrid-line > text {
  fill: black;
  text-shadow: 0px 0px 1px white;
}
</style>
