<template>
  <v-container class="blue">
    <v-card>
      <v-card-title>
        $vuetify.breakpoint.name: {{$vuetify.breakpoint.name}}
      </v-card-title>
      <v-card
        class="red"
        outlined
        :height ="cardHeight"
      >


      </v-card>

    </v-card>

  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from './components/HOM0100_main.vue'

export default {
  name: 'Home',
  data : () =>({}),
  components: {
    // HelloWorld

  },

  computed : {
    cardHeight () {
      switch(this.$vuetify.breakpoint.name){

        case 'xs' : return 100
        case 'sm' : return 200
        case 'md' : return 300
        case 'xs' : return 100
        defualt: return 500
      }
    }
  }


}
</script>

<style>
  @import "/css/HOM.css";
</style>