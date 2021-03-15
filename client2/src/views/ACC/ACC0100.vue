<template>
    <div class="">

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

    </div>
</template>

<script>

export default {
  // name: 'Home',
  // components: {
    // HelloWorld
  // }

  data : function() {
    return {};
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
      var name  = this.$refs.name.value;
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
      })
    }

  },
  
  computed : {
    doubleValue : function(){
      return this.value *2
    }

  }

}
</script>
