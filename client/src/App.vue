<template>
<!-- v-app : vuetify 에서 최상단 컴포넌트로 교체됨 -->
  <v-app>
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
        <!-- 네비게이션 메뉴들  -->
        <template v-slot:extension>
          <v-tabs v-model="tab">
            <v-tab v-for="item in items" :key="item.title" :to="item.to"> 
              {{item.title}}
            </v-tab>
         <v-switch
          v-model="darkTheme"
          :label="`Dark Theme: ${darkTheme.toString()}`"
        ></v-switch>
          </v-tabs>
          
        </template>

      </v-app-bar>
      <!-- vue가 DOM에 마운트 될 때 레이아웃에 비례해 v-main의 크기가 조절됨 -->
      <v-main>
        <v-sheet
          id="scrolling-techniques-3"
          class="overflow-y-auto"          
          max-height= 800
          red
        >
          <router-view 
          v-if="drawer"/>
        </v-sheet>
          <!-- 라우터를 쓴다면 삽입 -->
      </v-main>
  </v-app>
</template>
<script>


export default {
  
  name: 'App',

  data: () => ({
    //
    darkTheme: true,
    drawer : true,
    tab : null,
    items: [
        { title: 'Home', icon: 'mdi-view-dashboard', to: "/" },
        { title: 'reservation', icon: 'mdi-image' , to: "/signup"},
        { title: 'About', icon: 'mdi-help-box', to : "/about" },
      ],
      // right: null,
  }),

  methods : {
    
     onClickImg : function(){
           this.$router.push({ path: '/about' })
     }
  },

};
</script>
