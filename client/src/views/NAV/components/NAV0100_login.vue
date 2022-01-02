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
            @click="[submitData()]"
            color="white"
            class="black"
            
          >
            로그인
          </v-btn>
                    <v-spacer></v-spacer>

        </v-card-actions>
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
    formValid : true,
    formValidate : false, //입력폼 유효성 검증
    userInfo : {
      name : "",
      id : "",
      password : "",
      email : ""      
    },
    validations:{
      blankCheck   : input => !!input|| '*항목은 필수입니다',


      
    } ,

  }),
  components: {
    
  },
  methods:{

    //로그인 
    submitData : function(){
      console.log(this.userInfo);
      console.log(this.$refs.form.validate());
      let validate = this.$refs.form.validate();

      if(validate){
        //개발모드에서 실행시 에러가 뜨나 해당 에러는 배포버전에서는 뜨지 않음- 정상
        this.$refs.form.reset();
        this.closeDialog();
        this.formValidate = true;

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
   
    

  },
  computed : {

  },
  mounted: function () {
  }
  
}
</script>
