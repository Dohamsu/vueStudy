<template>
  <v-container class="vBody">
    <v-card>
      <v-card-title
      tag="title"
      >
        예약 가능 방탈출 찾기
      </v-card-title>

      <!-- main Contents -->
      <v-card
        class=""
        outlined
        :height ="cardHeight"
      >
      <!-- searching Form -->
      <v-container>
        <v-row 
        class="searchForm"
        justify="center"
        align="center"
        >
          <v-col
            class="d-flex"
            sm="2"
          >
            <v-select
              v-model="selectedRegion"
              :items="regions"
              label="지역"
              dense
              outlined
              class="region"
            ></v-select>
          </v-col>
          <v-col
            class="d-flex"
            sm="2"
          >
            <v-select
              v-model="selectedPeople"
              :items="people"
              label="인원"
              dense
              outlined
            ></v-select>
          </v-col>
          <v-col
            class="d-flex"
            sm="2"
          >
            <v-select
              v-model="selectedJangr"
              :items="jangr"
              label="테마"
              dense
              value
              outlined
              :class="{'smallFont': selectedJangr ==='스릴러'}"
            ></v-select>
          </v-col>
          <v-col
          sm="1">
            <div>
               <v-btn
            elevation="2"
            color="primary"
            class="searchBtn"
            @click='datePopOpen=!datePopOpen'
          >검색</v-btn>
            <v-date-picker v-model="picker"
             v-show="datePopOpen"
            ></v-date-picker>

            </div>
          </v-col>
          <v-btn
            elevation="2"
            color="primary"
            class="searchBtn"
            @click="searchResult"
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

<style scoped>
  @import "./css/HOM.css";
</style>

<script>
// @ is an alias to /src
import roomInfoCard from './components/HOM0100_main.vue'

export default {
  name: 'Home',
  data : () =>({
    regions: ['서울', '강남', '인천', '강서', '홍대', '혜화'],
    people: ['1명', '2명', '3명', '4명', '5명'],
    jangr: ['어드벤처', '스릴러', '공포', '코미디', '감성', 'SF'],
    selectedRegion : "",
    selectedPeople : "",
    selectedJangr : "",
    datePopOpen : false,
    picker : ""
  }),
  components: {
    roomInfoCard

  },
  methods:{
    searchResult : function(){
      let region = this.selectedRegion;
      let people = this.selectedPeople;
      let jangr = this.selectedJangr ;


      alert("선택 지역 : " + region + "\n" +
            "선택 인원 : " + people +"\n"+
            "선택 장르 : " + jangr );

    }


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
