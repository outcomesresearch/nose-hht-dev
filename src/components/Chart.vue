<template>
  <div id="chart"></div>
</template>

<script>
import c3 from 'c3';

const dataSeriesName = 'Score';

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
          unload: [dataSeriesName],
        });
      }

      this.chart = c3.generate({
        tooltip: {
          format: {
            title: (x) => new Date(x).toLocaleDateString(),
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
          },
        },
        legend: { hide: true },
        data: {
          x: 'x',
          columns: [
            [
              'x',
              ...(this.historicalData
                ? this.historicalData.map((d) => d.date)
                : [Date.now()]),
            ],
            [
              dataSeriesName,
              ...(this.historicalData
                ? this.historicalData.map((d) => d.score)
                : [0]),
            ],
          ],
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
