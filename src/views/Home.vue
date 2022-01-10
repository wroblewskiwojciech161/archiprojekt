<template>
  <div ref="start">
    <v-toolbar class="ligth">
      <v-toolbar-side-icon
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="200"
        name="icon"
        class="logo-wrapper"
        ><img class="logo-image" src="../assets/logo.png" alt="Vuetify.js"
      /></v-toolbar-side-icon>
      <v-toolbar-side-icon
        class="mx-0"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos="fade-down-left"
        v-text="title"
      ></v-toolbar-side-icon>
      <v-spacer></v-spacer>

      <v-icon right @click="goto('end')"> mdi-translate </v-icon>

      <v-icon right @click="handleDarkMode"> mdi-theme-light-dark </v-icon>
    </v-toolbar>
    <v-main>
      <section>
        <v-parallax
          src="https://images.unsplash.com/photo-1492091501265-be9af13d99fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          height="600"
        >
          <v-layout column align-center justify-center class="white--text">
            <h1
              class="white--text mb-2 display-1 title"
              style="text-shadow: 3px 2px #000000"
            >
              {{ $t("header.title") }}
            </h1>
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-delay="1100"
              class="white--text subheading mb-3 subtitle"
              style="text-shadow: 2px 2px #000000"
            >
              {{ $t("header.subtitle") }}
            </div>
            <v-btn
              class="dark lighten-2 mt-5"
              dark
              large
              outlined
              @click="goto('contact')"
            >
              {{ $t("contact") }}
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout column wrap class="my-5" align-center>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="text--lighten-2">{{
                        $t("sections.one.title")
                      }}</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">
                        {{ $t("sections.one.subtitle") }}
                      </div>
                    </v-card-title>
                    <v-card-text>
                      {{ $t("sections.one.content") }}
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="text--lighten-2">{{
                        $t("sections.two.title")
                      }}</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">
                        {{ $t("sections.two.subtitle") }}
                      </div>
                    </v-card-title>
                    <v-card-text>
                      {{ $t("sections.two.content") }}
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="text--lighten-2">{{
                        $t("sections.three.title")
                      }}</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">
                        {{ $t("sections.three.subtitle") }}
                      </div>
                    </v-card-title>
                    <v-card-text>
                      {{ $t("sections.three.content") }}
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax
          src="https://images.unsplash.com/photo-1529607697227-d616efef768f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          height="400"
        >
          <v-layout column align-center justify-center>
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-delay="300"
              class="headline white--text mb-3 text-xs-center"
              style="font-size: 1.7rem !important"
            >
              {{ $t("offer.checkout") }}
            </div>
            <em
              style="font-size: 1.3rem !important"
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-delay="800"
            >
              {{ $t("offer.offer") }}
            </em>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-md>
          <v-layout row wrap>
            <v-flex xs12 sm6 text-xs-center class="mt-5">
              <div
                class="headline"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Text
              </div>
              <br />
              <div
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting
              </div>
            </v-flex>
            <v-flex xs12 sm6 text-xs-center class="mt-5">
              <!-- carousel -->
              <carousel></carousel>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <!-- Section offer -->

      <section>
        <v-parallax
          src="https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          height="380"
        >
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">
              <div
                data-aos="zoom-in"
                data-aos-duration="1500"
                data-aos-delay="300"
                class="white--text subheading mb-3"
                style="
                  font-size: 2rem !important;
                  font-weight: 900;
                  text-shadow: 2px 2px #000000;
                "
              >
                {{ $t("contact") }}
              </div>

              <v-row>
                <v-btn class="dark lighten-2 mt-5" dark large outlined>
                  <a
                    style="
                      text-decoration: none;
                      font-weight: 500;
                      font-size: 0.9rem;
                      color: white;
                    "
                    href="tel:1230"
                    >{{ $t("call") }}</a
                  >

                  <v-icon dark right> mdi-cellphone </v-icon>
                </v-btn>
                <div style="width: 15px"></div>
                <v-btn class="dark lighten-2 mt-5" dark large outlined>
                  <a
                    style="
                      text-decoration: none;
                      font-weight: 500;
                      font-size: 0.9rem;
                      color: white;
                    "
                    href="mailto:awd@awd.com"
                    >{{ $t("mail") }}</a
                  >
                  <v-icon dark right> mdi-email </v-icon>
                </v-btn></v-row
              >
            </div>
          </v-layout>
        </v-parallax>
      </section>

      <section ref="contact">
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              xs12
              sm4
            >
              <!-- Contact Component -->
              <contact-component></contact-component>
            </v-flex>
            <v-flex xs12 sm6 offset-sm1>
              <v-card>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">{{ $t("officeLocalization") }}</div>
                  <v-icon> mdi-office-building </v-icon>
                </v-card-title>
                <v-card-text>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1257.7842483426323!2d15.756531344844067!3d50.91319989944864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc4b1917b238399ab!2sAzart-Sat.%20Telewizja%20kablowa!5e0!3m2!1spl!2spl!4v1641731988103!5m2!1spl!2spl"
                    width="100%"
                    height="450"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-main>
    <div ref="end" @click="goto('start')">
      <footer-component></footer-component>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/molecules/Carousel.vue";
import FooterComponent from "../components/organisms/FooterComponent.vue";
import ContactComponent from "../components/organisms/Contact.vue";
export default {
  components: { FooterComponent, Carousel, ContactComponent },
  name: "App",
  data: function () {
    return {
      title: "Archiprojekt",
      imageLink: {
        main: "https://images.unsplash.com/photo-1547915619-476e582d2609?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        sub_main:
          "https://images.unsplash.com/photo-1547915619-476e582d2609?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        logo: "@assets/logo.png",
        social_cover:
          "https://images.unsplash.com/photo-1547915619-476e582d2609?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      },
      email: "",
      emailRules: [
        (v) => {
          return !!v || "E-mail is required";
        },
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
      subscribed: false,
    };
  },
  methods: {
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scroll({
        top: top,
        behavior: "smooth",
      });
    },
    handleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      window.localStorage.setItem("dark_mode", this.$vuetify.theme.dark);
    },
  },

  computed: {
    imgHeight: function () {
      var offset = 320;
      return this.pageHeight - offset;
    },
  },

  mounted: function () {
    this.$vuetify.theme.dark = JSON.parse(
      window.localStorage.getItem("dark_mode")
    );
  },
};
</script>

<style scoped>
.logo-wrapper {
  height: 100%;
}
.logo-image {
  height: 100%;
  width: auto;
}
.finedTitle {
  font-weight: 900;
  text-shadow: 2px 2px #000000;
}

.social-icon {
  font-size: 21px;
  color: white;
}

.title {
  font-size: 3rem !important ;
  margin-bottom: 7rem !important;
}
.subtitle {
  font-size: 1.8rem !important ;
}
.text {
  font-size: 1.1rem !important ;
}

@media (max-width: 600px) {
  .title {
    font-size: 2rem !important ;
    margin-bottom: 4.5rem !important;
  }
  .subtitle {
    font-size: 1.3rem !important ;
  }
  .text {
    font-size: 1rem !important ;
  }
}
</style>
