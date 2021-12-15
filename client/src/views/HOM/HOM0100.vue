<template>
  <v-container class="blue">
    <v-card>
      <v-card-title>
        예약 가능 방탈출 찾기
      </v-card-title>
      <v-card
        class=""
        outlined
        :height ="cardHeight"
      >
      <template>
        <v-container fluid>
          <v-row align="center">
            <v-col
              class="d-flex"
              cols="12"
              sm="2"
            >
              <v-select
                :items="regions"
                label="지역"
                dense
                outlined
              ></v-select>
            </v-col>
            <v-col
              class="d-flex"
              cols="12"
              sm="2"
            >
              <v-select
                :items="people"
                label="인원"
                dense
                outlined
              ></v-select>
            </v-col>
            <v-col
              class="d-flex"
              cols="12"
              sm="3"
            >
              <v-select
                :items="theme"
                label="테마"
                dense
                outlined
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
      </template>




      </v-card>

    </v-card>

  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from './components/HOM0100_main.vue'

export default {
  name: 'Home',
  data : () =>({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    regions: ['서울', '강남', '인천', '강서', '홍대', '혜화'],
    people: ['1명', '2명', '3명', '4명', '5명'],
    theme: ['어드벤처', '스릴러', '공포', '코미디', '감성', 'SF'],

  }),
  components: {
    // HelloWorld

  },

  computed : {
    cardHeight () {
      switch(this.$vuetify.breakpoint.name){

        case 'xs' : return 500
        case 'sm' : return 900
        case 'md' : return 1200
        default: return 500
      }
    }
  }


}
</script>

<style>
  @import "/css/HOM.css";
</style>