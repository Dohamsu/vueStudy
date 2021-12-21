<template>
  <div class="hello">
    <h3>{{ msg }}</h3>


    <template class="cardRow">
      <v-row
        class="blue"    
         
      >
        <v-col
          align="center"
          justify="center"
        >
          <img src="@/images/home.png" alt="ddd" style="height:30px" >
          <div>
            빚지고 런던
          </div>
        </v-col>
           <v-col
            align="center"
            justify="center"
           >
          <img src="@/images/home.png" alt="ddd" style="height:30px" >
          <div>
            dd
          </div>
        </v-col>
           <v-col>
          <img src="@/images/home.png" alt="ddd" style="height:30px" >
          <div>
            dd
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
          imgsrc : "https://keyescape.co.kr/file/theme_info/32_a.jpg",
          timeStamps : [ "14:40", "16:25"]       
       }

       ]

     }]


   })
}
</script>