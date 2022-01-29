<template>
<v-container
  justify-center
>
  <v-layout
  justify-center
  wrap>
    <v-flex
      xs10 sm8 md8
    >
        <div
        primary-title
        class="text-h2 text-center ">
          <p class="dongle_font">
            칼바람 MMR  검색기
            {{breakP}}
          </p>
        </div>
            <v-row
            justify="center"
            
            >
                <v-col
                cols="8"
                sm="4"
                md="6"
                lg="6"
                
                >
                    <v-text-field
                    prepend-inner-icon="mdi-account"
                    label="아이디"
                    dense
                    outlined
                    
                    v-model="id"
                    v-on:keyup.enter="getMMR()"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row
             justify="center"
             >
                <v-col
                cols="4"
                xs="6"
                sm="8"
                class="text-center"
                >
                    <v-btn
                    :loading="loading"
                    :disabled="loading"
                    @click="[getMMR()]">
                        검색
                    </v-btn>
                </v-col>
            </v-row>
                <v-divider
                class="mt-5 mr-5 mb-10" ></v-divider>
            <div 
            v-show="crollData">
              <v-row
              justify="center"
              >       
                  <v-col
                  cols="3">
                      <v-img
                          :src="require(`@/images/${imgName}.png`)"
                          width="150"
                      ></v-img>

                  </v-col>
              </v-row>
              <v-row
              justify="center"
              align-content="center">
                <v-col
                cols="4"
                align-self="center"
                class="text-h5 text-center">
                  <p>
                    {{rank}}
                  </p>
                        MMR
                  
                        {{mmr}}

                </v-col>
              </v-row>

            </div>
    </v-flex>
  </v-layout>

</v-container>
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
        rank : "",
        imgName : "Master",
        crollData : "",
        loader: null,
        loading: false,
        loadStop : false,        
    }),
    methods  : {

        getMMR : function(){
          this.crollData = null;
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
                  console.log(res);
                  this.loadStop = true;
                  this.loader   = null;
                  setTimeout(() => (this.loading = false), 0)
                  if(res.data=="ERROR"){
                    this.$dialog.error({
                      text: '검색 결과가 없습니다.',
                      title: '오류',
                      persistent: false,
                      waitForResult :false,
                      actions: {true: {text: '확인'}}
                    });
                    return;
                  }
                  const crollData = res.data;
                  console.log(res.data.closestRank);
                  if (crollData) this.crollData = crollData;
                  this.mmr      = crollData.avg;
                  this.rank     = crollData.closestRank;
                  this.imgName  = crollData.closestRank.split(" ")[0];
                })
                .catch((err) => {
                    console.error(err);
                });

        },
        getRankImg : function(rank){
            let imgSrc = "";
            switch(rank){
                case "challenger" : imgSrc = "./../../images/main_back.svg"
                    break;
                case "grandMaster" : imgSrc = ""
                    break;

            }


            return imgSrc;
        }   
    },
    computed:{
      breakP(){
        return this.$vuetify.breakpoint.name;
      }

    },
    watch: {
      loader () {
        const swtich = this.loader;
        this[swtich] = !this[swtich];
        this.loader = null
      },
    },
    created() {
       
    }}
</script>

<style></style>