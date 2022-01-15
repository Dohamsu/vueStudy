<template>
<!-- v-app : vuetify 에서 최상단 컴포넌트로 교체됨 -->
  <v-app>
   <navigationBar/>
      <v-main app>
        <v-sheet
          id="scrolling-techniques-3"
          class="overflow-y-auto"          
          red
          height="90vh"
        >
          <router-view 
          v-on:customAlert="customAlert"
          v-if="drawer"/>
        </v-sheet>
          <!-- 라우터를 쓴다면 삽입 -->
          <customAlert
          ref="customAlert"
          />
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
<style>
html {
  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

html::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>

<script>
import navigationBar from './views/NAV/NAV0100.vue'
import customAlert from './views/COM/ALE0100.vue'

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
        customAlert             
      },

  methods : {
    customAlert :function(msg,type){
      console.log("앱점 표");
      this.$refs.customAlert.applyMsg(msg,type);
    }
  


  },

};
</script>
