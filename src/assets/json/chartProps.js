import * as d3 from 'd3';

export default {
  data: {
    type: 'bar',
  },
  bar: {
    width: {
      ratio: 0.5,
    },
  },
  axis: {
    x: {
      padding: { left: 0, right: 0 },
      type: 'category',
      tick: {
        multiline: false,
        centered: true,
        rotate: -70,
      },
    },
    y: {
      padding: { top: 0, bottom: 0 },
    },
    y2: {
      show: true,
      padding: { top: 0, bottom: 0 },
    },
  },
  legend: { hide: true },
  grid: {
    y: {
      show: true,
    },
  },
};
