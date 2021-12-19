<template>
  <v-container class="blue">
    <v-card>
      <v-card-title>
        예약 가능 방탈출 찾기
        <h3 class="tt dongleFont">dd</h3>
      </v-card-title>

      <!-- main Contents -->
      <v-card
        class="grey"
        outlined
        :height ="cardHeight"
      >

      <!-- searching Form -->
      <v-container>
        <v-row 
        class="green"
        justify="center"
        align="center"
        >
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
          <v-btn
            elevation="2"
            large
            color="primary"
            class="searchBtn"
          >검색</v-btn>
        </v-row>
      </v-container>

      <template>
        <roomInfoCard/>
      </template>


      </v-card>

    </v-card>

  </v-container>
</template>

<style>
  @import "./css/HOM.css";
</style>

<script>
// @ is an alias to /src
import roomInfoCard from './components/HOM0100_main.vue'

export default {
  name: 'Home',
  data : () =>({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    regions: ['서울', '강남', '인천', '강서', '홍대', '혜화'],
    people: ['1명', '2명', '3명', '4명', '5명'],
    theme: ['어드벤처', '스릴러', '공포', '코미디', '감성', 'SF'],

  }),
  components: {
    roomInfoCard

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
