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
                  v-on:keypress.enter="searchInfo()"
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
            <v-data-table
              :headers="headers"
              :items="bangtalList"
              item-key="pid"
              class="elevation-1"
              :search="innerSearchKeyword"
              :custom-filter="filterOnlyCapsText"
              no-data-text="검색결과가 없습니다."
            >
              <template v-slot:top>
                <v-text-field
                  v-model="innerSearchKeyword"
                  label="결과 내 검색"
                  class="mx-4"
                ></v-text-field>
              </template>
            </v-data-table>
          </template>

        </v-flex>
        
      </v-layout>
    </v-container>
  </v-app>
</template>

<style scoped>
  @import "./css/sea.css";
</style>

<script>
// @ is an alias to /src
import CONST from '../../plugins/CONST.js'

export default {
  name: 'Home',
  data : () =>({
    searchKeyword : "",
    innerSearchKeyword: '',
    isClick : true,
    bangtalList : []

  }),
  components: {
  },
  methods:{  
    searchInfo() {
      //이중클릭 및 무분별한 서버 요청 방지
      if (this.isClick) {
          this.isClick = !this.isClick;
          setTimeout(()=> {
              this.isClick = true;
          }, 3000);
      } else {
          this.$dialog.warning({
              text: '검색은 3초에 한번씩만 가능합니다.',
              title: '정보',
              persistent: false,
              waitForResult :false,
              actions: {true: {text: '확인'}}
          });
        return;
      }

      if(this.searchKeyword.length<1){
          this.$dialog.warning({
            text: '검색어는 한글자 이상으로 입력해주세요.',
            title: '주의',
            persistent: false,
            waitForResult :false,
            actions: {true: {text: '확인'}}
          });
        return;
      }

      //서버요청
      this.$http.post(CONST.BANTAL_INFO_URL,{
        "searchKeyword" : this.searchKeyword
      },{
          headers: { }
      }).then(res => {
        this.bangtalList = res.data;
      });
		},
    
    filterOnlyCapsText (value, innerSearchKeyword) {
      return value != null &&
        innerSearchKeyword != null &&
        typeof value === 'string' &&
        value.toString().toLocaleUpperCase().indexOf(innerSearchKeyword) !== -1
    }
  },


  computed : {
    headers () {
      return [
        { text: '지역1', value: 'region1' },
        { text: '지역2', value: 'region2' },
        { text: '지점명', value: 'store_name' },
        { text: '테마명', value: 'theme_name' },
        { text: '평점', value: 'score' },
        { text: '난이도', value: 'difficulty' },
        { text: '공포도', value: 'horror' },
      ]
    },
  }


}
</script>
