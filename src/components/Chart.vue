<template>
  <div id="chart"></div>
</template>

<script>
import c3 from 'c3';
import * as d3 from 'd3';

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

      this.chart = c3.generate({
        tooltip: {
          format: {
            title: (x) => d3.timeFormat('%x')(x),
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
          x: {
            padding: { left: 0, right: 0 },
            type: 'timeseries',
            tick: {
              format: (x) => d3.timeFormat('%x')(x),
              culling: false,
              count: screen.width / 50,
              rotate: -60,
            },
          },
          y: {
            padding: { top: 0, bottom: 0 },
            label: this.t(this.k.AVERAGE),
          },
          y2: {
            show: true,
            label: this.t(this.k.SUM),
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
