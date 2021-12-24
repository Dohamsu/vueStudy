<template>
  <div class="">


    <template class="cardRowT">
      <v-row
        class=" cardRow"   

      >
        <v-col
          align="center"
          justify="center"
          v-for="(obj, i) in dataList[0].availList"
          :key="i"
        >
        <v-card
          sm="3"
          class="my-12"
          max-width="250"

        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="250"
            class="themeImg"
            :src='obj.imgSrc' 
          ></v-img>

          <v-card-title
            v-text="obj.theme"
          >네드</v-card-title>

          <v-card-text>
            <v-row
              align="center"
              class="mx-0"
            >
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">
                4.5 (413)
              </div>
            </v-row>

            <div class="my-4 text-subtitle-2 "
               v-text="obj.themeTitle">             
            </div>

            <v-btn
            text
            @click="showDetail=!showDetail"
            >테마 설명 보기</v-btn>
            <div
              v-show="showDetail"
              v-text="obj.themeDetail"
            ></div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>예약가능 시간</v-card-title>

          <v-card-text>
            <v-chip-group
              active-class="deep-purple accent-4 white--text"
              column
            >
              <v-chip
              v-for="(times, i) in obj.timeStamps"
              :key="i"
              v-text="times"
              >5:30PM</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="deep-purple lighten-2"
              text
              @click="reserve"
            >
              예약하기
            </v-btn>
          </v-card-actions>
        </v-card>
        </v-col>
      </v-row>


    </template>
  </div>
</template>

<script>
export default {
  name: 'reserveTables',
  props: {
    msg: String
  },
   data : () =>({
     showDetail: false,
     selection : [],
     dataList : [{
       storeInfo : {
        storeName : "강남 키이스케이프 더오름점",
         addr : "서울 강남구 오오오",
         phone : "02-2222-3333"
       },
       availList : [{
          theme : "네드",
          imgSrc : "https://keyescape.co.kr/file/theme_info/26_a.jpg",
          timeStamps : [ "14:40", "16:25"],
          themeTitle : "친구의 부탁을 나몰라라 할 순 없지!",
          themeDetail : `친구의 부탁을 나 몰라라 할 순 없지!” 마을에서 말썽꾸러기로 유명한 네드. 어느 날, 그런 네드에게 새벽에 걸려온 친구의 전화. 전화기 너머에서는 친구 아빠 ‘알베리치’가 궂은 날씨에 택배 배달을 나가서 아직 집에 들어오지 않아 걱정이라고 한다. 바로 어제, '요즘 마을에서 이상한 일이 벌어지는 것 같으니, 집에 일찍 일찍 들어오자!'라고 친구와 약속까지 했다는데…. 분명 심상치 않다. 리더인 내가 나서줘야지! 엄마 죄송해요. 통금시간은 못 지킬 거 같아요...
                      ※ 테마 내부에서 발생한 의류/ 신발의 오염에 대한 보상이 불가하오니, 편한 복장/ 운동화 착용을 권장합니다. (구두/ 치마 비추천) ※ 2인부터 플레이 가능하시나, 추천 인원은 3인이상입니다." `
       },
       {
          theme : "고백",
          imgSrc : "https://keyescape.co.kr/file/theme_info/23_a.jpg",
          timeStamps : [ "11:25", "13:10", "17:30"],
          themeTitle : "아직도 기억나. 널 처음봤던 그 순간",
          themeDetail : `아직도 기억나. 널 처음봤던 그 순간.
                      가만히 서 있는 뒷모습조차 너무나 귀여웠어.
                      한눈에 알아차렸지. 우린 너무나 잘 맞을 거란 걸.
                      제대로 시작도 못해보고 널 이렇게 떠나보낼 수 없어.

                      지금, 만나러 갑니다.

                      ※활동성이 상당히 높은 테마이므로, 반드시 편한 복장/운동화 착용을 권장합니다.(구두/치마 비추천)
                      ※고백 테마 2인 부터 플레이 가능하시나, 추천인원은 3인이상입니다.`  
                      },
         {
          theme : "엔제리오",
          imgSrc : "https://keyescape.co.kr/file/theme_info/27_a.jpg",
          timeStamps : [ "11:25", "13:10", "17:30"]       
       }

       ]

     }]


   }),
  methods : {
    reserve : function(
    ){
      alert("dd");
    }

  }
  }

</script>