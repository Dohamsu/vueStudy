<template>
  <v-app app
  class="vBody">
    <v-container>
      <v-layout
        class="mb-3">
        <v-flex
        class="backImg">
          <!-- main Contents -->

          <v-card-title
          tag="title"
          class="font-weight-bold"
          >
            예약 가능 방탈출 찾기
          </v-card-title>
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
                sm="2"
              >
                  <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="20"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="날짜"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      @input="menu2 = false"
                      locale="ko"
                      no-title
                      :day-format="dayFormat"
                      ></v-date-picker>
                  </v-menu>
              </v-col>
              <v-col>

                <v-btn
                  elevation="2"
                  color="primary"
                  class="searchBtn"
                  @click="searchResult"
                >검색</v-btn>

              </v-col>
            </v-row>
          </v-container>

          <template>
            <roomInfoCard/>
          </template>

        </v-flex>
        
      </v-layout>
    </v-container>
  </v-app>
</template>

<style scoped>
  @import "./css/res.css";
</style>

<script>
// @ is an alias to /src
import roomInfoCard from './components/RES0100_list.vue'

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
    picker : "",
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    isPopup : false,
    msg:"ddd"
  }),
  components: {
    roomInfoCard
  },
  methods:{
    searchResult : function(){
      // let region = this.selectedRegion;
      // let people = this.selectedPeople;
      // let jangr  = this.selectedJangr ;
      // let date   = this.date ;
      this.alert("해당기능은 아직 이용하실 수 없습니다.","error");

    },

    dayFormat(day) {
			const arr = day.split('-');
			return Number(arr[arr.length-1]);
		},


    alert(msg,type){
      console.log("커스텀 얼럿");
      this.$emit("customAlert", msg, type);
    }


  },


  computed : {

  }


}
</script>
