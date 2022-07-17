<template>
  <outcomes-research-wrapper :_title="`NOSE HHT Questionnaire`">
    <v-app>
      <Questionnaire />
      <v-footer :padless="true">
        <v-card flat tile width="100%" class="text-center">
          <v-card-text>{{ t(k.FOOTER_COPYWRIGHT) }}</v-card-text>
        </v-card>
      </v-footer>
    </v-app>
  </outcomes-research-wrapper>
</template>

<script>
import Questionnaire from './components/Questionnaire';

export default {
  name: 'App',
  components: {
    Questionnaire,
  },
};
</script>

<style lang="scss">
@import './assets/scss/breakpoints.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  tbody tr:hover {
    background-color: transparent !important;
  }
  th:first-child,
  td:first-child {
    padding-left: 0px !important;
  }

  th:last-child,
  td:last-child {
    padding-right: 0px !important;
  }

  .v-card__text {
    font-size: 15px;
  }

  .v-text-field__details {
    display: none;
  }

  .v-stepper__label {
    line-height: 1.3;
  }

  tr th,
  .v-input,
  .v-label {
    font-size: 14px !important;
  }

  .v-card__title {
    word-break: keep-all;
  }

  .v-divider {
    margin: 10px 0px;
  }

  @media only screen and (max-width: $SMALL) {
    .v-label,
    .v-card__text {
      font-size: 16px !important;
    }
  }
}
</style>
