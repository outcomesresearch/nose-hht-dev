<template>
  <div id="chart"></div>
</template>

<script>
import c3 from 'c3';

const averageTimeseriesTitle = 'Average';
const sumTimeseriesTitle = 'Sum';

const formatters = {
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

      this.chart = c3.generate({
        tooltip: {
          format: {
            title: (x) => new Date(x).toLocaleDateString(),
            value: function (value, ratio, id) {
              return formatters[id](value);
            },
          },
        },
        axis: {
          x: {
            padding: { left: 0, right: 0 },
            type: 'timeseries',
            tick: {
              format: '%B %d',
              culling: false,
              count: screen.width / 50,
              rotate: -60,
            },
          },
          y: {
            padding: { top: 0, bottom: 0 },
            label: averageTimeseriesTitle,
          },
          y2: {
            show: true,
            label: sumTimeseriesTitle,
          },
        },
        legend: { hide: true },
        data: {
          x: 'x',
          columns: [
            ['x', ...this.historicalData.map((d) => d.date)],
            [sumTimeseriesTitle, ...this.historicalData.map((d) => d.sumScore)],
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
      });
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
