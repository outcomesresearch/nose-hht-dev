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
    },
  },
];
