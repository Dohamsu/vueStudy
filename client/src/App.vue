<template>
<!-- v-app : vuetify 에서 최상단 컴포넌트로 교체됨 -->
  <v-app>
    <v-card app class="">
      <!-- 기본 레이아웃 컴포넌트 app 속성 주의 -->
      <v-app-bar app
        color="#6A76AB"
        dark
        src="https://picsum.photos/1920/1080?random"
      >

        <v-app-bar-nav-icon @click="drawer =! drawer"> </v-app-bar-nav-icon>
        <!-- 네비게이션 메뉴들  -->
        <template v-slot:extension>
          <v-tabs v-model="tab">
            <v-tab v-for="item in items" :key="item.title" :to="item.to"> 
              {{item.title}}
            </v-tab>

          </v-tabs>
        </template>
      </v-app-bar>
    </v-card>

    <!-- vue가 DOM에 마운트 될 때 레이아웃에 비례해 v-main의 크기가 조절됨 -->
    <v-main>
      <!-- 라우터를 쓴다면 삽입 -->
      <router-view/>
    </v-main>
  </v-app>
</template>
<script>

export default {
  name: 'App',

  data: () => ({
    //
    drawer : false,
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
