<template>
  <v-app app
  class="vBody">
    <v-container>
      <v-layout
        class="mb-3">
        <v-flex
        class="">
          <!-- main Contents -->

          <v-card-title
          tag="title"
          class="font-weight-bold"
          >
            방탈출 정보 검색
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
                cols="4"
                sm="2"
              >
             
                <v-text-field
                  label="검색어"
                  dense
                  outlined
                  
                  v-model="searchKeyword"
                  v-on:keyup.enter="searchInfo()"
                  ></v-text-field>

              </v-col>

              <v-col>
                <v-btn
                  elevation="2"
                  color="primary"
                  class="searchBtn"
                  @click="searchInfo()"
                >검색</v-btn>
              </v-col>
            </v-row>
          </v-container>

          <template>
            <!-- <roomInfoCard
              ref="roomListComponent"            
            /> -->
          </template>

        </v-flex>
        
      </v-layout>
    </v-container>
  </v-app>
</template>

<style scoped>
</style>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data : () =>({
    searchKeyword : ""
  }),
  components: {
  },
  methods:{
    searchResult : function(){
      let region = this.selectedRegion;
      let people = this.selectedPeople;
      let jangr  = this.selectedJangr ;
      let date   = this.date;
      let searchData = {
        "region" : region,
        "people" : people,
        "jangr" : jangr,
        "month" : date.substr(5,2),
        "day" :  date.substr(8,2),
        
      }
      this.$refs.roomListComponent.getBangtalInfo(searchData);
      // this.alert("해당기능은 아직 이용하실 수 없습니다.","error");

    },

    searchInfo() {
		
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
