<template>
  <!-- 기본 레이아웃 컴포넌트 app 속성 주의  해당 속성을 넣어야만 기본 레이아웃으로 적용됨  -->
      <v-app-bar app
        color="#6A76AB"
        dark
        prominent
        shrink-on-scroll
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-3"
        src="https://picsum.photos/1920/1080?random"
      >

      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

        <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon
        >mdi-heart</v-icon>
      </v-btn>

      <v-btn icon
      @click="dialog = true">
        <v-icon>mdi-login</v-icon>
      </v-btn>

        <v-dialog
        v-model="dialog"
        >
          <signInPopup
          v-on:dialog_callback="dialogCallback"
          />
        </v-dialog>
      <v-btn icon
      @click="dialog2 = true">
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>

        <v-dialog
        v-model="dialog2"
        >
          <logInPopup
          v-on:dialog_callback="dialogCallback"
          />
        </v-dialog>

        <!-- 네비게이션 메뉴들  -->
        <template v-slot:extension>
          <v-tabs v-model="tab">
            <v-tab v-for="item in items" :key="item.title" :to="item.to"> 
              {{item.title}}
            </v-tab>
          </v-tabs>
         <v-switch
          v-model="darkTheme"
          inset
          :label="`Dark Theme`"
        ></v-switch>
          
        </template>

      </v-app-bar>
      <!-- vue가 DOM에 마운트 될 때 레이아웃에 비례해 v-main의 크기가 조절됨 -->
</template>

<style scoped>
  @import "./css/NAV.css";
</style>


<script>
import signInPopup from './components/NAV0100_sign.vue'
import logInPopup from './components/NAV0100_login.vue'


export default {

  name: 'navigationBar',

  data: () => ({
    //
    darkTheme: true,
    drawer : true,
    tab : null,
    dialog : false,
    dialog2 : false,
    items: [
        { title: 'Home', icon: 'mdi-view-dashboard', to: "/" },
        { title: 'reservation', icon: 'mdi-image' , to: "/signup"},
        { title: 'About', icon: 'mdi-help-box', to : "/about" },
        { title: 'dododo', icon: 'mdi-help-box', to : "/222" },
      ],
      // right: null,
  }),
      components :{
        signInPopup,
        logInPopup        
      },

  methods : {
    
     dialogCallback : function(){
       this.dialog = false;

     }
  },

};
</script>
