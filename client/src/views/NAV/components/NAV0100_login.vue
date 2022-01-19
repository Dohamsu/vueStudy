<template>
      <v-card
      width="350px"
      height="500px"
      >
        <v-img
        src=""></v-img>
        <v-card-title>
          <div>
            <v-icon>mdi-login</v-icon>
            <span class="text-h5 mb-3 ml-2" >로그인</span>
          </div>
            <v-spacer></v-spacer>
          <div>
            <v-icon large
            class="closeBtn"
            @click="closeDialog">mdi-close</v-icon>
          </div>
        </v-card-title>
        <v-card-text class="pb-0">
          <v-container>
            <v-form
              ref="form"
              v-model="formValid"
              lazy-validation
            >
            <v-row
            dense>
              <v-col cols="12">
                <v-text-field
                  prepend-inner-icon="mdi-account"
                  label="아이디"
                  required
                  dense
                  outlined
                  v-model="userInfo.id"
                  :rules="[validations.blankCheck]"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  prepend-inner-icon="mdi-key"
                  label="비밀번호"
                  required
                  dense
                  outlined
                  :append-icon="passShow ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="passShow ? 'text' : 'password'"
                  @click:append="passShow = !passShow"
                  v-model="userInfo.password"
                  :rules="[validations.blankCheck]"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-checkbox
                class="mt-0 mb-0"
                color="green"
                v-model="autoLogin"
                label="로그인 상태 유지"></v-checkbox>
              </v-col>
            </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            outlined
            large            
            min-width="150px"
            height="38px"
            @click="[submitData()]"
            color="white"
            class="black"
            
          >
            로그인
          </v-btn>
          <v-spacer></v-spacer>

        </v-card-actions>
        <v-flex
          class="text-center">
          <v-btn
            width="150"            
          >
          <v-img
            src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
            @click="kakaoLogin(closeDialog)"
            width="150"
          />
          </v-btn>
        </v-flex>
        <v-card-text
         class="mt-8"
        >
          <v-row 
            cols="12"    
            class="subMenu"        
          >
            <v-col
             align="center"
             cols="4"
             @click="resetPassword">
              비밀번호 찾기
            </v-col>
            <v-divider vertical inset></v-divider>
             <v-col
             align="center"
             cols="4"
             @click="searchMyId">
              아이디 찾기
            </v-col>
            <v-divider vertical inset></v-divider>
            <v-col
            align="center"
            cols="4"
            @click="goSignUp">
              회원가입
            </v-col>
        </v-row>

        </v-card-text>
      </v-card>
      
</template>



<script>

export default {

  name: 'signUpDialog',

  data : () =>({  
    dialog: true,
    passShow : false,
    agreeCheckBox : false,
    autoLogin : false,
    formValid : true,
    formValidate : false, //입력폼 유효성 검증
    userInfo : {
      name : "",
      id : "",
      password : "",
      email : ""      
    },
    validations:{
      blankCheck   : input => !!input|| '빈칸을 입력해주세요',


      
    } ,

  }),
  components: {
    
  },
  methods:{

    //로그인 
    submitData : function(){
      console.log(this.userInfo);
      console.log(this.autoLogin);
      let validate = this.$refs.form.validate();

      if(validate){
        if(this.autoLogin){
          console.log("자동로그인 온");
          localStorage.setItem("AUTO_LOGIN", true);
        }
       
        localStorage.setItem("USER_NICKNAME", this.id); 

        this.$dialog.message.success('로그인 되었습니다', {
          position: 'bottom'
        });

        this.$refs.form.reset();
        this.closeDialog();
        this.formValidate = true;



      }

    },

    //카카오 로그인
    kakaoLogin : function(callback){  
      let accessToken = localStorage.getItem("KAKAO_ACCESS_TOKEN");
      
      if(accessToken){
        window.Kakao.Auth.setAccessToken(accessToken);
        getUserInfo(callback);
      }else{
        window.Kakao.Auth.login({
          scope : "profile_nickname",
          success: function(response) {
            console.log(response);
            //로컬 스토리지에 토큰 저장
            localStorage.setItem("KAKAO_ACCESS_TOKEN", response.access_token);
            this.$dialog.message.success('로그인 되었습니다', {
              position: 'bottom'
            });
            getUserInfo(callback);
            
          },
          fail: (error) => {
            console.log(error);
            this.$dialog.error({
              text: '로그인에 실패했습니다. 잠시 후 다시 시도해주세요.',
              title: '오류',
              persistent: false,
              waitForResult :false,
              actions: {true: {text: '확인'}}
            });
          },
        });

      }

      function getUserInfo(callback){
        window.Kakao.API.request({
          url:'/v2/user/me',
          success : res=> {
            console.log("정보 받아오기 성공");
            localStorage.setItem("USER_NICKNAME", res.properties.nickname); 
            callback();          
          },
           fail: (error) =>{
            console.log(error);
            alert("로그인에 실패했습니다. 잠시 후 다시 시도해주세요.");
            localStorage.removeItem("KAKAO_ACCESS_TOKEN"); 

          },
        });      
      }    
    },

    closeDialog :function(){
      this.$refs.form.reset();
      this.$refs.form.resetValidation()
      this.$emit("dialog_callback");
    },

    formValidation: function(){
      this.$refs.form.validate();
    },

    resetPassword : function(){
      console.log("패스워드 리셋 ");

    },

    searchMyId : function(){
      console.log("아이디찾기 ");

    },

    goSignUp : function(){
      console.log("회원가입 ");

    },

    loginComplete : function(){


    },

   

  },
  computed : {

  },
  mounted: function () {
    console.log( localStorage.getItem("AUTO_LOGIN"));
   
  }
  
}
</script>
