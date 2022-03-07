<template>
  <!-- 기본 레이아웃 컴포넌트 app 속성 주의  해당 속성을 넣어야만 기본 레이아웃으로 적용됨  -->
      <v-app-bar app
        color="#6A76AB"
        dark
        prominent
        :shrink-on-scroll="!isXsSize"
        :fade-img-on-scroll="!isXsSize"
        scroll-target="#scrolling-techniques-3"
        src="https://picsum.photos/1920/1080?random"
        :height='navHeight'
        :class="{xsSize:isXsSize}"
      >

      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <!-- 메뉴 햄버거 버튼 -->
      <v-app-bar-nav-icon
        class="hidden-sm-and-up xsSize"
        @click="xsMenuOpen=!xsMenuOpen"
      ></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <!-- 회원가입 버튼 -->
      <v-btn
        class="mt-1 mr-2"
        v-show="!isLogin"
        @click="showSignPop = true"
        >
        <v-icon left >mdi-login</v-icon>
        signIn
      </v-btn>
      <v-dialog
      persistent
      v-model="showSignPop"
      >
        <signInPopup
        v-on:dialog_callback="dialogCallback"
        />
      </v-dialog>
      <!-- 로그인 버튼 -->
      <v-btn
        class="mt-1"
        v-show="!isLogin"
        @click="showLoginPop = true">
        <v-icon left>mdi-account-circle</v-icon>
        Login
      </v-btn>
      <v-menu 
          offset-y
        >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            v-show="isLogin"
            width="35"
            height="35"
            class="mt-1"
          >
          <v-avatar
          width="50"
          height="50">
            <v-icon dark large>
            mdi-account-circle
            </v-icon>
          </v-avatar>        
          </v-btn>
        </template>
        <v-list dense>
          <v-list-item-group>
            <v-list-item
            @click="showMyInfo">
                정보보기
            </v-list-item>
            <v-list-item
            @click="logOut">
              <v-list-item-content>
                로그아웃
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
      <v-dialog
      v-model="showLoginPop"
      persistent
      >
        <logInPopup
        v-on:dialog_callback="dialogCallback"
        />
      </v-dialog>

        <!-- sm 이상 네비게이션 메뉴들  -->
        <template v-slot:extension
        :class="{xsSize:isXsSize}"
        >
          <v-tabs v-model="tab"
            class="hidden-xs-only"
          >
            <v-tab v-for="item in items" :key="item.title" :to="item.to"> 
              {{item.title}}
            </v-tab>
          </v-tabs>          
        <!-- xs  네비게이션 메뉴들  -->
          <transition name="fade">
            <v-tabs v-model="tab"
              class="hidden-sm-and-up blue text-center xsSize"
              v-show="xsMenuOpen"
              color="white"
              vertical
              height="200"
              
            >
              <v-tab 
              v-for="item in items" :key="item.title" :to="item.to"
              @click="xsMenuOpen=false"> 
                {{item.title}}
              </v-tab>
            </v-tabs>      
          </transition>    
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
    isLogin : false,
    xsMenuOpen : false,
    tab : null,
    showSignPop : false,
    showLoginPop : false,
    items: [
        { title: 'Home',  to: "/" },
        { title: 'reservation', to: "/reservation"},
        { title: 'About',  to : "/about" },
        { title: 'history', to : "/history" },
        { title: 'mmr', to : "/mmr" },
        { title: 'search', to : "/search" },
      ],
      // right: null,
  }),
      components :{
        signInPopup,
        logInPopup        
      },

  methods : {
    
    //TODO 현재 로그인 관련 키값은 user_nickname으로 하고있으나 나중에는 세션으로 관리해야함
    //임시로 해놓은 처리
    logOut : function(){
      this.$dialog.confirm({
          text: '로그아웃 하시겠습니까?',
          title: '로그아웃',
          type : 'warning',
          actions: {
            false: '취소',
            true: {
              text: '확인',
              handle: () => {
                return new Promise(resolve => {
                    localStorage.removeItem("USER_NICKNAME");
                    this.refeshLoginStat();
                     this.$dialog.message.success('로그아웃 되었습니다', {
                      position: 'bottom',
                      timeout :1500
                    });
                  setTimeout(resolve, 0)
                })
              }
            }
          }
        });
    },

    showMyInfo : function(){

    },
    
    dialogCallback : function(){
      this.showLoginPop  = false;
      this.showSignPop = false;
      this.refeshLoginStat();
    },

    refeshLoginStat : function(){
      if(localStorage.getItem("USER_NICKNAME")==null){
        this.isLogin =  false;
      }else{
        this.isLogin =  true;
      }
    },
    
     
  },
  computed : {
    navHeight() {
      let height = 100;
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': height = '0px'
        break
      }
      return height;
    },
    isXsSize(){
      return this.$vuetify.breakpoint.name == "xs";
    }
  },
  mounted(){
    this.refeshLoginStat();
  },
  created(){
    document.querySelector('html').classList.remove('v-app-bar--fade-img-on-scroll','v-app-bar--shrink-on-scroll');
    document.querySelector('html').classList.remove('xsSize');
  }

};
</script>
