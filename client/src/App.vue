<template>
  <v-app>
    <v-card app class="">
      <v-app-bar app
        color="#6A76AB"
        dark
        src="https://picsum.photos/1920/1080?random"
      >

        <v-app-bar-nav-icon> </v-app-bar-nav-icon>
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
    drawer : "",
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
