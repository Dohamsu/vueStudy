<template>
    <div class="">

        <h2>회원가입</h2>

    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // name: 'Home',
  // components: {
    // HelloWorld
  // }

  data : function() {
   
  }, 
  methods : {
    //전송 데이터 유효성 체크
    validateCheck : function() {

      alert("야호야호 ");
      // this.$http.get('http://localhost:80/croll')
      //     .then((res) => {
              
      //         console.table(res.data);

      //         const crollData = res.data[0];
      //         if (crollData) this.crollData = crollData;
      //     })
      //     .catch((err) => {
      //         console.error(err);
      //     });
    },
    
    //데이터 전송
    submitData : function(){
      this.validateCheck();
      if(this.errors.length == 0){
        alert("아니 뭐 엠티도 안된대 ");
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
