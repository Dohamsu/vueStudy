<template>
      <v-card
      width="400px"
      >
        <v-card-title>
          <span class="text-h5 mb-3" >회원가입</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form
              ref="form"
              v-model="formValid"
              lazy-validation
            >
            <v-row>
              <v-col
                cols="6"
              >
                <v-text-field
                  label="이름*"
                  required
                  dense
                  v-model="userInfo.name"
                  :rules="[ validations.whiteSpaceCheck, validations.specialCheck, validations.blankCheck]"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="ID*"
                  required
                  dense
                  v-model="userInfo.id"
                  :rules="[validations.whiteSpaceCheck, validations.blankCheck]"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  required
                  dense
                  :append-icon="passShow ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="passShow ? 'text' : 'password'"
                  @click:append="passShow = !passShow"
                  v-model="userInfo.password"
                  :rules="[validations.whiteSpaceCheck, validations.blankCheck]"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="email*"
                  required
                  dense
                  clearable
                  v-model="userInfo.email"
                  :rules="[validations.emailCheck, validations.whiteSpaceCheck, validations.blankCheck]"
                ></v-text-field>
              </v-col>

            </v-row>

            </v-form>
          </v-container>
           <v-checkbox
            v-model="agreeCheckBox"
            :rules="[v => !!v || '약관에 동의해야 회원가입이 가능합니다']"
            label="동의하십니까?"
            required
          ></v-checkbox>
          <small>*항목을 모두 입력해주세요</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
             @click="closeDialog"
          >
            취소
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="[submitData()]"
          >
            확인
          </v-btn>
        </v-card-actions>
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
    formValid : true,
    formValidate : false, //입력폼 유효성 검증
    userInfo : {
      name : "",
      id : "",
      password : "",
      email : ""      
    },
    validations:{
      lengthCheck  : input => input.length <= 10 || '최대 10자까지 가능합니다.',
      lengthCheck2 : input => input.length <= 20 || '최대20자까지 가능합니다.',
      specialCheck :  input =>  !/[~!@#$%^&*()_+|<>?:{}]/.test(input)|| '특수문자는 사용하실 수 없습니다.',
      blankCheck   : input => !!input|| '*항목은 필수입니다',
      whiteSpaceCheck :  input => !/\s/.test(input)|| '공백이 포함되어있습니다.',
      emailCheck : 
       input => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(input) || '이메일 형식에 맞게 입력해주세요.'
          },

      
    } ,

  }),
  components: {
    
  },
  methods:{

    //회원가입 확인
    submitData : function(){
      let validate = this.$refs.form.validate();

      if(validate){
       let id       = this.userInfo.id;
       let name     = this.userInfo.name;
       let password = this.userInfo.password;
       let email    = this.userInfo.email;
       
        this.$http.post(CONST.SIGN_UP_URL,{
            id : id,
            name : name,
            password : password,
            email : email
        },{
           headers: {  }
        }).then(res => {
          console.log(res.data);
          this.$refs.form.reset();
          this.closeDialog();
          this.$dialog.message.success('회원가입이 완료되었습니다', {
            position: 'top',
            timeoot : '500'
          })
        })
      }
    },

    closeDialog :function(){
      this.$refs.form.resetValidation()
      this.$refs.form.reset();
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
