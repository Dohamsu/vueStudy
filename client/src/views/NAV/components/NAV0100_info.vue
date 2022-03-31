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
            <span class="text-h5 mb-3 ml-2" >내 정보</span>
          </div>
            <v-spacer></v-spacer>
          <div>
            <v-icon large
            class="closeBtn"
            @click="closeDialog">mdi-close</v-icon>
          </div>
        </v-card-title>
        <v-card-text class="pb-0">

            아이디 

            닉네임

            연락처

            사진
        </v-card-text>
      </v-card>
      
</template>



<script>
import CONST from '../../../plugins/CONST.js'

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
    closeDialog :function(){
      this.$emit("dialog_callback");
    },

    formValidation: function(){
      this.$refs.form.validate();
    }
  },
  computed : {

  },
  mounted: function () {
   
  }
  
}
</script>
