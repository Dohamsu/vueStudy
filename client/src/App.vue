<template>
<!-- v-app : vuetify 에서 최상단 컴포넌트로 교체됨 -->
  <v-app>
   <navigationBar/>
      <v-main>
        <v-sheet
          id="scrolling-techniques-3"
          class="overflow-y-auto"          
          max-height= 1500
          red
        >
          <router-view 
          v-if="drawer"/>
        </v-sheet>
          <!-- 라우터를 쓴다면 삽입 -->
      </v-main>
  </v-app>
</template>


<!--font_start -->
<style>

@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300&display=swap');

.dongleFont {
  font-family: 'Dongle'; 
  font-size: 2rem;
}

  /* @import "@/assets/css/common.css"; */


</style>
<!--font_end -->


<script>
import navigationBar from './views/NAV/NAV0100.vue'

export default {

  name: 'App',

  data: () => ({
    //
    darkTheme: true,
    drawer : true,
    tab : null,
    dialog : false,
    items: [
        { title: 'Home', to: "/" },
        { title: 'reservation' , to: "/reservation"},
        { title: 'About', to : "/about" },
      ],
      // right: null,
  }),
      components :{
        navigationBar,                
      },

  methods : {
    
     onClickImg : function(){
           this.$router.push({ path: '/about' })
     },
  },

};
</script>
