<template>
  <!-- Komponent flagi -->
  <div @click="setCountry" class="country-wrapper">
    <country-flag class="single-flag" :country="country" :size="size" />
  </div>
</template>

<script>
import CountryFlag from "vue-country-flag";
import { mapActions } from "vuex";
export default {
  name: "Flag",
  components: {
    CountryFlag,
  },
  props: {
    /**
     * Definicja kraju
     */
    country: {
      type: String,
      default: "country",
    },
    /**
     * rozmiar flagi
     */
    size: {
      type: String,
      default: "size",
    },
    type: {
      type: String,
      default: "",
    },
  },
  methods: {
    ...mapActions(["invokeUpdateState"]),
    language() {
      if (this.country === "pol") return "pl";
      else return "gb";
    },
    /**
     * Zmiana aktualnego tłumaczenia aplikacji na język skorelowany z definicją flagi
     */
    setCountry() {
      this.$i18n.locale = this.language();
      this.invokeUpdateState({ key: "language", value: this.language() });
      window.localStorage.setItem("lang_config", this.language());
    },
  },
};
</script>
<style scoped>
.single-flag {
  cursor: pointer;
}
.country-wrapper {
  height: fit-content;
  width: fit-content;
  margin-left: 1rem;
}
</style>
