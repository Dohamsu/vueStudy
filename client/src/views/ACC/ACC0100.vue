<template>
    <div class="mt-3 mb-3 ml-3 mr-3">

        <h2>회원가입</h2>

        <form v-on:submit.prevent="submitData"  id="inputFormBox">
          <div>
            <label for="id">ID</label>
            <input id="id" type="text" ref="id">
          </div>
          <div>
            <label for="password">Password</label>
            <input id="password" type="password" ref="password">
          </div>
          <div>
            <label for="password">Name</label>
            <input id="name" type="text" ref="name">
          </div>
          <div>
            <label for="email">Email</label>
            <input id="email" type="text" ref="email">
          </div>
          <div>
            <button type="submit">SginUp</button>
          </div>
        </form>

      <button  v-on:click="onClickBtn" > click </button>
       

      <div> 
        <span v-if="another"> 9 곱하기 7은?   </span>
        <span v-else > 1 곱하기 1은?   </span>
        
        <input type="text" ref="answer">

        <button v-on:click="submitAnser"> 입력!</button>
        <span >{{resultText}}  </span>
      </div>
      

    </div>
</template>

<script>

export default {
  // name: 'Home',
  // components: {
    // HelloWorld
  // }

  data : function() {

    return {

      liked :false,
      another : false,
      question : "",
      resultText : "",
      answer : ""

    };
  },

  methods : {
    //전송 데이터 유효성 체크
    validateCheck : function() {

    },
    
    //데이터 전송
    submitData : function(){
      this.validateCheck();
      var id        = this.$refs.id.value;
      var password  = this.$refs.password.value;
      var name      = this.$refs.name.value;
      var email     = this.$refs.email.value;

      console.log(id) ;
      
        // this.$http.post('http://localhost:80/croll')
        // .then((res) => {
            
        //     console.table(res.data);

        //     const crollData = res.data[0];
        //     if (crollData) this.crollData = crollData;
        // })
        // .catch((err) => {
        //     console.error(err);
        // });
      this.$http.post('http://localhost:80/api/signup',{
            id : id,
            name : name,
            password : password,
            email : email
        },{
           headers: {  }
        }).then(res => {
        console.log(res.data);

        alert("입력 완료");


      //input 초기화 
      this.$refs.id.value = "";
      this.$refs.password.value = "";
      this.$refs.name.value = "";
      this.$refs.email.value = "";

      })
    },

    onClickBtn : function(){

      if(this.another == true){
        this.another = false;
        this.question = "ttlqkf";
      }else
      {
        this.another = true;
        this.question = "으아ㅏㅏㅏ"

      }
    },

    submitAnser : function(){
      
      var answer =  this.$refs.answer.value;
            console.log(answer) ;

      if(answer==1){
        this.resultText = "정답입니다"
      }else{
        this.resultText = "ㄸ앵ㅇ"
      }



    }
  },


  computed : {
    doubleValue : function(){
      return this.value *2
    }

  }

}
</script>
