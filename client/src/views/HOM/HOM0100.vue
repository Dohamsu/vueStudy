<template>
  <v-app
  app>  
    <!-- <v-main>
      <v-container
      class="fill-height homeMain">
        <v-layout>
          <v-flex
          class="text-center text-h2"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </v-flex>
        </v-layout>
      </v-container>

        <v-container
      class="fill-height">
        <v-layout>
          <v-flex
          class="text-center text-h2"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </v-flex>
        </v-layout>
      </v-container>
    </v-main> -->
      <v-parallax
      src="@/images/main_back.svg"
      height="900" >
      <v-row
        align="center"
        justify="center"
        class="black--text"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <h1 class="text-h4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorum deleniti, quasi, cupiditate quis omnis, velit sunt laborum quam consequuntur porro eum pariatur reiciendis quibusdam eos! Vitae iste temporibus explicabo?
          </h1>

        </v-col>
      </v-row>
      </v-parallax>
      <v-parallax
      src="@/images/main_back2.svg"
      height="800" 
      class="">
      <v-row
        align="center"
        justify="center"
        class="black--text"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <h1 class="text-h4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorum deleniti, quasi, cupiditate quis omnis, velit sunt laborum quam consequuntur porro eum pariatur reiciendis quibusdam eos! Vitae iste temporibus explicabo?
          </h1>

        </v-col>
      </v-row>
      </v-parallax>

  </v-app>
</template>



<style scoped>
  @import "./css/HOM.css";
</style>




<script>

export default {
  components: {
  },
  methods  : {
  }
}
</script>