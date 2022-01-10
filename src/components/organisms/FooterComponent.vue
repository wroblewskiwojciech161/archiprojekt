<template>
  <v-footer class="mt-5" dark padless>
    <v-card class="flex" flat tile>
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }}<strong></strong>
      </v-card-text>
    </v-card>
    <country-flags style="margin-right: 1rem"></country-flags>
  </v-footer>
</template>

<script>
import CountryFlags from "../molecules/CountryFlags.vue";
export default {
  components: {
    CountryFlags,
  },
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style></style>
