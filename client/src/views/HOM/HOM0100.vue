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

      <v-row
        justify="center"
        class="black--text grey lighten-3"
      >
        <v-col
          class="pt-10 pl-10"
          cols="12"
        >
          <div class="noticeBox">
            <h1 class="text-h4 noticeTitle text-center">
              공지사항
            </h1>
             dohamsu.shop으로 접속할 경우 핸드폰에서 pc버전으로 보이는 현상이 있습니다. 핸드폰으로 접속하실 경우 IP로 접속해주세요.
              <br><br>
               현재 방탈출 예약가능일자 검색 기능의 경우 날짜만 작동하며 검색으로 크롤링해오는 사이트는 아래와 같습니다
               예약가능 시간 외 다른기능은 추후 추가 예정입니다.(평점 조회 등 )
              <br><br>
              <b>  2022.03.07 </b>
              -  예약하기 버튼이 업데이트 되었습니다. 이제 예약 카드의 예약하기 버튼을 누르면
                해당날짜의 홈페이지로 이동합니다. 
              <br><br>
              <b>  2022.03.25 </b>
              - 홈페이지 디자인이 리뉴얼 되었습니다.
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>            
          <div class="noticeContent text-center">
            <v-icon x-large color="black" class="mb-10" >mdi-playlist-check</v-icon>
            <h1 class="text-h4 mb-5">
              LIST
            </h1>
              비밀의화원 다운타운 홍대
              <br><br>
              비밀의화원 혜화
              <br><br>
              비밀의화원 시네마틱 혜화
              <br><br>
              비밀의화원 리버타운 강남
              <br><br>
              비밀의화원 미드나잇 합정
              <br><br>
          </div>

        </v-col>
      </v-row>
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