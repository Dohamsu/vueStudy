<template>
    <v-card
        width="400px"
        height="600px"
        class="mt-3 ml-3"        
    >
        <h1>칼바람 MMR 검색기</h1>
            <v-row
            justify="center">
                <v-col
                cols="6">
                    <v-text-field
                    prepend-inner-icon="mdi-account"
                    label="아이디"
                    required
                    dense
                    outlined
                    v-model="id"
                    ></v-text-field>
                </v-col>
            </v-row>
                <v-divider
                class="ml-5 mr-5 mb-10" ></v-divider>
            <v-row
             justify="center"
             >
                <v-col
                cols="3">
                    <v-btn
                    :loading="loading"
                    :disabled="loading"
                    @click="[getMMR()]">
                        검색
                    </v-btn>
                </v-col>
            </v-row>
             <v-row
             justify="center"
             v-show="crollData"
             >       
                <v-col
                cols="3">
                    <div>
                        <p>
                            MMR
                        </p>
                        <span>
                            {{mmr}}
                        </span>
                        
                    </div>

                </v-col>
            </v-row>
    </v-card>
</template>
<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
<script>

//URL 변수 집합 
import CONST from '../../../plugins/CONST.js'

export default {
    data : ()=> ({   
        id : "",
        user: null,
        mmr : "",
        crollData : "",
        loader: null,
        loading: false,
        loadStop : false,
    }),
    methods  : {

        getMMR : function(){
            console.log(this.id.length);
            if(this.id.length<1){
                this.$dialog.error({
                    text: '아이디를 입력해주세요.',
                    title: '오류',
                    persistent: false,
                    waitForResult :false,
                    actions: {true: {text: '확인'}}
                });
                return;
            }

            var summoner = this.id;
            this.loader = 'loading';

            console.log(CONST.MMR_URL+summoner);

            this.$http.get(CONST.MMR_URL+summoner)
                .then((res) => {
                    console.table(res.data);

                    const crollData = res.data;
                    console.log(res.data.closestRank);
                    if (crollData) this.crollData = crollData;
                    this.mmr =crollData.avg;
                    this.loadStop = true;
                    this.loader = null;
                    setTimeout(() => (this.loading = false), 0)

                })
                .catch((err) => {
                    console.error(err);
                });

        },   
    },
    watch: {
      loader () {
        const swtich = this.loader;
        this[swtich] = !this[swtich];
        this.loader = null
      },
    },
    
   





    created() {
        // this.$http.get('http://localhost:80/account')
        //     .then((res) => {
                
        //         console.table(res.data);

        //         const user = res.data[0];
        //         if (user) this.user = user;
        //     })
        //     .catch((err) => {
        //         console.error(err);
        //     });
    }}
</script>

<style></style>