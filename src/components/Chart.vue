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
    getXTicks(data) {
      // Get max number of ticks at this screen size
      const ticksAtThisSize = this.getTicksAtCurrentSize();

      // If the data has more ticks than 2, it's possible the proportions would
      // leave two ticks super close at one side, and a tick or two at the far end
      const beginning = data[0].date;
      const end = data[data.length - 1].date;
      const retVal = [beginning];
      const msPerTick = (end - beginning) / ticksAtThisSize;
      for (let x = 1; x < ticksAtThisSize; x++) {
        retVal.push(retVal[x - 1] + msPerTick);
      }
      retVal.push(end);
      return retVal;
    },
    getTicksAtCurrentSize() {
      // Get appropriate number of ticks, up to 15 due to max modal width
      return Math.min(window.innerWidth / 50, 15);
    },
    generatePlot() {
      const sorted = this.historicalData
        .slice()
        .sort((a, b) => a.date > b.date);

      // We can use the data's own x values if there's only two, else create linspace of x ticks
      let xTickArray =
        sorted.length > 2 ? this.getXTicks(sorted) : sorted.map((d) => d.date);

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
            x: {
              tick: { values: xTickArray },
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
