<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" block>
        <v-icon v-if="selected === null">mdi-translate</v-icon>
        <span v-else>
          <i :class="getFlagClasses(selected.flag)"></i>
          <span class="adjusted">{{ selected.abbr }}</span>
        </span>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(c, i) in availableCountries"
        :key="i"
        @change="changeLanguage(c)"
      >
        <v-list-item-title>
          <i :class="getFlagClasses(c.flag)" /><span class="adjusted">
            {{ c.locale }}</span
          ></v-list-item-title
        >
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import * as d3 from 'd3';
import dateTimeLocales from '../assets/dateTimeLocales/';

const countries = [
  {
    name: 'en_us',
    locale: 'English',
    flag: 'em-flag-us',
    abbr: 'EN',
  },
  {
    name: 'es_us',
    locale: 'Español',
    flag: 'em-flag-us',
    abbr: 'ES',
  },
  {
    name: 'es_sp',
    locale: 'Español',
    flag: 'em-flag-es',
    abbr: 'ES',
  },

  {
    name: 'nl_nl',
    locale: 'Nederlands',
    flag: 'em-flag-nl',
    abbr: 'NL',
  },
  {
    name: 'it_it',
    locale: 'Italiano',
    flag: 'em-flag-it',
    abbr: 'IT',
  },
  {
    name: 'fr_ca',
    locale: 'Français',
    flag: 'em-flag-ca',
    abbr: 'FR',
  },
];

export default {
  methods: {
    changeLanguage(newLanguage) {
      d3.timeFormatDefaultLocale(dateTimeLocales[newLanguage.name]);
      this.selected = newLanguage;
      this.$vuetify.lang.current = newLanguage.name;
    },
    getFlagClasses(flag) {
      return ['mr-2', 'em', flag, 'em-svg'];
    },
  },
  computed: {
    availableCountries() {
      return countries.filter(({ name }) =>
        this.selected === null ? name !== 'en_us' : this.selected.name !== name,
      );
    },
  },
  data() {
    return {
      selected: null,
      countries,
    };
  },
};
</script>

<style>
#app .v-list-item__title {
  cursor: pointer;
  text-align: left;
}

.adjusted {
  top: 2px;
  position: relative;
}

.em,
.em-svg {
  height: 1.5em;
  width: 1.5em;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  vertical-align: middle;
}

.em-es.em-svg,
.em-flag-es.em-svg {
  background: url('../assets/flags/sp.png');
  background-image: url('../assets/flags/sp.svg'), none;
}

.em-it.em-svg,
.em-flag-it.em-svg {
  background: url('../assets/flags/it.png');
  background-image: url('../assets/flags/it.svg'), none;
}

.em-flag-ca.em-svg {
  background: url('../assets/flags/ca.png');
  background-image: url('../assets/flags/ca.svg'), none;
}

.em-us.em-svg,
.em-flag-us.em-svg {
  background: url('../assets/flags/us.png');
  background-image: url('../assets/flags/us.svg'), none;
}

.em-flag-nl.em-svg {
  background: url('../assets/flags/nl.png');
  background-image: url('../assets/flags/nl.svg'), none;
}
</style>
