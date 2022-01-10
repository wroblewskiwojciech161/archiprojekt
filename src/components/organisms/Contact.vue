<template>
  <v-card class="mx-auto">
    <v-img src="../../assets/me.jpg" height="300" class="image" dark> </v-img>

    <v-list two-line>
      <v-list-item>
        <v-list-item-icon>
          <v-icon> mdi-phone </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="700"
          >
            <a style="text-decoration: none" class="zoom" href="tel:509156513"
              >+48 509 156 513</a
            >
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon> mdi-email </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="200"
            >archiprojekt.biuro@gmail.com</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon> mdi-map-marker </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="500"
            >Krzysztofa Komedy-Trzcińskiego 12</v-list-item-title
          >
          <v-list-item-subtitle
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="800"
            >58-506 Jelenia Góra, ( {{ $t("oldOffice") }} Azart
            Sat)</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
.image {
  object-fit: contain;
}
.rotate {
  margin-left: 60px;
  transform: rotate(-90deg);

  /* Legacy vendor prefixes that you probably don't need... */

  /* Safari */
  -webkit-transform: rotate(-90deg);

  /* Firefox */
  -moz-transform: rotate(-90deg);

  /* IE */
  -ms-transform: rotate(-90deg);

  /* Opera */
  -o-transform: rotate(-90deg);
}
.zoom:hover {
  transform: scale(1.07);
}
</style>
