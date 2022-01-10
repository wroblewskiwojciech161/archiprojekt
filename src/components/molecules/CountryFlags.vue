<template>
  <!-- Komponent zmiany języka -->
  <div class="flags-wrapper">
    <!-- Wyświetlanie zadeklarowanych flag (tłumaczenia) -->
    <flag
      type="modal"
      v-for="(item, index) in countriesConst"
      :key="index"
      :country="item"
      size="normal"
    />
  </div>
</template>

<script>
import Flag from "../atoms/Flag.vue";

export default {
  name: "CountryFlags",
  components: {
    Flag,
  },
  data() {
    return {
      countriesConst: ["pol", "gb"],
    };
  },
};
</script>
<style>
.flags-wrapper {
  display: flex;
  flex-direction: row;
}
</style>
