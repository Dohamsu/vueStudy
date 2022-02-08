<template>
  <div>
    <template class="cardRowT">
      <v-row
        class=" cardRow ml-1 mr-1"  
        justify="start"

      >
        <v-col
          align="center"
          v-for="(obj, objIndex) in dataList[0].availList"
          :key="objIndex"
          cols='colNumOnRow()'

        >
        <v-card   
          class="mt-3 roomCard"
          width="250"

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
          ></v-card-title>

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

            <div class="my-6 text-subtitle-2 "
               v-text="obj.themeTitle">             
            </div>

            <v-btn
            text
            @click="toggleDetail" 
            v-show="obj.themeDetail"   
            >테마 설명 보기</v-btn>
            <div
              v-show="active"
              v-html="obj.themeDetail"
                            

              class="themeDetail"
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
              v-bind:time="times"
              ></v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="deep-purple lighten-2"
              text
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
import CONST from '../../../plugins/CONST.js'

export default {
  name: 'reserveTables',
   data : () =>({
     CONST :{
     },

     active : false,
     isClick : true,
     showDetail: false,
     selection : [],
     searchInfo : {
       region : "혜화",
       people : "4",
       jangr : "무관",
       date : "2021-02-03"
     },
     dataList : [{
       storeInfo : {
        storeName : "강남 키이스케이프 더오름점",
         addr : "서울 강남구 오오오",
         phone : "02-2222-3333"
       },
       availList : [
         {
          theme : "네드",
          imgSrc : "https://keyescape.co.kr/file/theme_info/26_a.jpg",
          timeStamps : [ "14:40", "16:25"],
          themeTitle : "친구의 부탁을 나몰라라 할 순 없지!",
          themeDetail : `친구의 부탁을 나 몰라라 할 순 없지!” 마을에서 말썽꾸러기로 유명한 네드. 어느 날, 그런 네드에게 새벽에 걸려온 친구의 전화. 전화기 너머에서는 친구 아빠 ‘알베리치’가 궂은 날씨에 택배 배달을 나가서 아직 집에 들어오지 않아 걱정이라고 한다. 바로 어제, '요즘 마을에서 이상한 일이 벌어지는 것 같으니, 집에 일찍 일찍 들어오자!'라고 친구와 약속까지 했다는데…. 분명 심상치 않다. 리더인 내가 나서줘야지! 엄마 죄송해요. 통금시간은 못 지킬 거 같아요...
                      <br><br>※ 테마 내부에서 발생한 의류/ 신발의 오염에 대한 보상이 불가하오니, 편한 복장/ 운동화 착용을 권장합니다. (구두/ 치마 비추천) 
                      <br>※ 2인부터 플레이 가능하시나, 추천 인원은 3인이상입니다." `
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
       },
      //   {
      //     theme : "엔제리오",
      //     imgSrc : "https://keyescape.co.kr/file/theme_info/27_a.jpg",
      //     timeStamps : [ "11:25", "13:10", "17:30"]       
      //  }

       ]

     }]


   }),
  methods : {

    getBangtalInfo : function(data){

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

      //서버요청
      this.$http.post(CONST.BANTAL_ULR,{
        "searchInfo" : data
      },{
          headers: {  }
      }).then(res => {
        this.dataList[0].availList = res.data;
        console.table(res.data);
      });
    },
    // 테마 설명 보기 토글
    toggleDetail : function(event){
      let themeDetail = event.target.parentNode.nextSibling;

      if(themeDetail.style.display=="none"){
        themeDetail.style.display = "";
      }else{
        themeDetail.style.display = "none";
      }
    },
    created(){
    },
  },
    computed : {

      //반응형으로 카드 갯수 조절
      colNumOnRow(){
        switch(this.$vuetify.breakpoint.name){
          case 'xs' : return 3
          case 'sm' : return 3
          case 'md' : return 3
          case 'lg' : return 3
          default: return 4
        }
      }

    }

  }

</script>