<template>
  <div class="hello">
    <h3>{{ msg }}</h3>


    <template class="cardRowT">
      <v-row
        class="blue cardRow"   

      >
        <v-col
          align="center"
          justify="center"
          v-for="(obj, i) in dataList[0].availList"
          :key="i"
        >
          <img class="themeImg" 
            :src='obj.imgSrc' 
            alt="사진" 
            style="height:140px"
          >
          <div>
            <span class="themeName"
            >{{obj.theme}}</span>
            <template class="timeTable">  
              <v-row class="timeList">
                <v-col class="timeCard"
                  sm="4"
                  v-for="(times,i) in obj.timeStamps"
                  :key="i"
                >
                
                  <v-card class="timeCardInner"
                      v-text="times">
                    13:30
                  </v-card>                
                </v-col>      
              </v-row>
            </template>
          </div>
        </v-col>
      </v-row>


    </template>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
   data : () =>({
     dataList : [{
       storeInfo : {
        storeName : "강남 키이스케이프 더오름점",
         addr : "서울 강남구 오오오",
         phone : "02-2222-3333"
       },
       availList : [{
          theme : "네드",
          imgSrc : "https://keyescape.co.kr/file/theme_info/32_a.jpg",
          timeStamps : [ "14:40", "16:25"]       
       },
       {
          theme : "고백",
          imgSrc : "https://keyescape.co.kr/file/theme_info/31_a.jpg",
          timeStamps : [ "11:25", "13:10", "17:30"]       
       }

       ]

     }]


   })
}
</script>