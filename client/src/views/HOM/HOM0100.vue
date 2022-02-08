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
        justify="center"
        class="black--text"
      >
        <v-col
          class="pt-10 pl-10"
          cols="12"
        >
          <h1 class="text-h4 mb-5">
            #공지사항
          </h1>
          <div>
              <p>
               현재 방탈출 예약가능일자 검색 기능의 경우 날짜만 작동하며 검색으로 크롤링해오는 사이트는 아래와 같습니다
               예약가능 시간 외 다른기능은 추후 추가 예정입니다.(예약하기 바로가기, 평점 조회 등 )
              </p>
              <li>비밀의화원 홍대점</li>
              <li>비밀의화원 혜화점</li>
              <li>비밀의화원 홍대점</li>
            
            <v-divider
            class="mt-5 mb-5"
            ></v-divider>
            외에 작동하는 기능은 아래와 같습니다

            <li>회원가입</li>
            <li>로그인</li>
            <li>로그아웃</li>
          </div>

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