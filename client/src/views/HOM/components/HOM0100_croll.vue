<template>
    <div v-if="user">
        <h1>접속한 유저</h1>
        <p>아이디 : {{ user.user_id }} </p>
        <p>비밀번호 : {{ user.password }} </p>
        <p>이름 : {{ user.user_name }} </p>
        <button class="crollBtn" @click="clickCrollBtn"> Croll btn </button>
        
        

        <div>
            <label for="id">ID</label>
            <input id="id" type="text" ref="id">


        </div>
        
        <div v-if="crollData">
            <h1> 크롤링 데이터 </h1>
            <p>{{crollData}}</p>
            <!-- <p> 타이틀 : {{ crollData.title }} </p>
            <p> 내용 : {{ crollData.summary }} </p> -->
        </div>


    </div>
    
</template>

<script>

//URL 변수 집합 
import CONST from '../../../plugins/CONST.js'

export default {
    data() {
        
        return {
            id : "",
            user: null,
            crollData : null
        };

    },
    methods  : {

        clickCrollBtn : function(){
        var summoner = this.$refs.id.value;
        console.log(CONST.MMR_URL+summoner);


            this.$http.get(CONST.MMR_URL+summoner)
                .then((res) => {
                    console.table(res.data);

                    const crollData = res.data[0];
                    if (crollData) this.crollData = crollData;
                })
                .catch((err) => {
                    console.error(err);
                });

        },   
    },
    
   





    created() {
        this.$http.get('http://localhost:80/account')
            .then((res) => {
                
                console.table(res.data);

                const user = res.data[0];
                if (user) this.user = user;
            })
            .catch((err) => {
                console.error(err);
            });
    }}
</script>

<style></style>