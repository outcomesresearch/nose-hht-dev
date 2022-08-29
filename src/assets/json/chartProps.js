import * as d3 from 'd3';

export default {
  tooltip: {
    format: {
      title: (x) => d3.timeFormat('%x')(x),
    },
  },
  axis: {
    x: {
      padding: { left: 0, right: 0 },
      type: 'timeseries',
      tick: {
        format: (x) => d3.timeFormat('%x')(x),
        culling: true,
        rotate: -60,
      },
    },
    y: {
      padding: { top: 0, bottom: 0 },
    },
    y2: {
      show: true,
    },
  },
  legend: { hide: true },
  grid: {
    y: {
      show: true,
    },
  },
};
