import locale_keys from '../assets/locales/keys';
import { bus, MODAL_CLOSED } from '../services/bus';

export default [
  {
    data: function () {
      return { k: locale_keys };
    },
    methods: {
      t(key) {
        return this.$vuetify.lang.t(`$vuetify.${key}`);
      },
      closeModalFromBus() {
        bus.$emit(MODAL_CLOSED);
      },
      isMild({ sum, average }) {
        return {
          sum: sum <= 29,
          average: average <= 1,
          phrase: { sum: '≤ 29 ', average: '≤ 1' },
        };
      },
      isModerate({ sum, average }) {
        return {
          sum: sum > 29 && sum <= 58,
          average: average > 1.01 && average <= 2,
          phrase: { sum: '29 to 58', average: '1.01 to 2' },
        };
      },
      isSevere({ sum, average }) {
        return {
          sum: sum > 58,
          average: average > 2,
          phrase: { sum: '> 58 ', average: '> 2' },
        };
      },
    },
  },
];
